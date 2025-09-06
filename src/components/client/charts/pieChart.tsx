"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

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

export const description = "Pie chart showing disaster likelihood"

const chartData = [
  { disaster: "Flood", likelihood: 320, fill: "var(--color-flood)" },
  { disaster: "Tsunami", likelihood: 180, fill: "var(--color-tsunami)" },
  { disaster: "Cyclone", likelihood: 260, fill: "var(--color-cyclone)" },
]

const chartConfig = {
  likelihood: {
    label: "Likelihood",
  },
  flood: {
    label: "Flood",
    color: "var(--chart-1)",
  },
  tsunami: {
    label: "Tsunami",
    color: "var(--chart-2)",
  },
  cyclone: {
    label: "Cyclone",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartPieLabel() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Most Likely Disaster</CardTitle>
        <CardDescription>Flood, Tsunami & Cyclone likelihood</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="likelihood"
              label
              nameKey="disaster"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Floods remain the most likely disaster{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Based on historical & predictive analysis
        </div>
      </CardFooter>
    </Card>
  )
}
