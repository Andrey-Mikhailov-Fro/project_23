import React from 'react';
import '../app/globals.css';
// import Image from "next/image";

export default function LoginForm() {
  return (
    <div className='container mx-auto'>
      <div></div>
      <div className='flex flex-col justify-between md'>
        <h3>Project-23 login</h3>
        <form>
          <div className='relative'>
            <label htmlFor='login' className='
              text-sm
              text-gray-500
              dark:text-gray-400
              duration-300
              transform
              -translate-y-4
              scale-75
              top-2
              z-10
              origin-[0]
              bg-white
              dark:bg-gray-900
              px-2
              peer-focus:px-2
              peer-focus:text-blue-600
              peer-placeholder-shown:-translate-y-1/2
              peer-placeholder-shown:top-1/2
              peer-focus:-translate-y-4
              rtl:peer-focus:translate-x-1/4
              rtl:peer-focus:left-auto
              start-1'
            >
              Login
            </label>
            <input
              type='text'
              id='login'
              className='block border-solid rounded-md bg-slate-200 m-2 p-2'
              placeholder=' '/>
          </div>
          <div className='relative'>
            <label htmlFor='password' className='
              text-sm
              text-gray-500
              dark:text-gray-400
              duration-300
              transform
              -translate-y-4
              scale-75
              top-2
              z-10
              origin-[0]
              bg-white
              dark:bg-gray-900
              px-2
              peer-focus:px-2
              peer-focus:text-blue-600
              peer-placeholder-shown:-translate-y-1/2
              peer-placeholder-shown:top-1/2
              peer-focus:-translate-y-4
              rtl:peer-focus:translate-x-1/4
              rtl:peer-focus:left-auto
              start-1'
            >
              Password
            </label>
            <input
              type='text'
              id='password'
              className='
                block
                border-solid
                rounded-md
                bg-slate-200
                m-2'
              placeholder=' '/>
          </div>
          <div>
            <select></select>
            <a></a>
          </div>
          <button type='submit' className='rounded bg-blue-500 px-5'>Sign In</button>
        </form>
      </div>
    </div>
  );
};