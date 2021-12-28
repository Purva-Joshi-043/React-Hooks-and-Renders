import React,{useState} from 'react'

const initState = {
  fname: "Purva",
  lname: "Joshi",
};
export const ObjectUseState = () => {
    const [person,setPerson] = useState(initState)
    const changeName =() =>{
        // person.fname = "Nayan"
        // person.lname= "Shrivastava"
        // setPerson(person)
        const newPerson ={...person}
        newPerson.fname = "Nayan"
        newPerson.lname = "Shrivastava"
        setPerson(newPerson)
    }
    
    console.log("ObjectUSeState Render")
    return (
        <div>
            <button onClick={changeName}>{person.fname} {person.lname}</button>
        </div>
    )
}
