import React from 'react'
import { useState } from 'react'

const Content = () => {
    
    const [name,setName] = useState("User") // This will be displayed at begin
    const [count,setCount] = useState(0)

    const handleNameChange = ()=>{
        const names = ["Ayush","Arnav","Vansh"]
        const int = Math.floor(Math.random()*3)
        setName(names[int]) // When this function is called this will change the name
    }

    const handleClick = (name)=>{
        setCount(count+1)
        console.log(`You clicked ${name} ${count+1} times`)
    }


  return (
    <main>
        <p>
            Hello {name}!
        </p>
        {/* Working perfectly fine */}
        <button onClick = {handleNameChange}>Change Name</button> 

        <button onClick = {()=> {
            handleClick("ayush")
        }}>Count</button>

    </main>
  );
}

export default Content