import React, { use, useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const Items = ({ handleBidNow, items, cancel }) => {
  const [favorite, setFavorite] = useState({});

  const handleBidIcon = (item) => {
    handleBidNow(item);
    if (favorite[item.id]) return; // Prevent double-click
    setFavorite((prev) => ({ ...prev, [item.id]: true }));
  };

  useEffect(() => {
    if (cancel !== null) {
      setFavorite((prev) => ({ ...prev, [cancel]: false }));
    }
  }, [cancel]);

  return (
    <div className="bg-[#EBF0F5]">
      <div className="">
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
                    <button
                      className={`hover:cursor-pointer disabled:cursor-not-allowed`}
                      onClick={() => handleBidIcon(item)}
                      disabled={favorite[item.id]}
                    >
                      {favorite[item.id] ? (
                        <GoHeartFill className="text-2xl text-red-600" />
                      ) : (
                        <GoHeart className="text-2xl text-[#0E2954]" />
                      )}
                    </button>
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
