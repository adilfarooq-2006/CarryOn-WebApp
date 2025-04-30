import React from 'react'

const Footer = () => {
    return (
        <div>

            <div className='box flex justify-between px-10 py-15 bg-black text-white gap-2 '>
                <div className='block1 flex flex-col gap-4 '>
                    <div>
                        <h1 className='text-4xl '>CarryOn</h1>
                        <p>Empowering creators and supporters alike.</p>
                        <p className='text-sm'>© 2025 CarryOn. All rights reserved.</p>
                    </div>
                    <div>
                        <h1>Made by Adil Farooq</h1>
                        <p className='text-sm'>© 2025 Adil Farooq. All rights reserved.</p>
                    </div>
                </div>
                <div className='block1 flex flex-col '>
                    <ul>
                        <li>Site Map</li>
                        <li>About</li>
                        <li>Agenda</li>
                        <li>Testimonial</li>
                        <li>Partners</li>
                    </ul>
                </div>
                <div className='block1 flex flex-col '>
                    <ul>
                        <li>Join Us</li>
                        <li>Carrers</li>
                        <li>Volunteers</li>
                        <li>Sponsorship</li>
                    </ul>
                </div>
                <div className='block1 flex flex-col '>
                    <ul>
                        <li>Contact Us</li>
                        <li>support@carryon</li>
                        <li>Phone</li>
                        <li>Sponsorship</li>
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default Footer