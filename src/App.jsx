/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Hero from './Hero.jsx'
import Nav from './Nav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
    </>
  )
}

export default App
