import * as React from "react"
import { type UseUploadthingProps as UseUploadFileProps } from "@uploadthing/react"

import { useUploadThing as useUploadFile } from "@/lib/uploadthing"
import { type OurFileRouter } from "@/app/api/uploadthing/core"

interface UseUploadthingProps
  extends UseUploadFileProps<OurFileRouter, keyof OurFileRouter> {}

export function useUploadThing(
  endpoint: keyof OurFileRouter,
  props: UseUploadthingProps = {}
) {
  const [progress, setProgress] = React.useState(0)
  const { startUpload, isUploading } = useUploadFile(endpoint, {
    onUploadProgress: () => {
      setProgress(progress)
    },
    ...props,
  })

  return {
    startUpload,
    isUploading,
    progress,
  }
}
