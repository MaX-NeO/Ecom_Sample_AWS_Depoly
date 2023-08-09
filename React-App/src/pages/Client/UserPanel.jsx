import React, { useEffect, useState } from 'react'
import { UserAuth } from './Auth/UserAuth'
import { Navbar } from '../../components/Navbar'
import UserLeftbar from './Layout/UserLeftbar'
import { Footer } from '../../components/Footer'
import Cookies from 'js-cookie'
import { getUserOrders } from '../../service/api'


const UserPanel = () => {
    const [orders, setOrders] = useState([])
    const uid = Cookies.get('xuserID')

    const fetchOrders = async () => {
        try {
            const response = await getUserOrders(uid)
            setOrders(response.data)
        } catch (error) {
            console.error("Error fetching user orders:", error)
        }
    }

    console.log(orders)

    useEffect(() => {
        fetchOrders()
    }, [])
    return (
        <>
            <UserAuth />
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
                                <th>
                                    Date
                                </th>
                                <th>
                                    Products
                                </th>
                                <th>
                                    Deliver Location
                                </th>
                                <th>
                                    Total
                                </th>
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
    )
}
export default UserPanel