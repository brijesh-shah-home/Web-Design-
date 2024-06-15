import React from 'react'
import logo from './img/bluebg.jpg'

const Signin = () => {
    return (
        <>
            <section className='h-screen w-full flex items-center justify-center bg-slate-100'>
                <main className='h-3/4 w-1/2 bg-gray-200 flex items-center justify-around rounded-2xl shadow-md'>
                    <form action="" className='ml-7'>
                        <h1 className=' text-2xl font-bold mb-3 text-blue-900'>Login</h1>
                        <p className='mb-5 text-xs text-blue-900'>If you are already a member, easily log in</p>

                        <input type="email" name="txtemail" id="" placeholder='Email' className='block w-full border border-gray-300 rounded-lg mb-3 p-2 placeholder:text-sm' />

                        <input type="password" name="txtpwd" id="" placeholder='Password' className='block w-full border border-gray-300 rounded-lg p-2 mb-3 placeholder:text-sm' />

                        <input type="submit" value="Login" className='p-2 bg-blue-900 rounded-lg shadow-sm text-white w-full mb-5 cursor-pointer' />

                        <div className='w-full h-[0.5px] bg-blue-900 rounded-xl mb-5'></div>

                        <button className='bg-gray-50 border rounded-lg text-sm border-gray-300 p-2 mb-5 w-full'>Login with Google</button>

                        <a href="#" className=' no-underline text-xs text-blue-900'>Forgot your password?</a>

                        <div className='w-full h-[0.5px] bg-blue-950 rounded-xl mb-3 mt-3'></div>

                        <div className='flex items-center justify-between'>

                            <a href="#" className=' no-underline text-xs text-blue-900'>Don't have an account?</a>

                            <a href="#" className='no-underline border border-gray-300 text-xs text-blue-900 p-2 bg-gray-50 rounded-lg w-16 text-center'>Register</a>

                        </div>

                    </form>

                    <img src={logo} alt="" className='h-96 w-72 rounded-xl mix-blend-multiply' />

                </main>
            </section>
        </>
    )
}

export default Signin