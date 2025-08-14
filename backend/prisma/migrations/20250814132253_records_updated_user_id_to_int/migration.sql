/*
  Warnings:

  - You are about to drop the column `black_list_user_id` on the `Records` table. All the data in the column will be lost.
  - The `user_id` column on the `Records` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Records" DROP COLUMN "black_list_user_id",
DROP COLUMN "user_id",
ADD COLUMN     "user_id" INTEGER;
