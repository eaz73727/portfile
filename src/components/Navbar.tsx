import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const Linkedin = 'https://www.linkedin.com/in/wilson-chen-67b029254/'
  const Github = 'https://github.com/eaz73727'
  const Resume = 'https://www.cakeresume.com/me/eaz73727'
  const mail = 'eaz73727@gmail.com'

  const handleNavClick = () => {
    setNav(!nav)
  }

  return (
    <nav className="fixed w-full h-[60px] bg-gray-300 flex justify-between items-center px-4 text-teal-600 shadow-md">
      <div className="w-[240px] flex items-center justify-center text-4xl font-bold">
        <Link className='' to="home">WIlson Chen</Link>
      </div>
      {/* menu */}
      <ul className="hidden md:flex ">
        <li className="py-2 text-xl hover:bg-slate-800 rounded-lg duration-150 hover:text-white">
          <Link className="font-bold" to="home">
            Home
          </Link>
        </li>
        <li className="py-2 text-xl hover:bg-slate-800 rounded-lg duration-150 hover:text-white">
          <Link className="font-bold" to="about">
            About
          </Link>
        </li>
        <li className="py-2 text-xl hover:bg-slate-800 rounded-lg duration-150 hover:text-white">
          <Link className="font-bold" to="skills">
            Skills
          </Link>
        </li>
        <li className="py-2 text-xl hover:bg-slate-800 rounded-lg duration-150 hover:text-white">
          <Link className="font-bold" to="projects">
            Projects
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div
        onClick={handleNavClick}
        className="md:hidden z-10 hover:scale-[1.3] duration-300 active:text-teal-800 cursor-pointer"
      >
        <FaBars size={30} />
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? 'opacity-0 absolute'
            : 'transition-all duration-300 absolute left-0 top-0 w-full h-screen bg-stone-200 flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl hover:bg-slate-800 rounded-lg duration-150 hover:text-white">
          <Link onClick={handleNavClick} to="home">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:bg-slate-800 rounded-lg duration-150 hover:text-white">
          <Link onClick={handleNavClick} to="about">
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:bg-slate-800 rounded-lg duration-150 hover:text-white">
          <Link onClick={handleNavClick} to="skills">
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:bg-slate-800 rounded-lg duration-150 hover:text-white">
          <Link onClick={handleNavClick} to="projects">
            Projects
          </Link>
        </li>
      </ul>
      {/* social media */}
      <div className="hidden md:flex fixed flex-col top-[40%] left-0">
        <ul>
          <li className="flex justify-center items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="flex justify-center items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
              target="_blank"
              rel="noreferrer noopener"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="flex justify-center items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Github}
              target="_blank"
              rel="noreferrer noopener"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="flex justify-center items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#b93a31]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={`mailto:${mail}`}
            >
              E-mail <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
