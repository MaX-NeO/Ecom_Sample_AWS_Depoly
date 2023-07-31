import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feedback from './pages/Client/Feedback'
import Home from './pages/Client/Home'
import Dashboard from './pages/Admin/Dashboard'
import ViewFeedbacks from './pages/Admin/Feedback/ViewFeedbacks'
import EditProduct from './pages/Admin/Product/EditProduct'
import AddProduct from './pages/Admin/Product/AddProduct'
import ViewProducts from './pages/Admin/Product/ViewProducts'
import ViewUsers from './pages/Admin/User/ViewUsers'
import EditUser from './pages/Admin/User/EditUser'
import AdminLogin from './pages/Admin/AdminLogin'
import Products from './pages/Client/Products';
import Login from './pages/Client/Login'
import Register from './pages/Client/Register'
import UserPanel from './pages/Client/UserPanel'
import { Privacy } from './pages/etc/Privacy'
import { Terms } from './pages/etc/Terms'
import {Cart} from './pages/Client/Cart'
import { Settings } from './pages/Client/Settings'
import Checkout from './pages/Client/Checkout'
import OrderRedirect from './pages/Client/OrderRedirect'


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/checkout' element={<Checkout />} />
        <Route exact path='/order/success' element={<OrderRedirect/>}/>

        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/user/dashboard' element={<UserPanel/>}/>
        <Route exact path='/user/settings' element={<Settings/>}/>



        <Route exact path='/admin/dashboard' element={<Dashboard />} />
        <Route exact path='/admin/login' element={<AdminLogin />} />

        <Route exact path='/admin/products/view' element={<ViewProducts/>}/>
        <Route exact path='/admin/product/add' element={<AddProduct />} />
        <Route exact path='/admin/product/edit/:productId' element={<EditProduct />} />

        
        <Route exact path='/admin/users/view' element={<ViewUsers/>}/>
        <Route exact path='/admin/user/edit/:userId' element={<EditUser />} />

        <Route exact path='/admin/feedbacks/view' element={<ViewFeedbacks/>}/>

        <Route exact path='/feedback' element={<Feedback />} />
        <Route exact path='/privacy' element={<Privacy/>}/>
        <Route exact path='/terms' element={<Terms/>}/>
      </Routes>
    </>
  )
}
export default App;