"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { updateProfile, fetchuser } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Dashboard = () => {
    const { data: session, update } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        if (!session) {
            router.push('/login')
        }
        else {
            getData()
        }
    }, [router, session])

    const getData = async () => {
        let u = await fetchuser(session.user.name)
        setform(u)
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        let a = await updateProfile(e, session.user.name)
        toast('Profile Updated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            <div className="dashboard p-4 md:p-8 flex justify-center items-center mx-auto container flex-col">
                <h1 className="text-3xl font-bold mb-6 text-center">Welcome to your Dashboard</h1>

                <form action={handleSubmit} className="md:p-6 p-3 rounded-lg bg-gray-900 bg-opacity-15 backdrop-blur-2xl w-9/12 md:w-1/2">
                    {/* input for name */}
                    <div className="mb-4">
                        <label htmlFor="name" className=" block text-gray-100 font-medium mb-2">Name:</label>
                        <input type="text" id="name" onChange={handleChange} name="name" value={form.name ? form.name : ""} className="w-full p-2 h-[55px] border border-gray-700 rounded-md bg-slate-900 bg-opacity-10 backdrop-blur-5xl" />
                    </div>
                    {/* input for username */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-100 font-medium mb-2">Username:</label>
                        <input type="text" id="username" onChange={handleChange} name="username" value={form.username ? form.username : ""} className="w-full p-2 h-[55px] border bg-slate-900 bg-opacity-10 backdrop-blur-5xl border-gray-700 rounded-md" />
                    </div>
                    {/* input for email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-100 font-medium mb-2">Email:</label>
                        <input type="email" id="email" onChange={handleChange} name="email" value={form.email ? form.email : ""} className="w-full p-2 h-[55px] border border-gray-700 rounded-md bg-slate-900 bg-opacity-10 backdrop-blur-5xl" />
                    </div>

                    {/* input for profile picture */}
                    <div className="mb-4">
                        <label htmlFor="profilepic" className="block text-gray-100 font-medium mb-2">Profile Picture:</label>
                        <input type="text" id="profilepic" onChange={handleChange} name="profilepic" value={form.profilepic ? form.profilepic : ""} className="w-full p-2 h-[55px] border border-gray-700 rounded-md bg-slate-900 bg-opacity-10 backdrop-blur-5xl" />
                    </div>

                    {/* input for cover picture */}
                    <div className="mb-4">
                        <label htmlFor="coverpic" className="block text-gray-100 font-medium mb-2">Cover Picture:</label>
                        <input type="text" id="coverpic" onChange={handleChange} name="coverpic" value={form.coverpic ? form.coverpic : ""} className="w-full p-2 h-[55px] border border-gray-700 rounded-md bg-slate-900 bg-opacity-10 backdrop-blur-5xl" />
                    </div>
                    {/* input for razorpayid */}
                    <div className="mb-4">
                        <label htmlFor="razorpayid" className="block text-gray-100 font-medium mb-2">Razor Pay Id:</label>
                        <input type="text" id="razorpayid" onChange={handleChange} name="razorpayid" value={form.razorpayid ? form.razorpayid : ""} className="w-full p-2 h-[55px] border border-gray-700 rounded-md bg-slate-900 bg-opacity-10 backdrop-blur-5xl" />
                    </div>
                    {/* input for razorpaysecret */}
                    <div className="mb-4">
                        <label htmlFor="razorpaysecret" className="block text-gray-100 font-medium mb-2">Razor Pay Secret:</label>
                        <input type="text" id="razorpaysecret" onChange={handleChange} name="razorpaysecret" value={form.razorpaysecret ? form.razorpaysecret : ""} className="w-full p-2 h-[55px] border border-gray-700 rounded-md bg-slate-900 bg-opacity-10 backdrop-blur-5xl" />
                    </div>
                    {/* input for bio */}
                    <div className="mb-4">
                        <label htmlFor="bio" className="block text-gray-100 font-medium mb-2">Bio:</label>
                        <textarea id="bio" onChange={handleChange} name="bio" value={form.bio ? form.bio : ""} className="w-full p-2 h-[200px] border border-gray-700 rounded-md bg-slate-900 bg-opacity-10 backdrop-blur-5xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" />
                    </div>
                    {/* input for project Title */}
                    <div className="mb-4">
                        <label htmlFor="projectTitle" className="block text-gray-100 font-medium mb-2">Project Title:</label>
                        <input type="text" id="projectTitle" onChange={handleChange} name="projectTitle" value={form.projectTitle ? form.projectTitle : ""} className="w-full p-2 h-[55px] border border-gray-700 rounded-md bg-slate-900 bg-opacity-10 backdrop-blur-5xl" />
                    </div>
                    {/* input for project Description */}
                    <div className="mb-4">
                        <label htmlFor="projectDescription" className="block text-gray-100 font-medium mb-2">Project Description:</label>
                        <textarea id="projectDescription" onChange={handleChange} name="projectDescription" value={form.projectDescription ? form.projectDescription : ""} className="w-full p-2 h-[200px] border border-gray-700 rounded-md bg-slate-900 bg-opacity-10 backdrop-blur-5xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Save Changes</button>
                </form>
                <div className="mt-4">
  <Link href="/dashboard/merch">
    <button className="bg-blue-600 text-white px-4 py-2 rounded">Manage Merch</button>
  </Link>
</div>
            </div>
        </>
    )
}

export default Dashboard