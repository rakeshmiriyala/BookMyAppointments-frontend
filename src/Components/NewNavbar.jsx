import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Main from "./Main";
import Highlight from "./Highlight";
import Login from "./Login";
import logo from "../assets/Logo.png";

function NewNavbar() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [locationText, setLocationText] = useState("Select Location");
  const [showLoginBox, setShowLoginBox] = useState(false);
  const loginBoxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginBoxRef.current && !loginBoxRef.current.contains(event.target)) {
        setShowLoginBox(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const geocoder = new window.google.maps.Geocoder();
        const latlng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        geocoder.geocode({ location: latlng }, (results, status) => {
          if (status === "OK") {
            if (results[0]) {
              const shortLocation = results[0].formatted_address.split(",")[0];
              setCurrentLocation(shortLocation);
              setLocationText("Current Location");
            } else {
              console.log("No results found");
            }
          } else {
            console.log("Geocoder failed due to: " + status);
          }
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const toggleLoginBox = () => {
    setShowLoginBox(!showLoginBox);
  };

  return (
    <div>
      <div className="navbar bg-base-100 relative z-10">
        <div className="flex-1">
          <img src={logo} alt="" style={{ width: "70px", height: "70px" }} />
        </div>
        <div className="relative">
          <FaSearch className="absolute top-3 left-3 text-xl text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered pl-10 w-24 md:w-auto"
          />
        </div>
        <button onClick={handleLocationClick} className="btn btn-ghost text-sm">
          {locationText}
        </button>
        {currentLocation && <span className="text-sm">{currentLocation}</span>}
        <div className="flex-none gap-2">
          <button
            onClick={toggleLoginBox}
            className="btn text-white bg-[#2BB673] hover:bg-[#2BB673]"
          >
            Login/Signup
          </button>
        </div>
        {showLoginBox && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
            {/* Overlay to disable interactions with content below */}
            {/* Login/signup box */}
            <div
              ref={loginBoxRef}
              className="bg-white py-6 px-10 rounded-md shadow-lg relative z-30"
            >
              {/* Render the Login component here */}
              <Login />
            </div>
          </div>
        )}
      </div>
      <div className={showLoginBox ? "opacity-50" : ""}>
        <Highlight />
        <Main />
      </div>
    </div>
  );
}

export default NewNavbar;
