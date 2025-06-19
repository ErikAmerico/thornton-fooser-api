// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.player.deleteMany({});
  console.log("players removed");

  // initial mock data
  const players = [
    { name: "Erik O", score: 17 },
    { name: "Ofir C", score: 24 },
    { name: "Anna O", score: 9 },
    { name: "Michelle C", score: 18 },
    { name: "Dan F", score: 5 },
    { name: "Rachelle J", score: 4 },
    { name: "Cooper R", score: 3 },
    { name: "Rachel R", score: 6 },
    { name: "Tommy B", score: 3 },
    { name: "Monica P", score: 6 },
    { name: "C.J", score: 2 },
    { name: "Andy P", score: 3 },
    { name: "Rachel P", score: 0 },
    { name: "Casey R", score: 3 },
    { name: "Jake R", score: 3 },
    { name: "Andraya B", score: 11.5 },
    { name: "Brickwall", score: 14 },
    { name: "Matt D", score: 3 },
    { name: "Ari S", score: 2 },
    { name: "Steve M", score: 2 },
    { name: "Sarah C", score: 2 },
    { name: "Zach S", score: 2 },
    { name: "Kara Ch", score: 1 },
    { name: "Kelly V", score: 1 },
    { name: "Lindsay", score: 1 },
    { name: "Sarissa S", score: 1 },
    { name: "Matt G", score: 6.5 },
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
