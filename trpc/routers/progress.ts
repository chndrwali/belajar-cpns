import { z } from "zod";
import { createTRPCRouter, rateLimitedProcedure } from "@/trpc/init";
import { RATE_LIMITS } from "@/lib/rate-limit";
import prisma from "@/lib/prisma";
import { MATERIALS } from "@/lib/cpns/materials";
import { CHECKLIST_ITEMS } from "@/lib/cpns/checklist";
import { PASSING_GRADE, type TryoutResult } from "@/lib/cpns/types";

const MATERIAL_SLUGS = MATERIALS.map((m) => m.slug);
const CHECKLIST_IDS = CHECKLIST_ITEMS.map((i) => i.id);

const slugSchema = z
  .string()
  .refine((s) => MATERIAL_SLUGS.includes(s), { message: "Materi tidak dikenal" });
const itemIdSchema = z
  .string()
  .refine((s) => CHECKLIST_IDS.includes(s), { message: "Item checklist tidak dikenal" });

const legacyTryoutSchema = z.object({
  date: z.string(),
  twk: z.number().int().min(0).max(150),
  tiu: z.number().int().min(0).max(175),
  tkp: z.number().int().min(0).max(225),
  total: z.number().int().min(0).max(550),
  passed: z.boolean(),
  durationSeconds: z.number().int().min(0).max(6000),
});

function toTryoutResult(a: {
  createdAt: Date;
  twk: number;
  tiu: number;
  tkp: number;
  total: number;
  passed: boolean;
  durationSeconds: number;
}): TryoutResult {
  return {
    date: a.createdAt.toISOString(),
    twk: a.twk,
    tiu: a.tiu,
    tkp: a.tkp,
    total: a.total,
    passed: a.passed,
    durationSeconds: a.durationSeconds,
  };
}

