import { Outlet, useParams } from "react-router-dom";

function Company() {
  const params = useParams();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Company #{params.inn}</h1>
        <Outlet />
      </div>
    </>
  );
}

export default Company;
