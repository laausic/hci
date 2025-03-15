"use client"

import Footer from "../components/footer";
import { useState } from "react";

export default function TestDrivePage() {
  const cities = [
    { name: "SINGAPORE", region: ["March", "April", "May"], image: "singapore.png" },
    { name: "DUBAI", region: ["June", "July", "August", "November"], image: "dubai.png" },
    { name: "MIAMI", region: ["March", "April", "May", "June", "July", "August"], image: "miami.png" },
    { name: "CAPE TOWN", region: ["December", "January", "February"], image: "cape_town.png" },
    { name: "RIO DE JANEIRO", region: ["September", "October", "December", "January", "February"], image: "rio de janeiro.png" },
    { name: "PHUKET", region: ["November", "December", "January", "February"], image: "phuket.png" },
    { name: "BORA BORA", region: ["December", "January", "February"], image: "bora_bora.png" },
    { name: "SPLIT", region: ["June", "July", "August", "September", "October"], image: "split.png" }
  ];
  

  const [selectedRegion, setSelectedRegion] = useState(""); // Default: Show all

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const uniqueRegions = ["All Months", ...months];

  // Filter function
  const filteredCities =
    selectedRegion && selectedRegion !== "All Months"
      ? cities.filter(city => city.region.includes(selectedRegion)) // Checks arrays
      : cities;


     /* <main className="flex flex-col justify-center items-start p-4 bg-cover bg-center bg-no-repeat w-full min-h-[20rem] sm:h-screen"
        style={{
        backgroundImage: `url(/img/testdrive.png)`,
        }}></main>*/
    return (
    <div className="overflow-x-hidden">
      <h1 className="text-center text-4xl font-semibold mt-6">Before You Buy, Take It for a Spin!"</h1>
      <div className="max-w-6xl mx-auto py-8">
      {/* Dropdown Filter */}
      <div className="mb-6 text-center flex flex-row">
      <p className="text-xl px-4 py-2">Available at:</p>
        <select
          className="border px-4 py-2 rounded-md"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {uniqueRegions.map((region) => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>
      </div>

      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      {filteredCities.length > 0 ? (
        filteredCities.map((city, index) => (
          <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold">{city.name}</h2>
              <div className="w-32 h-1 bg-[#519078] mt-2"></div>
            </div>
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('/img/${city.name.toLowerCase()}.png')` }}></div>
            <div className="p-8 relative">
            <button className="text-sm font-semibold text-[#519078] absolute bottom-4 right-4 whitespace-nowrap">
              SCHEDULE &gt;&gt;
            </button>
            </div>
          </div>
        ))
        ) : (
          // **Show message if no cities match the selected month**
          <p className="text-center text-gray-500 text-xl">Sorry, there's no available city in this month.</p>
        )}
      </div>
      
      <div className="border-t border-gray-400 w-full mt-12"></div>
      <Footer />
    </div>
    );
  }
  