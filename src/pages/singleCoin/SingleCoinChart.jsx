export const SingleCoinChart = ({ options, data, setChartControl, Line }) => {
  return (
    <>
      <div className="chart w-full bg-[#26272b] p-2 rounded">
        <Line options={options} data={data} />
        <div className="buttons flex justify-evenly mt-6 flex-wrap">
          <button
            onClick={() => setChartControl("1")}
            className="p-2 rounded bg-blue-400 w-full md:w-32 mb-2 hover:bg-blue-700 duration-500"
          >
            24h
          </button>
          <button
            onClick={() => setChartControl("7")}
            className="p-2 rounded bg-blue-400 w-full md:w-32 mb-2 hover:bg-blue-700 duration-500"
          >
            7 Days
          </button>
          <button
            onClick={() => setChartControl("30")}
            className="p-2 rounded bg-blue-400 w-full md:w-32 mb-2 hover:bg-blue-700 duration-500"
          >
            30 Days
          </button>
          <button
            onClick={() => setChartControl("90")}
            className="p-2 rounded bg-blue-400 w-full md:w-32 mb-2 hover:bg-blue-700 duration-500"
          >
            90 Days
          </button>
          <button
            onClick={() => setChartControl("365")}
            className="p-2 rounded bg-blue-400 w-full md:w-32 hover:bg-blue-700 duration-500"
          >
            1 Year
          </button>
        </div>
      </div>
    </>
  );
};
