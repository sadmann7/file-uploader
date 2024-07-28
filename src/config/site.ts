import { env } from "@/env"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Uploader",
  description: "File uploader built with shadcn-ui, and react-dropzone",
  url:
    env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://uploader.sadmn.com",
  links: { github: "https://github.com/sadmann7/file-uploader" },
}
