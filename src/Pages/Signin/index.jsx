import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'

function SignIn() {
  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      <div className='flex flex-col w-80'>
        <p className='flex flex-col mb-6'>
          <span className='font-medium text-sm mb-2'>Email: </span>
          <span className='bg-gray-100 text-gray-500 rounded-lg h-10 p-2 font-light'>sutarabrenda@gmail.com</span>
        </p>
        <p className='flex flex-col'>
          <span className='font-medium text-sm mb-2'>Password: </span>
          <span className='bg-gray-100 text-gray-500 rounded-lg h-10 p-2 font-light'>******</span>
        </p>
        <Link
          to="/">
            <button className='bg-indigo-500 text-white w-full rounded-lg py-3 mt-4'>
            Log in
            </button>
          <button
            className='bg-black disabled:bg-black/40 text-white  w-full rounded-lg '>
            
          </button>
        </Link>
        <div className='text-center'>
          <a className='font-light text-xs underline underline-offset-4' href='/'>Forgot my password</a>
        </div>
        <button className='border-2 border-indigo-500 w-full rounded-lg mt-6 py-3'>
            Sign up
        </button>
      </div>
    </Layout>
  )
}

export default SignIn