import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/cartSlice';
import { Navbar } from '../../components/Navbar';
import { Footer } from './../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, MinusCircle, Trash } from 'lucide-react';


const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };


  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };


  const totalAmount = cartItems.reduce((acc, product) => {
    return acc + product.productprice * product.quantity;
  }, 0);
  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className='main'>
      <Navbar />
      <div className='cart-title-container'>

      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className='cart-title-container'>
          <h1 className='cart-title primary'>Your Cart</h1>
          <button className='cart-checkout-btn shadow' onClick={handleCheckout}>Checkout </button>
          </div>
          <div className='shadow bg-white'>
            <table className='data-table'>
              <thead>
                <tr>
                  <th>
                    Product
                  </th>
                  <th>
                    Product Name
                  </th>
                  <th>
                    Price
                  </th>
                  <th>
                    Order Quantity
                  </th>
                  <th>
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((product) => (
                  <tr key={product.pid}>
                    <td> <img src={product.productimage} className='mini-product-img' /></td>
                    <td>{product.productname}</td>
                    <td>₹ {product.productprice}</td>
                    <td className='d-flex-r'>
                      <button className='data-btn-mini bg-white shadow' onClick={() => handleDecreaseQuantity(product.pid)}> <MinusCircle /> </button>
                      <h3> {product.quantity}</h3>
                      <button className='data-btn-mini bg-white shadow' onClick={() => handleIncreaseQuantity(product.pid)}> <PlusCircle /> </button>
                    </td>
                    <td>
                      <button className='data-btn-mini bg-white shadow' onClick={() => handleRemoveItem(product.pid)}><Trash color="#ff0000" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className='cart-total'>Total: ₹{totalAmount}</p>
          </div>
        </div>
      )}


      <Footer />
    </div>
  );
};

export { Cart };
