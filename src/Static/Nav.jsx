import React from 'react'
import Hamburger from '../pages/Hamburger';
const Nav = () => {
  return (
    <div className=' flex justify-between  px-49 py-3 items-center bg-[#1967c6] max-tablet:px-15'>
        <section className=' flex  items-baseline'>
            <h1 className=' text-[40px] font-bold font-serif' >Z <span className=' text-white'>.</span></h1>
            <p className=' text-[25px] font-medium text-white font-serif italic'>tech</p>
        </section>
        <section className=' flex gap-10 max-tablet:hidden'>
            <p className=' text-[22px] font-medium text-white font-sans'>Home</p>
            <p className=' text-[22px] font-medium text-white font-sans'>About</p>
            <p className=' text-[22px] font-medium text-white font-sans'>Skills</p>
            <p className=' text-[22px] font-medium text-white font-sans'>Projects</p>
            <p className=' text-[22px] font-medium text-white font-sans'>Contact</p>
        </section>
        <section className=' hidden max-tablet:block '>
            <Hamburger/>
        </section>
    </div>
  )
}

export default Nav