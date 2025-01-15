import Navbar from "./Navbar";
import Footer from "./Footer";

const Delivery = () => {
    return(
        <>
            <Navbar/>
            <div className="bg-gray-950 text-white min-h-screen py-12 px-6">
                <h1 className="text-4xl font-bold text-center mb-12">Informatii despre Livrare</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Coloana 1---> Detalii generale... */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Cum functioneaza livrarea?</h2>
                        <p className="text-lg">
                            Oferim livrare rapida pentru toate comenzile plasate pe site-ul nostru. Produsele vor ajunge
                            la destinatia dorita in termen de 2-5 zile lucratoare.
                            Dupa ce comanda este procesata, veti primi un email de confirmare cu detalii suplimentare
                            despre livrare si urmarirea comenzii.
                        </p>
                    </div>

                    {/* Coloana 2---> Termenii de livrare... */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Termenii de livrare</h2>
                        <p className="text-lg mb-4">
                            Livrarile se efectueaza intre 9:00 si 18:00, de luni pină vineri.
                            Comenzile plasate inainte de ora 14:00 vor fi procesate in aceeași zi. Comenzile plasate
                            dupa ora 14:00 vor fi procesate a doua zi lucratoare.
                        </p>
                        <p className="text-lg">
                            In timpul sarbatorilor legale sau in perioade de virf (Black Friday, Craciun, Pastele), livrarile pot
                            intirzia cu pină la 2 zile lucratoare.
                        </p>
                    </div>

                    {/* Coloana 3---> Zone de livrare... */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Zonele de livrare</h2>
                        <p className="text-lg">
                            Oferim livrare în intreaga tara, inclusiv în localitatile mai indepartate. Costul livrarii poate
                            varia in functie de locatia specifica.
                        </p>
                        <p className="text-lg mt-4">
                            Livrarea internationala este disponibilă doar pentru anumite tari precum Rominia, Ucraina, Bulgaria.
                        </p>
                    </div>

                    {/* Coloana 4---> Intrebari frecvente... */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Intrebari frecvente</h2>
                        <p className="text-lg">
                            <strong>Ce se intimpla daca nu sunt acasa cind vine livrarea?</strong>
                            <br/>
                             Daca nu sunteți acasa la momentul livrarii, curierul va incerca sa contacteze un alt
                            numar de telefon sau va programa o noua livrare.
                        </p>
                        <p className="text-lg mt-4">
                            <strong>Cum pot urmari comanda mea?</strong>
                            <br/>
                            Dupa ce comanda a fost expediata, veti primi un email cu numarul de urmarire al
                            pachetului.
                        </p>
                    </div>

                    {/* Coloana 5---> Contact... */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                        <p className="text-lg">
                            Daca ai intrebari suplimentare despre livrare, nu ezita sa ne contactezi!
                        </p>
                        <p className="text-lg mt-4">
                            <strong>Email:</strong> delivery@electronicshop.com
                        </p>
                        <p className="text-lg">
                            <strong>Tel:</strong> +373-6000-0015
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Delivery;