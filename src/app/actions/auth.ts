"use server"

import { JWTPayload, SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

import { DAY_MS } from "@/constants/common"

const secretKey = process.env.SECRET_KEY
const key = new TextEncoder().encode(secretKey)

const expireDuration = process.env.EXPIRED_DURATION
  ? parseInt(process.env.EXPIRED_DURATION)
  : 15

export const encrypt = async (payload: any): Promise<string> => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${expireDuration} days from now`)
    .sign(key)
}

export const decrypt = async (input: string): Promise<JWTPayload> => {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  })
  return payload
}

export const login = async (formData: FormData): Promise<void> => {
  // Verify credentials && get the user
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  }

  // Create the session
  const expires = new Date(Date.now() + expireDuration * DAY_MS)
  const session = await encrypt({ user, expires })

  // Save the session in a cookie
  cookies().set("session", session, { expires, httpOnly: true })
  redirect("/")
}

export const logout = async (): Promise<void> => {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) })
  redirect("/")
}

export const getSession = async (): Promise<JWTPayload | null> => {
  const session = cookies().get("session")?.value
  if (!session) return null
  return await decrypt(session)
}

export const updateSession = async (request: NextRequest) => {
  const session = request.cookies.get("session")?.value
  if (!session) return

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session)
  parsed.expires = new Date(Date.now() + expireDuration * DAY_MS)
  const res = NextResponse.next()
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: <Date>parsed.expires,
    sameSite: "lax",
  })
  return res
}
