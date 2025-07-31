import {useState,useEffect} from 'react'
import Hamburger from '../pages/Hamburger';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)


  useEffect(()=>{
   const handleScroll = ()=>{
     const set = window.scrollY;
    if(set> 40){
    setScrolled(true)
    }else{
      setScrolled(false)
    }
   
   }
    window.addEventListener("scroll", handleScroll)
   return ()=>{window.removeEventListener('scroll', handleScroll)} 

  }, [])
  return (
    <div className={` flex justify-between  px-49 py-4 items-center transition-all duration-300 max-tablet:px-25 z-50 fixed w-full ${scrolled? 'bg-[#074188] shadow-md': 'bg-transparen'} max-mobile:px-10`}>
        <section className=' flex items-baseline '>
            <h1 className={`text-[40px] font-bold font-serif max-w-[1020px] text-[#074188] ${scrolled? 'text-white' : 'text-[#074188]'}`} >Z<span className=' text-white'>.</span></h1>
            <p className=' text-[25px] font-medium text-white font-serif italic'>codes</p>
        </section>
        <section className=' flex gap-10 max-tablet:hidden'>
            <a href='#home' className=' text-[22px] font-medium text-white font-sans' >Home</a>
            <a href='#about' className=' text-[22px] font-medium text-white font-sans'>About</a>
            <a href='#skills' className=' text-[22px] font-medium text-white font-sans'>Skills</a>
            <a href='#projects' className=' text-[22px] font-medium text-white font-sans'>Projects</a>
            <a href='#contact' className=' text-[22px] font-medium text-white font-sans'>Contact</a>
        </section>
        <section className=' hidden max-tablet:block '>
            <Hamburger/>
        </section>
    </div>
  )
}

export default Nav