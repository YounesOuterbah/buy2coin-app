import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/header/Header";
import { SingleCoin } from "./pages/SingleCoin";

function App() {
  return (
    <>
        <BrowserRouter>
          <div className="holder bg-gradient-to-r from-sky-500 to-indigo-500 h-full">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/coin/:id" element={<SingleCoin />} />
            </Routes>
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;
