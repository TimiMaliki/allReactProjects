import { useState } from "react";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      todo: " hit the gym by 7am",
      checked: false,
    },
    {
      id: 2,
      todo: " hit the gym by 8am",
      checked: false,
    },
    {
      id: 3,
      todo: " hit the gym by 9am",
      checked: false,
    },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addItem = (todo) => {
    const id = todoItems.length ? todoItems[todoItems.length - 1].id + 1 : 1;
    const newTodos = { id, todo, checked:false };
    const addTodos = [...todoItems, newTodos];
    setNewTodo(addTodos);
  };
  const handleAddButton = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    addItem(newTodo);
    setNewTodo("");
  };

  return (
    <>
      <TodoContainer
        todos={todoItems}
        setTodoItems={setTodoItems}
        handleAddButton={handleAddButton}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
    </>
  );
}

export default App;
