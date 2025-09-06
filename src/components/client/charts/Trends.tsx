"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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

export const description = "Domain trends bar chart"

// 🔥 Example dataset for Domain Trends (you can replace with real data)
const chartData = [
  { month: "January", tsunami: 45, flood: 32, cyclone: 60 },
  { month: "February", tsunami: 30, flood: 40, cyclone: 55 },
  { month: "March", tsunami: 55, flood: 20, cyclone: 75 },
  { month: "April", tsunami: 25, flood: 35, cyclone: 40 },
  { month: "May", tsunami: 65, flood: 50, cyclone: 80 },
  { month: "June", tsunami: 50, flood: 45, cyclone: 70 },
]

// 🎨 Custom colors for each domain
const chartConfig = {
  tsunami: {
    label: "Tsunami",
    color: "var(--chart-1)",
  },
  flood: {
    label: "Flood",
    color: "var(--chart-2)",
  },
  cyclone: {
    label: "Cyclone",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartBarDefault() {
  return (
    <Card className="text-left">
      <CardHeader className="items-start text-left">
        <CardTitle>Domain Trends</CardTitle>
        <CardDescription>
          Monthly occurrences & reports of disasters
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {/* 🔥 Stacked bar chart to compare tsunami, flood, cyclone per month */}
            <Bar dataKey="tsunami" stackId="a" fill="var(--color-tsunami)" radius={4} />
            <Bar dataKey="flood" stackId="a" fill="var(--color-flood)" radius={4} />
            <Bar dataKey="cyclone" stackId="a" fill="var(--color-cyclone)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm text-left">
        <div className="flex gap-2 leading-none font-medium">
          Disasters up by 12.3% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Tracking tsunami, flood & cyclone patterns (Jan - Jun 2024)
        </div>
      </CardFooter>
    </Card>
  )
}
