import React from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FoodList from './pages/FoodList'
import CountryFood from './pages/CountryFood'
import ViewFood from './pages/ViewFood'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CountryFood />} />
          <Route path="/foods" element={<FoodList />} />
          <Route path="/:id/:name" element={<ViewFood />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
