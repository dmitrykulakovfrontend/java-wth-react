import Card from "@/components/Card";
import { Outlet, useParams } from "react-router-dom";

function Company() {
  const params = useParams();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-2xl font-bold">Компания #{params.inn}</h1>
        <div className="flex flex-wrap w-full gap-4">
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
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default Company;
