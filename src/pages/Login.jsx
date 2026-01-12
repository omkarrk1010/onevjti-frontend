import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">
        
         <div className="
        absolute inset-0 m-auto
        w-[500px] h-[500px]
        bg-emerald-500/15
        blur-3xl
        rounded-full
      " />
        <Card><h1 className="text-3xl font-bold text-emerald-200 text-center mb-8 tracking-wide">
          Login
        </h1>

        <form className="space-y-4">
            <input className="w-full px-4 py-3 rounded-xl bg-zinc-50 shadow-inner" placeholder='Username'/>
            <input className="w-full px-4 py-3 rounded-xl bg-zinc-50 shadow-inner" placeholder='Password'/>
            <input className="w-full px-4 py-3 rounded-xl bg-zinc-50 shadow-inner" placeholder='Email Id'/>
             <Link to='/users/forgotpass' className='text-xl'>Forgot password?</Link>
            <button className="
            w-full mt-2 py-3 rounded-xl
            bg-black text-emerald-400 font-semibold
            border border-emerald-600
            hover:bg-emerald-600 hover:text-black
            hover:shadow-[0_10px_30px_rgba(16,185,129,0.5)]
            active:scale-95
            transition-all
          ">
            login
          </button>
          <Link to='/users/register'>Dont have an account,register </Link>
        </form></Card>
        

        
      
    </div>
  )
}

export default Login
