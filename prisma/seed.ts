// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.player.deleteMany({});
  // console.log("🗑️  All old players removed");

  // your initial mock data
  const players = [
    { name: "Erik O", score: 17, hint: "" },
    { name: "Ofir C", score: 24, hint: "" },
    { name: "Anna O", score: 9, hint: "" },
    { name: "Michelle C", score: 18, hint: "" },
    { name: "Dan F", score: 5, hint: "" },
    { name: "Rachelle J", score: 4, hint: "" },
    { name: "Cooper R", score: 3, hint: "" },
    { name: "Rachel R", score: 6, hint: "" },
    { name: "Tommy B", score: 3, hint: "" },
    { name: "Monica", score: 6, hint: "Tommy GF" },
    { name: "C.J", score: 2, hint: "" },
    { name: "Andy P", score: 3, hint: "" },
    { name: "Rachel P", score: 0, hint: "" },
    { name: "Casey R", score: 3, hint: "" },
    { name: "Jake R", score: 3, hint: "" },
    { name: "Andraya B", score: 11.5, hint: "" },
    { name: "Brickwall", score: 14, hint: "" },
    { name: "Matt D", score: 3, hint: "" },
    { name: "Ari S", score: 2, hint: "" },
    { name: "Steve M", score: 2, hint: "" },
    { name: "Sarah C", score: 2, hint: "" },
    { name: "Zach S", score: 2, hint: "" },
    { name: "Kara Ch", score: 1, hint: "" },
    { name: "Kelly V", score: 1, hint: "" },
    { name: "Lindsay", score: 1, hint: "Kara Friend" },
    { name: "Sarissa S", score: 1, hint: "" },
    { name: "Matt G", score: 6.5, hint: "Sarissa Fiance" },
  ];

  // createMany will insert them all in one go
  await prisma.player.createMany({
    data: players,
    skipDuplicates: true, // so rerunning the seed won’t error on unique names
  });

  console.log(`🌱 Seeded ${players.length} players`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
