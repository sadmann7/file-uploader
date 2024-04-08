"use client"

import { useUploadFile } from "@/hooks/use-upload-file"
import { FileUploader } from "@/components/file-uploader"

import { UploadedFilesCard } from "./uploaded-files-card"

export function BasicUploaderDemo() {
  const { uploadFiles, progresses, uploadedFiles, isUploading } = useUploadFile(
    "imageUploader",
    { defaultUploadedFiles: [] }
  )

  return (
    <div className="space-y-6">
      <FileUploader
        maxFiles={4}
        maxSize={4 * 1024 * 1024}
        progresses={progresses}
        onUpload={uploadFiles}
        disabled={isUploading}
      />
      <UploadedFilesCard uploadedFiles={uploadedFiles} />
    </div>
  )
}
