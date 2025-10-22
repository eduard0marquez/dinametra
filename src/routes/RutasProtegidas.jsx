import js from "@eslint/js";
import React from "react";
import { Auth } from "../Pages";
import { Navigate } from "react-router-dom";

function RutasProtegidas({children}) {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  if (user) {
    return children;
  } else {
    return <Navigate to="/auth" />;
  }
}

export default RutasProtegidas;
