import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment/moment";
import { SingleCoinInfo } from "./SingleCoininfo";
import { SingleCoinChart } from "./SingleCoinChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const SingleCoin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const [chart, setChart] = useState();
  const [chartControl, setChartControl] = useState("1");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `https://api.coingecko.com/api/v3/coins/${id}`;
  const chart_url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${chartControl}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get(chart_url)
      .then((res) => {
        setChart(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [chartControl]);

  const coinChartData = chart?.prices.map((value) => ({ x: value[0], y: value[1].toFixed(2) }));

  const options = {
    responsive: true,
  };

  const data = {
    labels: coinChartData?.map((value) => moment(value.x).format("MMM DD")),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinChartData?.map((value) => value.y),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  if (isLoading) {
    return <p className="text-white text-4xl text-center">Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="single-coin pt-16">
      <div className="container text-white">
        <div className="coin-information-wrapper flex flex-col md:flex-row">
          <SingleCoinInfo coin={coin} />
          <SingleCoinChart
            options={options}
            data={data}
            setChartControl={setChartControl}
            Line={Line}
          />
        </div>
      </div>
    </div>
  );
};
