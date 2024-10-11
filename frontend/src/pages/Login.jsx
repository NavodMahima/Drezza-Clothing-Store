import React,{useState} from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign up');

  const onsubmitHandler = async (event) => {
      event.preventDefault();
  }
  return (
    <form onSubmit={onsubmitHandler} className='flex flex-col items-center w-[60%] sm:max-w-96% m-auto mt-10 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prate-regular text-4xl font-medium'>{currentState}</p>
        </div>
        {currentState === "Login" ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
        <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
        <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>forgot your password? </p>
          {
            currentState === 'Login'
            ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer font-bold text-blue-500'>Create Account</p>
            : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer font-bold text-blue-500'>Login Here</p>
          }
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
