import { PagePath } from "@/core/types"

const PAGE_PATHS: PagePath[] = [
  {
    title: "Home",
    path: "",
  },
  {
    title: "Login",
    path: "login",
  },
  {
    title: "Settings",
    path: "settings",
  },
  {
    title: "Shorten URL",
    label: "Shorten URL",
    path: "shorten",
    showOnMenu: true,
  },
  {
    title: "URL Management",
    label: "URL Management",
    path: "management",
    showOnMenu: true,
  },
]

export default PAGE_PATHS
