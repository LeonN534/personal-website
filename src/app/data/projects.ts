export type ProjectStatus = "wip" | "active" | "stable" | "archived";

export type Project = {
  slug: string;
  title: string;
  description: string;
  about: string;
  status: ProjectStatus;
  tech: string[];
  highlights?: string[];
  year?: number;
  link?: string;
  route?: boolean;
  repo?: string;
  logo?: string;
};

export const projects: Project[] = [
  {
    slug: "config-generator",
    title: "Config Generator",
    description:
      "Generate your Half-Life/Adrenaline Gamer userconfig with a beginner friendly interface.",
    about: "Active",
    status: "wip",
    tech: ["React", "Vite", "Tailwind", "Shadcn UI"],
    year: 2026,
    link: "https://config-generator-inky.vercel.app",
    repo: "https://github.com/LeonN534/Config-Generator",
    route: false,
    logo: "https://raw.githubusercontent.com/LeonN534/Config-Generator/refs/heads/main/public/logo.png",
  },
  {
    slug: "the-fretboard-game",
    title: "The Fretboard Game",
    description: "A game to learn the fretboard by PLAYING with the guitar.",
    about: "Active",
    status: "active",
    tech: ["React", "Electron", "Tailwind", "Shadcn UI"],
    year: 2026,
    repo: "https://github.com/LeonN534/The-Fretboard-Game",
    route: false,
    logo: "https://raw.githubusercontent.com/LeonN534/The-Fretboard-Game/refs/heads/main/public/logo.png",
  },
  {
    slug: "dark-minimalist",
    title: "Dark Minimalist",
    description:
      "A good looking dark color palette to use in various applications.",
    about: "Active",
    status: "active",
    tech: ["CSS"],
    year: 2023,
    repo: "https://github.com/LeonN534/Dark-Minimalist",
    route: false,
    logo: "https://raw.githubusercontent.com/LeonN534/Dark-Minimalist-vscode/main/assets/logo/128x128.png",
  },
  {
    slug: "dark-minimalist-vscode",
    title: "Dark Minimalist VSCode Theme",
    description:
      "A minimalist vscode dark theme using the Dark Minimalist color palette.",
    about: "Active",
    status: "active",
    tech: ["CSS", "Javascript"],
    year: 2024,
    repo: "https://github.com/LeonN534/Dark-Minimalist-vscode",
    route: false,
    logo: "https://raw.githubusercontent.com/LeonN534/Dark-Minimalist-vscode/main/assets/logo/128x128.png",
  },
  {
    slug: "dark-minimalist-vscode-icons",
    title: "Dark Minimalist VSCode Icons Theme",
    description:
      "Minimalist vscode icons using the Dark Minimalist color palette.",
    about: "Active",
    status: "active",
    tech: ["TypeScript"],
    year: 2024,
    repo: "https://github.com/LeonN534/Dark-Minimalist-vscode-icons",
    route: false,
    logo: "https://raw.githubusercontent.com/LeonN534/Dark-Minimalist-vscode/main/assets/logo/128x128.png",
  },
  {
    slug: "dark-minimalist-userstyles",
    title: "Dark Minimalist Userstyles",
    description:
      "A collection of user themes using the Dark Minimalist color palette for well-known web pages and applications.",
    about: "Active",
    status: "active",
    tech: ["Less"],
    year: 2024,
    repo: "https://github.com/LeonN534/Dark-Minimalist-userstyles",
    route: false,
    logo: "https://raw.githubusercontent.com/LeonN534/Dark-Minimalist-vscode/main/assets/logo/128x128.png",
  },
  {
    slug: "project-screen-linux",
    title: "Project Screen Linux",
    description: "A windows-like interface to quickly project your PC screen.",
    about: "Active",
    status: "active",
    tech: ["Shell"],
    year: 2024,
    repo: "https://github.com/LeonN534/Project-Screen-Linux",
    route: false,
    logo: "https://cdn-icons-png.flaticon.com/512/11022/11022716.png",
  },
  {
    slug: "ag-config",
    title: "Adrenaline Gamer Config Files",
    description: "My models, sprites, config and more for Half-Life/AG.",
    about: "Active",
    status: "active",
    tech: ["ReScript", "Images"],
    year: 2024,
    repo: "https://github.com/LeonN534/AG-config",
    route: false,
    logo: "https://static.wikia.nocookie.net/halflife7283/images/3/3b/Half_Life_Logo.jpg/revision/latest?cb=20131222011139&path-prefix=es",
  },
  {
    slug: "dotfiles",
    title: "Linux Dotfiles",
    description:
      "A guide to set up a linux environment in the most efficient way for my use cases.",
    about: "Active",
    status: "active",
    tech: ["CSS", "Shell", "Javascript"],
    year: 2023,
    repo: "https://github.com/LeonN534/dotfiles",
    route: false,
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Icons8_flat_linux.svg",
  },
  {
    slug: "3d-tic-tac-toe",
    title: "3D Tic Tac Toe",
    description: "A 3D version of the Tic Tac Toe game made with lwjgl ",
    about: "Active",
    status: "active",
    tech: ["Java", "lwjgl"],
    year: 2023,
    repo: "https://github.com/LeonN534/3D-TicTacToe",
    route: false,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1280px-Tic_tac_toe.svg.png",
  },
  {
    slug: "personal-website",
    title: "Personal Website",
    description: "The repository for my personal website, portfolio and blog.",
    about: "Active",
    status: "active",
    tech: ["React", "Next.js", "Tailwind", "TypeScript"],
    year: 2026,
    repo: "https://github.com/LeonN534/personal-website",
    route: false,
    link: "https://leonardoromero.xyz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1280px-Tic_tac_toe.svg.png",
  },
];
