import { useParams } from "react-router-dom";

function Supplier() {
  const params = useParams();
  return (
    <>
      <h1 className="text-2xl font-bold">Поставщик {params.inn}</h1>
    </>
  );
}

export default Supplier;
