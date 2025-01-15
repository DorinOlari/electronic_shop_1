import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
   return(
       <>
           <Navbar/>
           <div className="bg-gray-950 text-white min-h-screen py-12 px-6">
               <h1 className="text-4xl font-bold text-center mb-12">Contacte</h1>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                   {/*Coloana(1)...*/}
                   <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                       <h2 className="text-2xl font-semibold mb-4">Magazin on-line</h2>
                       <p className="text-gray-500">Referitor la intrebarile in privinta comenzilor realizate in magazinul online, apelati:</p>
                       <p><strong>Email:</strong>  online@electronicshop.md</p>
                       <p><strong>Tel:</strong>  +373-6000-0000</p>
                   </div>

                   {/*Coloana(2)...*/}
                   <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                       <h2 className="text-2xl font-semibold mb-4">Logistica</h2>
                       <p className="text-gray-500">Referitor la intrebarile in privinta serviciului de livrare si graficului de lucru
                       a punctului de emitere. Va adresati la departamentul logistica.</p>
                       <p><strong>Tel:</strong>  +373-6000-0008</p>
                   </div>

                   {/*Coloana(3)...*/}
                   <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                       <h2 className="text-2xl font-semibold mb-4">Garantie si retur</h2>
                       <p className="text-gray-500">Referitor la intrebarile in privinta serviciului de garantie sau returnare a marfurilor, apelati:</p>
                       <p><strong>Email:</strong>  service@electronicshop.md</p>
                       <p><strong>Tel:</strong>  +373-6000-0009</p>
                       <p><strong>Program de Lucru:</strong><strong className="text-gray-500"> L-V</strong>  09.00-18.00</p>
                       <p><strong className="text-gray-500">S:</strong>  10.00-14.00 <strong className="text-gray-500"> D:</strong>   zi libera</p>
                   </div>

                   {/*Coloana(4)...*/}
                   <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                       <h2 className="text-2xl font-semibold mb-4">Posturi vacante</h2>
                       <p className="text-gray-500">Referitor la intrebarile in privinta angajarii, apelati:</p>
                       <p><strong>Email:</strong>  hr@electronicshop.md</p>
                       <p><strong>Tel:</strong>  +373-60000-0012</p>
                   </div>
               </div>
           </div>
           <Footer/>
       </>
   )
}
export default Contact;