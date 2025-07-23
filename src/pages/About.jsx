import React from 'react'
import AnimatedText from './AnimatedText'

const About = () => {
  return (
    <div id='about' className=' py-16'>
        <div className=' text-center pt-10'>
            
            <p className=' items-center flex text-center justify-center font-bold font-serif  text-[40px]'> The Brain Behind Z<span className=' text-[#074188]'>.codes</span></p>
             <h1 className=' text-[20px] font-serif'>About Me</h1>
        </div>
        <div className=' flex justify-center items-center'>
        <section className=' w-[35%]'>
            <img src="./myImage.jpg" alt="" className=' shadow-2xs  rounded-2xl w-[350px] '/>
        </section>
        <section className=' w-[35%]'>
            <p className=' text-[40px]'>A <AnimatedText/></p>
            <p className=' font-serif'>I'm Gbadamosi Blessing, a passionate and creative Frontend Developer dedicated to building modern, responsive, and user-friendly web applications. With a strong focus on clean design and functionality, I enjoy turning complex problems into simple, beautiful interfaces.

   My journey into tech began with curiosity and as grown into a deep love for writing code and crafting seamless digital experiences. I'm always exploring new technologies and improving my skills to stay current in the fast-moving world of web development.

    Outside of coding, I enjoy reading books, exploring myself, and learning something new every day.
    </p>
    <div className=' text-'>
    <button className=' bg-[#074188] p-3 rounded-[10px] text-white text-[20px] mt-3  font-medium'>Download CV</button>
    </div>
        </section>
    </div>
    </div>
  )
}

export default About