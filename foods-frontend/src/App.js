import React from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Countries from './components/Countries'
import Food from './components/Food'
import FoodNation from './components/FoodNation'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="foods" element={<Food />} />
          <Route path="countries/:id" element={<FoodNation />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
