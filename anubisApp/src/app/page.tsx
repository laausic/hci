import "@fontsource/michroma"; 
import "@fontsource/poppins"; 

import Footer from './components/footer.jsx';

export default function Home() {
  return (
    <>
    <main className="flex flex-col justify-center items-start p-4" style={{ backgroundImage: `url(/img/image.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100%',
     }}>
      <div className="border border-lightGray p-4 md:p-6 rounded-lg bg-opacity-60 bg-gray-300 opacity-90">
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight font-michroma mb-4">
            Power, Elegance, <br /> Perfection<span className="text-[#519078]">.</span>
          </h2>
          <h3 className="text-xl md:text-3xl font-light font-poppins">
            Crafted to Surpass Every Expectation.
          </h3>
        </div>
        <button className="text-white bg-[#519078] hover:bg-[#407a64] rounded-lg px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg m-3">
          Order Now
        </button>  
         </main>

   <div className="flex flex-col md:flex-row p-4 md:p-8 mt-20">
      <div className="w-full md:w-1/2 p-4">
        <img src="/img/home-page-2.jpg" alt="Image" className="w-full rounded-lg" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:p-8">
      <p className="text-lg md:text-2xl font-poppins font-light max-w-lg text-center md:text-left">Engineered to conquer the waves, the Anubis Jet Car combines
         revolutionary jet propulsion with a sleek, aerodynamic design. 
         Designed for unmatched performance and modern elegance, 
         it sets a new standard of excellence on water.
        </p>
        <button className="text-white bg-black hover:bg-[#686d6b] rounded-lg px-8 py-4 text-lg m-3">Learn More</button>
      </div>
    </div>

    <div className="w-full h-[1px] bg-gray-300 my-6"></div>

<div className="flex flex-wrap gap-8 justify-center p-8 mt-20">
  {/* Section 1 */}
  <div className="w-[calc(50%-30px)] bg-cover bg-center h-80 rounded-lg shadow-lg max-lg:w-full">
    <div 
    className="flex h-3/5 bg-cover bg-center rounded-t-lg justify-center items-end" 
    style={{ backgroundImage: "url('/img/home-cutting-edge.jpg')" }}>
      <p className="text-3xl font-bold text-white mb-4">CUTTING EDGE</p>
    </div>

  <div className="h-2/5 flex items-center justify-start bg-[#519078] rounded-b-lg">
  <p className="text-xl font-thin text-white font-poppins mb-4 ml-4 max-w-lg max-sm:truncate max-sm:overflow-hidden">
  Integrate advanced technology features that enhance safety and usability.
</p>
 <button className="text-sm font-semibold text-black flex self-end mr-8 mb-4 whitespace-nowrap">DISCOVER MORE &gt;&gt;</button>
  </div>
  </div>


  {/* Section 2 */}
  <div className="w-[calc(50%-30px)] bg-cover bg-center h-80 rounded-lg shadow-lg max-lg:w-full">
    <div className="flex h-3/5 bg-cover bg-center rounded-t-lg justify-center items-end" 
    style={{ backgroundImage: "url('/img/home-interior.png')" }}>
      <p className="text-3xl font-bold text-white mb-4">PREMIUM INTERIOR</p>
  </div>

  <div className="h-2/5 flex items-center justify-start bg-[#519078] rounded-b-lg">
    <p className="text-xl font-thin text-white font-poppins mb-4 ml-4 max-w-lg max-sm:truncate max-sm:overflow-hidden">Choose from premium materials: bespoke leather, suede, and exclusive fabrics.</p>
    <button className="text-sm font-semibold text-black flex self-end mr-8 mb-4 whitespace-nowrap">DISCOVER MORE &gt;&gt;</button>
    </div>
  </div>


  {/* Section 3 */}
  <div className="w-[calc(50%-30px)] bg-cover bg-center h-80 rounded-lg shadow-lg max-lg:w-full">
    <div className="flex h-3/5 bg-cover bg-center rounded-t-lg justify-center items-end" 
    style={{ backgroundImage: "url('/img/home-exterior.jpeg')" }}>
      <p className="text-3xl font-bold text-white mb-4">EXCLUSIVE EXTERIOR</p>
    </div>

  <div className="h-2/5 flex items-center justify-start bg-[#519078] rounded-b-lg">
    <p className="text-xl font-thin text-white font-poppins mb-4 ml-4 max-w-lg max-sm:truncate max-sm:overflow-hidden">Curate your Anubis’s exterior with bespoke design that elevates exclusivity.</p>
    <button className="text-sm font-semibold text-black flex self-end mr-8 mb-4 whitespace-nowrap">DISCOVER MORE &gt;&gt;</button>
    </div>
  </div>


  {/* Section 4 */}
  <div className="w-[calc(50%-30px)] bg-cover bg-center h-80 rounded-lg shadow-lg max-lg:w-full">
    <div className="flex h-3/5 bg-cover bg-center rounded-t-lg justify-center items-end" 
    style={{ backgroundImage: "url('/img/home-customization.jpg')" }}>
      <p className="text-3xl font-bold text-white mb-4">CUSTOMIZATION</p>
    </div>

  <div className="h-2/5 flex items-center justify-start bg-[#519078] rounded-b-lg">
    <p className="text-xl font-thin text-white font-poppins mb-4 ml-4 max-w-lg max-sm:truncate max-sm:overflow-hidden">Bring your brand’s identity to life with stunning visuals of your vehicle.</p>
    <button className="text-sm font-semibold text-black flex self-end mr-8 mb-4 whitespace-nowrap">DISCOVER MORE &gt;&gt;</button>
    </div>
  </div>
  </div>



  <main
  className="flex flex-col justify-start items-center p-4 mt-20"
  style={{
    backgroundImage: `url(/img/home-explore.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "80vh",
    width: "100%",
    opacity: "80%"
  }}
>
<div className="mt-20 flex flex-row rounded-lg justify-center items-center bg-opacity-30">
  <div className="border border-lightGray p-4 md:p-6 rounded-lg flex flex-row items-center space-x-4">
    <p className="text-lg text-center font-poppins max-w-lg text-black">
      Experience unmatched performance and innovative technology, offering exceptional speed, precision, and safety on the water.
    </p>
    <button className="text-white bg-black hover:bg-[#686d6b] rounded-lg px-8 py-4 text-lg">
      Explore
    </button>
  </div>
</div>
</main>
<Footer/>
   </>
  );
}
