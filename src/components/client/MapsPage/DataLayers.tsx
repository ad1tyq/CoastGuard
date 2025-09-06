"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
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
import { useLegend } from "@/contexts/LegendFilterContext"

// DataLayersSort.tsx
const items = [
  { id: "all", label: "All" },
  { id: "cyclone", label: "Cyclone" }, // ✅ match key with disaster.type
  { id: "flood", label: "Flood" },
  { id: "tsunami", label: "Tsunami" },
] as const


const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

export function DataLayersSort() {
  const { Legend, setLegend } = useLegend()

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
                                const newValues = checked ? ["all"] : []  // ✅ only "all", nothing else
                                field.onChange(newValues)
                                setLegend(newValues)
                              } else {
                                const newValues = checked
                                  ? [...field.value.filter((v) => v !== "all"), item.id]
                                  : field.value.filter((v) => v !== item.id)

                                field.onChange(newValues)
                                setLegend(newValues)
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

        {/* 👀 Debug - show live selected state */}
        <div className="text-sm bg-white rounded-xl text-center p-3 text-gray-700">
          <b>Selected:</b> {JSON.stringify(Legend)}
        </div>
      </form>
    </Form>
  )
}
