import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
         <Header/>
         <Skills/>
         <Profile/>
         <Projects/>
          <Footer/>
    </>
  )
}

export default App
