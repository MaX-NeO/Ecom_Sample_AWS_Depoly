import React from 'react'
import { useNavigate } from 'react-router-dom'
const OrderRedirect = () => {
    const navigate = useNavigate()
    setTimeout(()=>{
        navigate('/user/dashboard')
    },3000)
  return (
    <div>OrderRedirect</div>
  )
}

export default OrderRedirect