 import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ContactUs from './pages/ContactUs/ContactUs'
import AboutUs from './pages/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'


 
 const App = () => {
   return (
     <div className='app'>
      
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/AboutUs' element={<AboutUs/>}  />
        <Route path='/ContactUs' element={<ContactUs/>}  />

      </Routes>
       
      
     </div>
   )
 }
 
 export default App