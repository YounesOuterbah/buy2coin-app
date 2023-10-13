import BITcoin from "/imgs/bit-coin.png";
import ETHcoin from "/imgs/eth-coin.png";

export const Landing = () => {
  return (
    <div className="landing mt-7 mb-16">
      <div className="container flex items-center justify-center relative">
        <img src={BITcoin} className="absolute w-14 left-6 md:w-28 md:left-12 animate-pulse" />
        <div className="big-title text-6xl md:text-8xl text-center font-bold">
          <span className="text-white">TRACK AND TRADE</span>
          <br />
          <span
            className="@apply bg-clip-text bg-[linear-gradient(25deg,#2600fc,#ff00ea)] text-transparent
  -webkit-background-clip: text"
          >
            CRYPTO CURRENCIES
          </span>
        </div>
        <img src={ETHcoin} className="absolute w-14 right-6 md:w-28 md:right-12 animate-pulse" />
      </div>
    </div>
  );
};
