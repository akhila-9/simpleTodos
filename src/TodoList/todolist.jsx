import React, { useState } from 'react'
import "./todolist.css"



const TodoList = ({name,todocard,settodocard}) => {
    const clickingFunc=()=>{
        let filter= todocard.filter((each)=>{
            console.log(each)
            return name.id!==each.id
        })
        console.log(filter)
        settodocard(filter)
    }
  return (
    <div className='todocard'>
       
        <div>{name.title}</div>
        <div><button className='deleteStyles' onClick={clickingFunc}>Delete </button></div>
    </div>
    
  )
}

export default TodoList