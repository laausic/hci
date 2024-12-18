"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

const fetchImages = async () => {
  const response = await fetch('https://my-json-server.typicode.com/jsaric21/fetch-test/photos');
  return response.json();
};

const GalleryPage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPhotos = async () => {
      const data = await fetchImages();
      setPhotos(data);
      setLoading(false);
    };
    getPhotos();
  }, []);


  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight mb-10">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <Link href={`/gallery/${photo.id}`}>
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-center text-gray-800 font-semibold truncate">{photo.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GalleryPage;
