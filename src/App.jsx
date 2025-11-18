import { useState } from 'react'
import './App.css'
import Homepage from './Pages/Homepage.jsx'
import Header from './Pages/Header.jsx'
import Services from './Pages/Services.jsx'
import Gallery from './Pages/Gallery.jsx'
import CricketAnimation from './Pages/CricketAnimation.jsx'
import Contact from './Pages/Contact.jsx'
import Footer from './Pages/Footer.jsx'

function App() {
  

  return (
   <>
  <CricketAnimation />

  <Header />
  <Homepage />
  <Services />
  <Gallery />
  <Contact />
  <Footer />
</>

  )
}

export default App
