"use client"
import React, { use } from 'react'
import Script from 'next/script'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { connection, get, set } from 'mongoose'
import { useEffect } from 'react'
import { fetchpayments, fetchuser, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'
import connectDB from '@/db/connectdb'
import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import User from '@/models/User'


const PaymentPage = ({ username }) => {
    const { data: session } = useSession()
    const [paymentform, setpaymentform] = useState({
        name: '',      // Initialize with an empty string
        amount: '',    // Initialize with an empty string
        message: ''    // Initialize with an empty string
    });
    const [currentUser, setCurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])


    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast('Thanks for donating!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce
            });
        }
        router.push(`/${username}`)
    }, [])



    const getData = async () => {
        let u = await fetchuser(username)
        setCurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }


    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const pay = async (amount) => {
        await connectDB()
        // Ensure that 'username' is defined and not empty
        // if (!username) {
        //     console.error("Username is undefined");
        //     return; // Exit if username is not set
        // }


        //get the orderid
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        let user = await fetchuser(username);
        var options = {
            "key": user.razorpayid, // Fetch from database or fallback to environment variable
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Payton", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);
        rzp1.open();

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

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className='cover w-full relative'>

                <img className=' z-0 object-cover h-[300px] w-full' src={currentUser.coverpic} alt="" />
                <div className='absolute -bottom-[40px] right-[37%] md:right-[46%] border-white border-2 size-32 rounded-full'>
                    <img className='rounded-full object-cover size-32 shadow-[0px_4px_8px_rgba(0,0,0,0.5),_0px_-4px_8px_rgba(0,0,0,0.3)]' width={128} height={128} src={currentUser.profilepic} alt="" />
                </div>
            </div>
        <div className='info flex justify-center items-center px-4 md-px-0 my-12 w-full flex-col gap-1'>
                <div className='font-bold text-xl'>
                    @{username}
                </div>
                <div className='text-slate-400'>
                    Lets Help {username} to reach their goal
                </div>
                <div className='text-slate-400'>
                    {payments.length} supporters . ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
                </div>
            
        {/* expriment */}
        {/* <Link href={`/${username}/merch`}>
  <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">View Merchandise</button>
</Link> */}


            <div className='info flex justify-center items-center my-8 md:px-28 w-9/12 flex-col gap-1'>
                    {/*Bio*/}
                    <div className="Title rounded-lg py-5 px-4 md:px-12 ">
                            <p className='text-lg'>{currentUser.bio}</p>
                        
                    </div>    
            </div>

            <div className='info flex justify-center my-8 w-9/12 flex-col gap-1'>
                    {/*project title */}
                    <div className="Title rounded-lg p-3 py-5 md:p-5 bg-slate-900 ">
                        <h2 className='text-2xl px-6 font-bold mb-5'>Project Title</h2>
                        <div className='mx-3 md:mx-5 bg-slate-800 rounded-lg p-2 py-4 md:p-4 border border-slate-700 shadow-inner '>
                            <p className='text-lg'>{currentUser.projectTitle}</p>
                        </div>
                    </div>    
            </div>
            <div className='info flex justify-center my-8 w-9/12 flex-col gap-1'>
                    {/*project Discription */}
                    <div className="Title rounded-lg p-3 py-5 md:p-5 bg-slate-900 ">
                        <h2 className='text-2xl px-6 font-bold mb-5'>Project Discription</h2>
                        <div className='mx-3 md:mx-5 bg-slate-800 rounded-lg p-2 py-4 md:p-4 border border-slate-700 shadow-inner '>
                            <p className='text-lg'>{currentUser.projectDescription}</p>
                        </div>
                    </div>    
            </div>

           

                <div className="payment flex flex-col md:flex-row w-[80%] mt-10 gap-9 md:gap-5">

                    {/* ai generate code beware */}
                    <div className="supporters rounded-lg md:w-1/2 p-3 py-5 md:p-10 bg-slate-900 ">
                        <h2 className='text-2xl font-bold text-center mb-10'>Top Supporters</h2>
                        <div className='mx-5 h-[500px] overflow-y-auto bg-slate-800 rounded-lg p-4 border border-slate-700 shadow-inner [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>
                            <ul className='text-lg'>
                                {payments.length === 0 && <li className='py-2 text-center text-slate-400'>No supporters yet.</li>}
                                {payments.map((p, i) => {
                                    return <li className='my-3 min-h-16 flex gap-3 items-center border-b border-slate-700 pb-2 last:border-none' key={i}>
                                        <img width={33} className='rounded-full' src="avatar.gif" alt="" />
                                        <span>
                                            {p.name} donated <span className="font-bold">₹{p.amount}</span>
                                            {p.message && <><br />with a message "{p.message}"</>}
                                        </span>
                                    </li>
                                })}
                            </ul>
                        </div>

                    </div>
                    <div className="makePayment md:w-1/2 rounded-lg p-3 py-5 md:p-10 flex flex-col justify-center bg-slate-900">
                        {/* add name, amount and message in col */}
                        <h2 className='text-2xl font-bold text-center mb-7'>Make a Payment</h2>
                        <div className='flex flex-col gap-2'>

                            <input onChange={handleChange} value={paymentform.name} name='name' type="text" placeholder='Name*' className='rounded-lg p-2 bg-slate-800 text-white mb-4' />

                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" placeholder='Message' className='rounded-lg p-2 bg-slate-800 text-white mb-4' />

                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="number" placeholder='Amount' className='rounded-lg p-2 bg-slate-800 text-white mb-4' />
                            {/* in amount we have changed type to number */}



                            <button onClick={() => pay(Number.parseInt(paymentform.amount * 100))} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-4 disabled:from-blue-900" disabled={paymentform.name?.length < 3 || paymentform.amount?.length < 1}>Pay</button>

                        </div>
                        <div className=' flex gap-3 mt-3'>
                            <button type="button" className='bg-slate-800 text-white rounded-lg py-2 px-3' onClick={() => pay(1000)} >Pay ₹10</button>
                            <button type="button" className='bg-slate-800 text-white rounded-lg py-2 px-3' onClick={() => pay(2000)} >Pay ₹20</button>
                            <button type="button" className='bg-slate-800 text-white rounded-lg py-2 px-3' onClick={() => pay(3000)} >Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage