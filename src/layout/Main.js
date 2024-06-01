import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";

export default function Main() {


  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
    </React.Fragment>
  )
}