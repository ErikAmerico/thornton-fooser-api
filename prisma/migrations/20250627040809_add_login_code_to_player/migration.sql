/*
  Warnings:

  - You are about to drop the column `password` on the `Player` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[loginCode]` on the table `Player` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Player" DROP COLUMN "password",
ADD COLUMN     "loginCode" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Player_loginCode_key" ON "Player"("loginCode");
