import logo from '../logo/logo.png'

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
                        <a href="/" className="hover:text-white text-2xl m-5">Home</a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-white text-2xl m-5">About</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-white text-2xl m-5">Contact</a>
                    </li>
                    <li>
                        <a href="/info" className="hover:text-white text-2xl m-5 mr-20">Info</a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}


export default Navbar;