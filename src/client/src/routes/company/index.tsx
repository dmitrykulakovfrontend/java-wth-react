import { Outlet, useLoaderData, useParams } from "react-router-dom";

function Company() {
  const params = useParams();
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Company #{params.inn}</h1>
        <Outlet />
      </div>
    </>
  );
}

export default Company;
