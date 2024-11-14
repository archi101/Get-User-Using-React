// import React from 'react'


import { FC } from "react"

// type nameTypeProp={
//     name:string;
// }
interface nameTypeProp{
    name:string
}
// const HelloWorldComponent = ({name}: {name:string}) => {
//   return (
//     <p>Good AfterNoon, {name}</p>
//   )
// }
const HelloWorldComponent:FC<nameTypeProp> = ({name}) => {
    return (
      <p>Good AfterNoon, {name}</p>
    )
  }

export default HelloWorldComponent