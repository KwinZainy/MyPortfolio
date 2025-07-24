import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
      <div className=' bg-[#073267] p-5'>
      <h1 className=' text-[30px] text-white text-center font-bold font-serif'>Don’t Be a Stranger</h1>
      <p className=' text-[20px] text-white text-center font-medium font-sans'>Contact Me</p>
      </div>
      <div className=' flex justify-center items-center gap-4 my-24  '>
      <section className=' w-[40%] '>
        <p className=' mb-4  text-[18px] font-medium'>“Feel free to reach out if you’d like to work together, have a project in mind, or just want to connect. I’m always open to new opportunities and happy to chat!”</p>
        <div className=' '>
          <p className=' pb-2 text-[20px] font-bold'>Name: <span className=' text-[18px] font-normal italic'>Gbadamosi Blessing</span></p>
          <p className=' pb-2 text-[20px] font-bold'>Email: <span className=' text-[18px] font-normal italic'>gbadamosiblessing651@gmail.com</span></p>
          <p className=' pb-2 text-[20px] font-bold'>Address: <span className=' text-[18px] font-normal italic'>Lagos, Nigeria.</span></p>
          <p className=' pb-2 text-[20px] font-bold'>Phone Number: <span className=' text-[18px] font-normal italic'>+234 8144808482</span></p>
        </div>
      </section> 
      <section className='' >
        <div className=' flex gap-6 mb-4'>
        <div>
        <input type="text" name='Name' placeholder=' Name'  className=' border-gray-400 rounded-[10px]  border-1 p-3 '/>
        </div>
        <div >
          <input type="text" name='email' placeholder=' Email' className=' border-gray-400 rounded-[10px]  border-1 p-3 '/>
        </div>
        </div>
        <div >
          <input type="text" name="subject" placeholder='Subject' className='border-gray-400 rounded-[10px]  border-1 p-3 mb-4 w-full' />
        </div>
        <div>
          <input type="text" name="message" placeholder=' Message'  className=' border-gray-400 rounded-[10px] border-1 px-3 pt-3 h-24 mb-4 w-full'/>
        </div>
        <button className=' bg-[#074188]  p-3 rounded-md text-[18px] font-medium text-white '>Send Message</button>
      </section>
    </div>
    </div>
  )
}

export default Contact