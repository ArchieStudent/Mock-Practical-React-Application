/*
  Warnings:

  - You are about to drop the column `saltGram` on the `Nutrition` table. All the data in the column will be lost.
  - Added the required column `saltGrams` to the `Nutrition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Nutrition" DROP COLUMN "saltGram",
ADD COLUMN     "saltGrams" DOUBLE PRECISION NOT NULL;
