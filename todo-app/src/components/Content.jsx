import DeleteButton from "./DeleteButton";
import AddItem from "./AddItem";
import { useState } from "react";

const Content = ({ todos, setTodoItems }) => {
  const [newItem, setNewItem] = useState("");

  const setAndSaveItem = (newItemItem) => {
    setTodoItems(newItemItem);
    localStorage.setItem("todoItem", JSON.stringify(newItemItem));
  };

  const handleCheck = (id) => {
    const todolists = todos.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItem(todolists);
  };

  const handleDelete = (id) => {
    const todolists = todos.filter((item) => item.id !== id);
    setAndSaveItem(todolists);
  };
  const addItem = (todo) => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, todo };
    const todolists = [...todos, myNewItem];
    setAndSaveItem(todolists);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      {todos.length ? (
        <ul className="grid place-content-center gap-8">
          {todos.map((item) => (
            <li
              className="flex justify-between gap-8"
              key={item.id}
              style={{ listStyle: "none", textDecoration: "none" }}
            >
              <input
                type="checkbox"
                className="w-12 h-10 bg-red-900 "
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />

              <div
                className="text-black"
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.todo}
              </div>
              <DeleteButton
                todos={todos}
                handleDelete={() => handleDelete(item.id)}
                setTodoItems={setTodoItems}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Your Todo is Empty...</p>
      )}
    </div>
  );
};

export default Content;
