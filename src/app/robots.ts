import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/secret-admin-panel", "/secret-admin-panel/"],
      },
    ],
    sitemap: "https://www.yourbench.co.in/sitemap.xml",
  };
}
