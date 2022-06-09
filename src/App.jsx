import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/success";

const App = () => {
  const { currentUser: user } = 
  useSelector((state) => state.user);

  React.useEffect(() => {
    if (user) <Navigate replace to="/" />;
  }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />

        <Route path="/login" element={<Login />} />

        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
