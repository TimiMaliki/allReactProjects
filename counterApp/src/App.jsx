import { useState } from "react";
import "./App.css";
import Brand from "./components/Brand";
import Increments from "./components/Increments";
import Decrement from "./components/Decrement";
import Value from "./components/Value";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrements = () => {
    setCount(count - 1);
  };

  return (
    <div>
     <Brand />
      <div className="container">
      <Increments increase={() => Increment()} />
      <Value count={count} />
      <Decrement decrease={() => Decrements()} />
      </div>
      
    </div>
  );
}

export default App;
