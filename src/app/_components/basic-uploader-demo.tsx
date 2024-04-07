"use client"

import Image from "next/image"

import { useFileUpload } from "@/hooks/use-file-upload"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { FileUploader } from "@/components/file-uploader"

export function BasicUploaderDemo() {
  const { uploadFiles, progresses, uploadedFiles, isUploading } = useFileUpload(
    "imageUploader",
    { defaultUploadedFiles: [] }
  )

  return (
    <div className="flex flex-col space-y-6">
      <FileUploader
        maxFiles={4}
        maxSize={4 * 1024 * 1024}
        progresses={progresses}
        onUpload={uploadFiles}
        disabled={isUploading}
      />
      <Card>
        <CardHeader>
          <CardTitle>Uploaded files</CardTitle>
          <CardDescription>View the uploaded files here</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="py-4">
            <div className="flex w-max space-x-2.5">
              {Array.from({ length: 11 }).map(() =>
                uploadedFiles?.slice(0, 1).map((file) => (
                  <div key={file.key} className="relative aspect-video w-64">
                    <Image
                      src={file.url}
                      alt={file.name}
                      fill
                      sizes="(min-width: 640px) 640px, 100vw"
                      loading="lazy"
                      className="rounded-md object-cover"
                    />
                  </div>
                ))
              )}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
