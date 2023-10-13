import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 80 ? setIsSticky(true) : setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`header h-24 flex ${
        isSticky
          ? "sticky top-0 z-[999] duration-300 bg-[#120644] shadow-xl shadow-indigo-500/10"
          : ""
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/">
          <h1 className="uppercase font-bold ml-1 text-white text-2xl md:text-4xl">BUY2COIN</h1>
        </Link>
        <div className="hello flex justify-between items-center w-1/2 flex-row-reverse md:flex-row">
          {toggle ? (
            <AiFillCloseCircle
              className="text-2xl text-white md:hidden"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <FaBars className="text-2xl text-white md:hidden" onClick={() => setToggle(!toggle)} />
          )}
          <ul
            className={`list ${
              toggle
                ? "absolute text-xl top-24 pl-9 left-0 w-full bg-white text-gray-900 z-50 duration-1000 md:flex"
                : "absolute text-xl -top-96 duration-1000 w-full left-0 flex"
            } md:${
              toggle ? "flex md:bg-transparent md:static md:w-fit" : "flex md:static md:w-fit"
            }`}
          >
            <li className=" mt-6 mb-6 md:mr-8 md:text-white md:hover:text-rose-500 duration-500">
              <a href="#market">Market</a>
            </li>
            <li className=" mt-6 mb-6 md:mr-8 md:text-white md:hover:text-rose-500 duration-500">
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
          <select className="options text-gray-900">
            <option value="usd" className="text-xs">
              USD
            </option>
            <option value="eur" className="text-xs">
              EUR
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
