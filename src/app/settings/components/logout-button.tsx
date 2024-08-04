"use client"

import { FC } from "react"
import { Button } from "@/components/ui/button"
import { logout } from "@/app/actions/auth"

type Props = {}

const LogoutButton: FC<Props> = (props) => {
  const handleLogout = async (): Promise<void> => {
    await logout()
  }
  return (
    <Button onClick={handleLogout} size="sm">
      Logout
    </Button>
  )
}

export default LogoutButton
