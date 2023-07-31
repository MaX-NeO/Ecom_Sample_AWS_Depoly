import React, { useEffect, useState } from 'react'
import { UserAuth } from './Auth/UserAuth'
import { Navbar } from '../../components/Navbar'
import UserLeftbar from './Layout/UserLeftbar'
import { Footer } from '../../components/Footer'
import Cookies from 'js-cookie'
import { getUserOrders } from '../../service/api'


const UserPanel = () => {
    const [orders,setOrders] = useState([])
    const uid = Cookies.get('xuserID')
    const fetchorders = async()=>{
        const response = await getUserOrders(uid)
        setOrders(response.data)
    }
    console.log(orders)
    useEffect(()=>{
        fetchorders()
    },[])
    return (
        <>
            <UserAuth />
            <Navbar />
            <UserLeftbar />
            <div className='mainx'>
                <div className='titlebar'>
                    Order History
                </div>
                <div className='shadow bg-white'>
                        <table className='data-table'>
                            <thead>
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
                                {orders.map((order) => (
                                    <tr key={order.oid}>
                                        <td>{order.orderdate}</td>
                                        <td>{order.orderproducts}</td>
                                        <td>{order.orderaddress}</td>
                                        <td>{order.ordertotal}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

            </div>
            <Footer />
        </>
    )
}
export default UserPanel