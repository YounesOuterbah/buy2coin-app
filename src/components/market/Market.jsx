import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../../utils/Pagination";

export const Market = () => {
  const [tableCoins, setTableCoins] = useState([]);
  const [filterdTableCoins, setFilterdTableCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTableCoins = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        setTableCoins(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTableCoins();
  }, []);

  const handleChange = (e) => {
    const filterCoins = tableCoins.filter((coin) =>
      coin.name.toLowerCase().includes(e.target.value)
    );
    setFilterdTableCoins(filterCoins);
  };

  useEffect(() => {
    setFilterdTableCoins(tableCoins);
  }, [tableCoins]);

  const COIN_INFO_PER_PAGE = 15;
  const pages = Math.ceil(filterdTableCoins.length / COIN_INFO_PER_PAGE);
  const startInedx = (currentPage - 1) * COIN_INFO_PER_PAGE;
  const lastIndex = currentPage * COIN_INFO_PER_PAGE;

  const TableCoinsPagination = filterdTableCoins.slice(startInedx, lastIndex);

  return (
    <div className="market pb-96">
      <div className="container">
        <h1 className="title uppercase text-2xl font-semibold text-white my-4">Market Status</h1>
        <div className="search-box text-black">
          <input
            type="search"
            className="w-full py-2 px-4 outline-none"
            placeholder="Search for a Crypto Currency"
            onInput={handleChange}
          />
          <div className="table w-full mt-6 text-white">
            <div className="th flex justify-between bg-[#26272b] rounded-md p-2">
              <p>#</p>
              <p>Coin</p>
              <p>Price</p>
              <p>24h</p>
              <p>Market Cap</p>
            </div>
            <div className="tb">
              {TableCoinsPagination.map((coin) => (
                <Link
                  to={`/coins/${coin.id}`}
                  key={coin.id}
                  className="flex justify-between items-center bg-[#26272b] my-2 p-2 rounded-md cursor-pointer duration-300 @apply shadow-[0px_0px_12px_#18191b] hover:scale-105"
                >
                  <p>{coin.market_cap_rank}</p>
                  <div className="flex items-center">
                    <img src={coin.image} alt={coin.id} className="w-10" />
                    <p className="ml-1">{coin.name}</p>
                  </div>
                  <p>${coin.current_price.toLocaleString()}</p>
                  <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                  <p>${coin.market_cap.toLocaleString()}</p>
                </Link>
              ))}
              <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
