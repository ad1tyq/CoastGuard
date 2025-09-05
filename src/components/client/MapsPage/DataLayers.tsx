"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const items = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "temperature",
    label: "Temperature",
  },
  {
    id: "wave height",
    label: "Wave Height",
  },
  {
    id: "wind speed",
    label: "Wind Speed",
  },
  {
    id: "current direction",
    label: "Current Direction",
  },
] as const

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

export function DataLayersSort() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["all"], // ✅ "All" is checked by default
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base font-semibold">Data Layers</FormLabel>
                <FormDescription>
                  Select the features you want to display in the maps.
                </FormDescription>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-center gap-2"
                      >
                        <FormControl>
                          <Checkbox
                            className="border-black border"
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              if (item.id === "all") {
                                // Master toggle
                                return checked
                                  ? field.onChange(items.map((i) => i.id)) // select all
                                  : field.onChange([]) // unselect all
                              } else {
                                // Normal toggle
                                const newValues = checked
                                  ? [...field.value, item.id]
                                  : field.value.filter((v) => v !== item.id)

                                // If "All" is selected but user unchecks something -> remove "All"
                                if (
                                  newValues.includes("all") &&
                                  !checked
                                ) {
                                  field.onChange(
                                    newValues.filter((v) => v !== "all")
                                  )
                                } else {
                                  field.onChange(newValues)
                                }
                              }
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
