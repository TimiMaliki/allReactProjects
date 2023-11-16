import React from "react";

const InputField = ({search , setSearch}) => {
  return (
    <div className="mt-14">
      <input
        type="text"
        className="bg-gray-300 w-80 h-10 rounded-lg p-8 border outline-white"
        placeholder="Search Job Roles"
        onSubmit={(e) => e.preventDefault()}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default InputField;
