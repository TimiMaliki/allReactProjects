import { useState } from "react";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import BrandName from "./components/BrandName";
function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      todo: " hit the gym by 7am",
      checked: false,
    },
    {
      id: 2,
      todo: " come back and shower",
      checked: false,
    },
    {
      id: 3,
      todo: "sleep",
      checked: false,
    },
  ]);

 
  return (
    <>
    <BrandName />
      <TodoContainer
        todos={todoItems}
        setTodoItems={setTodoItems}
      />
    </>
  );
}

export default App;
