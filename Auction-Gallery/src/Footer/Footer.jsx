import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center">
      <div className="pt-10">
        <a className="btn btn-ghost text-xl">
          <span className="text-[#003EA4]">Auction</span>
          <span className="text-[#FFD337] font-bold">Gallery</span>
        </a>
      </div>

      <div className="flex gap-10">
        <p>Bid.</p>
        <p>Win.</p>
        <p>Own.</p>
      </div>
      <div className="flex gap-10">
        <p>Home</p>
        <p>Auctions</p>
        <p>Categories</p>
        <p>How to works</p>
      </div>

      <div className="pb-10">
        <p>© 2025 Auction Gallery. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
