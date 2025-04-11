import React, { useState, useEffect } from "react";
import { GoHeart } from "react-icons/go";
import { ImCross } from "react-icons/im";

const Favorite = ({ data, handleCancelChange }) => {
  const [total, setTotal] = useState(0);
  const [bidItems, setBidItems] = useState([]);

  useEffect(() => {
    if (data) {
      const newData = bidItems.filter((item) => item.id !== data.id);
      setBidItems([...newData, data]);
      setTotal((prevTotal) => prevTotal + data.currentBidPrice);
    }
    // console.log(data);
  }, [data]);

  const handleCancel = (item) => {
    const newBidItems = bidItems.filter((bidItem) => bidItem.id !== item.id);
    setBidItems(newBidItems);
    // console.log(newBidItems);
    const newTotal = total - item.currentBidPrice;
    setTotal(newTotal);
    handleCancelChange(item);
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-full min-w-[400px]">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center flex gap-2 items-center justify-center">
                <GoHeart className="text-2xl text-[#0E2954] pt-1" />
                <p className="text-xl text-[#0E2954] ">Favorite Items</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {bidItems.length > 0 ? (
              bidItems.map((item) => (
                <tr key={item.id} className="text-black hover:bg-[#EBF0F5]">
                  <td className="flex items-center gap-3 ">
                    <img src={item.image} alt="" className="w-16 h-16" />
                    <div className="flex justify-between w-full items-start">
                      <div>
                        <p className="text-sm text-gray-500">{item.title}</p>
                        <div className="flex gap-8">
                          <p>$ {item.currentBidPrice}</p>
                          <p>Bids: {item.bidsCount}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCancel(item)}
                        className="hover:cursor-pointer"
                      >
                        <ImCross />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center flex flex-col items-center justify-center py-10 gap-5">
                  <p className="text-xl text-[#0E2954] font-bold">
                    No favorite items
                  </p>
                  <p className="text-center text-gray-400">
                    Click the heart icon on any item to add it to your favorites
                  </p>
                </td>
              </tr>
            )}
            <tr>
              <td className="flex justify-between text-xl">
                <p>Total bids Amount</p>
                <p>$ {total}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Favorite;
