import React from "react";

const AddItem = ({newItem ,setNewItem , handleSubmit}) => {
    
  return (
        <form  className="mb-8 lg:flex  justify-center gap-8" onSubmit={handleSubmit}>
      <input type="text" 
      className="lg:w-1/2 w-full lg:mb-0 mb-8 h-12 rounded-lg p-4 lg:p-8" 
      value={newItem}
      required
      onChange={(e)  => setNewItem(e.target.value)}
      />
      <button className="lg:w-20 w-40 lg:h-13  bg-purple-500 rounded hover:bg-purple-700" onClick={handleSubmit}
      >
        <p>Add Todo</p>
      </button>
      </form>
  );
};

export default AddItem;
