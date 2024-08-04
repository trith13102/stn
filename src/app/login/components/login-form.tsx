"use client"

import { FC, useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { z as zod } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Loader2 } from "lucide-react"

import AppLogo from "@/components/app/app-logo"

import { AppTheme } from "@/core/types"

import { loginFormSchema } from "@/app/login/schemas/login.schema"

import { login } from "@/app/actions/auth"

type Props = {}

const LoginForm: FC<Props> = (props) => {
  const { theme } = useTheme()
  const [currTheme, setCurrTheme] = useState<AppTheme>("light")
  const [showPwd, setShowPwd] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const handleShowPwd = (): void => setShowPwd((curr) => !curr)

  const form = useForm<zod.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  useEffect(() => {
    setCurrTheme(theme as AppTheme)
  }, [theme])

  return (
    <Card>
      <CardHeader>
        <div className="flex gap-x-2 justify-center pt-4">
          <CardTitle>Login to</CardTitle>
          <AppLogo theme={currTheme} />
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            action={login}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={`${
                      form.getFieldState("email").error
                        ? " text-red-500"
                        : " text-black dark:text-white"
                    }`}
                  >
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={`text-base lg:text-sm !ring-[none]${
                        form.getFieldState("email").error
                          ? "  border-2 border-red-500"
                          : ""
                      }`}
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={`${
                      form.getFieldState("password").error
                        ? " text-red-500"
                        : " text-black dark:text-white"
                    }`}
                  >
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className={`text-base lg:text-sm !ring-[none]${
                          form.getFieldState("password").error
                            ? "  border-2 border-red-500"
                            : ""
                        }`}
                        type={`${showPwd ? "text" : "password"}`}
                        placeholder="Password"
                        {...field}
                      />
                      <Button
                        onClick={handleShowPwd}
                        className="absolute top-0 right-3 flex justify-center p-0 hover:bg-[unset]"
                        type="button"
                        variant="ghost"
                      >
                        <Eye
                          className={`w-[1rem] h-[1rem]${
                            showPwd ? " hidden" : ""
                          }`}
                        />
                        <EyeOff
                          className={`w-[1rem] h-[1rem]${
                            showPwd ? "" : " hidden"
                          }`}
                        />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <Button
              className={`w-full${loading ? " hidden" : ""}`}
              type="submit"
            >
              Login
            </Button>
            <Button
              className={`w-full${loading ? "" : " hidden"}`}
              type="submit"
              disabled
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
            <div className="text-center">
              <Link
                className="text-sm text-blue-500"
                href="/login/forget-password"
              >
                Forgot your password?
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default LoginForm
