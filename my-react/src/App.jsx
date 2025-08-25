import { useState } from 'react'
import Home from './Home'
import './App.css'

function App() {
const fruits= ['apple','banana','orange'];
const colors=['red','gray','blue','green','yellow'];
  

  return (
    <>
      <Home  fruitlists={fruits} colorlists={ colors}/>
    </>
  )
}

export default App
