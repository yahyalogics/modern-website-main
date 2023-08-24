import React, { useState } from 'react'

import { close, logo, menu , blogo } from "./../assets"
import { navLinks } from "./../constants"

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={blogo}  className="w-[150px] h-[100px]" />

      {/* Desktop Device Menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks && navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active == nav.title ? "text-white" : "text-dimWhite"} ${index == navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>


      {/* Mobile Device Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div className={` ${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex justify-end items-start flex-1 flex-col'>
            {navLinks && navLinks.map((nav, index) => (
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active == nav.title ? 'text-white' : 'text-dimWhite'}  ${index == navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar