import React from 'react'
import HTMLimg from '../assets/html.png'
import CSSimg from '../assets/css.png'
import JavaScriptimg from '../assets/javascript.png'
import ReactJSimg from '../assets/react.png'
import TailwindCssimg from '../assets/tailwind.png'
import Githubimg from '../assets/github.png'
import Figmaimg from '../assets/figma.png'

const image = [
    {
        title: 'HTML',
        img: HTMLimg,
    },
    {
        title: 'CSS',
        img: CSSimg,
    },
    {
        title: 'JAVASCRIPT',
        img: JavaScriptimg,
    },
    {
        title: 'REACT JS',
        img: ReactJSimg,
    },

    {
        title: 'TAILWIND CSS',
        img: TailwindCssimg,
    },
    {
        title: 'GITHUB',
        img: Githubimg,
    },
    {
        title: 'FIGMA',
        img: Figmaimg,
    },
]
const Skills = () => {
  return (
    <div name='Skills' className=' w-full h-auto bg-gradient-to-b from-pink-200 to-blue-200 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '> 
            <div className=' text-center'>
                <p className=' text-4xl font-bold inline border-b-2 border-pink-500 '>Technology</p>
                <p className=' py-6'>These are the technologies I've learned with</p>
            </div>

            <div className=' w-auto grid grid-cols-3 sm:grid-cols-4 py-8 text-center items-center gap-4'>
            {
                image.map ((r,i) => (
                    <div key={i} 
                    className=' shadow-md shadow-current hover:scale-110 duration-500'>
                        <img className=' w-20 mx-auto mt-2' src={r.img} alt={r.title} />
                        <p className=' font-serif my-4' >{r.title}</p>
                    </div>
                ))
            }
            </div>
        </div>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className=' grid grid-cols-2'>
                <div className=' text-center'>
                    <h1 className=' text-4xl font-bold inline border-b-2 border-pink-500 '>Language</h1>
                
                    <div className=' py-6 max-w-[250px] flex flex-col justify-between'>
                        <p className='mb-1 text-left font-medium'>English</p>
                        <div className="w-full bg-blue-300 rounded-full h-1.5 mb-2 items-center">
                            <div className="bg-pink-500 h-1.5 rounded-full" style={{width: "65%"}}></div>
                        </div>
                        
                        <p className='mb-1 text-left font-medium'>Korean</p>
                        <div className="w-full bg-blue-300 rounded-full h-1.5 mb-2 items-center">
                            <div className="bg-pink-500 h-1.5 rounded-full" style={{width: "75%"}}></div>
                        </div>
                    </div>
                </div>

                <div className=' text-center'>
                    <h1 className=' text-4xl font-bold inline border-b-2 border-pink-500 '>Soft Skill</h1>

                    <div className=' py-6 flex flex-col justify-between'>
                        <p>Teamwork</p>
                        <p>Responsibility</p>
                        <p>Flexibility</p>
                        <p>Patience</p>
                        <p>Empathy</p>

                    </div>
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Skills