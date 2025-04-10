import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Items from "./Items/Items";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      {/* main section */}

      <div>
        {/* items section */}
        <div>
          <Items></Items>
        </div>

        {/* Favorite items */}
        <div></div>
      </div>
    </>
  );
}

export default App;
