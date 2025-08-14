/*
  Warnings:

  - You are about to drop the column `Records` on the `black_list` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "black_list" DROP COLUMN "Records",
ADD COLUMN     "records" TEXT[] DEFAULT ARRAY[]::TEXT[];
