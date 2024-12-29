import {useEffect, useState} from "react";
import axios from "axios";
import Product from "./Product";
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Products = () => {

    const [data, setData] = useState([])

    const API_URL = 'http://localhost:3050/products'

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const result = await axios.get(API_URL);
                setData(result.data)
                // console.log(result.data)
            }
            catch (error){
                console.log(error.message)
            }
        }

        fetchData();

    }, [])





    const token = JSON.parse(localStorage.getItem('Product'))

    const navigate = useNavigate()

    useEffect(()=>{
        if (token){
            navigate('/produs')
        }
        else {
            navigate('/')
        }
    }, [token, navigate])






return(
    <>
    <Navbar />
    <div className="h-auto w-full bg-black flex justify-center items-center flex-wrap">

        {
            data.map((item)=>{
                return <Product product={item} key={item.id}/>

            })
        }

    </div>
        <Footer />
    </>
);
}

export default Products;