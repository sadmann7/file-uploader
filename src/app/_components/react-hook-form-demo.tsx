"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { getErrorMessage } from "@/lib/handle-error"
import { useFileUpload } from "@/hooks/use-file-upload"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { FileUploader } from "@/components/file-uploader"

import { UploadedFilesCard } from "./uploaded-files-card"

const schema = z.object({
  images: z.array(z.unknown()).optional().default([]),
})

type Schema = z.infer<typeof schema>

export function ReactHookFormDemo() {
  const [loading, setLoading] = React.useState(false)
  const { uploadFiles, progresses, uploadedFiles, isUploading } = useFileUpload(
    "imageUploader",
    { defaultUploadedFiles: [] }
  )
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      images: [],
    },
  })

  function onSubmit(input: Schema) {
    setLoading(true)

    toast.promise(uploadFiles(input.images as File[]), {
      loading: "Uploading images...",
      success: "Images uploaded successfully",
      error: (err) => getErrorMessage(err),
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <div className="space-y-6">
              <FormItem className="w-full">
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <FileUploader
                    onValueChange={field.onChange}
                    maxFiles={4}
                    maxSize={4 * 1024 * 1024}
                    progresses={progresses}
                    disabled={isUploading}
                  />
                </FormControl>
                <FormDescription>
                  Upload up to 4 images. Each image should be less than 4MB.
                </FormDescription>
                <FormMessage />
              </FormItem>
              {(uploadedFiles?.length ?? 0) > 0 && (
                <UploadedFilesCard uploadedFiles={uploadedFiles ?? []} />
              )}
            </div>
          )}
        />
        <Button className="w-fit" disabled={loading}>
          Save
        </Button>
      </form>
    </Form>
  )
}
