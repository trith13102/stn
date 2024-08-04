import { FC } from "react"
import type { Metadata } from 'next'

import Link from "next/link"
import { Button } from "@/components/ui/button"

import { NOT_FOUND } from "@/constants/meta"

export const metadata: Metadata = NOT_FOUND

const NotFound: FC = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-y-4 h-screen">
      <p className="text-3xl font-extrabold">404</p>
      <p className="mb-4 text-xl">Page Not Found!</p>
      <Button size="default" asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </main>
  )
}

export default NotFound
