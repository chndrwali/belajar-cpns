import { SectionHeading } from "@/components/cpns/shared";
import { MateriList } from "@/components/cpns/materi-list";

export const metadata = { title: "Materi SKD — Belajar CPNS" };

export default function MateriPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        eyebrow="Materi SKD"
        title="Pelajari dulu, baru latihan"
        desc="15 materi ringkas yang disusun dari kisi-kisi SKD. Tiap materi ada poin kunci, contoh soal, dan tombol latihan soal bab itu."
      />
      <MateriList />
    </div>
  );
}
