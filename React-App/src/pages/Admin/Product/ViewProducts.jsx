import React from 'react'
import { useState, useEffect } from 'react';
import { getProduct, deleteProduct } from '../../../service/api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Trash, FileEdit, PlusCircle } from 'lucide-react';
import Layout from '../Layout/Layout';
const ViewProducts = () => {
  const navigate = useNavigate();
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
  useEffect(() => {
    fetchProducts();
  }, [])

  const handleEdit = (id) => {
    navigate(`/admin/product/edit/${id}`);
  }
  const handleDelete = async (id) => {
    try {
      const res = await deleteProduct(id);
      console.log(res.status)
      if (res.status == 200) {
        toast.success(`Product Deleted Successfully !`, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      fetchProducts();
    }
    catch (error) {
      console.log(error);
    }
  }

  const routeAdd = () => {
    navigate('/admin/product/add')
  }
  // const routeLogout = () => {
  //   navigate('/')
  // }
  return (
    <>
      <Layout />
      <div className='mainx'>
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
                  Product Price
                </th>
                <th>
                  Product Quantity
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.pid}>
                  <td> <img src={product.productimage} className='mini-product-img' /></td>
                  <td>{product.productname}</td>
                  <td>{product.productprice}</td>
                  <td>{product.productquantity}</td>
                  <td>
                    <button className='data-btn-mini bg-white shadow' onClick={() => handleEdit(product.pid)}><FileEdit color="#0040ff" /></button>
                    <button className='data-btn-mini bg-white shadow' onClick={() => handleDelete(product.pid)}><Trash color="#ff0000" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* <button onClick={routeLogout} className='route-btn-2 bg-white'><Power color="#ff0000" /></button> */}
        <button onClick={routeAdd} className='route-btn-1 bg-white'><PlusCircle color="#25db00" /></button>
      </div>

    </>
  )
}
export default ViewProducts;