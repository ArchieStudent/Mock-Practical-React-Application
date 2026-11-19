/*
  Warnings:

  - Changed the type of `allergen` on the `Ingredient` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "allergen",
ADD COLUMN     "allergen" BOOLEAN NOT NULL;
