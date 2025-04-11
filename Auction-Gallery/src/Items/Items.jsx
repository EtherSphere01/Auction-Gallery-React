import React, { use, useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = "resources.json";
    fetch(data)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  console.log(items);
  return (
    <div className="bg-[#EBF0F5]">
      <div className="container mx-auto pt-20">
        <h1 className="text-2xl font-bold text-[#0E2954]">Activate Auctions</h1>
        <p className="pb-7">Discover and bid on extraordinary items</p>

        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead className="text-black">
              <tr>
                <th>Items</th>
                <th>Current Bid</th>
                <th>Time Left</th>
                <th>Bid Now</th>
              </tr>
            </thead>
            <tbody className="">
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="flex items-center gap-3 ">
                    <img src={item.image} alt="" className="w-16 h-16" />
                    <div>
                      <p className="text-sm text-gray-500">{item.title}</p>
                    </div>
                  </td>
                  <td>$ {item.currentBidPrice}</td>
                  <td>{item.timeLeft}</td>
                  <td>
                    <GoHeart className="text-2xl text-[#0E2954]"></GoHeart>
                    <GoHeartFill className="text-2xl text-red-600 hidden"></GoHeartFill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Items;
