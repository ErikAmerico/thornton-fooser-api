// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.player.deleteMany({});
  console.log("players removed");

  // initial mock data
  const players = [
    { name: "Erik O", score: 18.5 },
    { name: "Ofir C", score: 24 },
    { name: "Anna O", score: 14.5 },
    { name: "Michelle C", score: 19.5 },
    { name: "Dan F", score: 8 },
    { name: "Rachelle J", score: 7 },
    { name: "Cooper R", score: 4.5 },
    { name: "Rachel R", score: 6 },
    { name: "Tommy B", score: 6 },
    { name: "Monica P", score: 7.5 },
    { name: "C.J", score: 3.5 },
    { name: "Andy P", score: 4.5 },
    { name: "Rachel P", score: 2.5 },
    { name: "Casey R", score: 3 },
    { name: "Jake R", score: 3 },
    { name: "Andraya B", score: 14.5 },
    { name: "Brickwall", score: 14 },
    { name: "Matt D", score: 3 },
    { name: "Ari S", score: 3.5 },
    { name: "Steve M", score: 3.5 },
    { name: "Sarah C", score: 3.5 },
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
