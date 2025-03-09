"use client";

import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signUp = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const { data, error } = await authClient.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });
    // console.log("Auth user response:", data);
    // await supabase.from("user").insert([
    //   { id: data.user?.id, email, name },
    // ]);

    if (error) {
      alert(error.message);
      console.error("Signup error:", error.message);
    } else {
      console.log("Signup successful:", data);
      
      router.replace("/"); // Redirect after signup
    }

  } catch (err) {
    console.error("Unexpected error:", err);
    alert("An unexpected error occurred.");
  }
};

  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: "url('/img/contact-background.png')"}}>
    <div className="py-12 px-8 sm:px-10 bg-white/80 rounded-lg shadow-lg max-w-md">      
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold font-poppins text-gray-900">
            Start Your Engine – <br/>Create Your Account 
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={signUp}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#519078] hover:bg-[#608078] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <a href="/vip/signin" className="font-medium text-[#519078] hover:text-[#608078]">
          Sign in
        </a>
      </p>
      </div>
    </div>

  );
}