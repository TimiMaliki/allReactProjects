import People from "./People";

const PeopleList = ({ listOfPeople}) => {
  return (
    <div className="mt-20 bg-blue-100 grid place-content-center lg:w-1/2 w-full p-12 rounded-lg mx-auto">
      {listOfPeople.map((person) => {
        return <People person={person} key={person.id} />;
      })}
    </div>
  );
};

export default PeopleList;
