import { useContext, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'

function SignIn() {
    const context = useContext(ShoppingCartContext)
    const [view, setView] = useState('user-info')
    const form = useRef(null)

    //Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

    //Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignIn = () => {
        const stringifiedSignOut = JSON.stringify(false)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(false)
        // Redirect
        return <Navigate replace to={'/'} />
      }
    
    const createAnAccount = () => {
		const formData = new FormData(form.current)
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		}
    // TODO: Remove this console.log 🥲
		console.log(data)
	}

    const renderLognIn = () => {
        return (
            <div className='flex flex-col w-80'>
                <p className='flex flex-col mb-6'>
                    <span className='font-normal text-sm mb-2'>Email: </span>
                    <span className='bg-gray-100 text-gray-500 rounded-lg h-10 p-2 font-light'>{parsedAccount?.email}</span>
                </p>
                <p className='flex flex-col'>
                    <span className='font-normal text-sm mb-2'>Password: </span>
                    <span className='bg-gray-100 text-gray-500 rounded-lg h-10 p-2 font-light'>{parsedAccount?.password}</span>
                </p>
                <Link to="/">
                    <button 
                        className='bg-indigo-500 disabled:bg-indigo-200 text-white w-full rounded-lg py-3 mt-4'
                        disabled={!hasUserAnAccount}>
                            Log in
                    </button>
                </Link>
                <div className='text-center'>
                    <a className='font-light text-xs underline underline-offset-4' href='/'>Forgot my password</a>
                </div>
                <button 
                    className='border-2 border-indigo-500 disabled:text-black/40 disabled:border-indigo-200 w-full rounded-lg mt-6 py-3'
                    onClick={() => setView('create-user-info')}
                    disabled={hasUserAnAccount}>
                        Sign up
                </button>
            </div>
        )
    }
    
    const renderCreateUserInfo = () => {
        return (
            <form ref={form} className='flex flex-col gap-4 w-80'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="name" className='font-normal text-sm mb-2'>Your name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={parsedAccount?.name}
                  placeholder="Peter"
                  className='rounded-lg border-2 border-indigo-500 placeholder:font-light
                  placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='font-normal text-sm mb-2'>Your email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  defaultValue={parsedAccount?.email}
                  placeholder="hi@helloworld.com"
                  className='rounded-lg border-2 border-indigo-500
                  placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="password" className='font-normal text-sm mb-2'>Your password:</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  defaultValue={parsedAccount?.password}
                  placeholder="******"
                  className='rounded-lg border-2 border-indigo-500
                  placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
                />
              </div>
              <Link to="/">
                <button
                  className='bg-indigo-500 text-white w-full rounded-lg py-3 mt-4'
                  onClick={() => createAnAccount()}>
                  Create
                </button>
              </Link>
            </form>
          )
    }

    const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLognIn()

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      {renderView()}
    </Layout>
  )
}

export default SignIn