import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import image from '../assets/Profile.jpg'

const Profile = () => {

  return (
    <div name='Profile' className=' w-full h-screen bg-gradient-to-b from-pink-200 to-blue-200 '>
      <div className=' flex flex-col justify-center w-full h-full '>
        
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 pb-8 pl-4 '>
          <div className=' m-6 sm:text-right'>
            <p className='text-4xl font-bold inline border-b-2 border-pink-500'>Profile</p>
          </div>
          <img className='w-20 h-20 object-cover rounded-full shadow-md shadow-current hover:scale-110 duration-500' src={image} alt='SMT'></img>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
          <div className=' text-3xl sm:text-right font-medium'>
            <p>Hi. My name is <br /><span className='text-pink-500 font-extrabold '>Shin Min Thwe</span>.<br /> 
            Nice to meet you. <br /> Please take a look around. </p>
          </div>

          <div className='font-serif'>
            <p className=' text-lg '>I am an energetic girl who is willing to become a professional developer, 
              passionate about my goals, and always thrive in what I do. </p>
            <a href='https://drive.google.com/file/d/1L5-YWGutBoidemtXmQemXFyWf_LTHauS/view?usp=sharing' >
              <button className=' border border-pink-500 group text-black mt-4 px-4 py-2 mr-auto rounded-lg flex items-center
            hover:bg-pink-200 ease-in-out duration-300 '>View my certificate
              <span className=' group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
              </span>
              </button>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Profile