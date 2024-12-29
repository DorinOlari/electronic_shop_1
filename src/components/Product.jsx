const Product = ({product}) => {

    const cardInfo = (produs) => {
        localStorage.setItem('Product', JSON.stringify(produs))
        // console.log(produs.id)
        // console.log(produs.name_product)
    }

    


    return (
        <div className="w-72 h-auto bg-slate-800 rounded-xl p-5 m-6">
            <div>
                <img className="rounded-lg h-56 w-72"
                     src={product.img}
                     alt="Product"/>
            </div>
            <div className="mt-6">
                <h3 className="text-lg text-gray-100 font-semibold">{product.name_product}</h3>
                <h4 className="text-gray-400 text-base font-semibold">{product.description}</h4>
                <p className="text-xl text-gray-50 font-bold">{`$${product.price}`}</p>
            </div>
            <button onClick={(event)=> {
                event.preventDefault()
                cardInfo(product)
            }}
                    className="mt-5 w-32 h-9 py-0.5 px-3 bg-blue-500 rounded-full text-white font-semibold">ADD</button>
        </div>
    )
}

export default Product;