import { createClient } from "contentful";
import Link from "next/link";
import { Download } from "lucide-react";

async function getData(customId) {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "anubisGallery",
    "fields.customId": customId, // Query by custom ID
  });

  return res.items.length > 0 ? res.items[0] : null;
}

// Pre-generate paths for each image
export async function generateStaticParams() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ 
    content_type: "anubisGallery" });

  return res.items.map((item) => ({
    id: item.fields.customId,
  }));
}

export default async function ImagePage({ params }) {
  const imageData = await getData(params.id);

  if (!imageData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white text-2xl">
        <p>Image not found</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Centered Back Button */}
      <Link href="/gallery">
        <button className="mb-4 text-center px-4 py-2 text-lg">
          &lt;&lt; BACK TO GALLERY
        </button>
      </Link>
    
      <div className="relative w-full max-w-4xl mt-4">
      <img
        src={imageData.fields.thumbnail.fields.file.url}
        alt={imageData.fields.title}
        className="w-full h-auto max-h-[85vh] sm:max-h-[90vh] object-contain rounded-lg"
      />

        <Download size={48} className="absolute bottom-2 right-2 p-2 transition text-white cursor-pointer" />
    </div>
</div>
  );
}
