declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_URL: string

    NEXT_PUBLIC_AUTHOR_NAME: string
    NEXT_PUBLIC_AUTHOR_EMAIL: string
    NEXT_PUBLIC_AUTHOR_GITHUB: string
    NEXT_PUBLIC_AUTHOR_LINKEDIN: string
    NEXT_PUBLIC_AUTHOR_WHATSAPP: string

    GITHUB_TOKEN: string
  }
}