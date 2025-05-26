import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo_w.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const Header = () => {
    const { cart, toggleCart } = useContext(CartContext)
    return (
        <header className="bg-gray-900 text-gray-300 p-4 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
                <img className="w-8 h-8" src={logo} alt="Logo" />
                <span className="text-lg font-semibold text-white">TiendaTuya</span>
            </Link>

            <nav>
                <ul className="flex space-x-7 items-center">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "underline" : "hover:underline"
                            }
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "underline" : "hover:underline"
                            }
                        >
                            Sobre nosotros
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? "underline" : "hover:underline"
                            }
                        >
                            Iniciar Sesión
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={toggleCart} className="relative p-2 hover:text-gray-300 hover:underline cursor-pointer">
                            Mi carrito
                            {cart.length > 0 && (
                                <span 
                                    className="
                                        absolute top-0 right-0
                                        transform translate-x-1 -translate-y-1
                                        bg-red-500 text-white text-xs font-bold
                                        rounded-full h-5 w-5 flex items-center justify-center
                                        ">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;