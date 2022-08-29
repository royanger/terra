-- CreateTable
CREATE TABLE "Reset" (
    "id" STRING NOT NULL,
    "code" STRING NOT NULL,
    "userId" STRING NOT NULL,

    CONSTRAINT "Reset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reset_code_key" ON "Reset"("code");

-- AddForeignKey
ALTER TABLE "Reset" ADD CONSTRAINT "Reset_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
