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
    { name: "Anna O", score: 15 },
    { name: "Michelle C", score: 19.5 },
    { name: "Dan F", score: 8 },
    { name: "Rachelle J", score: 7.25 },
    { name: "Cooper R", score: 3.75 },
    { name: "Rachel R", score: 6 },
    { name: "Tommy B", score: 6.5 },
    { name: "Monica P", score: 7.5 },
    { name: "C.J", score: 4 },
    { name: "Andy P", score: 5 },
    { name: "Rachel P", score: 2.5 },
    { name: "Casey R", score: 5 },
    { name: "Jake R", score: 5 },
    { name: "Andraya B", score: 15 },
    { name: "Brickwall", score: 14.5 },
    { name: "Matt D", score: 5 },
    { name: "Ari S", score: 4 },
    { name: "Steve M", score: 4 },
    { name: "Sarah C", score: 4 },
    { name: "Zach S", score: 6 },
    { name: "Kara Ch", score: 2.5 },
    { name: "Kelly V", score: 2.5 },
    { name: "Lindsay", score: 2.5 },
    { name: "Sarissa S", score: 2.5 },
    { name: "Matt G", score: 5.5 },
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
