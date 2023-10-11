import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

export const Price = () => {
  const [activeButton, setActiveButton] = useState("MONTHLY");

  return (
    <div className="choose py-20 text-white">
      <div className="container">
        <h1 className="title text-center text-6xl md:text-8xl font-bold">
          OUR{" "}
          <span
            className="@apply bg-clip-text bg-[linear-gradient(25deg,#2600fc,#ff00ea)] text-transparent
                -webkit-background-clip: text"
          >
            PRICING
          </span>
          <div className="text-lg font-thin mt-1">
            Whether your time-saving automation needs are large or small, we’re here to help you
            scale.
            <div className="buttons flex text-lg mx-auto mt-12 font-normal bg-[#f2edec] w-fit text-[#3b3472] rounded-full overflow-hidden">
              <button
                onClick={() => setActiveButton("MONTHLY")}
                className={`p-2 w-32 ${
                  activeButton === "MONTHLY" && "bg-purple-600 text-white rounded-full"
                }`}
              >
                MONTHLY
              </button>
              <button
                onClick={() => setActiveButton("YEARLY")}
                className={`p-2 w-32 ${
                  activeButton === "YEARLY" && "bg-purple-600 text-white rounded-full"
                }`}
              >
                YEARLY
              </button>
            </div>
          </div>
        </h1>
        <div className="pricing-plans mt-6 md:flex md:flex-wrap md:bg-[#f3ebea] w-fit mx-auto rounded-2xl">
          <div className="price-card mb-2 bg-[#f3ebea] rounded-3xl justify-between flex flex-col p-6 w-fit mx-auto h-96 text-[#231d4f]">
            <div className="pricing">
              <span className="text-4xl font-bold ">${activeButton === "MONTHLY" ? 19 : 220}</span>{" "}
              <span>/{activeButton === "MONTHLY" ? "month" : "year"}</span>
            </div>
            <h2 className="text-4xl font-bold">Starter</h2>
            <p>
              Unleash the power of automation
              <br />
              with strong bench press
            </p>
            <ul className="text-[#848199] mt-6">
              <li className="flex items-center mb-2">
                <AiOutlineCheck className="bg-[#dacee2] rounded-full text-[#bb6bd9] text-xl mr-2" />
                Multi-step Zaps
              </li>
              <li className="flex items-center mb-2">
                <AiOutlineCheck className="bg-[#dacee2] rounded-full text-[#bb6bd9] text-xl mr-2" />
                3 Premium Apps
              </li>
              <li className="flex items-center mb-2">
                <AiOutlineCheck className="bg-[#dacee2] rounded-full text-[#bb6bd9] text-xl mr-2" />
                2 Users team
              </li>
              <li className="flex items-center mb-2">
                <AiOutlineCheck className="bg-[#dacee2] rounded-full text-[#bb6bd9] text-xl mr-2" />
                200mb Space
              </li>
            </ul>
            <button className="bg-[#867e9c] p-2 rounded-full duration-300 hover:bg-[#ae9fd8] text-white">
              Choose plan
            </button>
          </div>
          <div className="price-card mb-2 bg-[#f3ebea] rounded-3xl justify-between flex flex-col p-6 w-fit mx-auto h-96 text-[#231d4f]">
            <div className="pricing">
              <span className="text-4xl font-bold ">${activeButton === "MONTHLY" ? 54 : 620}</span>{" "}
              <span>/{activeButton === "MONTHLY" ? "month" : "year"}</span>
            </div>
            <h2 className="text-4xl font-bold">Professional</h2>
            <p>
              Advanced tools to take your work <br />
              to the next level.
            </p>
            <ul className="text-[#848199] mt-6">
              <li className="flex items-center mb-2">
                <AiOutlineCheck className="bg-[#dacee2] rounded-full text-[#bb6bd9] text-xl mr-2" />
                Multi-step Zaps
              </li>
              <li className="flex items-center mb-2">
                <AiOutlineCheck className="bg-[#dacee2] rounded-full text-[#bb6bd9] text-xl mr-2" />
                Unlimited Premium
              </li>
              <li className="flex items-center mb-2">
                <AiOutlineCheck className="bg-[#dacee2] rounded-full text-[#bb6bd9] text-xl mr-2" />
                50 Users team
              </li>
              <li className="flex items-center mb-2">
                <AiOutlineCheck className="bg-[#dacee2] rounded-full text-[#bb6bd9] text-xl mr-2" />
                5gb Space
              </li>
            </ul>
            <button className="bg-[#867e9c] p-2 rounded-full duration-300 hover:bg-[#ae9fd8] text-white">
              Choose plan
            </button>
          </div>
          <div className="price-card bg-[#231d4f] md:scale-110 text-white rounded-3xl justify-between flex flex-col p-6 w-fit mx-auto h-96">
            <div className="pricing">
              <span className="text-4xl font-bold ">${activeButton === "MONTHLY" ? 89 : 1020}</span>{" "}
              <span>/{activeButton === "MONTHLY" ? "month" : "year"}</span>
            </div>
            <h2 className="text-4xl font-bold">Company</h2>
            <p>
              Automation plus enterprise-grade <br />
              features.
            </p>
            <ul className="mt-6">
              <li className="flex items-center mb-2">
                <AiOutlineCheck className="bg-[#dacee2] rounded-full text-[#bb6bd9] text-xl mr-2" />
                Multi-step Zaps
              </li>
              <li className="flex items-center mb-2">
                <AiOutlineCheck className="bg-[#dacee2] rounded-full text-[#bb6bd9] text-xl mr-2" />
                Unlimited Premium
              </li>
              <li className="flex items-center mb-2">
                <AiOutlineCheck className="bg-[#dacee2] rounded-full text-[#bb6bd9] text-xl mr-2" />
                Unlimited Users team
              </li>
              <li className="flex items-center mb-2">
                <AiOutlineCheck className="bg-[#dacee2] rounded-full text-[#bb6bd9] text-xl mr-2" />
                25gb Space
              </li>
              <li className="flex items-center mb-2">
                <AiOutlineCheck className="bg-[#dacee2] rounded-full text-[#bb6bd9] text-xl mr-2" />
                Custom Data Retention
              </li>
            </ul>
            <button className="bg-[#bb6bd9] p-2 rounded-full hover:bg-[#9b4bb8] duration-300 text-white">
              Choose plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
