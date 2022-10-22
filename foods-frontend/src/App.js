import React from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Countries from './components/Countries'
import Food from './components/Food'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="countries" element={<Countries />} />
          <Route path="foods" element={<Food />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
