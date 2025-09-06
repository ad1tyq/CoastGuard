// Enhanced ReliefWalletAnalytics.tsx
"use client"

import { TrendingUp } from "lucide-react"
import { Line, LineChart, XAxis, YAxis } from "recharts"
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
    { month: "Jan", payouts: 125000 },
    { month: "Feb", payouts: 187000 },
    { month: "Mar", payouts: 234000 },
    { month: "Apr", payouts: 156000 },
    { month: "May", payouts: 298000 },
    { month: "Jun", payouts: 445000 },
]

const chartConfig = {
    payouts: {
        label: "Payouts (₹)",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

export function ReliefWalletAnalytics() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Relief Wallet Payouts</CardTitle>
                <CardDescription>Monthly automatic relief distribution</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => `₹${value / 1000}k`}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent
                                formatter={(value) => [`₹${value.toLocaleString()}`, "Relief Distributed"]}
                            />}
                        />
                        <Line
                            dataKey="payouts"
                            type="monotone"
                            stroke="var(--color-payouts)"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Relief distribution up 89% this quarter <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Average payout time: 2.3 minutes
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}