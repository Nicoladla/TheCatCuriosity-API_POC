-- CreateTable
CREATE TABLE "classifications" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "classifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "curiosities" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "classificationsId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "curiosities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "classifications_name_key" ON "classifications"("name");

-- CreateIndex
CREATE UNIQUE INDEX "curiosities_title_key" ON "curiosities"("title");

-- AddForeignKey
ALTER TABLE "curiosities" ADD CONSTRAINT "curiosities_classificationsId_fkey" FOREIGN KEY ("classificationsId") REFERENCES "classifications"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
