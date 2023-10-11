import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleCoin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="single-coin pt-16">
      <div className="container text-white">
        <div className="coin-information-wrapper flex">
          <div className="info bg-[#26272b] p-2 rounded mr-4">
            <p className="bg-[#551bfd] w-fit p-1 rounded">Rank #{coin.coingecko_rank}</p>
            <img src={coin.image?.large} alt={coin.id} className="mx-auto"/>
            <div className="flex text-4xl font-bold items-center justify-center">
              <p className="mr-2">{coin.name}</p>{" "}
              <span className="text-2xl">({coin.symbol})</span>
            </div>
            <p className="mt-4 w-[350px]">{coin.description?.en.slice(0, 188)}</p>
            <h1 className="text-2xl font-bold mt-2">Current Price: <span className="text-green-400">${coin.market_data?.current_price.usd.toLocaleString()}</span></h1>
          </div>
          <div className="chart">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo ducimus vero
            impedit ab corrupti temporibus reprehenderit nostrum aliquam ea. Quasi amet odio
            adipisci esse deserunt, quas, modi recusandae mollitia, voluptatem enim voluptas itaque
            labore exercitationem similique dolor! Placeat harum asperiores earum sapiente, iste
            accusantium repudiandae alias, delectus obcaecati nostrum tempore eum assumenda
            consequatur cumque non aliquid a, blanditiis quod voluptate atque doloribus tenetur.
            Iusto eius at mollitia ad, dignissimos quam veritatis! Blanditiis temporibus itaque
            distinctio dolor quo voluptate minima modi animi assumenda laborum, ex ad nam culpa quis
            maxime voluptatem possimus est voluptas unde ratione sed ea. Deleniti, ea!
          </div>
        </div>
      </div>
    </div>
  );
};
