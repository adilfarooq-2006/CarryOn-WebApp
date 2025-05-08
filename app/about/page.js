import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <>
        
            <div className='bg-white text-white h-min-screen'>
                <h1 className='text-4xl font-bold text-center pt-8 text-[#4E36E8]'>
                    About Us
                </h1>
                <div className='flex flex-col '>
                    
                    <div className='flex bg-[#4E36E8] flex-col justify-center mt-10 items-center w-full max-w-5xl mx-auto p-10 rounded-2xl'>
                        <h2 className='text-5xl font-bold text-center pt-8 '>
                            What is CarryOn?
                        </h2>
                        <p className='text-2xl  text-center p-4'>
                            CarryOn lets fans, followers and supporters show love to their favorite creators through direct support, whether its a one time token of appreciation or ongoing monthly contributions.
                        </p>
                        <p className='text-2xl  text-center p-4'>
                            Artists, writers, developers, podcasters, educators, and all types of creatives can thrive here without relying on algorithms or ads. We believe that creating great content should be rewarding not exhausting. Thats why CarryOn is simple, flexible, and creator-first.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center mt-10 items-center w-full max-w-5xl mx-auto p-10 rounded-2xl bg-black mb-10'>
                        <h2 className='text-5xl font-bold text-center pt-8 '>
                            Join Us
                        </h2>
                        <p className='text-2xl  text-center p-4'>
                            Whether you are a creator chasing your vision or a fan wanting to uplift someone you admire CarryOn is your space to make it happen. Ready to start?
                        </p>
                        <div className="bg-[#4E36E8] p-1 px-3 rounded-full w-fit">
                           <Link href="/login"><button className='text-2xl hover:cursor-pointer'>Login Now!</button></Link> 
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default About