"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {supabase} from "@/lib/auth-client"

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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Private Content</h1>
      <p className="text-lg">Welcome, {user.email}! This is your private space.</p>
    </div>
  );
}