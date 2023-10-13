import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useCurrency } from "../../context/CurrencyContext";

export const Slider = () => {
  const [trendCoin, setTrendCoin] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { selectedCurrency } = useCurrency();

  useEffect(() => {
    const fetchTrendCoins = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`
        );
        setTrendCoin(res.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchTrendCoins();

    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 4);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, selectedCurrency]);

  if (error || isLoading) {
    return <p className="text-center text-white font-bold text-2xl mt-6">Loading ...</p>;
  }

  return (
    <div className="slider">
      <div className="container">
        <h1 className="title text-center uppercase mt-4 text-2xl text-white">
          Get All The Info about your Favorite Cryptocurrency
        </h1>
        <div className="coin-wrapper relative overflow-hidden">
          <BsFillArrowLeftCircleFill
            className="absolute top-1/4 left-0 text-4xl cursor-pointer z-50 bg-white rounded-full"
            onClick={() => setCurrentSlide((currentSlide - 1 + 4) % 4)}
          />
          <ul
            className="trend-coin-container flex w-20 mx-auto py-4 justify-between duration-300"
            style={{ transform: `translateX(${currentSlide * -170}px)` }}
          >
            {trendCoin.map((coin) => (
              <li key={coin.id} className="flex flex-col items-center text-md w-full text-white">
                <img src={coin.image} alt={coin.id} className="w-1/4" />
                <p>{coin.name.slice(0, 9)}</p>
                <p className="hidden md:block">
                  {selectedCurrency === "usd"
                    ? `$ ${coin.current_price}`
                    : `€ ${coin.current_price}`}
                </p>
              </li>
            ))}
          </ul>
          <BsFillArrowRightCircleFill
            className="absolute top-1/4 right-0 text-4xl cursor-pointer z-50 bg-white rounded-full"
            onClick={() => setCurrentSlide((currentSlide + 1) % 4)}
          />
        </div>
      </div>
    </div>
  );
};
