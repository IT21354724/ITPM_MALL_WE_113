import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import { Routes ,Route } from 'react-router-dom'

 

const Home = () => {
  return (
    <div>
      <Header />
     <Categories />
      
    </div>
   
  )
}

export default Home
