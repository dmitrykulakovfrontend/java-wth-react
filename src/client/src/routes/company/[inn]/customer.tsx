import { useParams } from "react-router-dom";
function Customer() {
  const params = useParams();
  return (
    <>
      <h1 className="text-2xl font-bold">
        Информация о компании {params.inn} как о заказчике
      </h1>
    </>
  );
}

export default Customer;
