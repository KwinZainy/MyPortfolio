import React from 'react'

const Project = () => {
  return (
    <div>
        <h1>Projects</h1>
        <section className=' flex gap-3'>
            <div className='bg-gray-600 p-14 '>
               <a href="">
                <img src="./piggy.jpg" alt="" className=' w-[300px] rounded-[80%] border-white border-2 transition'/>
                <p>Cloned Website</p>
                </a> 
            </div>
            <div className='bg-gray-600 p-14 '>
                <a href="">
                <img src="./bad.jpg" alt="" className=' w-[300px] rounded-[80%] border-white border-2 transition' />
                <p>Food Website</p>
                </a>
                </div>
            <div className='bg-gray-600 p-14 '>
                <a href="">
                <img src="./country.jpg" alt="" className=' w-[300px] rounded-[80%] border-white border-2 transition'/>
                <p>Country</p>
                </a>
            </div>
            <div className='bg-gray-600 p-14 '>
                <a href="">
                <img src="./calculator.jpg" alt="" className=' w-[300px] rounded-[80%] border-white border-2 transition'/>
                </a>
            </div>
            <div className='bg-gray-600 p-14 '>
                <a href="">
                <img src="./form.jpg" alt="" className=' w-[300px] rounded-[80%] border-white border-2 transition'/>
                </a>
            </div>
        </section>
    </div>
  )
}

export default Project