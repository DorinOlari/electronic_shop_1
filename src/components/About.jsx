import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
    return(
        <>
            <Navbar/>
            <div className="bg-gray-950 text-white min-h-screen py-12 px-6">
                <h1 className="text-4xl font-bold text-center mb-12">Despre Noi</h1>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Secțiunea (1) Introducere...*/}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Cine suntem?</h2>
                        <p className="text-lg">
                            Suntem o companie dedicata inovarii si excelentei, cu scopul de a indeplini nevoile clientilor
                            nostri prin solutii moderne si eficiente.
                            De la un inceput modest, am crescut si am evoluat, devenind lideri in domeniul nostru.
                        </p>
                    </div>

                    {/* Secțiunea (2) Misiune....*/}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Misiunea noastra</h2>
                        <p className="text-lg">
                            Misiunea noastra este de a oferi servicii si produse de cea mai inalta calitate, bazate pe
                            inovatie, integritate si satisfactia clientilor.
                            Ne angajam sa imbunatatim continuu procesele si sa aducem solutii care sa raspunda
                            provocarilor pietei din RM.
                        </p>
                    </div>

                    {/* Secțiunea (3) Valori...*/}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Valorile noastre</h2>
                        <ul className="text-lg space-y-4">
                            <li><strong>Inovatie:</strong> Suntem intotdeauna in cautarea celor mai bune solutii
                                tehnologice pentru a raspunde nevoilor clientilor nostri.
                            </li>
                            <li><strong>Integritate:</strong> Pastram un standard inalt de etica si transparenta in
                                toate aspectele activitatii noastre.
                            </li>
                            <li><strong>Colaborare:</strong> Consideram ca lucrul in echipa este esential pentru
                                succesul nostru.
                            </li>
                            <li><strong>Satisfactia clientilor:</strong> Prioritatea noastra este de a asigura
                                satisfactia clientilor prin produse si servicii de calitate.
                            </li>
                        </ul>
                    </div>

                    {/* Secțiunea (4) Echipa...*/}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Echipa noastra</h2>
                        <p className="text-lg">
                            Echipa noastra este formata din profesionisti talentati, pasionati de ceea ce fac si
                            dedicati.
                            Fiecare membru al echipei aduce plus valoarea companiei noastre, iar impreuna formam un grup puternic,
                            gata sa infrunte orice provocare.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default About;