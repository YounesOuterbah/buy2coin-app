import { FaWallet } from "react-icons/fa6";

export const Price = () => {
  return (
    <div className="choose py-10 text-white">
      <div className="container">
        <h1 className="title text-center text-8xl font-bold">
          <span
            className="@apply bg-clip-text bg-[linear-gradient(25deg,#2600fc,#ff00ea)] text-transparent
                -webkit-background-clip: text"
          >
            PRICING
          </span>
        </h1>
        <div className="cards mt-20 flex items-center justify-between gap-4">
          <div className="card border border-[hsla(0,0%,51%,.25)] rounded-md flex flex-col items-center justify-between w-72 h-80 p-2 @apply bg-[hsla(0,0%,100%,0.05)]">
            <div
              className="icon w-full h-32 @apply bg-[linear-gradient(to_bottom_left,#7F00FF,#E100FF)]
                        flex items-center justify-center rounded-br-full"
            >
              <FaWallet className="text-4xl" />
            </div>
            <div className="flex flex-col mt-2 text-white text-center">
              <p className="text-2xl font-semibold uppercasec ">Connect your wallet</p>
              <p>Use Trust Wallet, Metamask or to connect to the app.</p>
            </div>
            <button className="@apply bg-[linear-gradient(to_bottom_left,#7F00FF,#E100FF)] p-2 rounded-md">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
