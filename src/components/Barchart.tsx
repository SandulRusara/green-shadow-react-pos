
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 110 },
  { month: "jule", desktop: 214, mobile: 90 },
  { month: "Aug", desktop: 214, mobile: 122 },
  { month: "Sep", desktop: 214, mobile: 167 },
  { month: "Oct", desktop: 214, mobile: 140 },
  { month: "Nov", desktop: 214, mobile: 197 },
  { month: "Dec", desktop: 214, mobile: 199 },
];

export function Barchart() {
  function ChartTooltip({ content }) {
    return <div className="tooltip">{content}</div>;
  }

  function ChartTooltipContent({ indicator }) {
    return (
      <div className={`tooltip-content tooltip-${indicator}`}>
        <span>Tooltip Content</span>
      </div>
    );
  }
  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full">
      <div className="bg-white rounded-lg shadow-lg p-6 flex-1 lg:w-1/2">
        <p className="text-sm text-gray-600 mb-6">January - Desember 2025</p>
        <div className="overflow-x-auto">
          <BarChart width={1800} height={400} data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="mobile" fill="yellow" radius={4} />
          </BarChart>
        </div>
      </div>
    </div>
  );
}
