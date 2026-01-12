import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPass from './pages/ForgotPass'
import { Route, Routes } from 'react-router-dom'

const App= ()=>{

  return (
    <div>
      <Routes>
        <Route path='/users/register' element={<Register/>}/>
        <Route path='/users/login' element={<Login/>}/>
        <Route path='/users/forgotpass' element={<ForgotPass/>}/>

      </Routes>
      

    </div>
  
  )


}

  


export default App
