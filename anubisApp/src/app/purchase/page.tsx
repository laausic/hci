import Footer from "../components/footer";
import Link from "next/link";


/****
-purchase page shows ELITE and AMBASSADOR options
-Learn More redirects user to vip/warranty (Ambassador page)
-Join Now redirects to Sign in
*****/



export default function PurchasePage() {
    return (
      <div className="overflow-x-hidden">
      {/* Background Image */}
      <main
        className="flex flex-col justify-center items-start p-4 bg-cover bg-center bg-no-repeat h-screen w-full max-sm:h-80"
        style={{
          backgroundImage: 'url(/img/vip-2.png)',
          backgroundSize: '100% auto'
        }}>

        <div className="p-4 mb-72 md:p-6">
          <h1 className="text-5xl font-light font-michroma max-sm:hidden">
              Only way to become ELITE <br /> is to drive ELITE.
          </h1>
        </div>
      </main>
      
      <div className="relative w-full flex justify-center items-center h-full max-sm:flex-col max-sm:p-4">
        <div className="bg-white p-8 rounded-2xl w-3/4 flex max-sm:w-full max-sm:flex-col">
          {/* Left Section */}
          <div className="w-3/5 p-4 max-sm:w-full">
            <p className="text-gray-600 mb-4 font-poppins text-lg max-w-lg max-sm:text-base max-sm:text-center">
              It’s more than ownership, it’s a commitment
              to your ultimate satisfaction and exclusivity. 
              This package ensures you experience
              the very best in innovation, 
              design, and personalized care.</p>
            <div className="space-x-8 mt-6 flex max-sm:flex-col max-sm:space-x-0 max-sm:space-y-4 max-sm:items-center">
              <button className="bg-black text-white px-8 py-4 rounded-lg shadow hover:bg-gray-700">Learn More</button>
              <button className="bg-[#519078] text-white px-8 py-4 rounded-lg shadow hover:bg-[#284d4d] max-sm:px-8">Access Elite</button>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="w-2/5 p-4 max-sm:w-full max-sm:text-center">
            <ul className="list-disc list-inside text-[#519078] text-lg font-poppins max-sm:hidden">
              <li>24/7 Dedicated Concierge</li>
              <li>Exclusive Test Drives & Previews</li>
              <li>Priority Event Access</li>
              <li>Tailored Personalization Services</li>
              <li>Priority Aftercare Services</li>
              <li>Global Networking Opportunities</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <main
        className="flex flex-col justify-center items-start p-4 bg-cover bg-center bg-no-repeat w-full sm:h-auto"
        style={{
          backgroundImage: `url(/img/vip-1.png)`,
        }}>

        <div className="p-4 mb-96 md:p-6">
          <h1 className="text-5xl font-light font-michroma max-sm:text-2xl max-sm:hidden">
            Influence with STYLE <br /> represent with AMBASSADOR.
          </h1>
        </div>
      </main>

      <div className="relative w-full flex justify-center items-center h-full max-sm:flex-col max-sm:p-4">
        <div className="bg-white p-8 rounded-2xl w-3/4 flex max-sm:w-full max-sm:flex-col">
          {/* Left Section */}
          <div className="w-3/5 p-4 max-sm:w-full">
            <p className="text-gray-600 mb-4 font-poppins text-lg max-w-lg max-sm:text-base max-sm:text-center">
              Crafted for influencers and tastemakers 
              who redefine luxury living. With exclusive
              media tools, event access, and branding opportunities, 
              this package ensures you stay at the forefront 
              of elegance and innovation.</p>
            <div className="space-x-8 mt-6 flex max-sm:flex-col max-sm:space-x-0 max-sm:space-y-4 max-sm:items-center">
              <Link href="./vip/warranty">
              <button className="bg-black text-white px-8 py-4 rounded-lg shadow hover:bg-gray-700 max-sm:px-8">Learn More</button>
              </Link>
              <Link href="./vip/signin">
                <button className="bg-[#519078] text-white px-8 py-4 rounded-lg shadow hover:bg-[#284d4d] max-sm:px-10">Join Now</button>
              </Link>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="w-2/5 p-4 max-sm:w-full max-sm:text-center">
            <ul className="list-disc list-inside text-[#519078] text-lg font-poppins max-sm:hidden">
              <li>Media Kits for Content Creation</li>
              <li>Invitations to Launch Events</li>
              <li>Access to Demo Units</li>
              <li>Collaboration Opportunities</li>
              <li>Personal Support Team</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-400 w-full mt-5"></div>
      <Footer />
    </div>
    );
  }
