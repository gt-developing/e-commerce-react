import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle= 'underline underline-offset-4'
    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
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
                    to='/toys'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                    Toys
                </NavLink>
                </li>

                <li>
                {/* Cada NavLink para cada elemento de mi navbar */}
                <NavLink
                    to='/others'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                    Others
                </NavLink>
                </li>
            </ul>
            {/* FIN Navbar izquierda */}

            {/* Navbar derecha */}
            <ul className='flex items-center gap-3'>
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
                    >
                    Sign in
                </NavLink>
                </li>

                <li>
                {/* Cada NavLink para cada elemento de mi navbar */}
                <NavLink
                    to='/furniture'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                    >
                    🛒 0
                </NavLink>
                </li>
            </ul>
            {/* FIN Navbar derecha */}
        </nav>
    )      
}

export default Navbar