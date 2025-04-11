import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Items from "./Items/Items";
import Favorite from "./Favorite/Favorite";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const data = "resources.json";
    fetch(data)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const [data, setData] = useState(null);

  const handleBidNow = (bidItem) => {
    setData(bidItem);
  };

  const [cancel, setCancel] = useState(0);
  const handleCancelChange = (item) => {
    // console.log(item);
    setCancel(item.id);
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

      <div className="bg-[#EBF0F5]">
        <div className="container mx-auto flex gap-6 ">
          {/* items section */}
          <div>
            <Items
              handleBidNow={handleBidNow}
              items={items}
              cancel={cancel}
            ></Items>
          </div>
          {/* Favorite items */}
          <div>
            <Favorite
              data={data}
              handleCancelChange={handleCancelChange}
            ></Favorite>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
