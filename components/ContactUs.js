"use client"
import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const ref = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.SERVICE_KEY, process.env.TEMPLATE_KEY, ref.current, process.env.EMAIL_KEY)
            .then((result) => {
                alert('Message sent successfully!');
                ref.current.reset();
            }, (error) => {
                alert('Failed to send message. Try again.');
                console.error(error.text);
            });
    };
    return (
        <div className='bg-black text-white min-h-screen'>
            <div className='flex flex-col justify-center items-center w-full container mx-auto'>
                <h1 className='text-4xl font-bold pt-8'>Contact Us</h1>
                <div className="inputs flex gap-2 flex-col justify-center items-center mt-5">
                    <form ref={ref} onSubmit={sendEmail} className='flex gap-2 flex-col w-85 max-w-md'>
                        <label className='text-neutral-400' htmlFor="name">Name:</label>
                        <input name="user_name" className='bg-neutral-700 p-2 rounded-lg' type="text" placeholder='Enter your full name' required />

                        <label className='text-neutral-400' htmlFor="email">Email:</label>
                        <input name="user_email" className='bg-neutral-700 p-2 rounded-lg' type="email" placeholder='Enter your email' required />

                        <label className='text-neutral-400' htmlFor="subject">Subject:</label>
                        <input name="subject" className='bg-neutral-700 p-2 rounded-lg' type="text" placeholder='Enter the subject' required />

                        <label className='text-neutral-400' htmlFor="message">Message:</label>
                        <textarea
                            name="message"
                            className='bg-neutral-700 p-2 rounded-lg h-40 resize-none'
                            placeholder='Enter your message'
                            required
                        ></textarea>

                        <button type="submit" className='bg-[#4E36E8] hover:bg-[#4536e8] transition-colors delay-100 p-2 rounded-lg'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default ContactUs