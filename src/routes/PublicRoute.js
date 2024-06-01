import React from "react";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";


const PublicRoute = [
  { path: "/", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },


]

export default PublicRoute;