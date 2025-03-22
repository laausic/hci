import Footer from "../components/footer";

export default function ContactPage() {
    return (
        <div className="overflow-x-hidden">
      <main className="flex flex-col justify-center items-start p-4 bg-cover bg-center bg-no-repeat
  h-[60vh] w-full sm:h-[50vh] md:h-[40vh] lg:h-[60vh]" style={{ backgroundImage: `url(/img/contact-background.png)`
     }}></main>
    
    <div className="flex flex-col md:flex-row justify-between items-start p-5 max-w-6xl mx-auto">
            <div className="flex-1 mr-5 flex flex-col">
                <h1 className="text-5xl font-thin mb-6 mt-5">CONTACT</h1>
                <div className="w-32 h-1.5 bg-[#519078] mb-8"></div>
                <p className="text-2xl max-w-sm mb-10">
                Have questions or need assistance?
                Fill out the form, and our team will get back to you shortly.</p>
                <img src="/img/contact-2.jpg" alt="contact2" className="rounded-lg w-full md:w-auto max-w-full h-auto object-cover" ></img>
            </div>
            
            <div className="flex-1">
                <form className="space-y-5 flex flex-col justify-around h-full mt-10">
                    <div className="flex flex-col font-poppins">
                        <input type="text" id="name" name="name" placeholder="Name" required className="p-3 border-b border-gray-300 focus:outline-none" />
                    </div>
                    <div className="flex flex-col font-poppins">
                        <input type="text" id="email" name="email" placeholder="Email" required className="p-3 border-b border-gray-300 focus:outline-none" />
                    </div>
                    <div className="flex flex-col font-poppins">
                        <input id="subject" name="subject" placeholder="Subject" required className="p-3 border-b border-gray-300 focus:outline-none"></input>
                    </div>
                    <div className="flex flex-col font-poppins">
                        <textarea id="message" name="message" placeholder="Message" required className="mt-20 p-3 border border-gray-300 rounded-lg h-32"></textarea>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="terms" name="terms" required className="mr-2" />
                        <label htmlFor="terms" className="font-medium font-poppins">I agree with <span className="text-[#519078] font-poppins">Privacy policy</span> and <span className="text-[#519078] font-poppins">Terms of use</span> </label>
                    </div>
                    <button type="submit" className="w-2/5 p-3 bg-black text-white rounded-lg">Send</button>
                </form>
            </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300 my-6"></div>

    <Footer/>
    </div>
    );
  }
  
