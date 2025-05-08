"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'


const Dashboard = () => {
  const { data: session } = useSession()
  const [form, setform] = useState({})
  const router = useRouter()

  const getData = async () => {
    let u = await fetchuser(session.user.name)
    if (u) {
      setform(u);
    }
  }

  useEffect(() => {
    console.log(session)

    if (!session) {
      router.push('/login')
    }
    else {
      getData()
    }
  }, [session, router])

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await updateProfile(form, session.user.name);
    if (res.success) {
      alert("Profile updated successfully!");
      await getData(); // Refresh form with updated data
    } else if (res.error) {
      alert(res.error);
    }
  }


  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='bg-black text-white min-h-screen'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold pt-10'>Welcome to your Dashboard</h1>
          <div className="user-info flex flex-col gap-2 mt-5 w-[25%]">

            <form onSubmit={handleSubmit} className="user-info flex flex-col gap-2 mt-5 w-[95%]">
              <label className='text-neutral-400' htmlFor="username">Username:</label>
              <input value={form.username || ""} onChange={handleChange} name='username' type="text" placeholder='Update your username' className='bg-neutral-700 p-2 rounded-lg' />
              
              <label className='text-neutral-400' htmlFor="email">Email:</label>
              <input value={form.email || ""} onChange={handleChange} name='email' type="email" placeholder='Update your email' className='bg-neutral-700 p-2 rounded-lg' />
              
              <label className='text-neutral-400' htmlFor="dec">Description:</label>
              <input value={form.dec || ""} onChange={handleChange} name='dec' type="dec" placeholder='Update your description' className='bg-neutral-700 p-2 rounded-lg' />
              
              <label className='text-neutral-400' htmlFor="profileimg">Profile Image URL:</label>
              <input value={form.profileimg || ""} onChange={handleChange} name='profileimg' type="text" placeholder='Update your profile picture' className='bg-neutral-700 p-2 rounded-lg' />
              
              <label className='text-neutral-400' htmlFor="coverimg">Cover Image URL:</label>
              <input value={form.coverimg || ""} onChange={handleChange} name='coverimg' type="text" placeholder='Update your cover image' className='bg-neutral-700 p-2 rounded-lg' />
              
              <button type="submit" className='bg-[#4E36E8] hover:bg-[#4536e8] transition-colors delay-100 p-2 rounded-lg'>Update</button>
            </form>
          </div>

        </div>

      </div>
    </>
  )
}

export default Dashboard