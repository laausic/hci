import "@fontsource/michroma"; 
import "@fontsource/poppins"; 

import Footer from './components/footer.jsx';

export default function Home() {
  return (
  <div className="overflow-x-hidden">
   <main
    className="flex flex-col justify-center items-start p-4 bg-cover bg-center bg-no-repeat h-screen w-full max-sm:h-80"
    style={{
      backgroundImage: `url(/img/image.png)`,
    }}
  >
    <div className="border border-lightGray p-4 md:p-6 rounded-lg bg-opacity-60 opacity-90 bg-gray-200">
      <h2 className="text-3xl md:text-5xl font-extralight tracking-tight font-michroma mb-4">
        Power, Elegance, <br /> Perfection<span className="text-[#519078]">.</span>
      </h2>
      <h3 className="text-xl md:text-3xl font-light font-poppins max-sm:hidden">
        Crafted to Surpass Every Expectation.
      </h3>
    </div>
    <button className="text-white bg-[#519078] hover:bg-[#407a64] rounded-lg px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg m-3">
      <span className="block sm:hidden">Order</span>
      <span className="hidden sm:block">Order Now</span>
    </button>
  </main>


  <div className="flex flex-col md:flex-row p-4 md:p-8 mt-20">
    <div className="w-full sm:hidden flex flex-col items-start justify-center mb-4">
      <h2 className="text-2xl font-extralight tracking-tight font-michroma">OVERVIEW</h2>
      <div className="w-32 h-1 bg-[#519078] mt-5"></div>
    </div>

    {/* Image for larger screens */}
    <div className="w-full md:w-1/2 p-4 max-sm:hidden">
      <img src="/img/home-page-2.jpg" alt="Image" className="w-full rounded-lg" />
    </div>

    {/* Text for both small and large screens */}
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:p-8">
      <p className="text-lg md:text-2xl font-poppins font-light max-w-lg text-left md:text-left">
        Engineered to conquer the waves, the Anubis Jet Car combines revolutionary jet propulsion with a sleek, aerodynamic design.
        Designed for unmatched performance and modern elegance, it sets a new standard of excellence on water.
      </p>
      <button className="text-white bg-black hover:bg-[#686d6b] rounded-lg px-8 py-4 text-lg m-3 max-sm:hidden">
        Learn More
      </button>
      <button className="text-sm font-thin text-[#519078] flex self-end mt-5 sm:hidden">
        LEARN &gt;&gt;
      </button>
    </div>
  </div>

  <div className="flex flex-wrap gap-8 justify-center p-8 mt-6">

  {/* Section 1 */}
  <div className="w-[calc(50%-30px)] bg-cover bg-center h-80 rounded-lg shadow-lg max-lg:w-full max-sm:hidden">
    <div 
    className="flex h-3/5 bg-cover bg-center rounded-t-lg justify-center items-end" 
    style={{ backgroundImage: "url('/img/home-cutting-edge.jpg')" }}>
      <p className="text-3xl font-bold text-white mb-4 max-sm:hidden">CUTTING - EDGE</p>
    </div>

    <div className="h-2/5 flex items-center justify-start bg-[#519078] rounded-b-lg max-sm:hidden">
      <p className="text-xl font-thin text-white font-poppins mb-4 ml-4 max-w-lg max-sm:truncate max-sm:overflow-hidden">
      Integrate advanced technology features that enhance safety and usability.
      </p>
      <button className="text-sm font-semibold text-black flex self-end mr-8 mb-4 whitespace-nowrap">DISCOVER MORE &gt;&gt;</button>
    </div>
  </div>


    {/*Adjust for mobile phone*/}
    <div className="w-full sm:hidden flex flex-col items-start justify-center">
      <img src="/img/home-cutting-edge.jpg" alt="Image" className="w-full rounded-lg h-2/3" />
      <h2 className="text-xl font-extralight tracking-tight font-michroma mt-3">CUTTING - EDGE</h2>
      <div className="w-32 h-1 bg-[#519078] mt-3"></div>
      <p className="text-lg font-thin text-left text-black font-poppins mt-4 max-w-lg sm:hidden">
         Integrate advanced technology features that enhance safety and usability.
      </p>
      <button className="text-md font-thin text-[#519078] flex self-end mt-5 whitespace-nowrap">DISCOVER &gt;&gt;</button>
    </div>


  {/* Section 2 */}
  <div className="w-[calc(50%-30px)] bg-cover bg-center h-80 rounded-lg shadow-lg max-lg:w-full max-sm:hidden">
    <div className="flex h-3/5 bg-cover bg-center rounded-t-lg justify-center items-end" 
      style={{ backgroundImage: "url('/img/home-interior.png')" }}>
      <p className="text-3xl font-bold text-white mb-4 max-sm:hidden">PREMIUM INTERIOR</p>
    </div>

    <div className="h-2/5 flex items-center justify-start bg-[#519078] rounded-b-lg">
      <p className="text-xl font-thin text-white font-poppins mb-4 ml-4 max-w-lg max-sm:truncate max-sm:overflow-hidden">Choose from premium materials: bespoke leather, suede, and exclusive fabrics.</p>
      <button className="text-sm font-semibold text-black flex self-end mr-8 mb-4 whitespace-nowrap">DISCOVER MORE &gt;&gt;</button>
    </div>
  </div>

     {/*Adjust for mobile phone*/}
     <div className="w-full sm:hidden flex flex-col items-start justify-center">
      <img src="/img/home-interior.png" alt="Image" className="w-full rounded-lg h-40" />
      <h2 className="text-xl font-extralight tracking-tight font-michroma mt-3">PREMIUM INTERIOR</h2>
      <div className="w-32 h-1 bg-[#519078] mt-3"></div>
      <p className="text-lg font-thin text-left text-black font-poppins mt-4 max-w-lg sm:hidden">
        Choose from premium materials: bespoke leather, suede, and exclusive fabrics.      </p>
      <button className="text-md font-thin text-[#519078] flex self-end mt-5 whitespace-nowrap">DISCOVER &gt;&gt;</button>
    </div>


  {/* Section 3 */}
  <div className="w-[calc(50%-30px)] bg-cover bg-center h-80 rounded-lg shadow-lg max-lg:w-full max-sm:hidden">
    <div className="flex h-3/5 bg-cover bg-center rounded-t-lg justify-center items-end" 
    style={{ backgroundImage: "url('/img/home-exterior.jpeg')" }}>
      <p className="text-3xl font-bold text-white mb-4 max-sm:hidden">EXCLUSIVE EXTERIOR</p>
    </div>

    <div className="h-2/5 flex items-center justify-start bg-[#519078] rounded-b-lg">
      <p className="text-xl font-thin text-white font-poppins mb-4 ml-4 max-w-lg max-sm:truncate max-sm:overflow-hidden">Curate your Anubis’s exterior with bespoke design that elevates exclusivity.</p>
      <button className="text-sm font-semibold text-black flex self-end mr-8 mb-4 whitespace-nowrap">DISCOVER MORE &gt;&gt;</button>
    </div>
  </div>

    {/*Adjust for mobile phone*/}
    <div className="w-full sm:hidden flex flex-col items-start justify-center">
      <img src="/img/home-exterior.jpeg" alt="Image" className="w-full rounded-lg h-40" />
      <h2 className="text-xl font-extralight tracking-tight font-michroma mt-3">EXCLUSIVE EXTERIOR</h2>
      <div className="w-32 h-1 bg-[#519078] mt-3"></div>
      <p className="text-lg font-thin text-left text-black font-poppins mt-4 max-w-lg sm:hidden">
      Curate your Anubis’s exterior with bespoke design that elevates exclusivity. </p>
      <button className="text-md font-thin text-[#519078] flex self-end mt-5 whitespace-nowrap">DISCOVER &gt;&gt;</button>
    </div>

  {/* Section 4 */}
    <div className="w-[calc(50%-30px)] bg-cover bg-center h-80 rounded-lg shadow-lg max-lg:w-full max-sm:hidden">
      <div className="flex h-3/5 bg-cover bg-center rounded-t-lg justify-center items-end" 
      style={{ backgroundImage: "url('/img/home-customization.jpg')" }}>
      <p className="text-3xl font-bold text-white mb-4 max-sm:hidden">CUSTOMIZATION</p>
    </div>

    <div className="h-2/5 flex items-center justify-start bg-[#519078] rounded-b-lg">
      <p className="text-xl font-thin text-white font-poppins mb-4 ml-4 max-w-lg max-sm:truncate max-sm:overflow-hidden">Bring your brand’s identity to life with stunning visuals of your vehicle.</p>
      <button className="text-sm font-semibold text-black flex self-end mr-8 mb-4 whitespace-nowrap">DISCOVER MORE &gt;&gt;</button>
    </div>
  </div>

    {/*Adjust for mobile phone*/}
    <div className="w-full sm:hidden flex flex-col items-start justify-center">
      <img src="/img/home-customization.jpg" alt="Image" className="w-full rounded-lg h-40" />
      <h2 className="text-xl font-extralight tracking-tight font-michroma mt-3">CUSTOMIZATION</h2>
      <div className="w-32 h-1 bg-[#519078] mt-3"></div>
      <p className="text-lg font-thin text-left text-black font-poppins mt-4 max-w-lg sm:hidden">
      Bring your brand’s identity to life with stunning visuals of your vehicle.</p>
      <button className="text-md font-thin text-[#519078] flex self-end mt-5 whitespace-nowrap">DISCOVER &gt;&gt;</button>
    </div>

  </div>

    <main
    className="flex flex-col justify-center items-start p-4 bg-cover opacity-80 bg-center bg-no-repeat h-screen w-full max-sm:h-80"
    style={{backgroundImage: `url(/img/home-explore.jpg)`}}>
  
  <div className="mt-20 flex flex-row rounded-lg justify-center items-center bg-gray-300 bg-opacity-40">
    <div className="border border-lightGray p-4 md:p-6 max-md:hidden rounded-lg flex flex-row items-center space-x-4">
      <p className="text-lg text-center font-poppins max-w-lg text-black">
        Experience unmatched performance and innovative technology, offering exceptional speed, precision, and safety on the water.
      </p>
      <button className="text-white bg-black hover:bg-[#686d6b] rounded-lg px-8 py-4 text-lg">
        Explore
      </button>
    </div>
  </div>
  </main>

  <div className="flex flex-col md:flex-row p-4 md:p-8 mt-10">
    <div className="w-full md:hidden flex flex-col items-start justify-center">
      <h2 className="text-2xl font-extralight tracking-tight font-michroma">EVOLUTION</h2>
      <div className="w-32 h-1 bg-[#519078] mt-5"></div>
    </div>
    <p className="text-lg font-poppins max-w-lg text-black mt-5 text-left md:hidden">
        Experience unmatched performance and innovative technology, offering exceptional speed, precision, and safety on the water.
      </p>
      <button className="text-sm font-thin text-[#519078] flex self-end mt-5 md:hidden">
        EXPLORE &gt;&gt;
      </button>
  </div>
  <div className="border-t border-gray-400 w-full mt-5"></div>
  <Footer/>
  </div>
  );
}
