import {useState} from 'react'
import { PiFileHtmlBold } from "react-icons/pi";
import { PiFileCssBold } from "react-icons/pi";
import { AiOutlineJavaScript } from "react-icons/ai";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
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
    <div>
       <section>
        <p onMouseEnter={()=>dropText(0)} onMouseLeave={()=>dropText(0)} className=' cursor-pointer '>Core Technologies</p>
        {drop[0] &&(
            <section>
                <div>
                <p><PiFileHtmlBold/></p>
                <p>Html</p>
                </div>
                <div>
                    <p><PiFileCssBold/></p>
                    <p>Css</p>
                </div>
                <div>
                    <p><AiOutlineJavaScript/></p>
                    <p>JavaScript (ES6+)</p>
                </div>
                <div>
                    <p><IoLogoReact/></p>
                    <p>React.js</p>
                </div>
                
            </section>
        )}
       </section>
       <section>
        <p onMouseEnter={()=>dropText(1)} onMouseLeave={()=>dropText(1)} className=' cursor-pointer '>Styling Tools</p>
        {drop[1]&&(
            <section>
                <div>
                    <p><SiTailwindcss/></p>
                    <p>Tailwind Css</p>
                </div>
                <div>
                    <p><PiFileCssBold/></p>
                    <p>Css Module</p>
                </div>
                <div>
                   <p><PiFileCssBold/></p>
                    <p>Vanilla Css </p>
                </div>
            </section>
        )}
       </section>
    </div>
  )
}

export default Skills