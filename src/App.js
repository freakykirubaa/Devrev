
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import './App.css';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Products from './components/Products';
import 'aos/dist/aos.css';
export default function App()
{
  return(
  <>
  <Header/>
  <Home/>
  <About/>

  <Stats/>
  <Products/>
  <Footer/>
  </>
  )
}