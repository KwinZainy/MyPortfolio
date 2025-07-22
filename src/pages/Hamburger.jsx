import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
const Hamburger = () => {
    const [isOpen , setIsOpen] = useState(false)

  return (
    <div>
        <div>
        <button onClick={() =>(setIsOpen(!isOpen))} className=' hover:text-white'>
            {isOpen? <IoMdClose size={30}/> : <RxHamburgerMenu size={30}/>}
        </button >
        </div>
            <div  className=' bg-white  py-10 shadow-md z-50 w-full fixed left-0 top-20 h-dvh'>
        {isOpen&&(
            <section className=' flex flex-col gap-12 items-center '>
            <p className=' text-[22px] font-medium text-black font-sans shadow-md p-2 rounded-[10px] cursor-pointer  hover:text-white hover:bg-[#0065E1]'>Home</p>
            <p className=' text-[22px] font-medium text-black font-sans shadow-md p-2 rounded-[10px] cursor-pointer  hover:text-white hover:bg-[#0065E1]'>About</p>
            <p className=' text-[22px] font-medium text-black font-sans shadow-md p-2 rounded-[10px] cursor-pointer  hover:text-white hover:bg-[#0065E1]'>Skills</p>
            <p className=' text-[22px] font-medium text-black font-sans shadow-md p-2 rounded-[10px] cursor-pointer  hover:text-white hover:bg-[#0065E1]'>Projects</p>
            <p className=' text-[22px] font-medium text-black font-sans shadow-md p-2 rounded-[10px] cursor-pointer  hover:text-white hover:bg-[#0065E1]'>Contact</p>
        </section>
        )}
    </div>
    </div>
  )
}

export default Hamburger