import React, { useState } from 'react'
import TodoList from '../TodoList/todolist'
const initialTodosList = [
    {
      id: 1,
      title: 'Book the ticket for today evening',
    },
    {
      id: 2,
      title: 'Rent the movie for tomorrow movie night',
    },
    {
      id: 3,
      title: 'Confirm the slot for the yoga session tomorrow morning',
    },
    {
      id: 4,
      title: 'Drop the parcel at Bloomingdale',
    },
    {
      id: 5,
      title: 'Order fruits on Big Basket',
    },
    {
      id: 6,
      title: 'Fix the production issue',
    },
    {
      id: 7,
      title: 'Confirm my slot for Saturday Night',
    },
    {
      id: 8,
      title: 'Get essentials for Sunday car wash',
    },
  ]
 
 
const SimpleTodo = () => {
    const [todocard,settodocard]=useState(initialTodosList)
    
  return (
    <div>
       {todocard.map((each)=>
         <TodoList name={each} todocard={todocard} settodocard={settodocard}/>
       )}
    </div>
  )
}

export default SimpleTodo
