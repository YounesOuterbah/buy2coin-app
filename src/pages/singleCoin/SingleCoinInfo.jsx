export const SingleCoinInfo = ({ coin }) => {
  return (
    <>
      <div className="info bg-[#26272b] p-2 rounded md:mr-4 mb-4 md:mb-0">
        <p className="bg-[#551bfd] w-fit p-1 rounded">Rank #{coin.coingecko_rank}</p>
        <img src={coin.image?.large} alt={coin.id} className="mx-auto" />
        <div className="flex text-4xl font-bold items-center justify-center">
          <p className="mr-2">{coin.name}</p> <span className="text-2xl">({coin.symbol})</span>
        </div>
        <p className="mt-4 md:w-[350px] text-center md:text-start">
          {coin.description?.en.slice(0, 188)}
        </p>
        <h1 className="text-2xl font-bold mt-2 text-center md:text-start">
          Current Price:{" "}
          <span className="text-green-400">
            ${coin.market_data?.current_price.usd.toLocaleString()}
          </span>
        </h1>
      </div>
    </>
  );
};
