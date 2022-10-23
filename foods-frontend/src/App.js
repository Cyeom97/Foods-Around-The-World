import React from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Countries from './components/Countries'
import FoodList from './pages/FoodList'
import FoodNation from './components/FoodNation'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="countries/:countryId" element={<FoodList />} /> */}
          <Route path="foods" element={<FoodList />} />
          {/* <Route path="countries/:id" element={<FoodNation />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
