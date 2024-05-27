/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";
import logo from "../assets/Logo.png";
import { FaLocationDot } from "react-icons/fa6";

const HospitalPage = ({ searchResults }) => {
  const hospitalsData = [
    {
      id: 1,
      name: "Apollo",
      location: "Banjara Hills",
      taglines: [
        "Comprehensive Skin Care",
        "Expert Healthcare",
        "State-of-the-Art Facilities",
        "Personalized Treatments",
        "Trusted by Millions",
      ],
      image:
        "https://imgs.search.brave.com/QG305Lj7DOh607XZ02RfWpglN_5RWgWRZlcqsc4hOsc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5waXRjaGJvb2su/Y29tL2pmdjQ0RWFN/VjlFSVYyZmRqZlRk/bWZ2QTI3bzE2MTMz/OTMyODg2MzRfMjAw/eDIwMA",
    },
    {
      id: 2,
      name: "Yashoda",
      location: "Secunderabad",
      taglines: [
        "Expert Dental Care",
        "Cutting-Edge Technology",
        "Experienced Professionals",
        "Patient-Centered Approach",
        "Comprehensive Services",
      ],
    },
    {
      id: 3,
      name: "Max Hospital",
      location: "Banjara Hills",
      taglines: [
        "Advanced Heart Care",
        "Innovative Treatments",
        "24/7 Emergency Services",
        "World-Class Doctors",
        "High Patient Satisfaction",
      ],
    },
    {
      id: 4,
      name: "Fortis Hospital",
      location: "Jubilee Hills",
      taglines: [
        "Skin and Cosmetic Surgery",
        "Leading Cosmetic Procedures",
        "Top Dermatologists",
        "Holistic Care",
        "Pioneers in Innovation",
      ],
    },
    {
      id: 5,
      name: "Columbia Asia",
      location: "Hitech City",
      taglines: [
        "Complete Dental Solutions",
        "Affordable Care",
        "Modern Facilities",
        "Family-Friendly Services",
        "Trusted by the Community",
      ],
    },
    {
      id: 6,
      name: "Artemis Hospital",
      location: "Gachibowli",
      taglines: [
        "Skin Rejuvenation",
        "Anti-Aging Treatments",
        "Advanced Dermatology",
        "Luxurious Care",
        "Customized Solutions",
      ],
    },
    {
      id: 7,
      name: "Manipal Hospital",
      location: "Secunderabad",
      taglines: [
        "Dental Implants",
        "Prosthodontic Expertise",
        "High Success Rates",
        "Advanced Dental Technology",
        "Patient Comfort Priority",
      ],
    },
    {
      id: 8,
      name: "Narayana Health",
      location: "Jubilee Hills",
      taglines: [
        "Skin Laser Treatments",
        "Cutting-Edge Laser Technology",
        "Minimally Invasive Procedures",
        "Expert Dermatologists",
        "Exceptional Outcomes",
      ],
    },
    {
      id: 9,
      name: "Aster Medcity",
      location: "Hitech City",
      taglines: [
        "Pediatric Dentistry",
        "Child-Friendly Environment",
        "Experienced Pediatric Dentists",
        "Preventive Care",
        "Gentle Treatments",
      ],
    },
    {
      id: 10,
      name: "KIMS Hospital",
      location: "Gachibowli",
      taglines: [
        "Dermatology and Cosmetology",
        "Wide Range of Services",
        "Experienced Team",
        "State-of-the-Art Facilities",
        "Comprehensive Care",
      ],
    },
    {
      id: 11,
      name: "Medanta - The Medicity",
      location: "Banjara Hills",
      taglines: [
        "Dental Braces and Aligners",
        "Orthodontic Expertise",
        "Beautiful Smiles",
        "Latest Techniques",
        "Customized Treatment Plans",
      ],
    },
    {
      id: 12,
      name: "Sir Ganga Ram Hospital",
      location: "Secunderabad",
      taglines: [
        "Skin Allergy Treatments",
        "Expert Diagnosis",
        "Effective Treatments",
        "Comprehensive Care",
        "Patient-Centered Approach",
      ],
    },
    {
      id: 13,
      name: "BLK Super Speciality Hospital",
      location: "Hitech City",
      taglines: [
        "Advanced Dental Care",
        "High-End Equipment",
        "Experienced Dentists",
        "Patient Safety First",
        "Wide Range of Services",
      ],
    },
    {
      id: 14,
      name: "Indraprastha Apollo Hospital",
      location: "Jubilee Hills",
      taglines: [
        "Skin Cancer Treatment",
        "Expert Oncologists",
        "Advanced Care",
        "Comprehensive Treatment Plans",
        "Supportive Care",
      ],
    },
    {
      id: 15,
      name: "Kokilaben Dhirubhai Ambani Hospital",
      location: "Banjara Hills",
      taglines: [
        "Cosmetic Dentistry",
        "Smile Makeovers",
        "Expert Dentists",
        "Personalized Care",
        "Top-Quality Materials",
      ],
    },
    {
      id: 16,
      name: "Ruby Hall Clinic",
      location: "Gachibowli",
      taglines: [
        "General Dermatology",
        "Skin Health Experts",
        "Wide Range of Services",
        "Experienced Dermatologists",
        "Patient Education",
      ],
    },
    {
      id: 17,
      name: "Lilavati Hospital and Research Centre",
      location: "Jubilee Hills",
      taglines: [
        "Root Canal Treatment",
        "Endodontic Expertise",
        "Pain-Free Procedures",
        "High Success Rates",
        "Patient Comfort Priority",
      ],
    },
    {
      id: 18,
      name: "Christian Medical College, Vellore",
      location: "Hitech City",
      taglines: [
        "Psoriasis Treatment",
        "Expert Care",
        "Innovative Treatments",
        "Holistic Approach",
        "Long-Term Management",
      ],
    },
    {
      id: 19,
      name: "Nanavati Super Speciality Hospital",
      location: "Secunderabad",
      taglines: [
        "Advanced Skin Treatments",
        "Expert Dermatologists",
        "Cutting-Edge Technology",
        "Personalized Care",
        "High Patient Satisfaction",
      ],
    },
    {
      id: 20,
      name: "Tata Memorial Hospital",
      location: "Banjara Hills",
      taglines: [
        "Orthodontic Treatment",
        "Braces and Aligners",
        "Beautiful Smiles",
        "Experienced Orthodontists",
        "Customized Plans",
      ],
    },
  ];

  const [searchValue, setSearchValue] = useState("");
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [areaName, setAreaName] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(
    localStorage.getItem("selectedLocation") || ""
  );

  useEffect(() => {
    if (selectedLocation && selectedLocation !== "Current Location") {
      setAreaName(selectedLocation);
      filterHospitals(selectedLocation);
    } else if (selectedLocation === "Current Location" && currentLocation) {
      fetchAreaName(currentLocation.latitude, currentLocation.longitude);
    } else {
      setFilteredHospitals(hospitalsData);
    }
  }, [selectedLocation, currentLocation]);

  const filterHospitals = (location) => {
    const filtered = hospitalsData.filter((hospital) =>
      hospital.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredHospitals(filtered);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = hospitalsData.filter(
      (hospital) =>
        hospital.location
          .toLowerCase()
          .includes(selectedLocation.toLowerCase()) &&
        (hospital.name.toLowerCase().includes(value) ||
          hospital.location.toLowerCase().includes(value) ||
          hospital.taglines.some((tagline) =>
            tagline.toLowerCase().includes(value)
          ))
    );
    setSearchValue(value);
    setFilteredHospitals(filtered);
  };

  const handleSelectCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
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
        // Filter hospitals based on fetched area name
        filterHospitals(area);
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
    filterHospitals(city);
    // Close the dropdown
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.remove("active");
  };

  const handleHospitalClick = (hospitalId) => {
    window.location.href = `/hospital/${hospitalId}`;
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
            value={searchValue}
            onChange={handleSearch}
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <div style={{ width: "94%" }}>
          <div
            style={{
              width: "100%",
              overflowY: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {filteredHospitals.length === 0 ? (
              <div style={{ textAlign: "center", padding: "20px" }}>
                No hospitals found.
              </div>
            ) : (
              filteredHospitals.map((hospital) => (
                <div
                  key={hospital.id}
                  style={{
                    backgroundColor: "#D9D9D9",
                    padding: "20px",
                    marginBottom: "20px",
                    borderRadius: "8px",
                    transition: "background-color 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#2BB673";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#D9D9D9";
                  }}
                  onClick={() => handleHospitalClick(hospital.id)} // Add onClick handler
                  className="text-black hover:text-white"
                >
                  {hospital.image && (
                    <img
                      src={hospital.image}
                      alt="logo"
                      style={{
                        width: "75px",
                        height: "75px",
                        marginRight: "10px",
                        backgroundColor: "white",
                        borderRadius: "5px",
                      }}
                    />
                  )}
                  <div>
                    <div className="text-2xl">{hospital.name}</div>
                    <div className="text-base">{hospital.location}</div>
                    <div style={{ fontSize: "14px", color: "#555" }}>
                      {hospital.tagline}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalPage;
