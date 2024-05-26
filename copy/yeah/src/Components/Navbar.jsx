import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImage from "../assets/Logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on nav state change
  }, [nav]);

  const homeLink = "/";
  const profileLink = "/profile";
  const productLink = "/product";
  const orderLink = "https://arw.shiprocket.co/tracking";

  return (
    <div
      className={`flex justify-between font-sans items-center w-full h-20 px-4 text-white bg-cover bg-center relative`}
      style={{ zIndex: 2 }}
    >
      <div>
        <img src={logoImage} alt="Logo" className="h-16" />
      </div>
      <ul className="hidden md:flex">
        <li
          className="px-4 cursor-pointer  text-lg  hover:scale-105 duration-50 font-semibold"
          style={{ color: "#2BB673" }}
        >
          <Link to={homeLink}>Home</Link>
        </li>
        <li
          className="px-4 cursor-pointer text-lg  hover:scale-105 duration-50 font-semibold"
          style={{ color: "#2BB673" }}
        >
          <Link to={profileLink}>Profile</Link>
        </li>
        <li
          className="px-4 cursor-pointer  text-lg  hover:scale-105 duration-50 font-semibold"
          style={{ color: "#2BB673" }}
        >
          <Link to={productLink}>Product</Link>
        </li>
        <li
          className="px-4 cursor-pointer  text-lg  hover:scale-105 duration-50 font-semibold"
          style={{ color: "#2BB673" }}
        >
          <Link to={orderLink}>Order</Link>
        </li>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        data-aos="fade-down" // Apply AOS animation to the hamburger menu icon
        data-aos-duration="1000"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen bg-black text-white"
          data-aos="fade-down" // Apply AOS animation to the menu items
          data-aos-duration="1000"
        >
          <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
            <Link onClick={() => setNav(!nav)} to={homeLink}>
              Home
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
            <Link onClick={() => setNav(!nav)} to={profileLink}>
              Profile
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
            <Link onClick={() => setNav(!nav)} to={productLink}>
              Product
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-3xl">
            <Link onClick={() => setNav(!nav)} to={orderLink}>
              Order
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
