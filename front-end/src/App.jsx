import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Sidebar from './component/Sidebar'
import Header from './component/Header'
import Slots from './component/Slots'

function App() {
  return (
    <>
      <Header />
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8">
        <div class="h-32 rounded justify-center"> <Sidebar /> </div>
        <div class="h-32 rounded"> <Home /> </div>
      </div>
    </>
  )
}

export default App
