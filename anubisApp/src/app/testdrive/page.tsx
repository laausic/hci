import Footer from "../components/footer";

export default function TestDrivePage() {
    return (
      <div className="overflow-x-hidden">
      <main className="flex flex-col justify-center items-start p-4 bg-cover bg-center bg-no-repeat w-full min-h-[20rem] sm:h-screen"
        style={{
        backgroundImage: `url(/img/testdrive-background.png)`,
        }}></main>

      <div className="max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Section - Repeat this for each city */}
        {["SINGAPORE", "DUBAI", "MIAMI", "SPLIT"].map((city, index) => (
          <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold">{city}</h2>
              <div className="w-32 h-1 bg-[#519078] mt-2"></div>
            </div>
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('/img/${city.toLowerCase()}.png')` }}></div>
            <div className="p-8 relative">
            <button className="text-sm font-semibold text-[#519078] absolute bottom-4 right-4 whitespace-nowrap">
              SCHEDULE &gt;&gt;
            </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    );
  }
  