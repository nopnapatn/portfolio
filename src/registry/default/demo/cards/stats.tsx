import { useTheme } from "next-themes"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useConfig } from "@/hooks/use-config"
import { baseColors } from "@/registry/registry-base-colors"

const data = [
  { contributions: 50, visits: 100 },
  { contributions: 37, visits: 80 },
  { contributions: 70, visits: 120 },
  { contributions: 26, visits: 90 },
  { contributions: 60, visits: 110 },
  { contributions: 42, visits: 95 },
  { contributions: 84, visits: 130 },
  { contributions: 54, visits: 105 },
  { contributions: 93, visits: 140 }
]

export function CardsStats() {
  const { theme: mode } = useTheme()
  const [config] = useConfig()

  const baseColor = baseColors.find(
    (baseColor) => baseColor.name === config.theme
  )

  const totalContributions = data.reduce(
    (sum, item) => sum + item.contributions,
    0
  )

  const lastMonthContributions = data[data.length - 2].contributions
  const currentMonthContributions = data[data.length - 1].contributions
  const contributionsChangePercentage =
    ((currentMonthContributions - lastMonthContributions) /
      lastMonthContributions) *
    100

  const totalVisits = data.reduce((sum, item) => sum + item.visits, 0)

  const lastMonthVisits = data[data.length - 2].visits
  const currentMonthVisits = data[data.length - 1].visits
  const visitsChangePercentage =
    ((currentMonthVisits - lastMonthVisits) / lastMonthVisits) * 100

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-normal">
            Total Contributions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalContributions}</div>
          <p className="text-xs text-muted-foreground">
            {contributionsChangePercentage > 0 ? "+" : ""}
            {contributionsChangePercentage.toFixed(1)}% from last month
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
                  dataKey="contributions"
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
          <CardTitle className="text-base font-normal">
            Website Visits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalVisits}</div>
          <p className="text-xs text-muted-foreground">
            {visitsChangePercentage > 0 ? "+" : ""}
            {visitsChangePercentage.toFixed(1)}% from last month
          </p>
          <div className="mt-4 h-[80px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <Bar
                  dataKey="visits"
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
