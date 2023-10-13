// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";

// export const MarketTable = ({ TableCoinsPagination }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (TableCoinsPagination.length > 0) {
//       setIsLoading(false);
//     }
//   }, [TableCoinsPagination]);

//   return (
//     <div className="table w-full mt-6 text-white " id="market">
//       <div className="th flex justify-between bg-[#26272b] rounded-md p-2">
//         <p>#</p>
//         <p>Coin</p>
//         <p>Price</p>
//         <p>24h</p>
//         <p className="hidden md:block">Market Cap</p>
//       </div>
//       <div className="tb">
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : (
//           TableCoinsPagination.map((coin) => (
//             <Link
//               to={`/coins/${coin.id}`}
//               key={coin.id}
//               className="flex justify-between items-center bg-[#26272b] my-2 p-2 rounded-md cursor-pointer duration-300 @apply shadow-[0px_0px_12px_#18191b] hover:scale-105"
//             >
//               <p>{coin.market_cap_rank}</p>
//               <div className="flex items-center">
//                 <img src={coin.image} alt={coin.id} className="w-10" />
//                 <p className="ml-1">{coin.name}</p>
//               </div>
//               <p>${coin.current_price.toLocaleString()}</p>
//               <p
//                 className={`${
//                   coin.price_change_percentage_24h.toFixed(2) >= 0
//                     ? "text-green-500"
//                     : "text-red-400"
//                 } font-bold`}
//               >
//                 {coin.price_change_percentage_24h.toFixed(2)}%
//               </p>
//               <p className="hidden md:block">${coin.market_cap.toLocaleString()}</p>
//             </Link>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const MarketTable = ({ TableCoinsPagination }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (TableCoinsPagination.length > 0) {
      setIsLoading(false);
    }
  }, [TableCoinsPagination]);

  return (
    <div className="table w-full mt-6 text-white " id="market">
      <div className="th flex justify-between bg-[#26272b] rounded-md p-2">
        <p>#</p>
        <p>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className="hidden md:block">Market Cap</p>
      </div>
      <div className="tb">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          TableCoinsPagination.map((coin) => (
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
              <p
                className={`${
                  coin.price_change_percentage_24h.toFixed(2) >= 0
                    ? "text-green-500"
                    : "text-red-400"
                } font-bold`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
              <p className="hidden md:block">${coin.market_cap.toLocaleString()}</p>
            </Link>
          ))
        )}
        {error && <p>Error: {error.message}</p>}
      </div>
    </div>
  );
};
