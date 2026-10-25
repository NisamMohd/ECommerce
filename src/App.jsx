import React from 'react'
import Notification from './components/Notification'
import Navbar from './components/Navbar'
import Hero from './components/Hero'


function App() {
  return (
    <div className='flex flex-col '>
      <Notification/>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App