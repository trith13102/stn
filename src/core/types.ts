export type AppTheme = "light" | "dark" | "system"

export type CommonProps = {
  params: {
    locale: string
  }
}

export type PagePath = {
  title: string
  label?: string
  showOnMenu?: boolean
  path: string
}

export type User = {
  email: string
  password?: string
  username?: string
  fullName?: string
  birthDate?: string
  address?: string
}
