import DeleteButton from "./DeleteButton";
import AddItem from "./AddItem";

const Content = ({todos , setTodoItems , handleAddButton,newTodo,setNewTodo}) => {
    
    const handleCheck = (id) => {
      const todolists = todos.map((item) => 
        item.id === id ? { ...item, checked: !item.checked}
      : item);
       setTodoItems(todolists)
       localStorage.setItem('todoItem' , JSON.stringify(todolists))
       }

       const handleDelete = (id) => {
        const todolists =  todos.filter((item) => item.id !== id)
        setTodoItems(todolists)
        localStorage.setItem('todoItem' , JSON.stringify(todolists))
    }

  return (
    <div >
        <AddItem handleAddButton={handleAddButton} newTodo={newTodo} setNewTodo={setNewTodo}/>

        {todos.length ? (
      <ul className="grid place-content-center gap-8">
       {todos.map((item) => 
        <li className="flex justify-between gap-8" key={item.id} style={{listStyle:"none" , textDecoration:"none"}}>

            <input type="checkbox" 
            className="w-12 h-10 bg-red-900 "
            onChange={() => handleCheck(item.id)}
             checked={item.checked} />

            <div className="text-black" style={(item.checked) ? {textDecoration:"line-through"} : null}>
            {item.todo}
            </div>
          <DeleteButton todos={todos} handleDelete={() => handleDelete(item.id)} setTodoItems={setTodoItems}/>
        </li>
       )}
       </ul>
       ) : (
        <p>
            Your Todo is Empty...
        </p>
       )}
    </div>
  );
};

export default Content;
