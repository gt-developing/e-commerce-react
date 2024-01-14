import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import ShoppingCart from '../ShoppingCart'

const Navbar = () => {
    //con este hook le digo que lea el estado global
    const context = useContext(ShoppingCartContext)
    const activeStyle= 'underline underline-offset-4'

    //Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    //Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    //Has an account
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    //Hacer función de SignOut en el componente de Navbar
    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify (true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut) {
            return (
            <li>
                <NavLink
                to="/sign-in"
                className={({ isActive }) => isActive ? activeStyle : undefined }
                onClick={() => handleSignOut()}>
                Sign out
                </NavLink>
            </li>
            )
        } else {
            return (
                <>
                    <li className='text-black/60'>
                        sutarabrenda@gmail.com
                    </li>

                    <li>
                    {/* Cada NavLink para cada elemento de mi navbar */}
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                        My Orders
                    </NavLink>
                    </li>

                    <li>
                    {/* Cada NavLink para cada elemento de mi navbar */}
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                        My Account
                    </NavLink>
                    </li>

                    <li>
                    {/* Cada NavLink para cada elemento de mi navbar */}
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        onClick={() => handleSignOut()}>
                        Sign in
                    </NavLink>
                    </li>
                </>
            )
        }
    }

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            {/* Navbar izquierda */}
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                {/* Cada NavLink para cada elemento de mi navbar */}
                <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>
                    Shopi
                </NavLink>
                </li>

                <li>
                {/* Cada NavLink para cada elemento de mi navbar */}
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                    All
                </NavLink>
                </li>

                <li>
                {/* Cada NavLink para cada elemento de mi navbar */}
                <NavLink
                    to='/clothes'
                    onClick={() => context.setSearchByCategory('clothes')}
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                    Clothes
                </NavLink>
                </li>

                <li>
                {/* Cada NavLink para cada elemento de mi navbar */}
                <NavLink
                    to='/electronics'
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                    Electronics
                </NavLink>
                </li>

                <li>
                {/* Cada NavLink para cada elemento de mi navbar */}
                <NavLink
                    to='/furniture'
                    onClick={() => context.setSearchByCategory('furniture')}
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                    Furniture
                </NavLink>
                </li>

                <li>
                {/* Cada NavLink para cada elemento de mi navbar */}
                <NavLink
                    to='/shoes'
                    onClick={() => context.setSearchByCategory('shoes')}
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                    Shoes
                </NavLink>
                </li>

                <li>
                {/* Cada NavLink para cada elemento de mi navbar */}
                <NavLink
                    to='/miscellaneous'
                    onClick={() => context.setSearchByCategory('miscellaneous')}
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                    Miscellaneous
                </NavLink>
                </li>
            </ul>
            {/* FIN Navbar izquierda */}

            {/* Navbar derecha */}
            <ul className='flex items-center gap-3'>
                {renderView()}
                <li className='flex items-center'>
                    <ShoppingCart />
                </li>
            </ul>
            {/* FIN Navbar derecha */}
        </nav>
    )      
}

export default Navbar