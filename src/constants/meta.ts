import { Metadata } from "next"

import { GENERATE_APP_TITLE } from "@/constants/common"

export const ROOT: Metadata = {
  title: GENERATE_APP_TITLE(),
  description: "This is a simple URL shortener",
}

export const NOT_FOUND: Metadata = {
  title: "Page Not Found",
  description: "This page could not be found",
}

export const LOGIN: Metadata = {
  title: GENERATE_APP_TITLE("Login"),
  description: "Login to the shortener tool",
}

export const SETTINGS: Metadata = {
  title: GENERATE_APP_TITLE("Setting"),
  description: "Login to the shortener tool",
}
