import { NextRequest, NextResponse } from "next/server"

import { PagePath } from "@/core/types"
import { logout } from "@/app/actions/auth"

import PAGE_PATHS from "@/constants/pages"

export const middleware = async (request: NextRequest) => {
  try {
    const session = request.cookies.get("session")?.value
    const pathname = request.nextUrl.pathname

    const isExistedPage = PAGE_PATHS.some(
      (pagePath: PagePath) => `/${pagePath.path}` === pathname
    )

    if (!isExistedPage) {
      return NextResponse.next()
    }

    const isLoginPage = pathname === "/login"

    if (!session && !isLoginPage) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    if (session && isLoginPage) {
      return NextResponse.redirect(new URL("/", request.url))
    }

    return NextResponse.next()
  } catch (error) {
    return await logout()
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}
