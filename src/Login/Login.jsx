import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
    const [show, setShow] = useState(false)
    const { loading, signIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        try {
            await signIn(email, password)
            navigate('/')
            toast.success('SignUp Successful')
        } catch (err) {
            toast.error(err.message)
        }
    }
    return (
        <div style={{
            backgroundImage: 'url(https://i.ibb.co/0Qx4m0j/pexels-pixabay-531756.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10  text-gray-900 bg-blue-400'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Login Now</h1>
                </div>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='space-y-4'>

                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-100 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div className="relative">
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type={show ? 'text' : "password"}
                                name='password'
                                autoComplete='new-password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-100 text-gray-900'
                            />
                            <span className="absolute right-2 top-10 cursor-pointer" onClick={() => setShow(!show)}>{show ? <FaEye></FaEye> : <FaEyeSlash />}</span>
                        </div>
                    </div>

                    <div>
                        <button
                            disabled={loading}
                            type='submit'
                            className='bg-[#006afd] w-full rounded-md py-3 text-white'
                        >
                            {loading ? <TbFidgetSpinner className='animate-spin m-auto' /> : 'continue'}
                        </button>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <p className='px-6 mt-7 text-sm text-center text-gray-100'>
                    Don't have an account?{' '}
                    <Link
                        to='/register'
                        className='hover:underline hover:text-orange-100 text-pink-200'
                    >
                        Register Now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;