export const progressRouter = createTRPCRouter({
  /** Semua progres user yang login: materi, skor kuis terbaik, riwayat tryout, checklist. */
  getDashboard: rateLimitedProcedure(RATE_LIMITS.progressGetDashboard.limit).query(async ({ ctx }) => {
    const userId = ctx.auth.user.id;
    const [materials, quizBest, attempts, checklist] = await Promise.all([
      prisma.materialProgress.findMany({ where: { userId, done: true } }),
      prisma.quizBest.findMany({ where: { userId } }),
      prisma.tryoutAttempt.findMany({ where: { userId }, orderBy: { createdAt: "asc" } }),
      prisma.checklistProgress.findMany({ where: { userId, checked: true } }),
    ]);
    return {
      materialsDone: materials.map((m) => m.materialSlug),
      quizBest: Object.fromEntries(quizBest.map((q) => [q.materialSlug, q.bestScore])),
      tryoutHistory: attempts.map(toTryoutResult),
      checklistDone: checklist.map((c) => c.itemId),
    };
  }),

  /** Item checklist yang sudah dicentang user. */
  getChecklist: rateLimitedProcedure(RATE_LIMITS.progressGetDashboard.limit).query(async ({ ctx }) => {
    const rows = await prisma.checklistProgress.findMany({
      where: { userId: ctx.auth.user.id, checked: true },
    });
    return rows.map((r) => r.itemId);
  }),

  toggleMaterial: rateLimitedProcedure(RATE_LIMITS.progressToggle.limit)
    .input(z.object({ slug: slugSchema, done: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.auth.user.id;
      await prisma.materialProgress.upsert({
        where: { userId_materialSlug: { userId, materialSlug: input.slug } },
        update: { done: input.done, completedAt: input.done ? new Date() : undefined },
        create: { userId, materialSlug: input.slug, done: input.done },
      });
      return { slug: input.slug, done: input.done };
    }),

  saveQuizBest: rateLimitedProcedure(RATE_LIMITS.progressSaveQuiz.limit)
    .input(
      z.object({
        slug: slugSchema,
        score: z.number().int().min(0),
        total: z.number().int().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (input.score > input.total) {
        throw new Error("Skor tidak boleh melebihi jumlah soal");
      }
      const userId = ctx.auth.user.id;
      const existing = await prisma.quizBest.findUnique({
        where: { userId_materialSlug: { userId, materialSlug: input.slug } },
      });
      if (existing && existing.bestScore >= input.score) {
        return { slug: input.slug, bestScore: existing.bestScore, improved: false };
      }
      const saved = await prisma.quizBest.upsert({
        where: { userId_materialSlug: { userId, materialSlug: input.slug } },
        update: { bestScore: input.score, totalQuestions: input.total },
        create: { userId, materialSlug: input.slug, bestScore: input.score, totalQuestions: input.total },
      });
      return { slug: input.slug, bestScore: saved.bestScore, improved: true };
    }),

  saveTryoutAttempt: rateLimitedProcedure(RATE_LIMITS.progressSaveTryout.limit)
    .input(
      z.object({
        twk: z.number().int().min(0).max(150),
        tiu: z.number().int().min(0).max(175),
        tkp: z.number().int().min(0).max(225),
        total: z.number().int().min(0).max(550),
        durationSeconds: z.number().int().min(0).max(6000),
        answers: z
          .array(
            z.object({
              index: z.number().int().min(0).max(109),
              chosen: z.number().int().min(0).max(4),
            }),
          )
          .max(110),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (input.total !== input.twk + input.tiu + input.tkp) {
        throw new Error("Total skor tidak cocok dengan skor per bagian");
      }
      // Passing grade dihitung server-side, bukan dipercaya dari client.
      const passed =
        input.twk >= PASSING_GRADE.twk && input.tiu >= PASSING_GRADE.tiu && input.tkp >= PASSING_GRADE.tkp;
      const saved = await prisma.tryoutAttempt.create({
        data: {
          userId: ctx.auth.user.id,
          twk: input.twk,
          tiu: input.tiu,
          tkp: input.tkp,
          total: input.total,
          passed,
          durationSeconds: input.durationSeconds,
          answers: input.answers,
        },
      });
      return toTryoutResult(saved);
    }),

  setChecklist: rateLimitedProcedure(RATE_LIMITS.progressToggle.limit)
    .input(z.object({ itemId: itemIdSchema, checked: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.auth.user.id;
      await prisma.checklistProgress.upsert({
        where: { userId_itemId: { userId, itemId: input.itemId } },
        update: { checked: input.checked },
        create: { userId, itemId: input.itemId, checked: input.checked },
      });
      return { itemId: input.itemId, checked: input.checked };
    }),

  /**
   * Migrasi satu kali: pindahkan progres lama dari localStorage ke database.
   * Dipanggil sekali saat user login pertama kali setelah perubahan ini.
   * Upsert semua item; tryout tidak diduplikat (dicocokkan tanggal + skor).
   */
  importLegacy: rateLimitedProcedure(RATE_LIMITS.progressImportLegacy.limit)
    .input(
      z.object({
        materialsDone: z.array(z.string()).max(50),
        quizBest: z.record(z.string(), z.number().int().min(0)),
        tryoutHistory: z.array(legacyTryoutSchema).max(100),
        checklistDone: z.array(z.string()).max(50),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.auth.user.id;
      let importedMaterials = 0;
      let importedQuiz = 0;
      let importedTryouts = 0;
      let importedChecklist = 0;

      for (const slug of new Set(input.materialsDone)) {
        if (!MATERIAL_SLUGS.includes(slug)) continue;
        await prisma.materialProgress.upsert({
          where: { userId_materialSlug: { userId, materialSlug: slug } },
          update: { done: true },
          create: { userId, materialSlug: slug, done: true },
        });
        importedMaterials += 1;
      }

      for (const [slug, score] of Object.entries(input.quizBest)) {
        if (!MATERIAL_SLUGS.includes(slug)) continue;
        const existing = await prisma.quizBest.findUnique({
          where: { userId_materialSlug: { userId, materialSlug: slug } },
        });
        if (existing && existing.bestScore >= score) continue;
        await prisma.quizBest.upsert({
          where: { userId_materialSlug: { userId, materialSlug: slug } },
          update: { bestScore: score },
          create: { userId, materialSlug: slug, bestScore: score, totalQuestions: 10 },
        });
        importedQuiz += 1;
      }

      for (const r of input.tryoutHistory) {
        const date = new Date(r.date);
        if (Number.isNaN(date.getTime())) continue;
        const existing = await prisma.tryoutAttempt.findFirst({
          where: { userId, createdAt: date, total: r.total, twk: r.twk, tiu: r.tiu, tkp: r.tkp },
        });
        if (existing) continue;
        await prisma.tryoutAttempt.create({
          data: {
            userId,
            twk: r.twk,
            tiu: r.tiu,
            tkp: r.tkp,
            total: r.total,
            passed: r.passed,
            durationSeconds: r.durationSeconds,
            createdAt: date,
            answers: [],
          },
        });
        importedTryouts += 1;
      }

      for (const itemId of new Set(input.checklistDone)) {
        if (!CHECKLIST_IDS.includes(itemId)) continue;
        await prisma.checklistProgress.upsert({
          where: { userId_itemId: { userId, itemId } },
          update: { checked: true },
          create: { userId, itemId, checked: true },
        });
        importedChecklist += 1;
      }

      return { importedMaterials, importedQuiz, importedTryouts, importedChecklist };
    }),
});
