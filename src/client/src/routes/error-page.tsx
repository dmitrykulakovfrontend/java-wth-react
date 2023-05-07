import { useState } from "react";

function ErrorPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">404 not found or error</h1>
      </div>
    </>
  );
}

export default ErrorPage;
