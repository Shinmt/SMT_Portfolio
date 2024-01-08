import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className=' fixed w-full h-[80px] flex justify-between items-center px-4 bg-white' >
        <div>
            <img src={Logo} alt='Logo img' style={{width: '80px'}} />
        </div>

            <ul className=' hidden md:flex text-pink-600 font-semibold '>
                <li>
                    <Link to="Profile" smooth={true} duration={500}>Profile</Link>
                </li>
                <li>
                    <Link to="Projects" smooth={true} duration={500}>Project</Link>
                </li>
                <li>
                    <Link to="Skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li>
                    <Link to="Others" smooth={true} duration={500}>Others</Link>
                </li>
                <li>
                    <Link to="Contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

        {/* hambuger */}
        <div onClick={handleClick} className=' md:hidden z-10 text-pink-600 font-semibold'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <div>
            <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-pink-200 to-blue-200 flex flex-col justify-center items-center text-pink-600 font-semibold'}>
                <li className=' py-6 text-2xl'>
                <Link onClick={handleClick} to="Profile" smooth={true} duration={500}>Profile</Link>
                </li>
                <li className=' py-6 text-2xl'>
                <Link onClick={handleClick} to="Projects" smooth={true} duration={500}>Project</Link>
                </li>
                <li className=' py-6 text-2xl'>
                <Link onClick={handleClick} to="Skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li className=' py-6 text-2xl'>
                <Link onClick={handleClick} to="Others" smooth={true} duration={500}>Others</Link>
                </li>
                <li className=' py-6 text-2xl'>
                <Link onClick={handleClick} to="Contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>
        </div>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-white font-mono '>
            <ul>
                <li>
                    <a className=' w-[120px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'
                    href='https://www.linkedin.com/in/shin-min-23b31a263/'>
                        Linkedin <FaLinkedin size={25} />
                    </a>
                </li>
                <li>
                    <a className=' w-[120px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'
                    href='https://github.com/Shinmt'>
                        Github <FaGithub size={25} />
                    </a>
                </li>
                <li>
                    <a className=' w-[120px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'
                    href='mailto:shinmin.smt@gmail.com'>
                        Mail <HiOutlineMail size={25} />
                    </a>
                </li>
                {/* <li>
                    <a className=' w-[120px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-400'
                    href='https://drive.google.com/file/d/1CNR2g9vO78hAo_xqLv4lpsJsl80aM-bn/view?usp=sharing'>
                        Resume <BsFillPersonLinesFill size={25} />
                    </a>
                </li> */}
            </ul>

        </div>

    </div>
  )
}

export default Navbar