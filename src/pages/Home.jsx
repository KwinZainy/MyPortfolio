import React from 'react'
import AnimatedText from './AnimatedText'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Home = () => {
  return (
    <div id='home' className=' relative min-h-screen pt-60 bg-[url("/img1.jpg")]  bg-center bg-cover max-tablet:pt-32   '>
          <div className="absolute inset-0 z-0 bg-black/60"></div>
          <div className=' flex flex-col px-30 justify-center gap-3 z-10 relative h-full '>
        <p className='text-[20px] font-medium text-white'>Hello,</p>
        <h1 className=' text-[30px] text-white'>i'm <span className=' text-[42px] font-bold'>Gbadamosi Blessing,</span></h1>
        <p className=' text-[30px] font-medium text-white'>a Software Developer</p>
        <p className=' text-[30px] text-white'>i'm a <AnimatedText/></p>
        <div className=' flex   gap-8'>
          <a href="#contact"> <button  className=' bg-[#074188] p-3 rounded-md text-[23px] font-medium text-white '>Contact Me</button>  </a>
          <div className=' bg-white p-2 w-fit rounded-md'>
            <a href="">
          <FaGithubSquare size={30}/>
          </a>
          </div>
          <div className=' flex justify-center items-center bg-white  w-fit rounded-md'>
          <a href="" className=' text-[#074188]'>
          <FaLinkedin size={30}/>
          </a>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Home