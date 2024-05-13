/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons/fa

const LabPage = ({ searchResults }) => {
  // Sample lab data, replace it with your actual data
  const labsData = [
    { id: 1, name: "Done" },
    { id: 2, name: "Working" },
    { id: 3, name: "LabCorp" },
    { id: 4, name: "Quest Diagnostics" },
    { id: 5, name: "Mayo Clinic Laboratories" },
    { id: 6, name: "ARUP Laboratories" },
    { id: 7, name: "Sonic Healthcare" },
    { id: 8, name: "Genomic Health" },
    { id: 9, name: "Myriad Genetics" },
    { id: 10, name: "Invitae" },
    { id: 11, name: "Foundation Medicine" },
    { id: 12, name: "Ambry Genetics" },
    { id: 13, name: "LabCorp Diagnostics" },
    { id: 14, name: "Eurofins Scientific" },
    { id: 15, name: "LabCorp Specialty Testing" },
    { id: 16, name: "AmeriPath" },
    { id: 17, name: "Quest Diagnostics Employer Solutions" },
    { id: 18, name: "Cleveland HeartLab" },
    { id: 19, name: "Miraca Life Sciences" },
    { id: 20, name: "LabCorp Drug Development" },
  ];

  const [searchValue, setSearchValue] = useState("");
  const [filteredLabs, setFilteredLabs] = useState(labsData);

  // Directly use search functionality inside the onChange event
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = labsData.filter((lab) =>
      lab.name.toLowerCase().includes(value)
    );
    setSearchValue(e.target.value); // Update search value
    setFilteredLabs(filtered);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "", width: "100%" }}>
        <div
          className="search-container"
          style={{ marginBottom: "20px", position: "relative" }}
        >
          <FaSearch
            style={{
              position: "absolute",
              left: "10px", // Adjust position to the left
              top: "50%",
              transform: "translateY(-50%)",
              color: "#888",
              cursor: "pointer",
            }}
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearch} // Use the handleSearch function directly
            style={{
              padding: "8px 10px 8px 30px", // Adjust padding for the search icon
              width: "100%", // Make input full-width
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "#ffff",
            }}
          />
        </div>
        <div
          style={{
            width: "100%", // Set the lab list box to use full screen width
            overflowY: "auto", // Add vertical scrollbar
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            msOverflowStyle: "none", // Hide scrollbar for IE/Edge
            "&::-webkit-scrollbar": {
              // Hide scrollbar for Chrome/Safari
              display: "none",
            },
          }}
        >
          {filteredLabs.map((lab) => (
            <div
              key={lab.id}
              style={{
                backgroundColor: "#D9D9D9",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "8px",
                transition: "background-color 0.3s ease", // Add transition effect
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2BB673"; // Change background color on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#D9D9D9"; // Revert background color on hover out
              }}
            >
              <Link
                to={`/lab/${lab.id}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  fontSize: "24px",
                  color: "#000", // Set default text color to black
                  transition: "color 0.3s ease", // Add transition effect for text color change
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff"; // Change text color to white on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#000"; // Revert text color on hover out
                }}
              >
                {lab.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabPage;
