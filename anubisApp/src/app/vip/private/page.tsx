"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {supabase} from "@/lib/auth-client"
import Footer from "@/app/components/footer";

export default function PrivatePage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/"); // Redirect to sign-in if not logged in
      } else {
        setUser(session.user);
      }
    };

    fetchUser();
  }, [supabase, router]);

  if (!user) {
    return <p>Loading...</p>; // Show a loading state while checking auth
  }

  return (
    <div className="overflow-x-hidden">
    <main className="bg-cover bg-center bg-no-repeat h-screen w-full max-sm:h-90" style={{
      backgroundImage: `url(/img/private.jpeg)`,
    }}>
    <div className="p-8">
      <h2 className="text-2xl font-thin text-center font-poppins">Welcome, {user.user_metadata?.name}</h2>
      <div className="mt-12 sm:mt-20 px-4 sm:ml-4 text-center sm:text-left">
        <p className="text-xl sm:text-3xl font-poppins text-gray-500">Demo Drive</p>
        <p className="text-3xl sm:text-5xl font-michroma mt-3 sm:mt-4">DUBAI, JUMEIRAH</p>
        <p className="text-lg sm:text-3xl font-poppins mt-4 sm:mt-5 text-gray-500">April 4th - April 7th</p>
    
        <button className="mt-6 bg-[#519078] text-white px-6 sm:px-8 py-3 rounded-lg shadow-lg hover:bg-[#284d4d]">
          Learn More
        </button>
      </div>

    </div>
    </main>
    <Footer/>
    </div>
  );
}