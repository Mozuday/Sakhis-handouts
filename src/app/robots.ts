import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",

      disallow: [
        "/admin",
        "/api",
        "/thank-you",
      ],
    },

    sitemap: "https://www.sakhis-handouts.in/sitemap.xml",

    host: "https://www.sakhis-handouts.in",
  };
}