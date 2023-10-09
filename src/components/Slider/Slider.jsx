import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

export const Slider = () => {
  const [trendCoin, setTrendCoin] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchTrendCoins = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        setTrendCoin(res.data.slice(0, 10));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendCoins();
  }, []);

  return (
    <div className="slider">
      <div className="container">
        <h1 className="title text-center uppercase mt-4 text-2xl">
          Get All The Info about you Favorite Crypto Currency
        </h1>
        <div className="coin-wrapper relative overflow-hidden">
          <BsFillArrowLeftCircleFill
            className="absolute top-1/4 left-0 text-4xl cursor-pointer z-50"
            onClick={() => setCurrentSlide(currentSlide + 1)}
          />
          <ul
            className="trend-coin-container flex w-20 mx-auto py-4 justify-between duration-300"
            style={{ transform: `translateX(${currentSlide * 150}px)` }}
          >
            {trendCoin.map((coin) => (
              <li key={coin.id} className="flex flex-col items-center text-md w-full">
                <img src={coin.image} alt={coin.id} className="w-1/4" />
                <p>{coin.name}</p>
                <p>$ {coin.current_price}</p>
              </li>
            ))}
          </ul>
          <BsFillArrowRightCircleFill
            className="absolute top-1/4 right-0 text-4xl cursor-pointer z-50"
            onClick={() => setCurrentSlide(currentSlide - 1)}
          />
        </div>
      </div>
    </div>
  );
};