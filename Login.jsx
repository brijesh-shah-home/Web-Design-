import React from 'react'
import sideimg from './img/pos3.jpg'

const Login = () => {
    return (
        <>
            <section className='w-full h-screen bg-slate-200 flex items-center justify-center '>
                <div className='w-[60%] h-[70vh] bg-slate-100 flex justify-between items-center p-7 shadow-md rounded-lg max-md:block max-md:h-auto '>

                    <img src={sideimg} alt="side-img" className='h-[350px] w-[380px] mix-blend-multiply align-middle max-md:hidden' />

                    <form action="">

                        <h1 className='text-center mb-5 font-bold text-2xl text-blue-800'>Create Account</h1>

                        <div className='flex align-middle justify-between w-full'>
                            <input type="text" name="txtfname" id="" placeholder='Your first name' className='p-3 border-2 rounded-md bg-gray-200 mb-3 w-[50%] mr-2' />
                            <input type="text" name="txtlname" id="" placeholder='Your last name' className='p-3 border-2 rounded-md bg-gray-200 mb-3 w-[50%] ml-2' />
                        </div>

                        <input type="email" name="txtemail" id="" placeholder='Enter your email' className='block p-3 border-2 rounded-md bg-gray-200 mb-3 w-full' />

                        <input type="tel" name="txtphone" id="" placeholder='Enter your phone' className='block p-3 border-2 rounded-md bg-gray-200 mb-3 w-full' />

                        <input type="password" name="txtpwd" id="" placeholder='Password' className='block p-3 border-2 rounded-md bg-gray-200 mb-3 w-full' />

                        <div className='block mb-5 ml-1'>
                            <input type="checkbox" name="tick" id="" className='mr-2 w-3 h-3'/>
                            <span>I agree to the Terms and Privacy Policy.</span>
                        </div>

                        <div className='flex justify-between align-middle'>
                            <button className='bg-blue-800 text-white rounded-md p-3 w-52'> Sign Up </button>
                            <button className='bg-transparent border-2 font-semiboldbold text-blue-800 rounded-md border-blue-800 p-3 w-52 hover:bg-blue-800 hover:text-white'>Sign In</button>
                        </div>

                    </form>
                </div>
            </section>
        </>
    )
}

export default Login