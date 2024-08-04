import { MetadataRoute } from "next"

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "*",
  },
  sitemap: `${process.env.DEPLOYED_DOMAIN}/sitemap.xml`,
})

export default robots
