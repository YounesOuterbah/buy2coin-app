import axios from "axios";
import React, { useEffect, useState } from "react";
import { MarketTable } from "./MarketTable";
import { Pagination } from "../../utils/Pagination";

export const Market = () => {
  const [tableCoins, setTableCoins] = useState([]);
  const [filteredTableCoins, setFilteredTableCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTableCoins = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        const initialData = res.data;
        setTableCoins(initialData);
        setFilteredTableCoins(initialData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTableCoins();
  }, []);

  const handleChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filterCoins = tableCoins.filter((coin) => coin.name.toLowerCase().includes(searchQuery));
    setFilteredTableCoins(filterCoins);
    setCurrentPage(1);
  };

  const COIN_INFO_PER_PAGE = 15;
  const pages = Math.ceil(filteredTableCoins.length / COIN_INFO_PER_PAGE);
  const startInedx = (currentPage - 1) * COIN_INFO_PER_PAGE;
  const lastIndex = currentPage * COIN_INFO_PER_PAGE;

  const TableCoinsPagination = filteredTableCoins.slice(startInedx, lastIndex);

  return (
    <div className="market pb-12">
      <div className="container">
        <h1 className="title uppercase text-2xl font-semibold text-white my-4">Market Status</h1>
        <div className="search-box text-black">
          <input
            type="search"
            className="w-full py-2 px-4 outline-none"
            placeholder="Search for a Crypto Currency"
            onInput={handleChange}
          />
          <MarketTable TableCoinsPagination={TableCoinsPagination} />
          <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
};
