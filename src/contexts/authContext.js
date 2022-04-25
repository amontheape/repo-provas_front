import React, { createContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'
import { logout } from '../services/index.js'

export const AuthContext = createContext()

export function AuthProvider( { children } ) {
  const [ user, setUser ] = useLocalStorage('user', null);
  const navigate = useNavigate()
  const location = useLocation()

  useEffect( () => {
    if ( user ) {
      location.pathname === '/' && navigate('/home')
    } else {
      navigate('/login')
    }
  }, []) //eslint-disable-line

  function handleLogout() {
    logout( user.token )
      .then( () => {
        setUser(null)
        navigate('/login')
      })
      .catch( err => console.log(err))
  }

  return (
    <AuthContext.Provider
      value = {{
        user,
        setUser,
        navigate,
        location,
        handleLogout
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext;