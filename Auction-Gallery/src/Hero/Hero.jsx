import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="md:h-150 bg-amber-200 relative">
        <img
          src="../../pictures/Banner-min.jpg"
          alt=""
          className="w-full h-full object-cover "
        />

        <div className="absolute md:top-[35%] md:left-20 flex flex-col md:gap-5 top-[20%] left-5 gap-2">
          <p className="text-white md:text-3xl text-xl font-bold flex flex-wrap">
            Bid on Unique items from<br></br> Around the World
          </p>
          <p className="text-white">
            Discover rare collectibles, luxury goods, and vintage <br></br>
            treasures in our curated auctions
          </p>
          <button className="btn btn-primary border-black shadow-none w-40 bg-white text-black rounded-4xl py-1.5">
            Explore Auctions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
