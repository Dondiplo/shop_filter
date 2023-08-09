import React from "react";
import "./App.css";
import Nav from "./Navigation/Nav";
import Products from "./Product/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";


export default function App() {
  return (
    <><Sidebar/>
      <Nav />
      <Recommended/>
      <Products/>
     
    </>
  );
}
