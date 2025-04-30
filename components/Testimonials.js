import React from 'react'

const Testimonials = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-5 text-white'>
            <h1 className=' bg-green-500 p-1 px-3 rounded-full w-fit'>Our Testimonials</h1>

        <div className='flex gap-5 h-20[vh] items-center'>
            <div class="max-w-sm bg-[#6036e8] border text-white border-gray-200 rounded-lg shadow-sm bg">
                <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">"Thanks for fueling my art journey, one sketch at a time!"</h5>
                    <p class="mt-3 font-normal">Lana Kim</p>
                    <p class="font-normal ">Illustrator</p>
                </div>
            </div>
            <div class="max-w-sm bg-[#6036e8] border text-white border-gray-200 rounded-lg shadow-sm bg">
                <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">"Your support keeps the camera rolling—thank you for every frame!"</h5>
                    <p class="mt-3 font-normal">Jayden Cole</p>
                    <p class="font-normal ">Content Creator</p>
                </div>
            </div>
            <div class="max-w-sm bg-[#6036e8] border text-white border-gray-200 rounded-lg shadow-sm bg">
                <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">"Your support keeps the camera rolling—thank you for every frame!"</h5>
                    <p class="mt-3 font-normal">Jayden Cole</p>
                    <p class="font-normal ">Content Creator</p>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Testimonials