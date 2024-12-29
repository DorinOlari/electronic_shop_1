
import './App.css';
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CardDescription from "./components/CardDescription";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Products/>} />
                  <Route path="/produs" element={<CardDescription />}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
