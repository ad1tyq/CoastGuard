"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Hazard occurrences line chart"

// ✅ Hazard data instead of devices
const chartData = [
  { month: "January", tsunami: 2, cyclone: 1, flood: 3 },
  { month: "February", tsunami: 1, cyclone: 2, flood: 2 },
  { month: "March", tsunami: 0, cyclone: 3, flood: 1 },
  { month: "April", tsunami: 3, cyclone: 1, flood: 2 },
  { month: "May", tsunami: 1, cyclone: 2, flood: 4 },
  { month: "June", tsunami: 2, cyclone: 3, flood: 2 },
]

// ✅ Update chartConfig to hazards
const chartConfig = {
  tsunami: {
    label: "Tsunami",
    color: "var(--chart-1)",
  },
  cyclone: {
    label: "Cyclone",
    color: "var(--chart-2)",
  },
  flood: {
    label: "Flood",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartLineMultiple() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hazard Occurrences</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {/* ✅ Hazard lines */}
            <Line
              dataKey="tsunami"
              type="monotone"
              stroke="var(--color-tsunami)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="cyclone"
              type="monotone"
              stroke="var(--color-cyclone)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="flood"
              type="monotone"
              stroke="var(--color-flood)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Hazard activity up 12% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Showing tsunami, cyclone & flood reports for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
