import React,{useState} from 'react'
import UseInput from '../Hooks/UseInput'

function CustomHookForm() {
  
  

    const [firstName,bindFirstName,resetFirstName] = UseInput('')
    const [lastName, bindLastName, resetLastName] = UseInput("");

    const submitHandler = e =>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <label>First Name</label>
            <input {...bindFirstName} type="text" />
          </div>
          <div>
            <label>Last Name</label>
            <input {...bindLastName} type="text" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
}

export default CustomHookForm
