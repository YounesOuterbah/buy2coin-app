import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareYoutube,
  FaSquareFacebook,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="footer mt-32 ">
      <div className="container text-white relative">
        <ul className="flex items-center justify-center">
          <li>
            <FaSquareXTwitter className="text-3xl mx-2 cursor-pointer" />
          </li>
          <li>
            <FaSquareInstagram className="text-3xl mx-2 cursor-pointer" />
          </li>
          <li>
            <FaSquareYoutube className="text-3xl mx-2 cursor-pointer" />
          </li>
          <li>
            <FaSquareFacebook className="text-3xl mx-2 cursor-pointer" />
          </li>
        </ul>
        <ul className="flex items-center justify-center mt-6 text-xl text-white mb-6">
          <li
            className="mr-6 cursor-pointer duration-300 hover:@apply hover:bg-clip-text hover:bg-[linear-gradient(25deg,#2600fc,#ff00ea)] hover:text-transparent
            -webkit-background-clip: text"
          >
            Privacy
          </li>
          <li
            className="ml-6 cursor-pointer duration-300 hover:@apply hover:bg-clip-text hover:bg-[linear-gradient(25deg,#2600fc,#ff00ea)] hover:text-transparent
                -webkit-background-clip: text"
          >
            Terms of Use
          </li>
        </ul>
        <img src="/imgs/golden-coin.png" alt="golden-coin-image"/>
      </div>
    </div>
  );
};
