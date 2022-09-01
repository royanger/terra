-- CreateTable
CREATE TABLE "Facts" (
    "id" STRING NOT NULL,
    "message" STRING NOT NULL,
    "details" STRING NOT NULL,
    "reference" STRING NOT NULL,
    "href" STRING NOT NULL,

    CONSTRAINT "Facts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReadFact" (
    "id" STRING NOT NULL,
    "factId" STRING NOT NULL,
    "userId" STRING NOT NULL,

    CONSTRAINT "ReadFact_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ReadFact" ADD CONSTRAINT "ReadFact_factId_fkey" FOREIGN KEY ("factId") REFERENCES "Facts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReadFact" ADD CONSTRAINT "ReadFact_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
