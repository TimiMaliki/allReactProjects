const People = ({ person }) => {
  return (
    <div className="container mx-auto text-center mt-10">
      <ul className="lg:flex gap-8 lg:justify-center">
        <div className="lg:align-center grid lg:ml-0 ml-24">
          <img
            src={person.image}
            alt=""
            className="rounded-full w-16 h-16 cursor-pointer"
          />
        </div>
        <div className="lg:mb-8 mb-16">
          <li className="text-xl">Name: {person.name}</li>
          <li className="text-xl">Age: {person.age}</li>
          <li className="text-xl">Role: {person.occupation}</li>
          <li className="text-xl">Contact: {person.phoneNumber}</li>
        </div>
      </ul>
    </div>
  );
};

export default People;
