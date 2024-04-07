import { type ClientUploadedFileData } from "uploadthing/types"

export interface FileWithPreview extends File {
  id: string
  preview: string
}

export interface UploadedFile<T = unknown> extends ClientUploadedFileData<T> {}
