import { useParams } from "react-router-dom";
function Customer() {
  const params = useParams();
  return (
    <>
      <h1 className="text-2xl font-bold">Заказчик {params.inn}</h1>
    </>
  );
}

export default Customer;
