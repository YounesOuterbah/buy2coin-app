import { Slider } from "../components/Slider/Slider";
import { Header } from "../components/header/Header";
import { Landing } from "../components/landing/Landing";
import { Market } from "../components/market/Market";

export const Home = () => {
  return (
    <>
        <Landing />
        <Slider />
        <Market />
    </>
  );
};
