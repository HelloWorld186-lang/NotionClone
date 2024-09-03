import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { FiMenu, FiX } from 'react-icons/fi'
import { ACCESS_TOKEN } from '../constant'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const access_token = localStorage.getItem(ACCESS_TOKEN)

  useEffect(() => {
    const checkAuth = () => {
      if (access_token) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    }
    checkAuth()
  })

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className='bg-white text-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <img src={Logo} alt="Logo" className='h-8 w-auto' />
            <h1 className='ml-2 oleo-script-bold text-xl font-extrabold bg-gradient-to-bl from-[#FC6D2E] to-[#E83D65] bg-clip-text text-transparent'>
              Brainflow
            </h1>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <NavLinkComponent to="/docs" text="Docs" />
              <span className='text-gray-300'>|</span>
              {isAuthenticated ? (
                <>
                  <NavLinkComponent to="/notes" text="Notes" />
                  <NavLinkComponent to="/signout" text="Signout" />
                </>
              ) : (
                <>
                  <NavLinkComponent to="/signin" text="Signin" />
                  <NavLinkComponent to="/signup" text="Signup" />
                </>
              )}
            </div>
          </div>
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white'
            >
              <span className='sr-only'>Open main menu</span>
              {isMenuOpen ? <FiX className='block h-6 w-6' /> : <FiMenu className='block h-6 w-6' />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <NavLinkComponent to="/docs" text="Docs" mobileStyle />
            {isAuthenticated ? (
              <>
                <NavLinkComponent to="/notes" text="Notes" mobileStyle />
                <NavLinkComponent to="/signout" text="Signout" mobileStyle />
              </>
            ) : (
              <>
                <NavLinkComponent to="/signin" text="Signin" mobileStyle />
                <NavLinkComponent to="/signup" text="Signup" mobileStyle />
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

const NavLinkComponent = ({ to, text, mobileStyle }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `${mobileStyle
        ? 'block px-3 py-2 rounded-md text-base font-medium'
        : 'text-sm font-medium'
      } text-gray-400 hover:text-transparent hover:bg-gradient-to-bl hover:from-[#FC6D2E] hover:to-[#E83D65] bg-clip-text ${
        isActive ? 'text-black' : ''
      }`
    }
  >
    {text}
  </NavLink>
)

export default NavBar