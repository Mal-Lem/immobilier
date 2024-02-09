"use client"
import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"
import { useState } from "react"
import { NavbarLinksLocal } from "@/constants"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleScroll = () => {}

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-full mx-8 mt-6 sm:flex sm:justify-between items-center sm:px-6 px-4 py-4 rounded-2xl bg-white bg-opacity-35 backdrop-blur-sm backdrop-filter">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <Link href="/">
            <h1 className="logo font-extrabold text-xl xl:text-2xl ">LocaLuxe</h1>
          </Link>
          {/* Bouton pour la responsivité mobile et tablette */} 
          <button className="sm:hidden focus:outline-none" onClick={toggleLinks}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`sm:flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 font-semibold ${showLinks ? 'flex-col' : 'hidden'}`} style={{ marginTop: showLinks ? '5px' : '0', marginBottom: showLinks ? '5px' : '0' }}>
          {NavbarLinksLocal.map((link)=>(
            <div key={link.title} className="flex flex-col sm:flex-row gap-4">
              {link.links.map((item)=>(
                <Link
                  key={item.title}
                  href={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </ul>
        <CustomButton
          title="Connexion"
          btnType="button"
          containerStyles="bg-[#2c5658] text-[#DBCECE] rounded-xl sm:ml-4"
          handleClick={handleScroll}
        />
      </nav>
    </header>
    )
}
export default Navbar