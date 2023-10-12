import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/header/Header";
import { SingleCoin } from "./pages/singleCoin/SingleCoin";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="holder @apply bg-[linear-gradient(0deg,#0f051d_30%,#130749_70%)] h-full">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins/:id" element={<SingleCoin />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
