import React, { useState } from 'react'


const Btn = () => {
let [mc, af]=useState("AF")
// const handleEvent = () => {
//     console.log("Button clicked");
//     console.log(mc);
//   };

function handleEvent(props){
    console.log("mc click kr rha")
    console.log(mc)
    af("Fafa")
  }

  return (
 <>
 <button onClick={handleEvent}>{mc}Click me</button>
 </>
  )
}

export default Btn