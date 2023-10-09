import { Header } from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./components/landing/Landing";
import { Slider } from "./components/Slider/Slider";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="holder bg-gradient-to-r from-sky-500 to-indigo-500 text-white h-full">
          <Header />
          <Landing />
          <Slider />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
