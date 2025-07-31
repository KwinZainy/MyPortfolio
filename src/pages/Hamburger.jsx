import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
const Hamburger = () => {
    const [isOpen , setIsOpen] = useState(false)

  return (
    <div>
        <div>
        <button onClick={() =>(setIsOpen(!isOpen))} className=' hover:text-[#074188]'>
            {isOpen? <IoMdClose size={30} className=' text-black'/> : <RxHamburgerMenu size={30} className='text-white'/>}
        </button >
        </div>
            <div  className=' py-10 shadow-md z-50 w-full fixed left-0 top-20 h-vh'>
        {isOpen&&(
            <section className=' bg-[#848484] flex flex-col gap-12 items-center h-screen py-10 fixed inset-0 overflow-y-hidden'>
                <div className=' flex justify-between items-center w-full px-10'>
                    <div className=' flex items-baseline gap-0.5'>

                           <h1 className={`text-[40px] font-bold font-serif text-[#074188] `} >Z<span className=' text-white'>.</span></h1>
            <p className=' text-[25px] font-medium text-white font-serif italic'>codes</p>
                    </div>
                <button onClick={() =>(setIsOpen(!isOpen))} className=' hover:text-[#074188]'>
            {isOpen? <IoMdClose size={30} className=' text-black'/> : <RxHamburgerMenu size={30} className='text-white'/>}
        </button >
                </div>
        <div className=' flex flex-col gap-14 w-full text-center px-7'>
            <a onClick={()=>(setIsOpen(false))} href='#home' className='bg-white text-[22px] font-medium text-black font-sans shadow-md p-2 rounded-[10px] cursor-pointer  hover:text-white hover:bg-[#0065E1]'>Home</a>
            <a onClick={()=>(setIsOpen(false))} href='#about' className='bg-white text-[22px] font-medium text-black font-sans shadow-md p-2 rounded-[10px] cursor-pointer  hover:text-white hover:bg-[#0065E1]'>About</a>
            <a onClick={()=>(setIsOpen(false))} href='#skills' className='bg-white text-[22px] font-medium text-black font-sans shadow-md p-2 rounded-[10px] cursor-pointer  hover:text-white hover:bg-[#0065E1]'>Skills</a>
            <a onClick={()=>(setIsOpen(false))} href='#projects' className='bg-white text-[22px] font-medium text-black font-sans shadow-md p-2 rounded-[10px] cursor-pointer  hover:text-white hover:bg-[#0065E1]'>Projects</a>
            <a onClick={()=>(setIsOpen(false))} href='#contact' className='bg-white text-[22px] font-medium text-black font-sans shadow-md p-2 rounded-[10px] cursor-pointer  hover:text-white hover:bg-[#0065E1]'>Contact</a>
            </div>
        </section>
        )}
    </div>
    </div>
  )
}

export default Hamburger