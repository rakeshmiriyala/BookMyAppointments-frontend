import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function NewNavbar() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [locationText, setLocationText] = useState("Select Location");

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

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Your Logo</a>
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
        <button className="btn btn-primary">Login/Signup</button>
      </div>
    </div>
  );
}

export default NewNavbar;
