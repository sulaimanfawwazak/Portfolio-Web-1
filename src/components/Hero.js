import React from 'react'
import { AppText } from '../constants'
import { homeImage } from '../assets'

const Hero = () => {
  return (
    <div className='mt-7 px-4 md:px-16 flex flex-col items-center md:flex-row justify-between'>
      <div className=''>
        <h1 className='text-[80px] font-bold'>{AppText.hello}</h1>
        <h1 className='text-[80px] font-bold'>
          {AppText.Iam}
          <span className='text-purple-600'>{AppText.Fawwaz}</span>
        </h1>
        <button className='bg-purple-600 text-white rounded-md px-3 py-2 mt-4 font-semibold transition-all ease-in-out hover:scale-110'>Resume</button>
      </div>
      <img src={homeImage} className='w-[300px] md:w-[400px]'/>
    </div>
  )
}

export default Hero