import Footer from "./Footer";
import Navbar from "./Navbar";

const CardDescription = () => {

    const token = JSON.parse(localStorage.getItem('Product'))

return(
    <>
        <Navbar />

        <div className="h-auto w-full bg-black flex justify-center items-center flex-wrap">


            <div className="bg-gray-950 rounded-xl p-5 w-auto h-auto flex items-center">

                <img
                    src={token.img}
                    alt="Imagine Card"
                    className="w-2/5 h-full object-cover rounded-xl"
                />


                <div className="w-3/5 pl-5 text-white">
                    <h3 className="text-2xl font-bold mb-2"><strong>Model:</strong> {token.model}</h3>
                    <p className="text-lg mb-2">
                        <strong>Ecran:</strong> {token.ecran}
                    </p>
                    <p className="text-lg mb-2">
                        <strong>Tip Procesor:</strong> {token.tip_procesor}
                    </p>
                    <p className="text-lg mb-2">
                        <strong>Capacitate memorie:</strong> {token.capacitate_memorie}
                    </p>

                    <p className="text-lg mb-2">
                        <strong>Stocare:</strong> {token.stocare}
                    </p>

                    <p className="text-lg mb-2">
                        <strong>Sistem de operare:</strong> {token.sistem_de_operare}
                    </p>


                    <p className="text-lg">
                        <strong>Pret:</strong> ${token.price}
                    </p>
                </div>
            </div>


        </div>

        <Footer/>
        {
            localStorage.removeItem('Product')
        }
    </>
)
}

export default CardDescription;