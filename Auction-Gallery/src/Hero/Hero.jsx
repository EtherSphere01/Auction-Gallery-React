import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div
        className="hero min-h-[75vh]  "
        style={{
          backgroundImage: "url(../../pictures/Banner-min.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Bid on Unique Items from Around the World
            </h1>
            <p className="mb-5">
              Discover rare collectibles, luxury goods, and vintage treasures in
              our curated auctions
            </p>
            <button className="btn btn-primary rounded-4xl bg-white text-black shadow-none border-black">
              Explore Auctions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
