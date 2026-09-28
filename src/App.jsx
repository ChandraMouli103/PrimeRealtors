import './App.css'

import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Components/Home/Home.jsx'
// import About from './Components/About/About.jsx'
import Presence from './Components/Presence/Presence.jsx'
import Contact from './Components/Contact/Contact.jsx'
import BuySell from './Components/buysell.jsx'
import ThankYou from './Components/ThankYou/ThankYou.jsx'
import Gallery from './Components/Gallery/Gallery.jsx'
import NewsUpdate from './Components/NewsUpdate/NewsUpdate.jsx'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="app-shell">
      <Header />
      <ScrollToTop />
      <Routes>
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/our-presence" element={<Presence />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buy-sell" element={<BuySell />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news-update" element={<NewsUpdate />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
