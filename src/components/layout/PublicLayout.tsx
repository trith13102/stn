"use client"

import { FC, ReactNode } from "react"

import AppTopLoader from "@/components/app/AppTopLoader"
import AppHeaderNav from "@/components/app/AppHeaderNav"

type Props = {
  className?: string
  children: ReactNode
}

const PublicLayout: FC<Props> = (props: Props) => {
  const { className = "", children } = props

  return (
    <>
      <AppTopLoader />
      <AppHeaderNav />
      <main className={`app-container ${className}`}>{children}</main>
    </>
  )
}

export default PublicLayout
