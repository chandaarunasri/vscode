import React,{useState, usestate}from 'react'

function Events() {


//     const greetUser = (username) => {
//         alert(`Hello, ${username}! Welcome to React`);
//       }
//   return (
//     <>
//     <button onClick={()=>greetUser("Ammu")}>Greet User</button>
    
//     </>
//   )


// handling form events

const[name,setName]=useState("");
const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`Form submitted, Name: ${name}`);
}
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={name} 
            onChange={(e)=>setName(e.target.value)} 
            placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </form>
        
        
        </>
    )





}
export default Events
