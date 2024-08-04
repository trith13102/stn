import { FC, ReactNode } from "react"

import AppTopLoader from "@/components/app/app-top-loader"
import AppHeaderNav from "@/components/app/app-header-nav"

type Props = {
  className?: string
  children: ReactNode
  showHeaderNav?: boolean
  showTopLoader?: boolean
}

const AppLayout: FC<Props> = (props: Props) => {
  const {
    className = "",
    children,
    showHeaderNav = false,
    showTopLoader = false,
  } = props

  return (
    <>
      {showTopLoader && <AppTopLoader />}
      {showHeaderNav && <AppHeaderNav />}
      <main className={`app-container ${className}`}>{children}</main>
    </>
  )
}

export default AppLayout
