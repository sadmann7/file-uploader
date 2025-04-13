import { Shell } from "@/components/shell";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileUploadDemo } from "./components/file-upload-demo";
import { FileUploadFormDemo } from "./components/file-upload-form-demo";
import { FileUploadUploadThingDemo } from "./components/file-upload-uploadthing-demo";

export default function IndexPage() {
  return (
    <Shell className="max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Basic</CardTitle>
          <CardDescription>Basic controlled file upload.</CardDescription>
        </CardHeader>
        <CardContent>
          <FileUploadDemo />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>React hook form</CardTitle>
          <CardDescription>
            File upload integration with React Hook Form.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FileUploadFormDemo />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>uploadthing</CardTitle>
          <CardDescription>File upload using uploadthing.</CardDescription>
        </CardHeader>
        <CardContent>
          <FileUploadUploadThingDemo />
        </CardContent>
      </Card>
    </Shell>
  );
}
