/*
  Warnings:

  - You are about to drop the column `proudctPrice` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `users` table. All the data in the column will be lost.
  - Added the required column `productPrice` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_roleId_fkey`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `proudctPrice`,
    ADD COLUMN `productPrice` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `roleId`;
