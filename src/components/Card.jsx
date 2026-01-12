import React from 'react'

const Card = ({children}) => {
  return (
    <div className="
bg-emerald-900/90 
relative z-10
backdrop-blur-md
border border-emerald-700/40
rounded-2xl
p-10
w-[420px]
shadow-[0_20px_50px_rgba(16,185,129,0.25)]
">


       {children}
    </div>
  )
}

export default Card
