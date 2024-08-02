"use client"

import { FC, useState, useEffect } from "react"
import { useFormStatus } from 'react-dom'
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

import AppLogo from "@/components/app/AppLogo"

import { AppTheme } from "@/core/types"

import { loginFormSchema } from "@/app/login/schemas/login.schema"


type Props = {}

const LoginForm: FC<Props> = (props) => {
  const { theme } = useTheme()
  const [currTheme, setCurrTheme] = useState<AppTheme>("light")
  
  const { pending: loading } = useFormStatus()

  const form = useForm<zod.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const handleSubmit = async (
    values: zod.infer<typeof loginFormSchema>
  ): Promise<void> => {
    const data = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    const res = await data.json();
    console.log(res);
  }

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
            onSubmit={form.handleSubmit(handleSubmit)}
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
                      className={`!ring-[none]${
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
                    <Input
                      className={`!ring-[none]${
                        form.getFieldState("password").error
                          ? "  border-2 border-red-500"
                          : ""
                      }`}
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit" aria-disabled={loading}>
              Login
            </Button>
            <div className="text-center">
              <Link className="text-sm text-blue-500" href="/login/forget-password">
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
