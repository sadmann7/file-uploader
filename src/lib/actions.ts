"use server"

export async function uploadFiles({ files }: { files: File[] }) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return files
}
