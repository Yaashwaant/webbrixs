export default async function sitemap() {
  const baseUrl = "https://webbrixs.in";

  const routes = [
    "",
    "/about",
    "/careers",
    "/contact-us",
    "/portfolio",
    "/pricing",
    "/teams",
    "/track-ticket",
    "/services",
    "/services/software-development",
    "/services/web-design-development",
    "/services/end-to-end-ecommerce",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
