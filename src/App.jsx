import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './NavBar'
import Header from './Header'
import Features from './Features'
import Showcase from './Showcase'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Showcase />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
