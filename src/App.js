import React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Menu from "./components/pages/menu/Menu";
import Blog from "./components/pages/blog/Blog";
import Pricing from "./components/pages/pricing/Pricing";
import ChickenKing from "./components/pages/menu/chickenKing/ChickenKing";
import Contact from "./components/pages/contact/Contact";
import SignUp from "./components/pages/registration/signUp/signUp";
import Order from "./components/pages/order/Order";
import SignIn from "./components/pages/registration/signIn/signIn";
import ForgetPassword from "./components/pages/registration/forgetPassword/ForgetPassword";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />}/>
                <Route path="/menu/order" element={<Order />} />
                <Route path="/blog" element={<Blog />}/>
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/menu/chickenKing" element={<ChickenKing />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/forgetPass" element={<ForgetPassword />} />
            </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
