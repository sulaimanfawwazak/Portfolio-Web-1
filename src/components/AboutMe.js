import React from 'react'
import { aboutSection, AppText } from '../constants'
import { laptop, wave } from '../assets'

const AboutMe = () => {
  return (
    <div className='scroll-mt-36'>
      {/* Wave Image */}
      <img src={wave} className='w-screen absolute'/>

      {/* Laptop Image */}
      <img src={laptop} className='absolute mt-[-120px] md:mt-[-30px] w-[220px] lg:w-[300px]'/>

      {/* About Me Title */}
      <div className='h-[360px] bg-purple-600 p-5'>
        <h2 className='pt-10 text-[50px] font-semibold text-white text-center'>{AppText.About}
          <span className='text-black'>{AppText.Me}</span>
        </h2>
        <h2 className='text-white text-center mt-10 px-10 md:px-52 lg:px-80'>{AppText.aboutMeDescripion}</h2>
      </div>
      
      {/* Expertise Section */}
      <div className='flex flex-col md:flex-row px-24 mt-[-40px] gap-x-10 justify-center items-center'>
        {aboutSection.map((item, index) => (
          <div className='group flex flex-col items-center transition-colors hover:bg-purple-600 p-4 rounded-md mb-5'>
            <img src={item.image} className='w-[230px] h-[230px] object-cover rounded-md'/>
            <h2 className='group-hover:text-white text-center font-bold mt-3'>{item.title}</h2>
            <h2 className='group-hover:text-gray-50 text-center text-[12px] text-gray-500'>{item.desc}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutMe