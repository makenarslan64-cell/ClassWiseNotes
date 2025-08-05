/*
  Warnings:

  - You are about to drop the column `name` on the `Note` table. All the data in the column will be lost.
  - Made the column `description` on table `Note` required. This step will fail if there are existing NULL values in that column.
  - Made the column `filePath` on table `Note` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `Note` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Note" DROP COLUMN "name",
ADD COLUMN     "imagePath" TEXT,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "filePath" SET NOT NULL,
ALTER COLUMN "title" SET NOT NULL;
