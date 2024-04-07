export interface FileWithPreview extends File {
  id: string
  preview: string
}

export interface UploadedFile {
  id: string
  name: string
  url: string
}
