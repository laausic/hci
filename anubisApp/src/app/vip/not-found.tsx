import Link from "next/link"

export default function NotFound(){
return(
  <>
    <div className="flex flex-col items-center justify-center h-screen text-center">
    <h1 className="text-6xl font-medium text-black max-sm:text-3xl">OH, YOU'VE HIT A WAVE</h1>
    <p className="text-3xl mt-8 mb-8 font-poppins text-gray-600 max-sm:text-xl">
        No worries – this ride is built for it!<br/>
        Let’s cruise back to the homepage.
    </p>
    <Link href="/" className="text-white bg-[#519078] hover:bg-[#407a64] rounded-lg px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg m-3">
    <button>Return</button>
    </Link>
  </div>
  </>
)
}