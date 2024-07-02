import React from 'react'
import Home from './pages/Home.js'
import Abouts from './pages/Abouts.js'
import Work from './pages/Work.js'
import MContact from './pages/MContact.js'
import { Route, Routes } from 'react-router-dom'
import './components/Hamburger.css'
import ScrollToTop from './UtilityFunction/ScrollToTop.js'
import Feedback from './UtilityFunction/Feedback.js'
import './UtilityFunction/Feedback.css'

const App = () => {
  return (
    <div>
        <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<Abouts/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/contact' element={<MContact/>} />
        <Route path='/feedback' element={<Feedback/>} />
      </Routes>
    </div>
  )
}

export default App
