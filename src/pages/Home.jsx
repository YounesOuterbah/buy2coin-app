import { Slider } from "../components/Slider/Slider";
import { Landing } from "../components/landing/Landing";
import { Market } from "../components/market/Market";
import { Price } from "../components/pricing/price";

export const Home = () => {
  return (
    <>
      <Landing />
      <Slider />
      <Market />
      <Price />
    </>
  );
};
