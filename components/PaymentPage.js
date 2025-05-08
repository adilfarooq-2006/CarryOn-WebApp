"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { fetchuser, fetchpayments } from '@/actions/useractions'


const PaymentPage = ({ username }) => {

  const [supporters, setsupporters] = useState([])
  const [formdata, setformdata] = useState(
    {
      name: '',
      amount: '',
      message: '',
    })

  const [currentUser, setcurrentUser] = useState({})

  const getData = async () => {
    let u = await fetchuser(username)
    if (u) {
      setcurrentUser(u);
    }
    console.log(u)
  }

  useEffect(() => {
    getData()
  }, [])




  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }



  useEffect(() => {
    const fetchSupporters = async () => {
      if (!username) return;
      try {
        const res = await fetch(`/api/supporters?creatorUsername=${username}`);
        const data = await res.json();
        if (data.success) {
          setsupporters(data.payments.map(payment => ({
            name: payment.name,
            amount: payment.amount,
            message: payment.message
          })));
        }
      } catch (err) {
        console.error("Failed to fetch supporters", err);
      }
    };

    fetchSupporters();
  }, [username]);



  const handlePayment = async () => {
    console.log(username)

    try {

      const res = await fetch('/api/supporters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          creatorUsername: username, // page owner
          supporterName: formdata.name,     // supporter
          amount: formdata.amount,
          message: formdata.message,
        })
      });

      const data = await res.json();
      console.log(data)

      if (data.success) {
        if (formdata.name && formdata.amount) {
          setsupporters([...supporters,
          {
            name: formdata.name,
            amount: formdata.amount,
            message: formdata.message
          }
          ])
        }
        else {
          alert('Please fillout name and amount to support!')
        }
        alert('Payment successful!');
        setformdata({ name: '', amount: '', message: '' });
      }
      else {
        alert('Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      alert('Error processing payment.');
    }
  };


  const handleQuickPay = (amount) => {
    setformdata(prev => ({ ...prev, amount: amount }))
  }


  return (

    <>
    
      <div className='bg-black min-h-screen text-white'>
        
        <div className="banner relative w-full  bg-[#4E36E8] hover:bg-[#4536e8] transition-colors delay-100">
          {currentUser.coverimg ? (
            <Image className="w-full object-cover h-100"
              src={currentUser.coverimg}
              alt="User cover image"
              width={1000}
              height={400}
            />
          ) : <div className='w-full object-cover h-100 bg-red-500 '></div>}
          <div className="logo">
            {currentUser.profileimg ? (
              <Image
                className=" absolute -bottom-10 bg-white rounded-lg left-[47%]"
                src={currentUser.profileimg}
                alt="User profile image"
                width={100}
                height={100}
              />
            ): <div className=' w-25 h-25 absolute -bottom-10 bg-blue-500 rounded-lg left-[47%]'></div>}
            
          </div>
        </div>
        <div className="username flex flex-col justify-center items-center mt-13">
          <h1 className='text-2xl font-bold'>{currentUser.username}</h1>
          <p>{currentUser.dec}</p>
        </div>
        <div className="boxes flex gap-5 container w-full max-w-7xl mx-auto py-10">

          <div className="first w-1/2 h-120 bg-neutral-800 text-white  rounded-xl p-5">
            <h1 className='text-xl font-bold'>Your Suppoters</h1>
            <ul className='overflow-y-auto max-h-95'>
              {supporters.length === 0 && <li className='mt-2'>No supporters yet</li>}
              {supporters.map((supporter, index) => (
                <li key={index} className="flex items-center gap-2 my-2">
                  <Image className="w-7 h-7" width={28} height={28} src="/icons/profile.png" alt="" />
                  <span>{supporter.name} donated ${supporter.amount} with message {supporter.message}</span>
                </li>
              ))}
            </ul>


          </div>
          <div className="second w-1/2 h-120 bg-neutral-800 text-white  rounded-xl p-5">
            <h1 className='text-xl font-bold'>Support the creator</h1>
            {/* show inputs so use can donate to the creator */}
            <div className="inputs flex flex-col gap-2 mt-5">
              <input type="text" name='name' value={formdata.name} onChange={handleChange} placeholder='Enter your name' className='bg-neutral-700 p-2 rounded-lg' />
              <input type="text" name='amount' value={formdata.amount} onChange={(e) => setformdata(prev => ({ ...prev, amount: e.target.value }))} placeholder='Enter your amount' className='bg-neutral-700 p-2 rounded-lg' />
              <input type="text" name='message' value={formdata.message} onChange={handleChange} placeholder='Enter your message' className='bg-neutral-700 p-2 rounded-lg' />


              <button onClick={handlePayment} className='bg-[#4E36E8] hover:bg-[#4536e8] transition-colors delay-100 p-2 rounded-lg'>Make a payment</button>
              <div className="buttons flex gap-2 mt-3">
                <button onClick={() => handleQuickPay(10)} className='bg-neutral-700 ] hover:bg-[#4536e8] transition-colors delay-100 p-2 rounded-lg'>Pay $10</button>
                <button onClick={() => handleQuickPay(20)} className='bg-neutral-700  hover:bg-[#4536e8] transition-colors delay-100 p-2 rounded-lg'>Pay $20</button>
                <button onClick={() => handleQuickPay(50)} className='bg-neutral-700  hover:bg-[#4536e8] transition-colors delay-100 p-2 rounded-lg'>Pay $50</button>
                <button onClick={() => handleQuickPay(100)} className='bg-neutral-700  hover:bg-[#4536e8] transition-colors delay-100 p-2 rounded-lg'>Pay $100</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default PaymentPage