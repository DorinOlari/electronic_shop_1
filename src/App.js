
import './App.css';
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CardDescription from "./components/CardDescription";
import About from "./components/About";
import Contact from "./components/Contact";
import Delivery from "./components/Delivery";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Products/>} />
                  <Route path="about" element={<About />}/>
                  <Route path="contact" element={<Contact />}/>
                  <Route path="delivery" element={<Delivery />}/>
                  <Route path="produs" element={<CardDescription />}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
