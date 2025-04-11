import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Items from "./Items/Items";
import Favorite from "./Favorite/Favorite";

function App() {
  const handleBidNow = (bid) => {
    console.log(bid);
  };

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      {/* main section */}

      <div className="bg-[#EBF0F5]">
        <div className="container mx-auto pt-20 ">
          <h1 className="text-2xl font-bold text-[#0E2954]">
            Activate Auctions
          </h1>
          <p className="pb-7">Discover and bid on extraordinary items</p>
        </div>
      </div>

      <div>
        {/* items section */}
        <div>
          <Items handleBidNow={handleBidNow}></Items>
        </div>

        {/* Favorite items */}
        <div>
          <Favorite></Favorite>
        </div>
      </div>
    </>
  );
}

export default App;
