import { MetadataRoute } from "next"

import { PagePath } from "@/core/types"
import PAGE_PATHS from "@/constants/pages"

const deployedDomain = process.env.DEPLOYED_DOMAIN

const sitemap = (): MetadataRoute.Sitemap =>
  PAGE_PATHS.map((pagePath: PagePath) => ({
    url: `${deployedDomain}/${pagePath.path}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  }))

export default sitemap
