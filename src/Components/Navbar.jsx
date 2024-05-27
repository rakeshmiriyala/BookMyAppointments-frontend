/* eslint-disable no-unused-vars */
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [areaName, setAreaName] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(
    localStorage.getItem("selectedLocation") || ""
  );

  useEffect(() => {
    if (selectedLocation && selectedLocation !== "Current Location") {
      setAreaName(selectedLocation);
    } else if (selectedLocation === "Current Location" && currentLocation) {
      fetchAreaName(currentLocation.latitude, currentLocation.longitude);
    }
  }, [selectedLocation, currentLocation]);

  const handleSelectCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
          console.log("Current Location: ", { latitude, longitude });
          fetchAreaName(latitude, longitude);
          // Set selected location and store it in local storage
          setSelectedLocation("Current Location");
          localStorage.setItem("selectedLocation", "Current Location");
          // Close the dropdown
          document.getElementById("dropdown").classList.remove("active");
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const fetchAreaName = async (latitude, longitude) => {
    const apiKey = "5938214220714bcc8b8391bf94346dfc"; // Replace with your OpenCage API key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const components = data.results[0].components;
        const area =
          components.neighbourhood ||
          components.suburb ||
          components.village ||
          "Unknown";
        // Update area name
        setAreaName(area);
        // Update selected location and store it in local storage
        setSelectedLocation(area);
        localStorage.setItem("selectedLocation", area);
      } else {
        console.error("No results found");
      }
    } catch (error) {
      console.error("Error fetching area name: ", error);
    }
  };

  const handleCitySelect = (city) => {
    setAreaName(city);
    setSelectedLocation(city); // Set selected location
    localStorage.setItem("selectedLocation", city); // Store in local storage
    // Close the dropdown
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.remove("active");
  };
  return (
    <div>
      <div className="navbar bg-[#333333] relative w-auto z-10 flex items-center justify-between lg:py-1 xs:py-0 pl-0 pr-2">
        <div className="flex-grow relative flex items-center">
          <Link to="/dummy">
            <img
              src={logo}
              alt="Logo"
              className="lg:w-[85px] lg:h-[70px] xs:w-[100px] xs:h-[50px] md:w-[70px]"
            />
          </Link>
          <FaSearch className="absolute lg:top-6 lg:left-20 xs:top-4.5 xs:left-14 md:left-16 xs:text-sm lg:text-xl text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="input focus:outline-none lg:pl-10 xs:h-10 md:pl-8 lg:h-12 xs:pl-7 w-full text-black bg-white"
          />
          <div
            className="dropdown lg:ml-6 xs:mx-0 xs:text-lg lg:text-3xl lg:mr-6"
            id="dropdown"
          >
            <div
              tabIndex={0}
              role="button"
              className="btn bg-[#333333] text-white xs:text-xs xs:px-0.5 hover:bg-[#333333] border-none xs:flex-nowrap lg:flex-nowrap"
              onClick={() => {
                document.getElementById("dropdown").classList.toggle("active");
              }}
            >
              <FaLocationDot className="lg:text-2xl xs:text-lg" />
              {selectedLocation || "Select location"}
              <FaChevronDown className="mt-1 lg:text-lg" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content text-center z-[1] menu bg-[#333333] text-white w-auto"
            >
              <li className="">
                <a className="" onClick={handleSelectCurrentLocation}>
                  Select Current Location
                </a>
              </li>
              <li className="">
                <a className="" onClick={() => handleCitySelect("Gachibowli")}>
                  Gachibowli
                </a>
              </li>
              <li className="">
                <a
                  className=""
                  onClick={() => handleCitySelect("Banjara Hills")}
                >
                  Banjara Hills
                </a>
              </li>
              <li className="">
                <a
                  className=""
                  onClick={() => handleCitySelect("Jubilee Hills")}
                >
                  Jubilee Hills
                </a>
              </li>
              <li className="">
                <a className="" onClick={() => handleCitySelect("Hitech City")}>
                  Hitech City
                </a>
              </li>
              <li className="">
                <a
                  className=""
                  onClick={() => handleCitySelect("Secunderabad")}
                >
                  Secunderabad
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className=" z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#333333] text-white w-60"
            >
              <li>
                <a className=" justify-center pb-3 ">My Profile</a>
              </li>
              <hr />
              <li>
                <a className=" justify-center py-3 ">My Bookings</a>
              </li>
              <hr />
              <li>
                <a className=" justify-center py-3 ">Favourites</a>
              </li>
              <hr />
              <li>
                <a className=" justify-center py-3 ">My Medical Records</a>
              </li>
              <hr />
              <li>
                <a className=" justify-center py-3">Help & Support</a>
              </li>
              <hr />
              <li>
                <a className="text-red-500 py-3 justify-center underline">
                  SIGN OUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
