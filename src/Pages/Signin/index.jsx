import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'

function SignIn() {
    const context = useContext(ShoppingCartContext)
    const [view, setView] = useState('user-info')

    //Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

    //Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const renderLognIn = () => {
        return (
            <div className='flex flex-col w-80'>
                <p className='flex flex-col mb-6'>
                    <span className='font-medium text-sm mb-2'>Email: </span>
                    <span className='bg-gray-100 text-gray-500 rounded-lg h-10 p-2 font-light'>{parsedAccount?.email}</span>
                </p>
                <p className='flex flex-col'>
                    <span className='font-medium text-sm mb-2'>Password: </span>
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
        //TODO: Create render view
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