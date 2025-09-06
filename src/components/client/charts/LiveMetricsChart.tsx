// Enhanced LiveMetricsChart.tsx
"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
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

const chartData = [
  { time: "00:00", reports: 12, alerts: 3, responses: 8 },
  { time: "04:00", reports: 8, alerts: 1, responses: 7 },
  { time: "08:00", reports: 23, alerts: 5, responses: 18 },
  { time: "12:00", reports: 45, alerts: 12, responses: 38 },
  { time: "16:00", reports: 67, alerts: 8, responses: 52 },
  { time: "20:00", reports: 34, alerts: 4, responses: 28 },
]

const chartConfig = {
  reports: {
    label: "Reports",
    color: "var(--chart-1)",
  },
  alerts: {
    label: "Alerts",
    color: "var(--chart-2)",
  },
  responses: {
    label: "Responses",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function LiveMetricsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          Live Activity Monitoring
        </CardTitle>
        <CardDescription>Real-time coastal hazard activity over the last 24 hours</CardDescription>
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
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="responses"
              type="monotone"
              fill="var(--color-responses)"
              fillOpacity={0.4}
              stroke="var(--color-responses)"
              stackId="a"
            />
            <Area
              dataKey="reports"
              type="monotone"
              fill="var(--color-reports)"
              fillOpacity={0.4}
              stroke="var(--color-reports)"
              stackId="a"
            />
            <Area
              dataKey="alerts"
              type="monotone"
              fill="var(--color-alerts)"
              fillOpacity={0.4}
              stroke="var(--color-alerts)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Response efficiency up 23% today <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground leading-none">
              Showing live coastal hazard management metrics
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}