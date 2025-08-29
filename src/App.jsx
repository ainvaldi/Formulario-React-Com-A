import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './layouts/Home'
import Tarjeta from './layouts/Tarjeta'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tarjeta' element={<Tarjeta/>}/>
      </Routes>
    </>
  )
}

export default App
