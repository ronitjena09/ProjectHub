import { Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Routes></Routes>
      </>
  )
}

export default App
