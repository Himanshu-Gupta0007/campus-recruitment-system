import { useState } from "react";

const App = () => {
  const name: string = "Himanshu";
  const age: number = 22;
  const [count , setCount] = useState<number>(0);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <button  onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default App;