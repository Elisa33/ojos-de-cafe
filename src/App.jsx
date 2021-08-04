import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar>
        
      </Navbar>
      <Main/>
    </div>
  )
}

export default App
