import {useState} from 'react'
import { PiFileHtmlBold } from "react-icons/pi";
import { PiFileCssBold } from "react-icons/pi";
import { AiOutlineJavaScript } from "react-icons/ai";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
const Skills = () => {
    const [drop , setDrop] = useState([false, false, false])
    const dropText = (index) =>{
        setDrop((prev)=>{
            const newState = [...prev]
            newState[index] = !newState[index]
            return newState
        })
    }
  return (
    <div id='skills' className=' bg-[#073267]  pt-26  '>
        <h1 className=' text-center text-[30px] text-white font-bold font-serif'>What i Build With.</h1>
        <div className=' flex text-center items-center justify-center gap-2' >
        <h1 className='  text-[20px] text-white font-medium font-sans '>My Skills</h1>
        <p className=' bg-white p-2  rounded-[10px]'><BsTools size={20}/></p>
        </div>
        <div  className=' flex  justify-around gap-40 py-20 w-[100%] relative px-40'>
       <section className=''>
        <p onMouseEnter={()=>dropText(0)} onMouseLeave={()=>dropText(0)} className=' flex items-end cursor-pointer'>
             <p className='  text-white text-[20px] font-medium'>Core Technologies</p> 
             <p className=' text-white'><RiArrowDropDownLine size={30}/></p>
             </p>
        {drop[0] &&(
            <section className=' absolute bg-[#F2F7F8] w-[350px] p-5 rounded-2xl flex items-center'>
                <div className=' gap-3 w-[50%]'>

                <div className=' flex items-center p-3 gap-2 '>
                <p className=' bg-[#EFF6FF] rounded-2xl p-2 text-[#0F60D6]'><PiFileHtmlBold size={30}/></p>
                <p className=' text-[20px]  italic'>Html</p>
                </div>
                <div className=' flex items-center p-3 gap-2'>
                    <p className=' bg-[#DDF5E8] rounded-2xl p-2 text-green-600'><PiFileCssBold size={30}/></p>
                    <p className=' text-[20px]  italic'>Css</p>
                </div>
                <div className=' flex items-center p-3 gap-2'>
                    <p className=' bg-[#FFF1F9] rounded-2xl p-2 text-[#EA67AC]'><DiMongodb size={30}/></p>
                    <p className=' text-[20px]  italic'>MongoDB</p>
                </div>

                </div>
                <div className=' w-[50%] gap-3'>
                <div className=' flex items-center p-3 gap-2'>
                    <p className=' bg-[#F0F0F0] rounded-2xl p-2 text-[#122231]'><AiOutlineJavaScript size={30}/></p>
                    <p className=' text-[20px]  italic'>JavaScript</p>
                </div>
                <div className=' flex items-center p-3 gap-2'>
                    <p className=' bg-[#FFF1F9] rounded-2xl p-2 text-[#EA67AC]'><IoLogoReact size={30}/></p>
                    <p className=' text-[20px] italic'>React.js</p>
                </div>
                <div className=' flex items-center p-3 gap-2'>
                    <p className=' bg-[#EFF6FF] rounded-2xl p-2 text-[#0F60D6]'><FaNodeJs size={30}/></p>
                    <p className=' text-[20px]  italic'>Node.js</p>
                </div>
                </div>
            </section>
        )}
       </section>
       <section className=' '>
        <p onMouseEnter={()=>dropText(1)} onMouseLeave={()=>dropText(1)} className=' cursor-pointer flex items-end'>
            <p className='  text-white text-[20px] font-medium'>Styling Tools</p>
            <p className=' text-white'><RiArrowDropDownLine size={30}/></p>
            </p>
        {drop[1]&&(
            <section className=' absolute bg-[#F2F7F8] w-[300px] rounded-2xl py-3 pl-4 '>
                <div className=' flex items-center p-3 gap-2'>
                    <p className=' bg-[#FFECE3] rounded-2xl p-2 text-[#FF4E00]'><SiTailwindcss size={30}/></p>
                    <p className=' text-[20px]  italic' >Tailwind Css</p>
                </div>
                <div className=' flex items-center p-3 gap-2'>
                    <p className=' text-[#329DF3] rounded-2xl p-2 bg-[#E7F4FF]'><PiFileCssBold size={30}/></p>
                    <p className=' text-[20px]  italic'>Css Module</p>
                </div>
                <div className=' flex items-center p-3 gap-2'>
                   <p className=' bg-[#DDF5E8] rounded-2xl p-2 text-green-600'><PiFileCssBold size={30}/></p>
                    <p className=' text-[20px]  italic'>Vanilla Css </p>
                </div>
            </section>
        )}
       </section>
       <section className=''>
        <p onMouseEnter={()=>dropText(2)} onMouseLeave={()=>dropText(2)} className=' cursor-pointer flex items-end '>
            <p className='  text-white text-[20px] font-medium'>Other Skills</p>
            <p className=' text-white'><RiArrowDropDownLine size={30}/></p>
            </p>
        {drop[2]&&(
            <section className=' absolute bg-[#F2F7F8] w-[250px] rounded-2xl py-3 pl-4'>
                <ul className=' list-disc pl-4 py-3'>
                    <li className=' text-[20px] font-medium font-serif'>React Context API</li>
                    <li className=' text-[20px] font-medium font-serif'>React Context API</li>
                    <li className=' text-[20px] font-medium font-serif'>Vercel</li>
                    <li className=' text-[20px] font-medium font-serif'>Responsive Design</li>
                    <li className=' text-[20px] font-medium font-serif'>Team Collaboration</li>
                </ul>
            </section>
        )}
       </section>
       </div>
    </div>
  )
}

export default Skills