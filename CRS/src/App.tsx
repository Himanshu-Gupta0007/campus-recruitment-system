import { useState } from "react";

const App = () => {
  const name: string = "Himanshu";
  const age: number = 22;
  const [count , setCount] = useState<string>("0");

  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg" onClick={() => setCount((parseInt(count) + 1).toString())}>+</button>
      <h1 className="text-2xl font-bold">{count}</h1>
      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg  " onClick={() => setCount((parseInt(count) - 1).toString())}>-</button>
    </div>
  );
};

export default App;