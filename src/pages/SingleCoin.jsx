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

  return <div className="container">{coin.name}</div>;
};
