import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Component/NavBar'
// import ImageCarousel from './Component/Carousel'



  const App = () => {
    return (
      <Router>
        <div>
          <NavBar/>
        </div>
        
        <div className="container mt-4">
          {/* <ImageCarousel/> */}
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={ <h1>Page not found</h1>} />
          </Routes>
        </div>
      </Router>
    
    )
  }

  export default App