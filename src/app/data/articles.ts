export type Article = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "writing-less-fixing-later",
    title: "Writing Less, Fixing Later",
    date: "2026-04-12",
    readingTime: "4 min read",
    excerpt:
      "Why I prefer to draft fast, ship rough, and let the second pass do the polish — and where that breaks down.",
    body: [
      "There's a certain kind of essay that only exists because the author spent two weeks reordering its paragraphs. I've written that essay many times.",
      "These days I try to do the opposite. I write the first version in a single sitting, broken in obvious ways, and let the work tell me what's actually there. The second pass is where structure gets built. By the third pass, I'm just removing things.",
      "This approach doesn't generalize. Some pieces need weeks of quiet before they have a shape. But for the rest, the cost of waiting is usually higher than the cost of writing it badly first.",
      "A small rule of thumb: if I can't summarize a paragraph in one sentence, the paragraph is doing two jobs. Cut one of them.",
    ],
  },
  {
    slug: "minimalism-isnt-aesthetic",
    title: "Minimalism Isn't an Aesthetic",
    date: "2026-03-28",
    readingTime: "3 min read",
    excerpt:
      "Stripping interfaces to their bones isn't a design trend. It's a way of finding out what a product is actually for.",
    body: [
      "Most products I admire can be described in one sentence. The sentence survives removing half the features.",
      "When the description gets longer, the product usually isn't a product — it's a bundle of products that hasn't decided which one it wants to be. A bundle can be a fine business. It makes a poor home page.",
      "So when someone says a UI is 'too clean,' I usually hear 'I miss the thing I used to look at instead of doing the work.' That's a fair preference. It's not a critique of minimalism.",
    ],
  },
  {
    slug: "tools-i-keep-around",
    title: "Tools I Keep Around",
    date: "2026-03-10",
    readingTime: "5 min read",
    excerpt:
      "A short, opinionated list of CLI tools, editors, and small apps that have stayed on my machine for over a year.",
    body: [
      "I've come to distrust any list that begins with 'every developer should use X.' People work in different conditions. But here's what has stuck for me, in roughly the order I reach for it.",
      "First: a good terminal multiplexer and a shell that doesn't surprise me. Then: an editor with a real keyboard story. Then: a way to take notes that doesn't require thinking about the tool itself.",
      "The remaining 90% of my machine changes every few months. The list above has been stable for years. I think that's the actual signal of a tool's quality — whether you forget it exists.",
    ],
  },
  {
    slug: "the-quiet-web",
    title: "The Quiet Web",
    date: "2026-02-22",
    readingTime: "6 min read",
    excerpt:
      "Notes on building a personal site in 2026, when the rest of the internet is racing toward more.",
    body: [
      "I rebuilt this site three times in the last year. Each time I removed something. Each time it felt like a relief.",
      "There's a particular pleasure in opening a webpage and finding one idea, well-typed, with no banner pleading for your email. The web used to be full of that. It can be again, on small sites that don't owe anyone an A/B test.",
      "I'm not nostalgic. The loud web has its place and I benefit from it every day. But for a personal site — a place that exists to remind me what I'm interested in — quiet is the point.",
    ],
  },
  {
    slug: "deploying-on-a-friday",
    title: "Deploying on a Friday",
    date: "2026-02-04",
    readingTime: "2 min read",
    excerpt:
      "Some teams treat Friday deploys as reckless. A few of us treat them as a forcing function for a calmer on-call.",
    body: [
      "If your team can't deploy on Friday, the problem usually isn't the calendar — it's the rollback plan, the observability, and the number of untested paths through the system.",
      "When I worked on a small team that deployed twice a day, every day, the quality of our tooling went up because we couldn't afford to be afraid of it. That's worth more than any postmortem template.",
      "None of this is advice. Some systems are too big and too consequential to be casual about. But for most of the software I help build, fear is the loudest cost in the room.",
    ],
  },
];
