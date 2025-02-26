/* eslint-disable @next/next/no-img-element */
import React from "react";
import ContentTabs from "./ContentTabs";
import NavBar from "./NavBar";

export default function ProfilePage() {
    return (
        <div className='flex flex-col w-screen h-screen'>
            <div className='flex fixed z-10 h-1/4 max-sm:max-h-52 w-full shrink'>
                <img alt='Profile Logo' src='/city.jpg' className='object-cover w-full' />
            </div>
            <div className='flex flex-col mt-20 h-3/4'>
                <div className='flex max-sm:flex-col mt-14 bg-white items-center h-full'>
                    <div className='flex flex-col items-center md:w-1/2 md:h-2/3'>
                        <div className='rounded-full z-20 text-transparent m-2 bg-white w-1/3 aspect-square'>Profile avatar</div>
                        <div className='text-blue-900 font-semibold text-sm my-1'>Profile Name</div>
                        <div className='text-xs text-gray-500 my-1'>Profile Career</div>
                        <div className='text-xs text-gray-500 my-1'>Living, Place</div>
                        <div className='flex justify-between my-1'>
                            <div className='flex flex-col mt-5 mx-3 items-center'>
                                <p className='text-md text-blue-900'>Number</p>
                                <p className='text-xs text-blue-900'>followers</p>
                            </div>
                            <div className='flex flex-col mt-5 mx-3 items-center'>
                                <p className='text-md text-blue-900'>Number</p>
                                <p className='text-xs text-blue-900'>following</p>
                            </div>
                            <div className='flex flex-col mt-5 mx-3 items-center'>
                                <p className='text-md text-blue-900'>Number</p>
                                <p className='text-xs text-blue-900'>likes</p>
                            </div>
                        </div>
                        <div className='flex my-2'>
                            <button className='py-1 px-2 mr-1 rounded-lg bg-blue-700 text-white text-sm'>Edit profile</button>
                            <button className='py-1 px-2 ml-1 rounded-lg bg-blue-700 text-white text-sm'>Add friends</button>
                        </div>
                    </div>
                    
                    <div className='max-sm:w-full md:w-1/2 items-center justify-between'><ContentTabs /></div>
                    <NavBar />
                </div>
            </div>
        </div>
    );
}