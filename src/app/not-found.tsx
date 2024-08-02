"use client"

import { FC, useEffect, useState } from "react"
import { useTheme } from "next-themes"

import Error from "next/error"
import { AppTheme } from "@/core/types"

const NotFound: FC = () => {
  const [currentTheme, setCurrentTheme] = useState<AppTheme>("light")
  const { theme } = useTheme()

  useEffect(() => {
    setCurrentTheme(theme ? (theme as AppTheme) : "light")
  }, [])

  return (
    <Error
      statusCode={404}
      title="Not Found"
      withDarkMode={currentTheme === "dark" ? true : false}
    />
  )
}

export default NotFound
