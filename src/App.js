import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import protectedRoutes from "./routes/ProtectedRoutes";
import Main from "./layout/Main";
import PublicRoute from "./routes/PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { clearUser, setUser } from "./redux/authSlice";


export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);



  return (
    <React.Fragment>
      <BrowserRouter>
          <Routes>
            {user ? (
              <Route path="/" element={<Main />}>
                {protectedRoutes.map((route, index) => (
                  <Route path={route.path} element={route.element} key={index} />
                ))}
              </Route>
            ) : (
              PublicRoute.map((route, index) => (
                <Route path={route.path} element={route.element} key={index} />
              ))
            )}
            <Route path="*" element={<h1>HEY NOT FOUND</h1>} />
          </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
