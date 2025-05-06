"use client";

import { Bar, BarChart as RechartsBarChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartData } from "@/interfaces/ChartData";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

interface BarChartProps {
  data: ChartData;
}

const BarChart = ({ data }: BarChartProps) => {
  const chartConfig = {
    value: {
      label: "Quantidade",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;
  return (
    <>
      <ChartContainer config={chartConfig}>
        <RechartsBarChart
          accessibilityLayer
          data={data}
          layout="vertical"
          margin={{
            left: -20,
          }}
        >
          <XAxis type="number" dataKey="value" hide />
          <YAxis
            dataKey="label"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value}
            width={200}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="value" fill="var(--color-value)" radius={5} />
        </RechartsBarChart>
      </ChartContainer>
    </>
  );
};

export default BarChart;
