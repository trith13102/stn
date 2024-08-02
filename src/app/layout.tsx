import { Be_Vietnam_Pro as BeVNP } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"

import { cn } from "@/lib/utils"

import ThemeProvider from "@/components/providers/ThemeProvider"
import { ROOT } from "@/constants/meta"

const openSans = BeVNP({
  subsets: ["vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = ROOT

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-open-sans", openSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
