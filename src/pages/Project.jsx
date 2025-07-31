import React from 'react'

const Project = () => {
  return (
    <div className=' my-36 mx-12 max-tablet:mb-10 max-tablet:w-[80%] max-tablet:m-auto  max-tablet:mt-24' id='Projects'>
        <p className=' text-[40px] font-serif text-center text-[#074188] font-bold max-mobile:text-[28px]'>Codes In Action</p>
        <h1 className=' mb-15 text-[25px] text-center max-mobile:text-[20px]'>Projects</h1>
        <div >
        <section className=' flex  items-center text-center justify-center gap-6  space-x-4 flex-wrap w-[100%] p-4 mx-auto bg-[074188] '>
            <div className='bg-[#F2F7F8] rounded-3xl shadow-2xl px-16 py-12 max-tablet:mb-6 max-mobile:mb-6 pt-8 transition duration-300 hover:scale-105'>
               <a href="https://piggyvest-with-react-wp53.vercel.app/" target='_blank'  rel=' noopener noreferrer' >
                <img src="./piggy.jpg" alt="" className=' w-[270px] rounded-[80%] border-black border-2 '/>
                <p className=' text-center pt-3 text-[20px] text-[#074188] font-medium'>Piggyvest Clone</p>
                </a> 
            </div>
            <div className='bg-[#F2F7F8] p-14 rounded-3xl shadow-2xl transition max-tablet:mb-6 duration-300 max-mobile:mb-6 hover:scale-105 '>
                <a href="https://bad-pied.vercel.app/ " target=' _blank' rel=' noopener nereferrer'>
                <img src="./bad.jpg" alt="" className=' w-[300px] rounded-[80%] border-black border-2 transition' />
                <p className=' text-center pt-3 text-[20px] text-[#074188] font-medium'>Food Website</p>
                </a>
                </div>
            <div className='bg-[#F2F7F8] p-14 rounded-3xl shadow-2xl transition max-tablet:mb-6 duration-300 max-mobile:mb-6 hover:scale-105 '>
                <a href=" countries-liard-one.vercel.app" target='_blank' rel=' noopener noreferrer'>
                <img src="./country.jpg" alt="" className=' w-[300px] rounded-[80%] border-black border-2 transition'/>
                <p className=' text-center pt-3 text-[20px] text-[#074188] font-medium'>All Countries</p>
                </a>
            </div>
            <div className='bg-[#F2F7F8] p-14 rounded-3xl shadow-2xl mt-8 transition max-tablet:mb-6 duration-300 max-mobile:mb-6 hover:scale-105 '>
                <a href="https://second-cloned-website-meta.vercel.app/" target=' _blank' rel=' noopener noreferrer'>
                <img src="./meta.jpg" alt="" className=' w-[300px] rounded-[80%] border-black border-2 transition'/>
                <p className=' text-center pt-3 text-[20px] text-[#074188] font-medium'>Meta Clone</p>
                </a>
            </div>
            <div className='bg-[#F2F7F8] shadow-2xl p-14 mt-8 rounded-3xl transition max-tablet:mb-6 duration-300 max-mobile:mb-6 hover:scale-105'>
                <a href="https://moove-nu.vercel.app/" target='_blank' rel=' noopener noreferrer'>
                <img src="./moove.jpg" alt="" className=' w-[300px] rounded-[80%] border-black border-2 transition'/>
                <p className=' text-center pt-3 text-[20px] text-[#074188] font-medium'>Moove Clone</p>
                </a>
            </div>
        </section>
        </div>
    </div>
  )
}

export default Project