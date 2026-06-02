import type { MetadataRoute } from "next";
import { site } from "./data/site";

const logoPath = "/personal-logo.png";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Leo Romero",
    description: site.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#1c1b22",
    theme_color: "#1c1b22",
    icons: [
      {
        src: logoPath,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
