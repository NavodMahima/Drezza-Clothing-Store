import React,{useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const {token,setToken,navigate,backendUrl,} = useContext(ShopContext);

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const onSubmitHandler = async (event) => {
      event.preventDefault();

      //Login or Sign up
      try {
        if (currentState === 'Sign up') {
          const response = await axios.post(backendUrl + '/api/user/register',{name,email,password});
          if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem('token',response.data.token);
            // navigate('/');
          } else {
            toast.error(response.data.message);
          }
        } else {
          const response = await axios.post(backendUrl + '/api/user/login',{email,password});
          if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem('token',response.data.token);
            toast.success('Login Successful');
            // navigate('/');
          } else {
            toast.error(response.data.message);
          }
        }
        
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
  }

  //Logged user navigate to home page
  useEffect(()=>{
    if(token){
      navigate('/');
    }
  },[token])
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[60%] sm:max-w-96% m-auto mt-10 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prate-regular text-4xl font-medium'>{currentState}</p>
        </div>
        {currentState === "Login" ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
        <input onChange={(e)=>setPassword(e.target.value)} valur={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
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
