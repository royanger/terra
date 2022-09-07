-- AlterTable
ALTER TABLE "User" ADD COLUMN     "points" INT4 NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "PointsLogs" (
    "id" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "points" INT4 NOT NULL,
    "action" STRING NOT NULL,
    "datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PointsLogs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PointsLogs" ADD CONSTRAINT "PointsLogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
