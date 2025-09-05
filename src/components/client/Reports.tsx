"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form"

// 1. Define schema with zod (validation)
const formSchema = z.object({
  description: z.string(),
})

export default function ReportForm() {
  // 2. Initialize react-hook-form with schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
    },
  })

  // 3. Handle submit
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Submitted ✅", values)
  }

  return (
    <div className="w-[40rem] h-[15rem] bg-gray-50 border flex py-10 rounded-xl flex-col justify-center items-center">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Email */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-[35rem] flex flex-col justify-center items-center">
              <FormLabel className="text-2xl font-semibold">Report Hazard</FormLabel>
              <FormControl>
                <Input className="w-[35rem] my-3 bg-white" placeholder="Describe The Hazard..." {...field} />
              </FormControl>
              {/* Submit Button */}
              <Button type="submit" className="bg-blue-400 hover:bg-blue-500 cursor-pointer rounded-lg w-[70%]">Submit Feedback</Button>
            </FormItem>
          )}
        />

      </form>
    </Form>
    </div>
  )
}
