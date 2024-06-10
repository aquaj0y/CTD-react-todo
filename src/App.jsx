import { useState } from 'react'
import './App.css'

const arr = [
  {
    id: 1,
    title: 'complete assignment'
  },
  {
    id: 2,
    title: 'cook pasta'
  },
  {
    id: 3,
    title: 'do dishes'
  }
]

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {arr.map((item, index) => (
          <li key={item.id}>{item.title}</li>
        )
        )}
      </ul>
    </>
  )
}

export default App
