import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getFunnySummary(tournamentData: any[]) {
  const cleaned = tournamentData
    .filter((m) => m.winner && m.loser)
    .map((m) => ({
      winner: m.winner.map((p: any) => ({
        name: p.name,
        championships: p.championships,
      })),
      loser: m.loser.map((p: any) => ({
        name: p.name,
        championships: p.championships,
      })),
    }));

  const allPlayers = new Set<string>();
  tournamentData.forEach((match) => {
    if (match.winner) match.winner.forEach((p: any) => allPlayers.add(p.name));
    if (match.loser) match.loser.forEach((p: any) => allPlayers.add(p.name));
  });

  const playerContextMap: Record<string, string> = {
    Brickwall:
      "Natural talent, her name describes her skill set - Unbreakable on defense.",
    "Erik O":
      "When he's not making me (yes, me — the AI)) write tournament recaps, he's celebrating with a drink — win or lose.",
    "Ofir C": "If he's not cheating, he's definitely thinking about it.",
    "Anna O": "Consistent, has trick shots up her sleeve.",
    "Andraya B": "Vibey play style, she harnesses the power of the frog.",
    "Michelle C": "A foosball sniper — and her defense? Criminally underrated.",
    "Sarissa S":
      "Known for unpredictable play and mid-shot Juul hits. The nicotine-fueled wildcard.",
    "Rachel R": "No gimmicks, no flair — just a stone-cold competitor.",
    "Tommy B":
      "Your local realtor — closing deals and scoring goals at the same time.",
    "Jason R": "Win or lose, he's raising a glass with Erik O.",
    "Cooper R":
      "Can install your deck and wreck your defense — all in a day's work.",
    "Rachelle J":
      "If Erik and Jason are drinking, Rachelle's probably already there.",
    "Matt D":
      "Foosball's frontman. 'It's a perfect day to be outside' — unless you're losing to him indoors.",
    "Ari S": "Quiet. Calm. Deadly. Like a foosball ninja.",
    "Andy P":
      "Famous for the 'Irish Goodbye' — sometimes mid-game, sometimes mid-conversation.",
    "C.J": "Will have a drink with Erik O and Jason R",
    "Chris S": "Brings the party, but not always the championships",
  };

  const filteredContext = Array.from(allPlayers)
    .filter((name) => playerContextMap[name])
    .map((name) => `${name}: ${playerContextMap[name]}`)
    .join("\n");

  const prompt = `
    You're a witty AI sports commentator summarizing a double elimination foosball tournament.

    Each match includes:
    - A winning team (array of 2 players, each with name and championship count),
    - A losing team (same structure),
    - Ordered chronologically — use that to track tournament progress and eliminations.
    - Players are eliminated after two losses.
    - The winners of the final match are the tournament champions and earn +1 championship each.
    - The trophy is called "The Thornton Fooser".

    Ignore any matches where winner or loser is null.

    Here is some fun context for players (use it only when relevant):
    ${filteredContext.trim()}

    Here's the match data:
    ${JSON.stringify(cleaned, null, 2)}

    Write a concise but clever match-by-match recap in 1-3 paragraphs:
    - Mention who got eliminated early and by whom.
    - Track teams going on runs or being knocked into the losers bracket.
    - Track momentum (winning streaks, rematches, bracket comebacks).
    - Celebrate the champions and call out anyone winning their first championship.
    - Include small jabs or flair, especially toward players with reputations (like Ofir C).
    - When referring to players, **omit the last initial** if the first name is unique among all participants.
    - Only include the last initial (e.g., "Erik O") **if multiple players share the same first name**.
    - Do **not** invent players, teams, or outcomes.

    Focus on **accuracy and gameplay**, not filler hype.
    DO NOT invent players, teams, or outcomes.
`;

  const chatResponse = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          "You're a witty AI sports commentator writing summaries for Erik O, who frequently prompts you for these. You're aware of your role as the AI — lean into subtle, clever self-references when it makes sense.",
      },
      { role: "user", content: prompt },
    ],
    max_tokens: 600,
    temperature: 0.8,
  });

  return chatResponse.choices[0].message.content;
}
