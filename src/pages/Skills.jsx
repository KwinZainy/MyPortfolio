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
    <div id='skills' className=' bg-[#073267] p-24  '>
        <div className=' max-w-[2020px] m-auto'>
        <h1 className=' text-center text-[30px] text-white font-bold font-serif max-tablet:text-[25px] max-mobile:text-[20px]'>What i Build With.</h1>
        <div className=' flex text-center items-center justify-center gap-2' >
        <h1 className='  text-[20px] text-white font-medium font-sans  max-tablet:text-[17px] max-mobile:text-[16   px]'>My Skills</h1>
        <p className=' bg-white p-2  max-tablet:p-0.5 rounded-[10px]'><BsTools size={20} className=' max-tablet:w-6'/></p>
        </div>
        <div  className=' flex  justify-around gap-40 py-20 w-[100%] max-mobile:m-  max-tablet:bg-white max-tablet:rounded-[20px]  max-mobile:py-5 max-mobile:px-0 max-tablet:m-auto max-tablet:my-[30px] relative px-40 max-tablet:flex-col max-tablet:items-center'>
       <section className=''>
        <p onMouseEnter={()=>dropText(0)} onMouseLeave={()=>dropText(0)} className=' flex items-end cursor-pointer'>
             <p className='  text-white text-[20px] font-medium max-tablet:text-[#073267]'>Core Technologies</p> 
             <p className=' text-white max-tablet:text-[#073267]'><RiArrowDropDownLine size={30}/></p>
             </p>
        {drop[0] &&(
            <section className=' absolute bg-[#F2F7F8] w-[350px] max-mobile:w-[250px]  p-5 rounded-2xl flex items-center'>
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
            <p className='  text-white text-[20px] font-medium max-tablet:text-[#073267]'>Styling Tools</p>
            <p className=' text-white max-tablet:text-[#073267]'><RiArrowDropDownLine size={30}/></p>
            </p>
        {drop[1]&&(
            <section className=' absolute bg-[#F2F7F8] w-[300px] max-mobile:w-[250px] rounded-2xl py-3 pl-4 '>
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
            <p className='  text-white text-[20px] font-medium max-tablet:text-[#073267]'>Other Skills</p>
            <p className=' text-white max-tablet:text-[#073267]'><RiArrowDropDownLine size={30}/></p>
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
    </div>
  )
}

export default Skills