import React from 'react'

const Others = () => {
  return (
    <div name='Others' className=' w-full h-auto bg-gradient-to-b from-blue-200 to-pink-200 '>
      <div className=' flex flex-col justify-center items-center w-full h-full '>
        <div className='max-w-[1000px] mx-auto p-4 w-full h-full grid grid-cols-2 gap-8 pb-8 pl-4 '>
          
          <div className='sm:text-right'>
            <h1 className='text-4xl font-bold inline border-b-2 border-pink-500'>Passion</h1>
            <p className=' py-4 text-md font-serif '>I have taught myself ReactJS over online courses and continue to progress with a roadmap for becoming a web developer. In this ever-changing technological landscape, I am committed to becoming a proficient full-stack web developer capable of creating diverse software and websites for various industries.</p>
          </div>
          <div className=' py-20 sm:text-left'>
            <h1 className='text-4xl font-bold inline border-b-2 border-pink-500'>Motivation</h1>
            <p className=' py-4 text-lg font-serif '>"Anyone can lose their way. All we need is the courage to walk the unfamiliar and daunting path again. "</p>
          </div>
      </div>

            <div className=' text-center '>
                <h1 className=' text-4xl font-bold inline border-b-2 border-pink-500 '>Hobby</h1>
                <p className=' py-4 '>"Life becomes monotonous and boring by just doing the routine works and not having any hobby.
                <br />These are the activities I enjoy doing in my spare time. These activities make me feel healthy, stronger, and also keep me energized. "</p>

                <div className=' flex flex-col justify-between'>
                    <div className=' text-center'>
                      <p>Reading</p>
                      <p>Dancing</p>
                      <p>Traveling</p>
                      <p>Learning</p>
                      <p>DIY Things</p>
                      <p>Meditation</p>
                    </div>
                  </div>
            </div>
    </div>
  </div>
  )
}

export default Others