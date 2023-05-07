import Chart from "react-google-charts";

type AreaChartProps = {
  options: object;
  data: (string | number)[][];
};

function AreaChart({ options, data }: AreaChartProps) {
  return (
    <Chart
      chartType="AreaChart"
      width="900px"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default AreaChart;
