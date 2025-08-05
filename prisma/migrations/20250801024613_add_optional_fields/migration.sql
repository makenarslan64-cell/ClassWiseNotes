/*
  Warnings:

  - You are about to drop the column `pdfUrl` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `writer` on the `Note` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Note" DROP COLUMN "pdfUrl",
DROP COLUMN "writer",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "filePath" TEXT,
ADD COLUMN     "title" TEXT,
ALTER COLUMN "name" DROP NOT NULL;
