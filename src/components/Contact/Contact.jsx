import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className='relative text-white px-8 mt-16 rounded-2xl flex flex-col justify-center items-center py-4 sm:flex-row-reverse sm:justify-between'>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-red-900 opacity-20 -z-10 w-full h-full rounded-2xl" />
            <div className="w-[275px] grid place-content-center">
                <img src="/message-icon.png" alt="" />
            </div>
            <div className="sm:w-[300px]">
                <h1 className="bg-gradient-to-r from-orange-600 via-blue-300 to-blue-600 bg-clip-text font-bold text-transparent text-5xl mb-5">Say hi!</h1>
                <p className="mb-4">Want to create something awesome? Or, you have any query? Drop an email or tweet.</p>
                <div className="flex justify-between items-center">
                    <a href="" className='bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent flex justify-center items-center'><span className='text-blue-600'><CiTwitter /></span>tweet</a>
                    <a href="" className='bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent flex justify-center items-center'><span className='text-orange-600'><MdOutlineEmail /></span>hi@codingAdda.me</a>
                </div>
            </div>
        </div>
    )
}

export default Contact