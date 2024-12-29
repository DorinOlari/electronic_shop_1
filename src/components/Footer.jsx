const Footer = () => {
return (
    <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/*Coloana(1)...*/}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Magazin Online</h3>
                    <ul>
                        <li><a href="/" className="hover:text-white">tel.:060-78-22-23</a></li>
                        <li><a href="/" className="hover:text-white">e-mail: sales@electronicshop.md</a></li>
                    </ul>

                    <h3 className="text-white text-lg font-semibold mb-4 mt-8">Vinzari Corporative</h3>
                    <ul>
                        <li><a href="/" className="hover:text-white">tel.:062-101-661</a></li>
                        <li><a href="/" className="hover:text-white">e-mail: corporate@electronicshop.md</a></li>
                    </ul>
                </div>

                {/*Coloana(2)...*/}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Relatii clienti</h3>
                    <ul>
                        <li><a href="/" className="hover:text-white">tel.:068-088-443</a></li>
                        <li><a href="/" className="hover:text-white">e-mail: reclamatii@electronicshop.md</a></li>
                    </ul>
                </div>

                {/*Coloana(3)....*/}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Companie</h3>
                    <ul>
                        <li><a href="/" className="hover:text-white">Despre noi</a></li>
                        <li><a href="/" className="hover:text-white">Contacte</a></li>
                        <li><a href="/" className="hover:text-white">Magazine</a></li>
                        <li><a href="/" className="hover:text-white">Talente</a></li>
                        <li><a href="/" className="hover:text-white">Livrare & Pick-up</a></li>
                        <li><a href="/" className="hover:text-white">Garantie si servicii</a></li>
                        <li><a href="/" className="hover:text-white">Politica de retur si schimb</a></li>
                        <li><a href="/" className="hover:text-white">Politica de confidentialitate</a></li>
                        <li><a href="/" className="hover:text-white">Cookies</a></li>
                    </ul>
                </div>

                {/* Coloană 4 */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Urmati-ne</h3>
                    <ul>
                        <li><a href="/" className="hover:text-white">Facebook</a></li>
                        <li><a href="/" className="hover:text-white">Twitter</a></li>
                        <li><a href="/" className="hover:text-white">Instagram</a></li>
                        <li><a href="/" className="hover:text-white">LinkedIn</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8">
                <p className="text-gray-500">© 2024 ElectronicShop. Toate drepturile rezervate.</p>
            </div>
        </div>
    </footer>
)
}

export default Footer;