import { FC } from "react"
import dynamic from "next/dynamic"

const AppNavBar = dynamic(() => import("@/components/app/AppNavBar"), {
  ssr: false,
})

const AppHeaderNav: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-[inset_0_-1px_0_0_#eaeaea] dark:shadow-[inset_0_-1px_0_0_#333]">
      <main className="app-container mx-auto">
        <AppNavBar />
      </main>
    </header>
  )
}

export default AppHeaderNav
