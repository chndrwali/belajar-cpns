-- CreateTable
CREATE TABLE "material_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "materialSlug" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT true,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "material_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quiz_best" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "materialSlug" TEXT NOT NULL,
    "bestScore" INTEGER NOT NULL,
    "totalQuestions" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quiz_best_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tryout_attempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "twk" INTEGER NOT NULL,
    "tiu" INTEGER NOT NULL,
    "tkp" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "passed" BOOLEAN NOT NULL,
    "durationSeconds" INTEGER NOT NULL,
    "answers" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tryout_attempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "checklist_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "checked" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "checklist_progress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "material_progress_userId_idx" ON "material_progress"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "material_progress_userId_materialSlug_key" ON "material_progress"("userId", "materialSlug");

-- CreateIndex
CREATE INDEX "quiz_best_userId_idx" ON "quiz_best"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "quiz_best_userId_materialSlug_key" ON "quiz_best"("userId", "materialSlug");

-- CreateIndex
CREATE INDEX "tryout_attempt_userId_idx" ON "tryout_attempt"("userId");

-- CreateIndex
CREATE INDEX "checklist_progress_userId_idx" ON "checklist_progress"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "checklist_progress_userId_itemId_key" ON "checklist_progress"("userId", "itemId");

-- AddForeignKey
ALTER TABLE "material_progress" ADD CONSTRAINT "material_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quiz_best" ADD CONSTRAINT "quiz_best_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tryout_attempt" ADD CONSTRAINT "tryout_attempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "checklist_progress" ADD CONSTRAINT "checklist_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

