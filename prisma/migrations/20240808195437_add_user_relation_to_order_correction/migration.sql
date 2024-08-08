/*
  Warnings:

  - You are about to drop the `OrderItemPrisma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderPrisma` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderItemPrisma" DROP CONSTRAINT "OrderItemPrisma_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderPrisma" DROP CONSTRAINT "OrderPrisma_userId_fkey";

-- DropTable
DROP TABLE "OrderItemPrisma";

-- DropTable
DROP TABLE "OrderPrisma";

-- CreateTable
CREATE TABLE "OrderStripe" (
    "id" SERIAL NOT NULL,
    "customerId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "paymentIntentId" TEXT NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "OrderStripe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItemStripe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "orderId" INTEGER NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "OrderItemStripe_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrderStripe_sessionId_key" ON "OrderStripe"("sessionId");

-- AddForeignKey
ALTER TABLE "OrderStripe" ADD CONSTRAINT "OrderStripe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItemStripe" ADD CONSTRAINT "OrderItemStripe_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "OrderStripe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
