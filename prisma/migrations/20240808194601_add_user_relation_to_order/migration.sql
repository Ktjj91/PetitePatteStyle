-- CreateTable
CREATE TABLE "OrderPrisma" (
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

    CONSTRAINT "OrderPrisma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItemPrisma" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "orderId" INTEGER NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "OrderItemPrisma_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrderPrisma_sessionId_key" ON "OrderPrisma"("sessionId");

-- AddForeignKey
ALTER TABLE "OrderPrisma" ADD CONSTRAINT "OrderPrisma_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItemPrisma" ADD CONSTRAINT "OrderItemPrisma_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "OrderPrisma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
