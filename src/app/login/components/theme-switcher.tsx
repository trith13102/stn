"use client"

import { FC, useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

import { AppTheme } from "@/core/types"

type Props = {}

const ThemeSwitcher: FC<Props> = (props) => {
  const { theme, setTheme } = useTheme()
  const [currTheme, setCurrTheme] = useState<AppTheme>("light")

  const handleTheme = (): void => {
    const _theme: AppTheme = theme === "light" ? "dark" : "light"
    setTheme(() => {
      setCurrTheme(_theme as AppTheme)
      return _theme
    })
  }

  useEffect(() => {
    setCurrTheme(theme as AppTheme)
  }, [])

  return (
    <Button
      onClick={handleTheme}
      title={`Change to ${currTheme === "light" ? "dark" : "light"} theme`}
      className="w-[2.2rem] h-[2.2rem] !ring-[none] rounded-full hover:bg-[unset]"
      variant="ghost"
      size="icon"
      aria-label="Theme Switcher"
    >
      <Sun className="w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <Moon className="absolute w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}

export default ThemeSwitcher
