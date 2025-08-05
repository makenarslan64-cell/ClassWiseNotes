/*
  Warnings:

  - You are about to drop the column `slug` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the `Chapter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Note` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Board` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."Chapter" DROP CONSTRAINT "Chapter_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Note" DROP CONSTRAINT "Note_chapterId_fkey";

-- DropIndex
DROP INDEX "public"."Board_slug_key";

-- AlterTable
ALTER TABLE "public"."Board" DROP COLUMN "slug";

-- AlterTable
ALTER TABLE "public"."Class" DROP COLUMN "slug";

-- AlterTable
ALTER TABLE "public"."Subject" DROP COLUMN "slug";

-- DropTable
DROP TABLE "public"."Chapter";

-- DropTable
DROP TABLE "public"."Note";

-- CreateIndex
CREATE UNIQUE INDEX "Board_name_key" ON "public"."Board"("name");
