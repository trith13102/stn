"use client";

import { FC, useState, useEffect } from 'react'
import { useTheme } from "next-themes";
import NextTopLoader from 'nextjs-toploader';

const AppTopLoader: FC = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState<string | undefined>("white")

  useEffect(() => {
    setColor(theme === "light" ? "black" : "white")
  }, [])

  return (
    <NextTopLoader
      showSpinner={false}
      color={color}
    />
  )
}

export default AppTopLoader