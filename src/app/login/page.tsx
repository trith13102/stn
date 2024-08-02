import { FC } from "react"
import { Metadata } from "next"

import { Separator } from "@/components/ui/separator"

import LoginForm from "@/app/login/components/login-form"
import ThemeSwitcher from "@/app/login/components/theme-switcher"

import { LOGIN } from "@/constants/meta"

export const metadata: Metadata = LOGIN

type Props = {}

const Login: FC<Props> = async (props) => {
  return (
    <main className="flex flex-col items-center justify-center gap-y-2 h-screen">
      <section className="flex flex-col gap-y-4 w-full md:w-3/4 lg:w-[450px] px-3">
        <LoginForm />
        <Separator />
      </section>
      <section>
        <ThemeSwitcher />
      </section>
    </main>
  )
}

export default Login
