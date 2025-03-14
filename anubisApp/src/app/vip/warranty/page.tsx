import React from "react";
import Footer from "@/app/components/footer";
import Link from "next/link";

const AmbassadorPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 overflow-x-hidden">
      {/* Back Button */}
      <Link href="/purchase">
      <div className="text-center text-lg sm:text-2xl mb-6 font-poppins hover:text-gray-500">
        &lt;&lt; BACK TO VIP
      </div>
      </Link>

      {/* Title */}
      <h1 className="text-center text-5xl max-sm:text-2xl font-thin tracking-widest text-[#519078]">
        AMBASSADOR
      </h1>

      {/* Hero Image */}
      <div className="my-8 sm:my-12">
        <img
          src="/img/ambassador.webp"
          alt="Ambassador Car"
          className="w-full rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Media Kits Section */}
      <div className="text-center my-12 px-2 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-thin">MEDIA KITS FOR CONTENT CREATION</h2>
        <p className="text-[#519078] text-lg sm:text-xl mt-4 font-poppins text-justify">
          Our media kits include professionally curated photos, videos, and branding elements, 
          ensuring your visuals align with the sophistication and innovation of the Anubis.
          Whether you're crafting social media posts, promotional campaigns, or editorial content,
          these resources provide the perfect foundation to create stunning, high-impact visuals
          that capture attention and resonate with your audience.
        </p>
      </div>

      {/* Opportunities Section */}
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="/img/miami.png"
          alt="Test Drive"
          className="w-full md:w-1/2 object-cover rounded-lg"
        />
        <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-black text-center mb-5">7</h2>
          <p className="text-black text-xl sm:text-2xl tracking-wide mb-4 md:ml-5">
            O P P O R T U N I T I E S
          </p>
          <div className="w-20 h-1 bg-[#519078] mb-8 md:ml-5 mx-auto md:mx-0"></div>
          <p className="text-black text-lg font-poppins max-w-[32ch] mx-auto md:ml-5">
            We’re offering exclusive test drives for our Demo Units.
          </p>
        </div>
      </div>

      {/* Personal Support Section */}
      <div className="text-center my-12 px-2 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-thin">PERSONAL SUPPORT TEAM</h2>
        <p className="text-[#519078] text-lg sm:text-xl mt-4 font-poppins text-justify">
          As a member, you’ll have a team dedicated to elevating your content and brand,
          offering exclusive resources and personalized assistance to help you thrive.
          From managing your creative schedule to securing unique opportunities,
          this team ensures you receive the treatment every creator deserves.
        </p>
      </div>

      {/* Monthly Events Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-8">
        <div className="text-center md:text-left w-full md:w-1/2">
          <h2 className="text-black text-xl sm:text-2xl tracking-wide mb-4">M O N T H L Y</h2>
          <div className="w-20 h-1 bg-[#519078] mb-8 mx-auto md:mx-0"></div>
          <p className="text-black text-lg font-poppins max-w-[32ch] mx-auto md:mx-0">
            We’re hosting Launch Events that lead to Collaboration Opportunities.
          </p>
        </div>
        <img
          src="/img/contact-2.jpg"
          alt="Launch Event"
          className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0"
        />
      </div>
      <div className="border-t border-gray-400 w-full mt-5"></div>
      <Footer/>
    </div>
  );
};

export default AmbassadorPage;
