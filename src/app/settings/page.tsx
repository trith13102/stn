import { FC } from "react"
import { Metadata } from "next"

import AppLayout from "@/components/layout/app-layout"
import LogoutButton from "@/app/settings/components/logout-button"

import { SETTINGS } from "@/constants/meta"

type Props = {}

export const metadata: Metadata = SETTINGS

const Settings: FC<Props> = (props) => {
  return (
    <AppLayout className="mx-auto" showHeaderNav showTopLoader>
      <p className="pt-20">
        <LogoutButton />
      </p>
    </AppLayout>
  )
}

export default Settings
