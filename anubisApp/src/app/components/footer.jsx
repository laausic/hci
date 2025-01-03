"use client"
import { useState } from "react";


export default function Footer(){
    const [isOpen, setIsOpen] = useState(false);
    const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
    const [isCareerOpen, setIsCareerOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleQuickLinksMenu = () => setIsQuickLinksOpen(!isQuickLinksOpen);
    const toggleCareerMenu = () => setIsCareerOpen(!isCareerOpen);
  
    return(
    <footer className="bg-white text-[#519078] py-10">
      <div className="container mx-10 px-4 text-xl">
        <div className="flex flex-wrap justify-between items-start">

          <div className="sm:w-1/4 mb-6 sm:mb-0 flex flex-col items-center justify-center text-center">
            <img src={'/img/logo.jpg'} alt="Logo" className="w-32" />
            <p className="text-center mt-2 text-xl text-gray-500 max-sm:hidden">"Chase The Waves"</p>
          </div>

        {/* Quick Links */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
        <h3 className="text-xl font-semibold mb-4 cursor-pointer sm:cursor-default"
            onClick={() => toggleQuickLinksMenu()}>Quick Links
        <span className="sm:hidden ml-2">{isQuickLinksOpen ? "▲" : "▼"}</span>
        </h3>

        <ul className={`space-y-2 text-xl ${isQuickLinksOpen ? "block" : "hidden"} sm:block`}>
              <li><a href="/" className="hover:text-[#519078]">Discover</a></li>
              <li><a href="/vip" className="hover:text-[#519078]">VIP</a></li>
              <li><a href="/gallery" className="hover:text-[#519078]">Gallery</a></li>
              <li><a href="/testdrive" className="hover:text-[#519078]">Test Drive</a></li>
              <li><a href="/contact" className="hover:text-[#519078]">Contact</a></li>
        </ul>
        </div>

        {/* Visit Us */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
        <h3 className="text-xl font-semibold mb-4 cursor-pointer sm:cursor-default"
            onClick={() => toggleMenu()}>Visit Us
        <span className="sm:hidden ml-2">{isOpen ? "▲" : "▼"}</span>
        </h3>
            <ul className={`space-y-2 text-xl ${isOpen ? "block" : "hidden"} sm:block`}>
                <li>Facebook</li>
                <li>X</li>
                <li>Youtube</li>
                <li>Instagram</li>
            </ul>
        </div>

        {/* Contact Us */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
        <h3 className="text-xl font-semibold mb-4 cursor-pointer sm:cursor-default"
            onClick={() => toggleCareerMenu()}>Career
        <span className="sm:hidden ml-2">{isCareerOpen ? "▲" : "▼"}</span>
        </h3>
            <ul className={`space-y-2 text-xl ${isCareerOpen ? "block" : "hidden"} sm:block`}>
                <li><a href="mailto:info@company.com" className="hover:text-[#519078]">View Job Openings</a></li>
                <li>Our Culture & Values</li>
                <li>Diversity & Inclusion</li>
            </ul>
        </div>
        </div>

        {/* Footer Bottom */}
        </div>
        <div className="text-center mt-12 text-gray-500 text-xl">
          <p>&copy; 2025 Anubis Jet Car. All Rights Reserved.</p>
        </div>
      
    </footer>
    )
}
