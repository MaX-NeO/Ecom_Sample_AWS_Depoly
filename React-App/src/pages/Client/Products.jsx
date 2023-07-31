import React, { useState, useEffect } from 'react'
import { getProduct } from '../../service/api'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import Cookies from 'js-cookie';
const Products = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isUser') === 'true');
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await getProduct()
            setProducts(response.data);
        }

        catch (error) {
            console.log(error);
        }
    }
    const dispatch = useDispatch();

    const handleAdd = (product) => {
        if(isLoggedIn){
            dispatch(addToCart(product));
        }
        else{
            alert('login to continue')
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    return (

        <div className='main'>
            <Navbar />
            <div className='d-flex-r-g'>

                {products.map((product) => (

                    <div key={product.pid} className='card-cli'>
                        <img src={product.productimage} className='product-cli-img' />
                        <h2 className='product-cli-text'>{product.productname}</h2>

                        <h1 className='product-cli-price'> ₹ {product.productprice} </h1>
                        <button className='product-btn' onClick={() => handleAdd(product)}>Add to cart</button>
                    </div>
                ))}

            </div>

            <Footer />
        </div>
    )
}
export default Products;
