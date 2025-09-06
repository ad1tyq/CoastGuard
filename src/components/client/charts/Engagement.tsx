"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

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

export const description = "Community engagement bar chart"

const chartData = [
  { category: "Tsunami", engagement: 120 },
  { category: "Flood", engagement: 180 },
  { category: "Cyclone", engagement: 150 },
]

const chartConfig = {
  engagement: {
    label: "Engagement",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartBarHorizontal() {
  return (
    <Card className="text-left">
      <CardHeader className="items-start text-left">
        <CardTitle>Community Engagement</CardTitle>
        <CardDescription>
          Engagement across disaster management areas
        </CardDescription>
      </CardHeader>
      <CardContent className="text-left">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            barSize={20}
            margin={{ left: 0, right: 20 }}
            height={250}
          >
            <XAxis type="number" dataKey="engagement" hide />
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={100}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="engagement" fill="var(--color-engagement)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm text-left">
        <div className="flex gap-2 leading-none font-medium">
          Engagement up by 8.4% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing citizen involvement across tsunami, flood & cyclone management
        </div>
      </CardFooter>
    </Card>
  )
}
