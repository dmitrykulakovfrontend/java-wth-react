import { useParams } from "react-router-dom";

function Supplier() {
  const params = useParams();
  return (
    <>
      <h1 className="text-2xl font-bold">
        Информация о компании {params.inn} как о поставщике
      </h1>
    </>
  );
}

export default Supplier;
