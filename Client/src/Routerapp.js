import React from 'react'
import {BrowserRouter ,Route, Routes } from 'react-router-dom'
import Signup from './unprotectedcomponents/Signup';
import Login from './unprotectedcomponents/Login';
import Products from './unprotectedcomponents/Products';
import Cart from './protectedcomponents/Cart';
import Logout from './protectedcomponents/Logout';
import Orders from './protectedcomponents/Orders';
import App from './App';
import Protected from './protectedcomponents/Protected';
const Routerapp = () => {

  return (
    <div>  <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<App/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/Products" element={<Products/>}></Route>
    <Route path="/cart" element={<Protected><Cart/></Protected>}></Route>
    <Route path="/order" element={<Protected><Orders/></Protected>}></Route>
    <Route path="/Logout" element={<Protected><Logout/></Protected>}></Route>
    </Routes>
    </BrowserRouter></div>
  )
}

export default Routerapp