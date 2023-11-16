import "./App.css";
import Brand from "./components/Brand";
import FlexComponent from "./components/FlexComponent";
import PeopleList from "./components/PeopleList";
import Cat from "../src/assets/profileImage/cat.jpg"
import think from "../src/assets/profileImage/think.jpg"
import nba from "../src/assets/profileImage/nba.jpg"
import studio from "../src/assets/profileImage/studio.jpg"
import { useState } from "react";


function App() {
  const [search,setSearch] = useState('')
  const listOfPeople = [

    {
        name : "Maliki OluwaTimiLehin" , 
        age: "24" , 
        id: 1, 
        phoneNumber:"08102850113", 
        occupation:"FrontEnd Developer",
        image: studio
    },

    {
        name : "Nick Abalma Dhon k." ,
         age: "25" , 
         id: 2, 
         phoneNumber:"08102690139", 
         occupation:"UX/UI Designer",
         image: think
    },

    {
        name : "Fredrick Utawabusma" , 
        age: "26" , 
        id: 3, 
        phoneNumber:"090304550177",
        occupation:"Cyber Security",
        image: nba
    },

    {
        name : "Angelina UsherWhite" , 
        age: "27" , 
        id: 4, 
        phoneNumber:"07213961224", 
        occupation:"Product Manager",
        image: Cat
    },

]
  return (
    <>
      <Brand />
      <FlexComponent 
       search={search}
       setSearch={setSearch}
      />
      <PeopleList 
      listOfPeople={listOfPeople.filter((item) =>
        item.occupation.toLowerCase().includes(search.toLowerCase())
      )}
      />
     
    </>
  );
}

export default App;
