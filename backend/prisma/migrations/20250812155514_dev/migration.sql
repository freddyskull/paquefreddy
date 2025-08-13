-- AlterTable
ALTER TABLE "Config" ADD COLUMN     "moreConfig" TEXT[] DEFAULT ARRAY[]::TEXT[];
