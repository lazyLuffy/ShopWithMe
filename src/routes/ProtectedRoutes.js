import React from "react";
import ProductList from "../pages/ProductList";
import ProductCart from "../pages/ProductCart";
import SingleProduct from "../component/SingleProduct";


const ProtectedRoutes = [
  { path: "/", element: <ProductList /> },
  { path: "/product-list", element: <ProductList /> },
  { path: "/cart", element: <ProductCart /> },
]

export default ProtectedRoutes;