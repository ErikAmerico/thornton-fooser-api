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

  await prisma.tournament.deleteMany({});
  console.log("tournaments removed");

  //may 18 2024
  const tournaments = [
    {
      teams: [
        [
          { id: "cmc5n3zxp0008p5lo2vk2vee8", name: "Tommy B", score: 11 },
          { id: "cmc5n3zxp0004p5lopldq6jnd", name: "Dan F", score: 10.5 },
        ],
        [
          { id: "cmc5n3zxp0001p5lob5eewb2q", name: "Ofir C", score: 31.25 },
          { id: "cmc5n3zxp000fp5lon3fv26zk", name: "Andraya B", score: 17.5 },
        ],
        [
          {
            id: "cmc5n3zxp0005p5loaf1n99a9",
            name: "Rachelle J",
            score: 9.75,
          },
          { id: "cmc5n3zxp000ip5loedokujy3", name: "Ari S", score: 6.5 },
        ],
        [
          { id: "cmc5n3zxp0000p5loow0ddrlx", name: "Erik O", score: 28.25 },
          { id: "cmc5n3zxp0002p5lo56189qbh", name: "Anna O", score: 18.5 },
        ],
        [
          { id: "cmc5n3zxp000gp5lo5fmsmk57", name: "Brickwall", score: 14.5 },
          { id: "cmc5n3zxp0003p5lo6s66t7yk", name: "Michelle C", score: 23 },
        ],
      ],
      results: [
        { winner: null, loser: null },
        {
          winner: [
            { id: "cmc5n3zxp000gp5lo5fmsmk57", name: "Brickwall", score: 14.5 },
            { id: "cmc5n3zxp0003p5lo6s66t7yk", name: "Michelle C", score: 23 },
          ],
          loser: [
            { id: "cmc5n3zxp0000p5loow0ddrlx", name: "Erik O", score: 28.25 },
            { id: "cmc5n3zxp0002p5lo56189qbh", name: "Anna O", score: 18.5 },
          ],
        },
        {
          winner: [
            { id: "cmc5n3zxp0001p5lob5eewb2q", name: "Ofir C", score: 31.25 },
            { id: "cmc5n3zxp000fp5lon3fv26zk", name: "Andraya B", score: 17.5 },
          ],
          loser: [
            {
              id: "cmc5n3zxp0005p5loaf1n99a9",
              name: "Rachelle J",
              score: 9.75,
            },
            { id: "cmc5n3zxp000ip5loedokujy3", name: "Ari S", score: 6.5 },
          ],
        },
        {
          winner: [
            { id: "cmc5n3zxp000gp5lo5fmsmk57", name: "Brickwall", score: 14.5 },
            { id: "cmc5n3zxp0003p5lo6s66t7yk", name: "Michelle C", score: 23 },
          ],
          loser: [
            { id: "cmc5n3zxp0008p5lo2vk2vee8", name: "Tommy B", score: 11 },
            { id: "cmc5n3zxp0004p5lopldq6jnd", name: "Dan F", score: 10.5 },
          ],
        },
        {
          winner: [
            { id: "cmc5n3zxp0000p5loow0ddrlx", name: "Erik O", score: 28.25 },
            { id: "cmc5n3zxp0002p5lo56189qbh", name: "Anna O", score: 18.5 },
          ],
          loser: [
            {
              id: "cmc5n3zxp0005p5loaf1n99a9",
              name: "Rachelle J",
              score: 9.75,
            },
            { id: "cmc5n3zxp000ip5loedokujy3", name: "Ari S", score: 6.5 },
          ],
        },
        {
          winner: [
            { id: "cmc5n3zxp0000p5loow0ddrlx", name: "Erik O", score: 28.25 },
            { id: "cmc5n3zxp0002p5lo56189qbh", name: "Anna O", score: 18.5 },
          ],
          loser: [
            { id: "cmc5n3zxp0008p5lo2vk2vee8", name: "Tommy B", score: 11 },
            { id: "cmc5n3zxp0004p5lopldq6jnd", name: "Dan F", score: 10.5 },
          ],
        },
        {
          winner: [
            { id: "cmc5n3zxp000gp5lo5fmsmk57", name: "Brickwall", score: 14.5 },
            { id: "cmc5n3zxp0003p5lo6s66t7yk", name: "Michelle C", score: 23 },
          ],
          loser: [
            { id: "cmc5n3zxp0001p5lob5eewb2q", name: "Ofir C", score: 31.25 },
            { id: "cmc5n3zxp000fp5lon3fv26zk", name: "Andraya B", score: 17.5 },
          ],
        },
        {
          winner: [
            { id: "cmc5n3zxp0001p5lob5eewb2q", name: "Ofir C", score: 31.25 },
            { id: "cmc5n3zxp000fp5lon3fv26zk", name: "Andraya B", score: 17.5 },
          ],
          loser: [
            { id: "cmc5n3zxp0000p5loow0ddrlx", name: "Erik O", score: 28.25 },
            { id: "cmc5n3zxp0002p5lo56189qbh", name: "Anna O", score: 18.5 },
          ],
        },
        {
          winner: [
            { id: "cmc5n3zxp000gp5lo5fmsmk57", name: "Brickwall", score: 14.5 },
            { id: "cmc5n3zxp0003p5lo6s66t7yk", name: "Michelle C", score: 23 },
          ],
          loser: [
            { id: "cmc5n3zxp0001p5lob5eewb2q", name: "Ofir C", score: 31.25 },
            { id: "cmc5n3zxp000fp5lon3fv26zk", name: "Andraya B", score: 17.5 },
          ],
        },
        { winner: null, loser: null },
        { winner: null, loser: null },
      ],
      date: "2024-05-18T00:00:00.000Z",
    },
  ];

  await prisma.tournament.createMany({
    data: tournaments.map((t) => ({
      teams: t.teams,
      results: t.results,
      createdAt: new Date(t.date),
    })),
  });

  console.log(`🌱 Seeded ${tournaments.length} tournaments`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
