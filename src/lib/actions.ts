"use server";

export async function uploadThings(fd: FormData) {
  const files = fd.getAll("files") as File[];

  console.log({ files });

  return files;
}
