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
    { name: "Dan F", score: 13.5 }, //good
    { name: "Rachelle J", score: 12.75 }, //good
    { name: "Cooper R", score: 3.75 },
    { name: "Rachel R", score: 6 },
    { name: "Tommy B", score: 9.5 }, //good
    { name: "Monica P", score: 7.5 },
    { name: "C.J", score: 4 },
    { name: "Andy P", score: 6 }, //good
    { name: "Rachel P", score: 2.5 },
    { name: "Casey R", score: 8 }, //good
    { name: "Jake R", score: 7 }, //good
    { name: "Andraya B", score: 15 }, //good
    { name: "Brickwall", score: 17.5 }, //good
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
    { name: "Zack C", score: 3.5 },
    { name: "Megan K", score: 3.5 },
    { name: "Jason R", score: 3.5 }, //good
    { name: "Chris S", score: 2.5 },
    { name: "Bryan CJ", score: 4.5 },
  ];

  //ofir = 18.25 still have to review jun 21 2024
  //michelle = 19.75  still have to review jun 21 2024

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
          { id: "cmc95i7c30000p53w5urri66q", name: "Erik O", score: 18.5 },
          { id: "cmc95i7c30002p53w87edgane", name: "Anna O", score: 15 },
        ],
        [
          { id: "cmc95i7c30001p53wkp66aetz", name: "Ofir C", score: 24 },
          { id: "cmc95i7c30003p53wcg76tm4l", name: "Michelle C", score: 19.5 },
        ],
        [
          { id: "cmc95i7c30005p53wn97kbmox", name: "Rachelle J", score: 7.25 },
          { id: "cmc95i7c30004p53wryed9uwr", name: "Dan F", score: 8 },
        ],
        [
          { id: "cmc95i7c3000dp53wzmcuj9lb", name: "Casey R", score: 5 },
          { id: "cmc95i7c3000ep53wd451fqq0", name: "Jake R", score: 5 },
        ],
        [
          { id: "cmc95i7c3000rp53wp3n32odp", name: "Zack C", score: 3.5 },
          { id: "cmc95i7c3000sp53wps0z77eu", name: "Megan K", score: 3.5 },
        ],
        [
          { id: "cmc95i7c3000tp53wi3vcl3t6", name: "Jason R", score: 2.5 },
          { id: "cmc95i7c30008p53wsmvz74jw", name: "Tommy B", score: 6.5 },
        ],
        [
          { id: "cmc95i7c3000fp53wj8nqdhx1", name: "Andraya B", score: 15 },
          { id: "cmc95i7c3000up53w9qwgd0su", name: "Chris S", score: 2.5 },
        ],
      ],
      results: [
        { winner: null, loser: null },
        {
          winner: [
            { id: "cmc95i7c3000dp53wzmcuj9lb", name: "Casey R", score: 5 },
            { id: "cmc95i7c3000ep53wd451fqq0", name: "Jake R", score: 5 },
          ],
          loser: [
            { id: "cmc95i7c3000rp53wp3n32odp", name: "Zack C", score: 3.5 },
            { id: "cmc95i7c3000sp53wps0z77eu", name: "Megan K", score: 3.5 },
          ],
        },
        {
          winner: [
            { id: "cmc95i7c30001p53wkp66aetz", name: "Ofir C", score: 24 },
            {
              id: "cmc95i7c30003p53wcg76tm4l",
              name: "Michelle C",
              score: 19.5,
            },
          ],
          loser: [
            { id: "cmc95i7c3000fp53wj8nqdhx1", name: "Andraya B", score: 15 },
            { id: "cmc95i7c3000up53w9qwgd0su", name: "Chris S", score: 2.5 },
          ],
        },
        {
          winner: [
            { id: "cmc95i7c3000tp53wi3vcl3t6", name: "Jason R", score: 2.5 },
            { id: "cmc95i7c30008p53wsmvz74jw", name: "Tommy B", score: 6.5 },
          ],
          loser: [
            {
              id: "cmc95i7c30005p53wn97kbmox",
              name: "Rachelle J",
              score: 7.25,
            },
            { id: "cmc95i7c30004p53wryed9uwr", name: "Dan F", score: 8 },
          ],
        },
        {
          winner: [
            {
              id: "cmc95i7c30005p53wn97kbmox",
              name: "Rachelle J",
              score: 7.25,
            },
            { id: "cmc95i7c30004p53wryed9uwr", name: "Dan F", score: 8 },
          ],
          loser: [
            { id: "cmc95i7c3000fp53wj8nqdhx1", name: "Andraya B", score: 15 },
            { id: "cmc95i7c3000up53w9qwgd0su", name: "Chris S", score: 2.5 },
          ],
        },
        {
          winner: [
            { id: "cmc95i7c30000p53w5urri66q", name: "Erik O", score: 18.5 },
            { id: "cmc95i7c30002p53w87edgane", name: "Anna O", score: 15 },
          ],
          loser: [
            { id: "cmc95i7c3000dp53wzmcuj9lb", name: "Casey R", score: 5 },
            { id: "cmc95i7c3000ep53wd451fqq0", name: "Jake R", score: 5 },
          ],
        },
        {
          winner: [
            { id: "cmc95i7c30001p53wkp66aetz", name: "Ofir C", score: 24 },
            {
              id: "cmc95i7c30003p53wcg76tm4l",
              name: "Michelle C",
              score: 19.5,
            },
          ],
          loser: [
            { id: "cmc95i7c3000tp53wi3vcl3t6", name: "Jason R", score: 2.5 },
            { id: "cmc95i7c30008p53wsmvz74jw", name: "Tommy B", score: 6.5 },
          ],
        },
        {
          winner: [
            {
              id: "cmc95i7c30005p53wn97kbmox",
              name: "Rachelle J",
              score: 7.25,
            },
            { id: "cmc95i7c30004p53wryed9uwr", name: "Dan F", score: 8 },
          ],
          loser: [
            { id: "cmc95i7c3000dp53wzmcuj9lb", name: "Casey R", score: 5 },
            { id: "cmc95i7c3000ep53wd451fqq0", name: "Jake R", score: 5 },
          ],
        },
        //8
        {
          winner: [
            { id: "cmc95i7c3000rp53wp3n32odp", name: "Zack C", score: 3.5 },
            { id: "cmc95i7c3000sp53wps0z77eu", name: "Megan K", score: 3.5 },
          ],
          loser: [
            { id: "cmc95i7c3000tp53wi3vcl3t6", name: "Jason R", score: 2.5 },
            { id: "cmc95i7c30008p53wsmvz74jw", name: "Tommy B", score: 6.5 },
          ],
        },
        //9
        {
          winner: [
            {
              id: "cmc95i7c30005p53wn97kbmox",
              name: "Rachelle J",
              score: 7.25,
            },
            { id: "cmc95i7c30004p53wryed9uwr", name: "Dan F", score: 8 },
          ],
          loser: [
            { id: "cmc95i7c3000rp53wp3n32odp", name: "Zack C", score: 3.5 },
            { id: "cmc95i7c3000sp53wps0z77eu", name: "Megan K", score: 3.5 },
          ],
        },
        //10
        {
          winner: [
            { id: "cmc95i7c30001p53wkp66aetz", name: "Ofir C", score: 24 },
            {
              id: "cmc95i7c30003p53wcg76tm4l",
              name: "Michelle C",
              score: 19.5,
            },
          ],
          loser: [
            { id: "cmc95i7c30000p53w5urri66q", name: "Erik O", score: 18.5 },
            { id: "cmc95i7c30002p53w87edgane", name: "Anna O", score: 15 },
          ],
        },
        //11
        {
          winner: [
            { id: "cmc95i7c30000p53w5urri66q", name: "Erik O", score: 18.5 },
            { id: "cmc95i7c30002p53w87edgane", name: "Anna O", score: 15 },
          ],
          loser: [
            {
              id: "cmc95i7c30005p53wn97kbmox",
              name: "Rachelle J",
              score: 7.25,
            },
            { id: "cmc95i7c30004p53wryed9uwr", name: "Dan F", score: 8 },
          ],
        },
        //12
        {
          winner: [
            { id: "cmc95i7c30000p53w5urri66q", name: "Erik O", score: 18.5 },
            { id: "cmc95i7c30002p53w87edgane", name: "Anna O", score: 15 },
          ],
          loser: [
            { id: "cmc95i7c30001p53wkp66aetz", name: "Ofir C", score: 24 },
            {
              id: "cmc95i7c30003p53wcg76tm4l",
              name: "Michelle C",
              score: 19.5,
            },
          ],
        },
        //13
        {
          winner: [
            { id: "cmc95i7c30001p53wkp66aetz", name: "Ofir C", score: 24 },
            {
              id: "cmc95i7c30003p53wcg76tm4l",
              name: "Michelle C",
              score: 19.5,
            },
          ],
          loser: [
            { id: "cmc95i7c30000p53w5urri66q", name: "Erik O", score: 18.5 },
            { id: "cmc95i7c30002p53w87edgane", name: "Anna O", score: 15 },
          ],
        },

        { winner: null, loser: null },
      ],
      date: "2024-02-17T00:00:00.000Z",
    },
    {
      teams: [
        [
          { id: "cmc8r89mu0002p51qa2k4xepu", name: "Anna O", score: 15 },
          { id: "cmc8r89mu000fp51q69vryt2f", name: "Andraya B", score: 15 },
        ],
        [
          { id: "cmc8r89mu000gp51q6h6tumxn", name: "Brickwall", score: 14.5 },
          { id: "cmc8r89mu0000p51qsksqfqnv", name: "Erik O", score: 18.5 },
        ],
        [
          { id: "cmc8r89mv000jp51q9kzog2dc", name: "Steve M", score: 4 },
          { id: "cmc8r89mv000kp51qs62wruko", name: "Sarah C", score: 4 },
        ],
        [
          { id: "cmc8r89mu0003p51qa5a16wa4", name: "Michelle C", score: 19.5 },
          { id: "cmc8r89mu0001p51qalvan8zp", name: "Ofir C", score: 24 },
        ],
      ],
      results: [
        { winner: null, loser: null },
        {
          winner: [
            { id: "cmc8r89mu000gp51q6h6tumxn", name: "Brickwall", score: 14.5 },
            { id: "cmc8r89mu0000p51qsksqfqnv", name: "Erik O", score: 18.5 },
          ],
          loser: [
            { id: "cmc8r89mu0002p51qa2k4xepu", name: "Anna O", score: 15 },
            { id: "cmc8r89mu000fp51q69vryt2f", name: "Andraya B", score: 15 },
          ],
        },
        {
          winner: [
            {
              id: "cmc8r89mu0003p51qa5a16wa4",
              name: "Michelle C",
              score: 19.5,
            },
            { id: "cmc8r89mu0001p51qalvan8zp", name: "Ofir C", score: 24 },
          ],
          loser: [
            { id: "cmc8r89mv000jp51q9kzog2dc", name: "Steve M", score: 4 },
            { id: "cmc8r89mv000kp51qs62wruko", name: "Sarah C", score: 4 },
          ],
        },
        {
          winner: [
            { id: "cmc8r89mv000jp51q9kzog2dc", name: "Steve M", score: 4 },
            { id: "cmc8r89mv000kp51qs62wruko", name: "Sarah C", score: 4 },
          ],
          loser: [
            { id: "cmc8r89mu0002p51qa2k4xepu", name: "Anna O", score: 15 },
            { id: "cmc8r89mu000fp51q69vryt2f", name: "Andraya B", score: 15 },
          ],
        },
        {
          winner: [
            { id: "cmc8r89mu000gp51q6h6tumxn", name: "Brickwall", score: 14.5 },
            { id: "cmc8r89mu0000p51qsksqfqnv", name: "Erik O", score: 18.5 },
          ],
          loser: [
            {
              id: "cmc8r89mu0003p51qa5a16wa4",
              name: "Michelle C",
              score: 19.5,
            },
            { id: "cmc8r89mu0001p51qalvan8zp", name: "Ofir C", score: 24 },
          ],
        },
        {
          winner: [
            {
              id: "cmc8r89mu0003p51qa5a16wa4",
              name: "Michelle C",
              score: 19.5,
            },
            { id: "cmc8r89mu0001p51qalvan8zp", name: "Ofir C", score: 24 },
          ],
          loser: [
            { id: "cmc8r89mv000jp51q9kzog2dc", name: "Steve M", score: 4 },
            { id: "cmc8r89mv000kp51qs62wruko", name: "Sarah C", score: 4 },
          ],
        },
        {
          winner: [
            { id: "cmc8r89mu000gp51q6h6tumxn", name: "Brickwall", score: 14.5 },
            { id: "cmc8r89mu0000p51qsksqfqnv", name: "Erik O", score: 18.5 },
          ],
          loser: [
            {
              id: "cmc8r89mu0003p51qa5a16wa4",
              name: "Michelle C",
              score: 19.5,
            },
            { id: "cmc8r89mu0001p51qalvan8zp", name: "Ofir C", score: 24 },
          ],
        },
        { winner: null, loser: null },
        { winner: null, loser: null },
      ],
      date: "2024-04-20T00:00:00.000Z",
    },

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
    {
      teams: [
        [
          { id: "cmc97xkz30002p5ef7of0do85", name: "Anna O", score: 15 },
          { id: "cmc97xkz3000ap5ef2irlh344", name: "C.J", score: 4 },
        ],
        [
          { id: "cmc97xkz30000p5efjtppgwtn", name: "Erik O", score: 18.5 },
          { id: "cmc97xkz3000bp5ef63tx3811", name: "Andy P", score: 5 },
        ],
        [
          { id: "cmc97xkz30007p5efeau1ewoc", name: "Rachel R", score: 6 },
          { id: "cmc97xkz30001p5efckf0mcu0", name: "Ofir C", score: 24 },
        ],
        [
          { id: "cmc97xkz30008p5effx0tnpuo", name: "Tommy B", score: 6.5 },
          { id: "cmc97xkz30009p5eftbycfl2m", name: "Monica P", score: 7.5 },
        ],
        [
          { id: "cmc97xkz30003p5efax5y6ddg", name: "Michelle C", score: 19.5 },
          { id: "cmc97xkz30004p5eftqp54joo", name: "Dan F", score: 8 },
        ],
        [
          { id: "cmc97xkz30006p5efr0iv5urt", name: "Cooper R", score: 3.75 },
          { id: "cmc97xkz30005p5efym935ajr", name: "Rachelle J", score: 8.5 },
        ],
      ],
      results: [
        { winner: null, loser: null },

        {
          loser: [
            { id: "cmc97xkz30008p5effx0tnpuo", name: "Tommy B", score: 6.5 },
            { id: "cmc97xkz30009p5eftbycfl2m", name: "Monica P", score: 7.5 },
          ],
          winner: [
            {
              id: "cmc97xkz30003p5efax5y6ddg",
              name: "Michelle C",
              score: 19.5,
            },
            { id: "cmc97xkz30004p5eftqp54joo", name: "Dan F", score: 8 },
          ],
        },

        {
          loser: [
            { id: "cmc97xkz30006p5efr0iv5urt", name: "Cooper R", score: 3.75 },
            { id: "cmc97xkz30005p5efym935ajr", name: "Rachelle J", score: 8.5 },
          ],
          winner: [
            { id: "cmc97xkz30007p5efeau1ewoc", name: "Rachel R", score: 6 },
            { id: "cmc97xkz30001p5efckf0mcu0", name: "Ofir C", score: 24 },
          ],
        },

        {
          loser: [
            { id: "cmc97xkz30002p5ef7of0do85", name: "Anna O", score: 15 },
            { id: "cmc97xkz3000ap5ef2irlh344", name: "C.J", score: 4 },
          ],
          winner: [
            {
              id: "cmc97xkz30003p5efax5y6ddg",
              name: "Michelle C",
              score: 19.5,
            },
            { id: "cmc97xkz30004p5eftqp54joo", name: "Dan F", score: 8 },
          ],
        },

        {
          loser: [
            { id: "cmc97xkz30000p5efjtppgwtn", name: "Erik O", score: 18.5 },
            { id: "cmc97xkz3000bp5ef63tx3811", name: "Andy P", score: 5 },
          ],
          winner: [
            { id: "cmc97xkz30007p5efeau1ewoc", name: "Rachel R", score: 6 },
            { id: "cmc97xkz30001p5efckf0mcu0", name: "Ofir C", score: 24 },
          ],
        },

        {
          loser: [
            { id: "cmc97xkz30002p5ef7of0do85", name: "Anna O", score: 15 },
            { id: "cmc97xkz3000ap5ef2irlh344", name: "C.J", score: 4 },
          ],
          winner: [
            { id: "cmc97xkz30006p5efr0iv5urt", name: "Cooper R", score: 3.75 },
            { id: "cmc97xkz30005p5efym935ajr", name: "Rachelle J", score: 8.5 },
          ],
        },

        {
          loser: [
            { id: "cmc97xkz30000p5efjtppgwtn", name: "Erik O", score: 18.5 },
            { id: "cmc97xkz3000bp5ef63tx3811", name: "Andy P", score: 5 },
          ],
          winner: [
            { id: "cmc97xkz30008p5effx0tnpuo", name: "Tommy B", score: 6.5 },
            { id: "cmc97xkz30009p5eftbycfl2m", name: "Monica P", score: 7.5 },
          ],
        },

        {
          loser: [
            { id: "cmc97xkz30008p5effx0tnpuo", name: "Tommy B", score: 6.5 },
            { id: "cmc97xkz30009p5eftbycfl2m", name: "Monica P", score: 7.5 },
          ],
          winner: [
            { id: "cmc97xkz30006p5efr0iv5urt", name: "Cooper R", score: 3.75 },
            { id: "cmc97xkz30005p5efym935ajr", name: "Rachelle J", score: 8.5 },
          ],
        },

        {
          loser: [
            {
              id: "cmc97xkz30003p5efax5y6ddg",
              name: "Michelle C",
              score: 19.5,
            },
            { id: "cmc97xkz30004p5eftqp54joo", name: "Dan F", score: 8 },
          ],
          winner: [
            { id: "cmc97xkz30007p5efeau1ewoc", name: "Rachel R", score: 6 },
            { id: "cmc97xkz30001p5efckf0mcu0", name: "Ofir C", score: 24 },
          ],
        },

        {
          loser: [
            { id: "cmc97xkz30006p5efr0iv5urt", name: "Cooper R", score: 3.75 },
            { id: "cmc97xkz30005p5efym935ajr", name: "Rachelle J", score: 8.5 },
          ],
          winner: [
            {
              id: "cmc97xkz30003p5efax5y6ddg",
              name: "Michelle C",
              score: 19.5,
            },
            { id: "cmc97xkz30004p5eftqp54joo", name: "Dan F", score: 8 },
          ],
        },

        {
          loser: [
            {
              id: "cmc97xkz30003p5efax5y6ddg",
              name: "Michelle C",
              score: 19.5,
            },
            { id: "cmc97xkz30004p5eftqp54joo", name: "Dan F", score: 8 },
          ],
          winner: [
            { id: "cmc97xkz30007p5efeau1ewoc", name: "Rachel R", score: 6 },
            { id: "cmc97xkz30001p5efckf0mcu0", name: "Ofir C", score: 24 },
          ],
        },
        { winner: null, loser: null },
        { winner: null, loser: null },
      ],
      date: "2025-06-07T00:00:00.000Z",
    },
    {
      teams: [
        [
          {
            id: "cmc9eine3000hp59y1v7prddb",
            name: "Matt D",
            score: 5,
          },
          {
            id: "cmc9eine3000dp59yczgb5i7l",
            name: "Casey R",
            score: 5,
          },
        ],
        [
          {
            id: "cmc9eine30000p59y4mjxaabb",
            name: "Erik O",
            score: 18.5,
          },
          {
            id: "cmc9eine30001p59ymdjoeoof",
            name: "Ofir C",
            score: 24,
          },
        ],
        [
          {
            id: "cmc9eine3000pp59yzf5qt4xs",
            name: "Sarissa S",
            score: 2.5,
          },
          {
            id: "cmc9eine3000op59yvs30xs4r",
            name: "Lindsay",
            score: 2.5,
          },
        ],
        [
          {
            id: "cmc9eine3000gp59ynea5yfjo",
            name: "Brickwall",
            score: 14.5,
          },
          {
            id: "cmc9eine30002p59yi0by9ewg",
            name: "Anna O",
            score: 15,
          },
        ],
        [
          {
            id: "cmc9eine3000ip59y2p81yj6k",
            name: "Ari S",
            score: 4,
          },
          {
            id: "cmc9eine3000mp59yioh3ab1u",
            name: "Kara Ch",
            score: 2.5,
          },
        ],
        [
          {
            id: "cmc9eine3000bp59y5s277w3w",
            name: "Andy P",
            score: 5,
          },
          {
            id: "cmc9eine30003p59yshaj1sox",
            name: "Michelle C",
            score: 19.5,
          },
        ],
        [
          {
            id: "cmc9eine3000ap59ybjwqz0vs",
            name: "C.J",
            score: 4,
          },
          {
            id: "cmc9eine3000np59yjeg35k3t",
            name: "Kelly V",
            score: 2.5,
          },
        ],
        [
          {
            id: "cmc9eine3000fp59y1divi5on",
            name: "Andraya B",
            score: 15,
          },
          {
            id: "cmc9eine3000qp59ygng9gs2f",
            name: "Matt G",
            score: 5.5,
          },
        ],
        [
          {
            id: "cmc9eine3000vp59ytbtglgw7",
            name: "Bryan CJ",
            score: 4.5,
          },
          {
            id: "cmc9eine3000ep59y4vkskym1",
            name: "Jake R",
            score: 5,
          },
        ],
      ],
      results: [
        {
          winner: null,
          loser: null,
        },
        {
          winner: [
            {
              id: "cmc9eine3000fp59y1divi5on",
              name: "Andraya B",
              score: 15,
            },
            {
              id: "cmc9eine3000qp59ygng9gs2f",
              name: "Matt G",
              score: 5.5,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000vp59ytbtglgw7",
              name: "Bryan CJ",
              score: 4.5,
            },
            {
              id: "cmc9eine3000ep59y4vkskym1",
              name: "Jake R",
              score: 5,
            },
          ],
        },
        {
          winner: [
            {
              id: "cmc9eine3000gp59ynea5yfjo",
              name: "Brickwall",
              score: 14.5,
            },
            {
              id: "cmc9eine30002p59yi0by9ewg",
              name: "Anna O",
              score: 15,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000ip59y2p81yj6k",
              name: "Ari S",
              score: 4,
            },
            {
              id: "cmc9eine3000mp59yioh3ab1u",
              name: "Kara Ch",
              score: 2.5,
            },
          ],
        },
        {
          winner: [
            {
              id: "cmc9eine30000p59y4mjxaabb",
              name: "Erik O",
              score: 18.5,
            },
            {
              id: "cmc9eine30001p59ymdjoeoof",
              name: "Ofir C",
              score: 24,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000ap59ybjwqz0vs",
              name: "C.J",
              score: 4,
            },
            {
              id: "cmc9eine3000np59yjeg35k3t",
              name: "Kelly V",
              score: 2.5,
            },
          ],
        },
        {
          winner: [
            {
              id: "cmc9eine3000bp59y5s277w3w",
              name: "Andy P",
              score: 5,
            },
            {
              id: "cmc9eine30003p59yshaj1sox",
              name: "Michelle C",
              score: 19.5,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000pp59yzf5qt4xs",
              name: "Sarissa S",
              score: 2.5,
            },
            {
              id: "cmc9eine3000op59yvs30xs4r",
              name: "Lindsay",
              score: 2.5,
            },
          ],
        },
        {
          winner: [
            {
              id: "cmc9eine3000fp59y1divi5on",
              name: "Andraya B",
              score: 15,
            },
            {
              id: "cmc9eine3000qp59ygng9gs2f",
              name: "Matt G",
              score: 5.5,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000hp59y1v7prddb",
              name: "Matt D",
              score: 5,
            },
            {
              id: "cmc9eine3000dp59yczgb5i7l",
              name: "Casey R",
              score: 5,
            },
          ],
        },
        {
          winner: [
            {
              id: "cmc9eine3000vp59ytbtglgw7",
              name: "Bryan CJ",
              score: 4.5,
            },
            {
              id: "cmc9eine3000ep59y4vkskym1",
              name: "Jake R",
              score: 5,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000pp59yzf5qt4xs",
              name: "Sarissa S",
              score: 2.5,
            },
            {
              id: "cmc9eine3000op59yvs30xs4r",
              name: "Lindsay",
              score: 2.5,
            },
          ],
        },
        {
          winner: [
            {
              id: "cmc9eine3000hp59y1v7prddb",
              name: "Matt D",
              score: 5,
            },
            {
              id: "cmc9eine3000dp59yczgb5i7l",
              name: "Casey R",
              score: 5,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000ip59y2p81yj6k",
              name: "Ari S",
              score: 4,
            },
            {
              id: "cmc9eine3000mp59yioh3ab1u",
              name: "Kara Ch",
              score: 2.5,
            },
          ],
        },
        {
          winner: [
            {
              id: "cmc9eine3000vp59ytbtglgw7",
              name: "Bryan CJ",
              score: 4.5,
            },
            {
              id: "cmc9eine3000ep59y4vkskym1",
              name: "Jake R",
              score: 5,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000ap59ybjwqz0vs",
              name: "C.J",
              score: 4,
            },
            {
              id: "cmc9eine3000np59yjeg35k3t",
              name: "Kelly V",
              score: 2.5,
            },
          ],
        },
        {
          winner: [
            {
              id: "cmc9eine30000p59y4mjxaabb",
              name: "Erik O",
              score: 18.5,
            },
            {
              id: "cmc9eine30001p59ymdjoeoof",
              name: "Ofir C",
              score: 24,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000bp59y5s277w3w",
              name: "Andy P",
              score: 5,
            },
            {
              id: "cmc9eine30003p59yshaj1sox",
              name: "Michelle C",
              score: 19.5,
            },
          ],
        },
        {
          winner: [
            {
              id: "cmc9eine3000gp59ynea5yfjo",
              name: "Brickwall",
              score: 14.5,
            },
            {
              id: "cmc9eine30002p59yi0by9ewg",
              name: "Anna O",
              score: 15,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000fp59y1divi5on",
              name: "Andraya B",
              score: 15,
            },
            {
              id: "cmc9eine3000qp59ygng9gs2f",
              name: "Matt G",
              score: 5.5,
            },
          ],
        },
        {
          winner: [
            {
              id: "cmc9eine3000hp59y1v7prddb",
              name: "Matt D",
              score: 5,
            },
            {
              id: "cmc9eine3000dp59yczgb5i7l",
              name: "Casey R",
              score: 5,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000bp59y5s277w3w",
              name: "Andy P",
              score: 5,
            },
            {
              id: "cmc9eine30003p59yshaj1sox",
              name: "Michelle C",
              score: 19.5,
            },
          ],
        },
        {
          winner: [
            {
              id: "cmc9eine3000fp59y1divi5on",
              name: "Andraya B",
              score: 15,
            },
            {
              id: "cmc9eine3000qp59ygng9gs2f",
              name: "Matt G",
              score: 5.5,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000vp59ytbtglgw7",
              name: "Bryan CJ",
              score: 4.5,
            },
            {
              id: "cmc9eine3000ep59y4vkskym1",
              name: "Jake R",
              score: 5,
            },
          ],
        },
        {
          winner: [
            {
              id: "cmc9eine3000fp59y1divi5on",
              name: "Andraya B",
              score: 15,
            },
            {
              id: "cmc9eine3000qp59ygng9gs2f",
              name: "Matt G",
              score: 5.5,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000hp59y1v7prddb",
              name: "Matt D",
              score: 5,
            },
            {
              id: "cmc9eine3000dp59yczgb5i7l",
              name: "Casey R",
              score: 5,
            },
          ],
        },
        {
          winner: [
            {
              id: "cmc9eine30000p59y4mjxaabb",
              name: "Erik O",
              score: 18.5,
            },
            {
              id: "cmc9eine30001p59ymdjoeoof",
              name: "Ofir C",
              score: 24,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000gp59ynea5yfjo",
              name: "Brickwall",
              score: 14.5,
            },
            {
              id: "cmc9eine30002p59yi0by9ewg",
              name: "Anna O",
              score: 15,
            },
          ],
        },
        {
          winner: [
            {
              id: "cmc9eine3000fp59y1divi5on",
              name: "Andraya B",
              score: 15,
            },
            {
              id: "cmc9eine3000qp59ygng9gs2f",
              name: "Matt G",
              score: 5.5,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000gp59ynea5yfjo",
              name: "Brickwall",
              score: 14.5,
            },
            {
              id: "cmc9eine30002p59yi0by9ewg",
              name: "Anna O",
              score: 15,
            },
          ],
        },
        {
          winner: [
            {
              id: "cmc9eine30000p59y4mjxaabb",
              name: "Erik O",
              score: 18.5,
            },
            {
              id: "cmc9eine30001p59ymdjoeoof",
              name: "Ofir C",
              score: 24,
            },
          ],
          loser: [
            {
              id: "cmc9eine3000fp59y1divi5on",
              name: "Andraya B",
              score: 15,
            },
            {
              id: "cmc9eine3000qp59ygng9gs2f",
              name: "Matt G",
              score: 5.5,
            },
          ],
        },
        {
          winner: null,
          loser: null,
        },
        {
          winner: null,
          loser: null,
        },
      ],
      date: "2024-06-21T00:00:00.000Z",
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
