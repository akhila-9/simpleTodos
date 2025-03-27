import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleTodo from './SimpleTodoList/simpletodo'

 



function App() {


  return (
    <div  className='Todocard'>
    <div className='heading'>Simple Todos</div>
    <div>   <SimpleTodo/></div>
    </div>
    
  
  )
}

export default App
