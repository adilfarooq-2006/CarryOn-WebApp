import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div className=" w-full min-h-screen bg-black flex justify-center items-center ">
        <div className="text-white flex mx-15 gap-7">
          <div className="text-8xl w-1/2 font-medium flex flex-col gap-4">
            Support Your Favorite Creators
            <p className="text-2xl">
              Carryon is a platform that allows you to support your favorite creators and connect with them!
            </p>
            <div className="button flex gap-7 items-center">
              <Link href="/login">
              <button className="bg-[#4E36E8] hover:bg-[#4536e8] transition-colors delay-100 text-white p-2 text-2xl px-6 rounded-full font-medium hover:cursor-pointer">
                Login
              </button></Link>
              <span className="text-2xl underline underline-offset-4 hover:cursor-pointer">Explore Creators</span>
            </div>
          </div>
          <div className="flex w-1/2 justify-center items-center">
            <Image className="" width={450} height={450} src="/icons/hero.png.png" alt="hero image" />
          </div>
        </div>
      </div>

      <div className="creators flex flex-col items-center justify-center gap-4 mt-10 p-5  container mx-auto">
        <h1 id="creators" className="font-bold text-5xl text-[#4E36E8]">Support your favorite creators</h1>
        <p className="text-2xl">CarryOn make it easier to support your favorite content creators</p>
        <div className="cards flex gap-5">
          <div className="card1 w-[300px] h-[400px] relative bg-black rounded-xl overflow-hidden group">
            <Image
              fill
              className="grayscale object-cover group-hover:grayscale-0 transition duration-500 z-0"
              src="/icons/CodeWithHarry.png"
              alt="Code With Harry"
            />

              {/* Bottom overlay transition */}
            <div className="absolute bottom-0 w-full bg-[#4E36E8] text-white p-4 rounded-t-xl z-10 
                 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 
                 transition-all duration-500 ease-in-out">
              <h3 className="font-semibold text-lg">Code with Harry</h3>
              <p className="text-sm mt-1">
                CodeWithHarry is a popular YouTube content creator who provides tutorials and courses on various programming languages and technologies.
              </p>
              <div className="absolute top-5 right-2 w-6 h-6 bg-teal-300 rounded-full" />
            </div>
          </div>

          <div className="card2 w-[300px] h-[400px] relative bg-black rounded-xl overflow-hidden group">
            <Image
              fill
              className="grayscale object-cover group-hover:grayscale-0 transition duration-500 z-0"
              src="/icons/chirsdo.jpg"
              alt="Code With Harry"
            />
              {/* Bottom overlay transition */}
            <div className="absolute bottom-0 w-full bg-[#4E36E8] text-white p-4 rounded-t-xl z-10 
                 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 
                 transition-all duration-500 ease-in-out">
              <h3 className="font-semibold text-lg">Chirs Do</h3>
              <p className="text-sm mt-1">
                Chris Do is a designer, educator, and founder of The Futur, an online education platform that teaches creative entrepreneurs how to grow their businesses.
              </p>
              <div className="absolute top-5 right-2 w-6 h-6 bg-teal-300 rounded-full" />
            </div>
          </div>

          <div className="card3 w-[300px] h-[400px] relative bg-black rounded-xl overflow-hidden group">
            <Image
              fill
              className="grayscale object-cover group-hover:grayscale-0 transition duration-500 z-0"
              src="/icons/alex.png"
              alt="Code With Harry"
            />

              {/* Bottom overlay transition */}
            <div className="absolute bottom-0 w-full bg-[#4E36E8] text-white p-4 rounded-t-xl z-10 
                 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 
                 transition-all duration-500 ease-in-out">
              <h3 className="font-semibold text-lg">Alex Hormozi</h3>
              <p className="text-sm mt-1">
                Alex Hormozi is an entrepreneur, author, and investor best known for his book $100M Offers.
              </p>
              <div className="absolute top-5 right-2 w-6 h-6 bg-teal-300 rounded-full" />
            </div>
          </div>
          <div className="card4 w-[300px] h-[400px] relative bg-black rounded-xl overflow-hidden group">
            <Image
              fill
              className="grayscale object-cover group-hover:grayscale-0 transition duration-500 z-0"
              src="/icons/thugesh.jpg"
              alt="Code With Harry"
            />

              {/* Bottom overlay transition */}
            <div className="absolute bottom-0 w-full bg-[#4E36E8] text-white p-4 rounded-t-xl z-10 
                 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 
                 transition-all duration-500 ease-in-out">
              <h3 className="font-semibold text-lg">Thugesh</h3>
              <p className="text-sm mt-1">
                Thugesh (real name: Mahesh Keshwala) is an Indian content creator and YouTuber known for his roast-style commentary videos
              </p>
              <div className="absolute top-5 right-2 w-6 h-6 bg-teal-300 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className=" bg-black text-white py-15 rounded-4xl flex justify-center items-center w-fit mx-auto p-10 px-70">
          <div className="p-10 flex flex-col justify-center items-center gap-4">
            <div className="bg-[#4E36E8] p-1 px-3 rounded-full w-fit">
              Start your account for free now!
            </div>
            <h1 className="text-6xl">Together we are Strong</h1>
            <div className="flex justcify-center items-center gap-20 my-5">
              <div className="flex flex-col items-center">
                <span className="text-5xl">50K</span>
                <p>more than users</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl">30+</span>
                <p>creators</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl">$20,000+</span>
                <p>generated</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="last flex justify-center items-center py-30 mx-auto max-w-screen-xl flex-col gap-3 bg-black text-white p-10 mt-10 rounded-4xl mb-10 ">
        <h1 className="font-bold text-5xl">Designed for Creators,</h1>
        <h1 className="font-bold text-5xl text-[#4E36E8]">Not For Bussiness!</h1>
        <div className="flex gap-4 p-5 justify-center">
          <div className="flex flex-col gap-4 w-1/2  ">
            <div className="first flex">
              <div className="flex gap-3">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#4E36E8] shrink-0"
                >
                  <path
                    d="M12 21h0a9 9 0 0 1-9-9H3a9 9 0 0 1 9-9h0a9 9 0 0 1 9 9h0a9 9 0 0 1-9 9ZM8 11.5l3 3 5-5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <p className="text-2xl">We donot call them customers or transactions. They are your supporters.</p>
              </div>
            </div>

            <div className="first flex">
              <div className="flex gap-3">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#4E36E8] shrink-0"
                >
                  <path
                    d="M12 21h0a9 9 0 0 1-9-9H3a9 9 0 0 1 9-9h0a9 9 0 0 1 9 9h0a9 9 0 0 1-9 9ZM8 11.5l3 3 5-5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <p className="text-2xl">You have 100% ownership of your supporters. We never email them, and you can export the list any time you like.</p>
              </div>
            </div>

          </div>
          <div className="flex flex-col gap-3 w-1/2">
            <div className="first flex">
              <div className="flex gap-3">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#4E36E8] shrink-0"
                >
                  <path
                    d="M12 21h0a9 9 0 0 1-9-9H3a9 9 0 0 1 9-9h0a9 9 0 0 1 9 9h0a9 9 0 0 1-9 9ZM8 11.5l3 3 5-5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <p className="text-2xl">You get to talk to a human for help, or if you just like some advice to hit the ground running.</p>
              </div>
            </div>

            <div className="first flex">
              <div className="flex gap-2">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#4E36E8] shrink-0"
                >
                  <path
                    d="M12 21h0a9 9 0 0 1-9-9H3a9 9 0 0 1 9-9h0a9 9 0 0 1 9 9h0a9 9 0 0 1-9 9ZM8 11.5l3 3 5-5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="text-2xl">You get paid instantly to your bank account. No more 30-day delays.</span>
              </div>
            </div>

          </div>

        </div>
        <Link href="/login"><button className="bg-[#4E36E8] hover:bg-[#4536e8] transition-colors delay-100  p-2 px-4 rounded-full font-medium hover:cursor-pointer text-2xl mt-6">
          SignUp today
        </button></Link>
      </div>
    </div>



  );
}
