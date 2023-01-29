import prisma from "../src/database/db.js";

async function main() {
  await prisma.classifications.createMany({
    data: [{ name: "Cotidiano" }, { name: "Ciência" }, { name: "Universo" }],
  });

  await prisma.curiosities.createMany({
    data: [
      {
        author: "Nicolas",
        title: "Porquê o ceu é azul?",
        description: "Por causa da atmosfera e do sol...",
        classificationsId: 2,
      },
      {
        author: "Nicolas",
        title: "Do que o cérebro é formado?",
        description: "Ele é formado por aproximadamente, 75% de água...",
        classificationsId: 2,
      },
      {
        author: "Nicolas",
        title: "Qual o tamanho do universo?",
        description: "oito deitado...",
        classificationsId: 3,
      },
    ],
  });
}

main()
  .then(() => console.log("Processed seed"))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
