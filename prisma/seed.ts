import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.player.deleteMany({});
  // console.log("players removed");

  // const players = [
  //   { name: "Erik O", score: 0 },
  //   { name: "Ofir C", score: 0 },
  //   { name: "Anna O", score: 0 },
  //   { name: "Michelle C", score: 0 },
  //   { name: "Dan F", score: 0 },
  //   { name: "Rachelle J", score: 0 },
  //   { name: "Cooper R", score: 0 },
  //   { name: "Rachel R", score: 0 },
  //   { name: "Tommy B", score: 0 },
  //   { name: "Monica P", score: 0 },
  //   { name: "C.J", score: 0 },
  //   { name: "Andy P", score: 0 },
  //   { name: "Rachel P", score: 0 },
  //   { name: "Casey R", score: 0 },
  //   { name: "Jake R", score: 0 },
  //   { name: "Andraya B", score: 0 },
  //   { name: "Brickwall", score: 0 },
  //   { name: "Matt D", score: 0 },
  //   { name: "Ari S", score: 0 },
  //   { name: "Steve M", score: 0 },
  //   { name: "Sarah C", score: 0 },
  //   { name: "Zach S", score: 0 },
  //   { name: "Kara Ch", score: 0 },
  //   { name: "Kelly V", score: 0 },
  //   { name: "Lindsay", score: 0 },
  //   { name: "Sarissa S", score: 0 },
  //   { name: "Matt G", score: 0 },
  //   { name: "Zack C", score: 0 },
  //   { name: "Megan K", score: 0 },
  //   { name: "Jason R", score: 0 },
  //   { name: "Chris S", score: 0 },
  //   { name: "Bryan CJ", score: 0 },
  // ];

  // // createMany will insert them all in one go
  // await prisma.player.createMany({
  //   data: players,
  //   skipDuplicates: true, // so rerunning the seed won’t error on unique names
  // });

  // console.log(`🌱 Seeded ${players.length} players`);
  console.log(
    "I commented out all seeding functions. I do not want to accidentally ruin the data"
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
