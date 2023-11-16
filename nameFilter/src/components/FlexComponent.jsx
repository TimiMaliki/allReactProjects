import InputField from "./InputField";
const FlexComponent = ({search , setSearch}) => {

  return (
    <div className="flex  mt-20 justify-center gap-2">
    
      <InputField 
      search={search} 
      setSearch={setSearch}
       />

    </div>
  );
};

export default FlexComponent;
