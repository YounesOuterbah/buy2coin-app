import React, { useState } from "react";

export const Market = () => {
  const [search, setSearch] = useState();
  console.log(search);
  return (
    <div className="market">
      <div className="container">
        <h1 className="title uppercase text-2xl font-semibold">Market Status</h1>
        <div className="search-box text-black">
          <input type="search" className="w-full py-2 px-4 outline-none" placeholder="Search for a Crypto Currency" onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
    </div>
  );
};
