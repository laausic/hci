import Link from "next/link";

export const BASE_API_URL = "https://my-json-server.typicode.com/jsaric21/fetch-test"; // Replace with your image API URL

const fetchImageById = async (id) => {
  const response = await fetch(`${BASE_API_URL}/photos/${id}`);
  return response.json();
};

export default async function PhotoPage({params}){
  const post = await fetchImageById(params.id);
  const { id, title, thumbnailUrl} = post;

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-10">
      <article className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden p-8">
        <Link
          href="/gallery"
          className="inline-flex items-center text-gray-500 hover:text-gray-800 transition-colors duration-200 mb-6 text-sm font-medium">
          Back to gallery
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-6 text-center">
          {title}
        </h1>
        <img
          src={thumbnailUrl}
          alt="car photo"
          className="w-full h-auto rounded-lg shadow-sm mb-6"
        />
      </article>
    </main>
  );
  
};

