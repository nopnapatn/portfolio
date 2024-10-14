import { useTheme } from "next-themes"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useConfig } from "@/hooks/use-config"
import { baseColors } from "@/registry/registry-base-colors"

const data = [
  {
    revenue: 1040,
    subscription: 240
  },
  {
    revenue: 1440,
    subscription: 300
  },
  {
    revenue: 940,
    subscription: 200
  },
  {
    revenue: 820,
    subscription: 278
  },
  {
    revenue: 700,
    subscription: 189
  },
  {
    revenue: 960,
    subscription: 239
  },
  {
    revenue: 1124,
    subscription: 278
  },
  {
    revenue: 2647,
    subscription: 189
  }
]

export function CardsStats() {
  const { theme: mode } = useTheme()
  const [config] = useConfig()

  const baseColor = baseColors.find(
    (baseColor) => baseColor.name === config.theme
  )

  // Calculate total revenue
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0)

  // Calculate revenue change percentage
  const lastMonthRevenue = data[data.length - 2].revenue
  const currentMonthRevenue = data[data.length - 1].revenue
  const revenueChangePercentage =
    ((currentMonthRevenue - lastMonthRevenue) / lastMonthRevenue) * 100

  // Calculate total subscriptions
  const totalSubscriptions = data.reduce(
    (sum, item) => sum + item.subscription,
    0
  )

  // Calculate subscription change percentage
  const lastMonthSubscriptions = data[data.length - 2].subscription
  const currentMonthSubscriptions = data[data.length - 1].subscription
  const subscriptionChangePercentage =
    ((currentMonthSubscriptions - lastMonthSubscriptions) /
      lastMonthSubscriptions) *
    100

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-normal">Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">
            {revenueChangePercentage > 0 ? "+" : ""}
            {revenueChangePercentage.toFixed(1)}% from last month
          </p>
          <div className="h-[80px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 10,
                  left: 10,
                  bottom: 0
                }}
              >
                <Line
                  type="monotone"
                  strokeWidth={2}
                  dataKey="revenue"
                  activeDot={{
                    r: 6,
                    style: { fill: "var(--theme-primary)", opacity: 0.25 }
                  }}
                  style={
                    {
                      stroke: "var(--theme-primary)",
                      "--theme-primary": `hsl(${
                        baseColor?.cssVars[mode === "dark" ? "dark" : "light"]
                          .primary
                      })`
                    } as React.CSSProperties
                  }
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-normal">Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{totalSubscriptions}</div>
          <p className="text-xs text-muted-foreground">
            {subscriptionChangePercentage > 0 ? "+" : ""}
            {subscriptionChangePercentage.toFixed(1)}% from last month
          </p>
          <div className="mt-4 h-[80px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <Bar
                  dataKey="subscription"
                  style={
                    {
                      fill: "var(--theme-primary)",
                      opacity: 1,
                      "--theme-primary": `hsl(${
                        baseColor?.cssVars[mode === "dark" ? "dark" : "light"]
                          .primary
                      })`
                    } as React.CSSProperties
                  }
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
