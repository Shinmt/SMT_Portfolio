import React from 'react'
import {BiPhoneCall} from 'react-icons/bi'
import {LuSend} from 'react-icons/lu'
 
const Contact = () => {
  return (
    <div name='Contact' className=' w-full h-auto sm:max-h-auto bg-gradient-to-b from-pink-200 to-blue-200 flex items-center justify-center p-4 '>
        <form method='POST' action='https://getform.io/f/6c3fafff-8a0d-48d2-a0eb-80fe909587f0' className=' flex flex-col max-w-[600px] w-full sm:max-h-max'>
          <div className=' pb-8 text-center'>
            <p className=' text-4xl font-bold inline border-b-2 border-b-pink-500'>Contact</p>
            <p className='py-6'> You can submit this form for appointment or contact me via phone.<br/>
            <span  className=' text-pink-500 font-extrabold text-xl'>THANK YOU!</span>
            </p>
          </div>

          <input className=' p-2' type='text' placeholder='Name' name='name'></input>
          <input className=' my-4 p-2' type='email' placeholder='Email' name='email'></input>
          <textarea className=' p-2' name='message' rows='10' placeholder='Message'></textarea>
          <div className=' grid grid-cols-2'>
          <button className=' text-black font-semibold hover:bg-pink-200 hover:text-pink-500 my-0 mx-auto flex items-center px-4 py-3 rounded-xl '><LuSend className='mr-3' />Send!</button>
          <a className=' text-base font-semibold hover:bg-pink-200 hover:text-pink-500 my-0 mx-auto flex items-center px-4 py-3 rounded-xl ' href='tel:09762018497'><BiPhoneCall className='mr-3' />Call Now!</a>
          </div>
        </form>
    </div>
  )
}

export default Contact