import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const clearForm = () => {
    setName('')
    setEmail('')
    setPassword('')
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      if (currentState === 'Sign Up') {
        // Registration
        if (!name || !email || !password) {
          toast.error('Please fill in all fields')
          return
        }

        const registerData = {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          password: password
        }

        const response = await axios.post(`${backendUrl}/api/user/register`, registerData)
        
        if (response.data.success) {
          toast.success('Registration successful!')
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          navigate('/')
        } else {
          toast.error(response.data.message || 'Registration failed')
        }
      } else {
        // Login
        if (!email || !password) {
          toast.error('Please fill in all fields')
          return
        }

        const loginData = {
          email: email.trim().toLowerCase(),
          password: password
        }

        const response = await axios.post(`${backendUrl}/api/user/login`, loginData)
        
        if (response.data.success) {
          toast.success('Login successful!')
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          navigate('/')
        } else {
          toast.error(response.data.message || 'Invalid credentials')
        }
      }
    } catch (error) {
      console.error('Auth error:', error)
      
      // Handle specific error responses from the server
      if (error.response) {
        const errorMessage = error.response.data.message || 'Authentication failed'
        toast.error(errorMessage)
      } else if (error.request) {
        // Network error
        toast.error('Network error. Please check your connection.')
      } else {
        toast.error('An unexpected error occurred')
      }
    }
  }

  const toggleAuthState = () => {
    setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')
    clearForm() // Clear form when switching between login and signup
  }

  // Redirect if already logged in
  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token, navigate])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] max-w-[400px] m-auto mt-10 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prate-regular text-4xl font-medium'>{currentState}</p>
      </div>
      
      {currentState === 'Sign Up' && (
        <input 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
          type="text" 
          className='w-full px-3 py-2 border border-gray-800' 
          placeholder='Name' 
          required
          minLength={3}
        />
      )}
      
      <input 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        type="email" 
        className='w-full px-3 py-2 border border-gray-800' 
        placeholder='Email' 
        required
      />
      
      <input 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        type="password" 
        className='w-full px-3 py-2 border border-gray-800' 
        placeholder='Password' 
        required
        minLength={6}
      />
      
      <div className='w-full flex justify-between text-sm mt-2'>
        {currentState === 'Login' && (
          <p className='cursor-pointer hover:text-blue-600'>Forgot your password?</p>
        )}
        {currentState === 'Login' ? (
          <p className='ml-auto cursor-pointer font-bold text-blue-500 hover:text-blue-600' onClick={toggleAuthState}>
            Create Account
          </p>
        ) : (
          <p className='ml-auto cursor-pointer font-bold text-blue-500 hover:text-blue-600' onClick={toggleAuthState}>
            Login Here
          </p>
        )}
      </div>
      
      <button 
        type="submit" 
        className='bg-black text-white font-light px-8 py-2 mt-4 hover:bg-gray-800 transition-colors'
      >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  )
}

export default Login