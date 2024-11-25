/*
  Warnings:

  - You are about to drop the column `reportedId` on the `Issue` table. All the data in the column will be lost.
  - Added the required column `reporterId` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_reportedId_fkey";

-- AlterTable
ALTER TABLE "Issue" DROP COLUMN "reportedId",
ADD COLUMN     "reporterId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
