import React from "react";

const AddItem = ({newTodo,setNewTodo,handleAddButton}) => {
  return (
        <form  onSubmit={handleAddButton} className="mb-8 lg:flex  justify-center gap-8">
      <input type="text" 
      className="lg:w-1/2 w-full lg:mb-0 mb-8 h-12 rounded-lg p-4 lg:p-8" 
      value={newTodo}
      required
      onChange={(e)  => setNewTodo(e.target.value)}
      />
      <button handleAddButton={handleAddButton} className="lg:w-20 w-40 lg:h-13  bg-purple-500 rounded hover:bg-purple-700" 
      >
        <p>Add Todo</p>
      </button>
      </form>
  );
};

export default AddItem;
