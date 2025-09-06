// Enhanced HazardPredictionChart.tsx
"use client"

import { AlertTriangle } from "lucide-react"
import { Area, AreaChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { day: "Today", risk: 25 },
  { day: "Tomorrow", risk: 45 },
  { day: "Day 3", risk: 67 },
  { day: "Day 4", risk: 89 },
  { day: "Day 5", risk: 76 },
  { day: "Day 6", risk: 54 },
  { day: "Day 7", risk: 32 },
]

const chartConfig = {
  risk: {
    label: "Risk Level (%)",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function HazardPredictionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-orange-500" />
          AI Risk Prediction
        </CardTitle>
        <CardDescription>7-day coastal hazard forecast</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent 
                formatter={(value) => [`${value}%`, "Risk Level"]}
              />}
            />
            <Area
              dataKey="risk"
              type="monotone"
              fill="var(--color-risk)"
              fillOpacity={0.4}
              stroke="var(--color-risk)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardContent className="pt-0">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>High Risk (Day 4): Storm surge predicted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span>Medium Risk (Day 3-5): Elevated wave activity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Low Risk (Today, Day 6-7): Normal conditions</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}