"use client"
import React from 'react'
import {footerLinks, footerLinksSocial} from '@/constants'
import {footerLinksLocal} from '@/constants'
import { NavbarLinksLocal } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#fff1de] to-[#faf2e7] bg-opacity-50">
          <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-3 w-80'>
            <h1 className="logo text-[#4F1903] font-extrabold text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">LocaLuxe</h1>
            <p className='font-inter font-medium text-black '>
            Immobilière œuvre depuis deux décennies à améliorer le secteur 
            de l’urbanisme en Algérie en implantant des résidences aux conceptions 
            architecturales originales et contemporaines dans des localités à fort 
            potentiel de développement : Ouled Fayet, Chéraga, Draria, Hydra, Sidi 
            Yahia, Sebala, Birkhadem, El Madania, Kouba, El Achour ou encore Tipaza. 
            Nos services couvrent l’ensemble des activités liées au domaine de la 
            construction et la promotion immobilière ainsi que la gestion de 
            copropriété et la gestion locative.
            </p>
            </div>
            <div className='footer__links flex flex-col ml-16 mb-20'>
              {footerLinks.map((link)=>(
                <div key={link.title} 
                className='footer__link '>
                <h3 className='font-bold text-[#4F1903] '>
                    {link.title}
                    
                </h3>
                {link.links.map((item)=>(
                  <Link
                  key={item.title}
                  href={item.url}
                  className="text-black flex"
                  >
                  {item.icone && React.createElement(item.icone, { size: 20, className: 'mr-2' })}  
                  {item.title}
                  </Link>
                ))}
                </div>
              ))}
            </div>
            <div className='footer__linkslocal'>
             {footerLinksLocal.map((link)=>(
                <div key={link.title} 
                className='footer__link '>
                <h3 className='font-bold text-[#4F1903] '>
                    {link.title}
                    
                </h3>
                {link.links.map((item)=>(
                  <button
                  key={item.title}
                  className="text-[#DBCECE] bg-[#3D1C0F] flex justify-center rounded-xl w-28"
                  >
                  {item.title}
                  </button>
                ))}
                </div>
                ))}
                </div>
                
            </div>
            <div >
            {NavbarLinksLocal.map((link)=>(
              <div key={link.title} className="flex flex-row gap-5 justify-center w-full m-2">                {link.links.map((item)=>(
                  <Link
                  key={item.title}
                  href={item.url}
                  >
                    {item.title}
                  </Link>
                ))}
                </div>
                ))}
            </div>
            <div className='border-t p-2 border-black-100'>
            
             {footerLinksSocial.map((link)=>(
                <div key={link.title} className="flex flex-row items-center justify-center gap-2">
                <h3 className='font-light text-[#615E5C] '>
                    {link.title}
                    
                </h3>
                {link.links.map((item)=>(
                  <Link
                  key={item.title}
                  href={item.url}
                  >
                  {item.icone && React.createElement(item.icone, { size: 20, className: 'mr-2' })}  
                  </Link>
                ))}
                </div>
                ))}
                </div>
            
    </footer>
  )
}

export default Footer