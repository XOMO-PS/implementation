import React from 'react'
import { useState } from 'react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../index.css';
import { CheckBox } from '../ui/Checkbox';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"></link>

export default function Login() {
    const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
        <div className='h-screen bg-bgBlue'>
            <h1 className='text-4xl text-white mb-8 self-start font-quicksand font-semibold pt-8 pl-8'>XOMO</h1>
            <div className='flex justify-center items-center'>
                <div className='w-96 p-6 mt-20 bg-white shadow-lg rounded-3xl text-center justify-center items-center'>
                    <h1 className='text-sky-500 text-xl font-semibold font-poppins'>Login to your account</h1>
                    <form action="#">
                        <div className='mt-3 mb-3'>
                            <Input inputSize="small" placeholder="Email" leftIcon={"email"} />            
                        </div>
                        <div className='mt-3 mb-3'>
                            <Input inputSize="small" placeholder="Password" rightIcon={"eyeOff"} />            
                        </div>
                        <div className='mt-3 mb-3 flex justify-between items-center'>
                            <div className='flex'>
                                <CheckBox isChecked={isChecked} onChange={() => { setIsChecked(!isChecked); }} />
                                <label className='ml-1 font-poppins'>Remember me</label>
                            </div>
                            <div>
                                <a href="#" className='text-sky-500 font-medium font-poppins'>Forgot Password</a>
                            </div>
                        </div>
                        <div className='mt-3 mb-5'>
                            <Button buttonType="blue" buttonSize="small" isRounded> Login </Button>            
                        </div>
                        <p className='mt-5 font-poppins'>Don't have an accout yet ? <a href="#" className='text-sky-500 font-medium font-poppins'> <Link to="/signupChoose">Sign up</Link></a></p>     
                    </form>
                </div> 
            </div>
        </div>
    </div>
  )
}
