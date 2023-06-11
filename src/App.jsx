import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Release from './components/Release'
import Overview from './components/Overview'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Release />
      <Overview />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;
