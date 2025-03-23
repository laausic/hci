"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from 'contentful';
import Footer from '../components/footer';

export default function GalleryPage() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

useEffect(() => {
  async function fetchData() {
    try {
      const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
      });

      const res = await client.getEntries({ content_type: "anubisGallery" });
      console.log(res.items);
      setImages(res.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  fetchData();
}, []);


  return (
    <div className='overflow-x-hidden'>
    <main className="flex min-h-screen flex-col items-center p-5 md:p-10">
      <h1 className="text-4xl md:text-5xl font-thin mb-4 mt-5 text-center">GALLERY</h1>
      <div className="w-24 md:w-32 h-1.5 bg-[#519078] mb-6 md:mb-8"></div>
  
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
        {images.map((item) => (
          <Link key={item.sys.id} href={`/gallery/${item.fields.customId}`}>
            <img
              src={item.fields.thumbnail.fields.file.url}
              alt={item.fields.title}
              className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
            />
          </Link>
        ))}
         
      </div>
    </main>
    <Footer />
  </div>
  
  );
}
