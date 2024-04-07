import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { BasicUploaderDemo } from "./basic-uploader-demo"
import { HookForm } from "./hook-form"

export function VariantTabs() {
  return (
    <Tabs defaultValue="basic" className="w-full overflow-hidden">
      <TabsList>
        <TabsTrigger value="basic">Basic</TabsTrigger>
        <TabsTrigger value="hook" disabled>
          React hook form
        </TabsTrigger>
        <TabsTrigger value="action" disabled>
          Server action
        </TabsTrigger>
      </TabsList>
      <TabsContent value="basic" className="mt-6">
        <BasicUploaderDemo />
      </TabsContent>
      <TabsContent value="hook" className="mt-6">
        <HookForm />
      </TabsContent>
      <TabsContent value="action" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
