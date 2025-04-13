import { env } from "@/env";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "File upload",
  description: "File upload component built with shadcn/ui, and Radix UI.",
  url:
    env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://uploader.sadmn.com",
  links: {
    github: "https://github.com/sadmann7/file-uploader",
    docs: "https://diceui.com/docs/components/file-upload",
  },
};
