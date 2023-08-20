import React from 'react'
import Ecommerce from '../assets/ecommerce-website.png'
import SVTJapan from '../assets/SVT-Japan.png'

const Projects = () => {
  return (
    <div name='Projects' className=' w-full h-auto pl-4 bg-gradient-to-b from-blue-200 to-pink-200 '>
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className=' text-center '>
                <p className=' text-4xl font-bold inline border-b-2 border-b-pink-500 '>Projects</p>
                <p className='py-6'>Check out some of my projects...</p>
            </div>

            {/* container */}
            <div className=' grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
                
                {/* Grid items */}
                <div style={{backgroundImage: `url(${SVTJapan})`}}
                className=' shadow-md shadow-current group container rounded-md flex justify-center items-center mx-auto content-div'>
                  <div className=' opacity-0 group-hover:opacity-100 text-center '>
                    <span className=' text-xl text-center tracking-wider '>
                      React JS Project
                    </span>

                    {/* hover effect */}
                  <div className='pt-8 text-center'>
                    <a href='https://seventeen-japan-songs.netlify.app'>
                      <button className=' text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-semibold text-md'>DEMO</button>
                    </a>
                    <a href='https://github.com/Shinmt/svt-japan.git'>
                      <button className=' text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-semibold text-md'>CODE</button>
                    </a>
                  </div>
                  </div>
                </div>

                <div style={{backgroundImage: `url(${Ecommerce})`}}
                className=' shadow-md shadow-current group container rounded-md flex justify-center items-center mx-auto content-div'>
                  <div className=' opacity-0 group-hover:opacity-100 text-center '>
                    <span className=' text-xl text-center tracking-wider '>
                      React JS Project
                    </span>

                    {/* hover effect */}
                  <div className='pt-8 text-center'>
                    <a href='https://shin-ecommerce-shop.netlify.app'>
                      <button className=' text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-semibold text-md'>DEMO</button>
                    </a>
                    <a href='https://github.com/Shinmt/ecommercewebsite.git'>
                      <button className=' text-center rounded-lg px-2 py-1 m-2 bg-white text-gray-700 font-semibold text-md'>CODE</button>
                    </a>
                  </div>
                  </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Projects