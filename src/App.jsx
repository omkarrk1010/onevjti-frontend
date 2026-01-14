import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPass from './pages/ForgotPass'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Dashboard from "./pages/Dashboard";
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'




const App= ()=>{

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className="flex-grow">

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users/dashboard' element={<Dashboard />}/>
        <Route path='/users/register' element={<Register/>}/>
        <Route path='/users/login' element={<Login/>}/>
        {/* <Route path='/users/forgotpass' element={<ForgotPass/>}/> */}

      </Routes>
      
      </main>
      <Footer />

    </div>
  
  ) 


}

  


export default App
