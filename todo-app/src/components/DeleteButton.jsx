import React from "react";

const DeleteButton = ({handleDelete}) => {
  
  return (
    <button className="delete w-24 h-12 -mt-2 bg-green-500  hover:bg-green-900 rounded-lg" onClick={handleDelete}>
      <p>Delete Todo</p>
    </button>
  );
};

export default DeleteButton;
