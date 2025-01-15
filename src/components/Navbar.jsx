import logo from '../logo/logo.png'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-gray-400 p-4">

            {/*Aici este logoul meu...*/}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-16 mr-8"
                    />
                    <span className="text-2xl font-extrabold text-white">ElectronicShop</span>
                </div>



                {/*Aici este inputul de cautare search...*/}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-gray-700 text-gray-400 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 w-96"
                    />
                </div>



                {/*Aici este meniul de navigare...*/}
                <ul className="flex space-x-8">
                    <li>
                        <Link to="/" className="hover:text-white text-2xl m-5">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-white text-2xl m-5">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-white text-2xl m-5">Contact</Link>
                    </li>
                    <li>
                        <Link to="/delivery" className="hover:text-white text-2xl m-5 mr-20">Delivery</Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}


export default Navbar;