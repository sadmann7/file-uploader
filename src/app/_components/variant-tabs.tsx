import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { BasicUploaderDemo } from "./basic-uploader-demo"
import { DialogUploaderDemo } from "./dialog-uploader-demo"
import { ReactHookFormDemo } from "./react-hook-form-demo"

export function VariantTabs() {
  return (
    <Tabs defaultValue="basic" className="w-full overflow-hidden">
      <TabsList>
        <TabsTrigger value="basic">Basic</TabsTrigger>
        <TabsTrigger value="hook">React hook form</TabsTrigger>
        <TabsTrigger value="dialog">Dialog</TabsTrigger>
      </TabsList>
      <TabsContent value="basic" className="mt-6">
        <BasicUploaderDemo />
      </TabsContent>
      <TabsContent value="hook" className="mt-6">
        <ReactHookFormDemo />
      </TabsContent>
      <TabsContent value="dialog" className="mt-6">
        <DialogUploaderDemo />
      </TabsContent>
    </Tabs>
  )
}
