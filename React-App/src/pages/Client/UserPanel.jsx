import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import UserLeftbar from './Layout/UserLeftbar';
import { Footer } from '../../components/Footer';
import { getUserOrders } from '../../service/api';
import CryptoJS from 'crypto-js';

const UserPanel = () => {
    const [orders, setOrders] = useState([]);
    const __enc_auth_u = localStorage.getItem('__enc_auth_u');
    const __enc_auth_k = localStorage.getItem('__enc_auth_k');
    let uid = '';

    try {
        const bytes = CryptoJS.AES.decrypt(__enc_auth_u, __enc_auth_k);
        uid = bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("Error decrypting UID:", error);
    }

    const fetchOrders = async () => {
        try {
            const response = await getUserOrders(uid);
            setOrders(response.data);
        } catch (error) {
            console.error("Error fetching user orders:", error);
        }
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <>
            <Navbar />
            <UserLeftbar />
            <div className='mainx'>
                <div className='titlebar'>
                    Order History
                </div>
                <div className='shadow bg-white data-table-container'>
                    <table className='data-table'>
                        <thead className='data-table-thead shadow'>
                            <tr>
                                <th>Date</th>
                                <th>Products</th>
                                <th>Deliver Location</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(orders) && orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order.oid}>
                                        <td>{order.orderdate}</td>
                                        <td>{order.orderproducts}</td>
                                        <td>{order.orderaddress}</td>
                                        <td>{order.ordertotal}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No orders found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default UserPanel;
