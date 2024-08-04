"use client"

import { FC, useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import AppLogo from "./app-logo"

import { AppTheme, PagePath } from "@/core/types"
import PAGE_PATHS from "@/constants/pages"

const AppNavBar: FC = () => {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [currTheme, setCurrTheme] = useState<AppTheme>("light")

  useEffect(() => {
    setCurrTheme(theme as AppTheme)
  }, [theme])

  return (
    <div className="flex items-center justify-between h-[64px]">
      <section className="flex gap-x-6">
        <Link href="/" scroll={false} aria-label="Home">
          <AppLogo theme={currTheme} />
        </Link>

        <ul className="hidden lg:flex gap-x-6">
          {(PAGE_PATHS?.length > 0 ? PAGE_PATHS : [])
            .filter((page: PagePath) => page.showOnMenu)
            .map((page: PagePath) => (
              <li key={page.path}>
                <Link
                  className={`transition-colors text-sm hover:text-foreground/80 ${
                    page.path === pathname.split("/")[1]
                      ? "text-foreground"
                      : "text-foreground/60"
                  }`}
                  href={`/${page.path}`}
                  scroll={false}
                  aria-label={page.label}
                >
                  {page.label}
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <div className="hidden lg:flex items-center gap-x-3">
        <Button
          className="w-[2.2rem] h-[2.2rem] !ring-[none] rounded-full"
          variant="ghost"
          size="icon"
          title="Settings"
          aria-label="Settings"
          asChild
        >
          <Link href="/settings">
            <Settings className="w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90" />
          </Link>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="w-[2.2rem] h-[2.2rem] !ring-[none] rounded-full"
              variant="ghost"
              size="icon"
              title="Change theme"
              aria-label="Theme Switcher"
            >
              <Sun className="w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
              <Moon className="absolute w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Theme Switcher</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setTheme("light")}
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setTheme("dark")}
            >
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="block lg:hidden"
            variant="outline"
            aria-label="Mobile Menu"
          >
            <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-left"></SheetTitle>
          </SheetHeader>
          <SheetDescription></SheetDescription>

          <ul className="flex flex-col gap-2 mt-8">
            {(PAGE_PATHS?.length > 0 ? PAGE_PATHS : [])
              .filter((page: PagePath) => page.showOnMenu)
              .map((page: PagePath) => (
                <li key={page.path}>
                  <Link
                    className={`block transition-colors text-sm hover:text-foreground/80 ${
                      page.path === pathname.split("/")[1]
                        ? "text-foreground"
                        : "text-foreground/60"
                    }`}
                    href={`/${page.path}`}
                    scroll={false}
                    aria-label={page.label}
                  >
                    {page.label}
                  </Link>
                  <Separator className="my-2" />
                </li>
              ))}
          </ul>

          <div className="flex gap-x-3 mt-8">
            <Button
              className="w-[2.2rem] h-[2.2rem] !ring-[none]"
              variant="outline"
              size="icon"
              aria-label="Theme Switcher"
              asChild
            >
              <Link href="/settings">
                <Settings className="w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90" />
              </Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="w-[2.2rem] h-[2.2rem] !ring-[none]"
                  variant="outline"
                  size="icon"
                  aria-label="Mobile Theme Switcher"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Theme Switcher</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => setTheme("light")}
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default AppNavBar
