export const DAY_MS = 24 * 60 * 60 * 1000

export const GENERATE_APP_TITLE = (pageName?: string): string =>
  `A Simple URL Shortener${pageName ? ` | ${pageName}` : ""}`
