/* eslint-disable @next/next/no-img-element */
import React from 'react';
import '../globals.css';
import FloatingLabelInput from './FloatingLabelInput';
import Checkbox from './Checkbox';
// import Image from "next/image";

export default function LoginForm() {
  return (
    <div className='flex w-fit px-auto max-w-screen-xs shadow-xl rounded-3xl md:max-w-screen-xl md:flex-row'>
      <img alt='Sign in' src='/waterfall.jpg' className='w-auto h-auto max-w-40 shrink object-cover max-sm:hidden md:rounded-l-3xl' />
      <div className='flex flex-col align-middle justify-center max-sm:rounded-3xl md:rounded-r-3xl bg-white shadow-md px-5'>
        <h3 className='block text-xs text-center mb-5 font-semibold py-15 max-h-8 md:max-h-fit'>Project-23 Sign In</h3>
        <form className='flex flex-col max-h-56'>
          <FloatingLabelInput id='name' type='text' label='Login' />
          <FloatingLabelInput id='password' type='password' label='Password' />
          <div className='flex flex-col md:flex-row justify-between md:max-h-fit'>
            <div className='flex flex-row max-h-6 mb-2 mr-2'>
            <Checkbox />
            <div className='flex-shrink text-xs font-semibold text-gray-500 pt-1 ml-2'>Remember me</div>
            </div>
            <a href='' className='flex-shrink text-xs text-blue-500 font-semibold pt-1 mr-2'>Forgot password?</a>
          </div>
          <button type='submit' className='block w-full my-5 py-1 text-xs md:text-sm text-white rounded-md bg-blue-500 max-sm:max-h-6'>Sign In</button>
          <hr className='border-solid border-gray-300' />
          <button type='submit' className='block w-full my-5 py-1 text-xs md:text-sm text-white rounded-md bg-gray-950 max-sm:max-h-6'>or sign in with Google</button>
        </form>
      </div>
    </div>
  );
};