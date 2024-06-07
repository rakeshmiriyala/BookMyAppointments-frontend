import React, { useState, useEffect } from "react";
import Hospitals from "./HospitalPage";
import Labs from "./LabPage";
import { FaHeart } from "react-icons/fa";

const Fav = (localStorageKeys) => {
  const [activeTab, setActiveTab] = useState("hospitals");
  const [likedDoctors, setLikedDoctors] = useState([]);
  const [doctorData, setDoctorData] = useState([]); // State to store doctor data

  // Fetch doctor data from local storage on component mount
  // Fetch doctor data from local storage based on the provided keys
  useEffect(() => {
    localStorageKeys.forEach((key) => {
      const storedDoctorData = JSON.parse(localStorage.getItem(key));
      if (storedDoctorData) {
        // You might want to merge the data from multiple keys into a single array
        // Here, we are replacing the existing doctor data with the data from the current key
        setDoctorData((prevData) => [...prevData, ...storedDoctorData]);
      }
    });
  }, [localStorageKeys]);
  // Fetch liked doctors data from local storage on component mount
  useEffect(() => {
    const storedLikedDoctors = JSON.parse(localStorage.getItem("likedDoctors"));
    if (storedLikedDoctors) {
      setLikedDoctors(storedLikedDoctors);
    }
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleDoctorBooking = (doctorId) => {
    // Implement handleDoctorBooking functionality here
  };

  const handleToggleLike = (doctorId) => {
    // Toggle the like status of a doctor
    if (likedDoctors.includes(doctorId)) {
      // If the doctor is already liked, remove them from the liked list
      setLikedDoctors(likedDoctors.filter((id) => id !== doctorId));
    } else {
      // If the doctor is not liked, add them to the liked list
      setLikedDoctors([...likedDoctors, doctorId]);
    }
  };

  const DoctorCard = ({ doctor }) => {
    // DoctorCard component to display individual doctor details
    const isLiked = likedDoctors.includes(doctor.id); // Check if the doctor is liked

    return (
      <div
        className="hover:bg-[#2BB673] hover:text-white text-black cursor-pointer lg:p-2.5 xs:px-1.5 xs:py-1"
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
        onClick={() => handleDoctorBooking(doctor.id)}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={doctor.image}
            alt={doctor.name}
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "5px",
              marginRight: "20px",
            }}
          />
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h1 className="lg:text-2xl xs:text-start xs:text-[15px] font-bold">
                {doctor.name}
                <span className="lg:text-base xs:text-xs font-thin lg:pl-6 xs:pl-3">
                  {doctor.education}
                </span>
              </h1>
              <FaHeart
                className="lg:text-xl lg:mt-1 xs:text-2xl sm:text-xl sm:mt-0 xs:mr-1 xs:mt-0 xs:ml-[2px]"
                style={{
                  color: isLiked ? "red" : "gray", // Set heart color based on like status
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the parent click event from firing
                  handleToggleLike(doctor.id); // Toggle like status
                }}
              />
            </div>
            <span className="lg:mt-2 xs:mt-1" style={{ display: "flex" }}>
              {/* Render star ratings */}
            </span>
            <br />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative bg-white py-4">
      <style>
        {`
          .tabs-container {
            position: relative;
            padding: 0; /* Remove padding */
            max-width: 600px; /* Limit the width of the main container */
            margin-left: 12px; /* Adjust margin */
          }

          .tabs-container ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            background-color: white; /* Set background color to white */
            position: relative;
            padding: 0; /* Remove padding */
            margin: 0; /* Remove margin */
          }

          .tabs-container li {
            padding: 10px;
            text-align: center;
            cursor: pointer;
            color: black; /* Set text color to black */
            transition: color 0.3s ease; /* Add transition for color change */
            border-radius: 10px; /* Add rounded corners */
          }

          .tabs-container li:hover {
            color: #333; /* Change text color on hover */
          }

          .tabs-container li.active {
            color: white; /* Set text color to white */
            background-color: #2BB673; /* Set background color to green */
            text-decoration: none; /* Remove underline */
            border-radius: 10px; /* Add rounded corners */
          }
        `}
      </style>
      <div className="tabs-container">
        <ul>
          <li
            onClick={() => handleTabClick("hospitals")}
            className={activeTab === "hospitals" ? "active" : ""}
          >
            Hospitals
          </li>
          <li
            onClick={() => handleTabClick("labs")}
            className={activeTab === "labs" ? "active" : ""}
          >
            Labs
          </li>
        </ul>
      </div>
      <div className="container  max-w-3xl mt-8">
        {/* Center content and limit width */}
        {activeTab === "hospitals" && (
          <>
            <h2 className="text-2xl font-bold mb-4">Doctors at Hospitals</h2>
            <div className="doctor-list">
              {doctorData.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </>
        )}
        {activeTab === "labs" && <Labs />}
      </div>
    </div>
  );
};

export default Fav;
