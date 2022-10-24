import React from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FoodList from './pages/FoodList'
import CountryFood from './pages/CountryFood'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CountryFood foods={FoodList} />} />
          <Route path="foods" element={<FoodList />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
