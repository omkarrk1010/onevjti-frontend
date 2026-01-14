import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{

    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = ()=>{

    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/users/login");
  };

  return (
    <header className='text-black px-8 py-4 flex items-center justify-between'>

        <h1 className='text-xl font-bold'>OneVJTI</h1>

        <nav className="flex gap-8 text-lg font-medium">

      <Link to="/" className="hover:text-purple-500">Home</Link>

       {!isLoggedIn ? (
          <>
            <Link to="/users/register" className="hover:text-purple-500">
              Register
            </Link>
            <Link to="/users/login" className="hover:text-purple-500">
              Login
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="hover:text-red-500 transition"
          >
            Logout
          </button>
        )}

        </nav>
    </header>
  )
}

export default Header
