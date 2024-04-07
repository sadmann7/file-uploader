"use client"

import * as React from "react"
import Image from "next/image"
import type { UploadedFile } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { generateReactHelpers } from "@uploadthing/react/hooks"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { FileUploader } from "@/components/file-uploader"
import { type OurFileRouter } from "@/app/api/uploadthing/core"

const { useUploadThing } = generateReactHelpers<OurFileRouter>()

const schema = z.object({
  images: z.array(z.unknown()).optional().default([]),
})

type Schema = z.infer<typeof schema>

export function HookForm() {
  const [loading, setLoading] = React.useState(false)
  const [uploadedFiles, setUploadedFiles] = React.useState<
    UploadedFile[] | null
  >([])

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      images: [],
    },
  })

  const [progress, setProgress] = React.useState(0)
  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onUploadProgress: setProgress,
  })

  console.log({ uploadedFiles, progress })

  function onSubmit(input: Schema) {
    setLoading(true)

    // toast.promise(
    //   updateVehicleListing({
    //     id: vehicle.id,
    //     dealershipId,
    //     title: input.title,
    //     slug: input.slug,
    //     description: input.description,
    //   }),
    //   {
    //     loading: "Saving...",
    //     success: () => {
    //       setLoading(false)
    //       return "Vehicle listing updated"
    //     },
    //     error: (err) => {
    //       setLoading(false)
    //       return getErrorMessage(err)
    //     },
    //   }
    // )
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
            <FormItem className="w-full">
              <FormLabel>Images</FormLabel>
              <FormControl>
                <FileUploader
                  onValueChange={field.onChange}
                  maxFiles={Infinity}
                  maxSize={1 * 1024 * 1024}
                  // onUpload={async (files) => {
                  //   const uploadedFiles = await startUpload(files).then(
                  //     (res) => {
                  //       const formattedImages = res?.map((image) => ({
                  //         id: image.key,
                  //         name: image.key.split("_")[1] ?? image.key,
                  //         url: image.url,
                  //       }))
                  //       return formattedImages ?? null
                  //     }
                  //   )
                  //   setUploadedFiles(uploadedFiles)
                  // }}
                />
              </FormControl>
              <FormMessage />
              {uploadedFiles && uploadedFiles.length > 0 && (
                <ScrollArea>
                  <div className="flex w-max space-x-2.5 py-4">
                    {uploadedFiles.map((file) => (
                      <div
                        key={file.id}
                        className="relative aspect-square size-20 overflow-hidden rounded-lg"
                      >
                        <Image
                          src={file.url}
                          alt={file.name}
                          fill
                          sizes="100vw"
                          loading="lazy"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              )}
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
