"use client"

import * as React from "react"
import type { UploadedFile } from "@/types"
import { generateReactHelpers } from "@uploadthing/react/hooks"

import { FileUploader } from "@/components/file-uploader"
import { type OurFileRouter } from "@/app/api/uploadthing/core"

const { useUploadThing } = generateReactHelpers<OurFileRouter>()

export function BasicUploaderDemo() {
  const [uploadedFiles, setUploadedFiles] = React.useState<
    UploadedFile[] | null
  >([])
  const [progress, setProgress] = React.useState(0)
  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onUploadProgress: setProgress,
  })

  console.log({ uploadedFiles, progress })

  return (
    <FileUploader
      maxFiles={4}
      maxSize={1 * 1024 * 1024}
      onUpload={async (files) => {
        const uploadedFiles = await startUpload(files).then((res) => {
          const formattedImages = res?.map((image) => ({
            id: image.key,
            name: image.key.split("_")[1] ?? image.key,
            url: image.url,
          }))
          return formattedImages ?? null
        })
        setUploadedFiles(uploadedFiles)
      }}
      disabled={isUploading}
    />
  )
}
