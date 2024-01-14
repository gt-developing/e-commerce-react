import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
    //con este hook le digo que lea el estado global
    const context = useContext(ShoppingCartContext)
    const activeStyle= 'underline underline-offset-4'

    //Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    //Hacer función de SignOut en el componente de Navbar
    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify (true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    const renderView = () => {
        if (isUserSignOut) {
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
                teff@platzi.com
                </li>
                <li>
                <NavLink
                    to='/my-orders'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                    My Orders
                </NavLink>
                </li>
                <li>
                <NavLink
                    to='/my-account'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                    My Account
                </NavLink>
                </li>
                <li>
                <NavLink
                    to='/sign-in'
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                    onClick={() => handleSignOut()}>
                    Sign out
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
                <NavLink to='/'>
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

                <li className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <div>
                        { context.cartProducts.length }
                    </div>
                </li>
            </ul>
            {/* FIN Navbar derecha */}
        </nav>
    )      
}

export default Navbar