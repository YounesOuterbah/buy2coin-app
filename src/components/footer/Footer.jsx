import { FaXTwitter, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="footer mt-6">
      <div className="container text-white">
        <ul>
          <li>
            <FaXTwitter className="text-2xl" />
          </li>
          <li>
            <FaInstagram className="text-2xl" />
          </li>
          <li>
            <FaYoutube className="text-2xl" />
          </li>
          <li>
            <FaDiscord className="text-2xl" />
          </li>
        </ul>
      </div>
    </div>
  );
};
