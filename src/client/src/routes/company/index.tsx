import Card from "@/components/Card";
import { Outlet, useParams } from "react-router-dom";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
  Label,
} from "recharts";
const data = [
  { name: "Январь" },
  { name: "Февраль" },
  { name: "Март" },
  { name: "Апрель" },
  { name: "Май" },
  { name: "Июнь" },
  { name: "Июль" },
  { name: "Август" },
  { name: "Сентябрь" },
  { name: "Октябрь" },
  { name: "Ноябрь" },
  { name: "Декабрь" },
];
const formatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",

  maximumFractionDigits: 0, // (causes 2500.99 to be printed as 2,501 R)
});
const companyData = data.map((i) => ({
  ...i,
  Прибыль: Math.floor(Math.random() * 900000) + 100000,
}));
function Company() {
  const params = useParams();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-2xl font-bold">Компания #{params.inn}</h1>
        <div className="flex flex-wrap w-full gap-4 ">
          <Card
            title="Today’s Sale"
            value={1200384}
            difference={{ value: "-20%", positive: false }}
          />
          <Card
            title="Total Sales"
            value={43723384}
            difference={{ value: "+10%", positive: true }}
          />
          <div className="w-11/12 p-4 mr-auto bg-white border rounded-lg shadow-inner">
            <h1 className="text-2xl font-bold">
              Прибыль компании {params.inn}
            </h1>
            <AreaChartCompany />
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}

function AreaChartCompany() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        width={1100}
        height={250}
        data={companyData}
        margin={{ top: 0, right: 60, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="hsla(226, 100%, 97%, 0.5)"
              stopOpacity={1}
            />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" axisLine={false} tickLine={false}></XAxis>
        <YAxis tick={false} axisLine={false} />
        <CartesianGrid
          strokeDasharray="0"
          horizontalCoordinatesGenerator={(props) =>
            generateHorizontalLines(props.height, 40)
          }
          vertical={false}
        />
        <Tooltip
          wrapperStyle={{ boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}
          formatter={(value, name, props) => [
            formatter.format(+value).replace(/\s(?=\d)/g, ","),
            name,
          ]}
        />
        <Area
          type="monotone"
          dataKey="Прибыль"
          stroke="hsla(243, 75%, 59%, 1)"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function generateHorizontalLines(height: number, offset: number) {
  const points = [];
  height -= 30;
  while (height > 0) {
    height -= offset;
    points.push(height);
  }
  return points;
}

export default Company;
