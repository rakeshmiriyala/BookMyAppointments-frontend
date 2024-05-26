/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const HospitalPage = ({ searchResults }) => {
  const hospitalsData = [
    {
      id: 1,
      name: "Apollo",
      image:
        "https://imgs.search.brave.com/QG305Lj7DOh607XZ02RfWpglN_5RWgWRZlcqsc4hOsc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5waXRjaGJvb2su/Y29tL2pmdjQ0RWFN/VjlFSVYyZmRqZlRk/bWZ2QTI3bzE2MTMz/OTMyODg2MzRfMjAw/eDIwMA",
    },
    { id: 2, name: "Yashoda" },
    { id: 3, name: "Max Hospital" },
    { id: 4, name: "Fortis Hospital" },
    { id: 5, name: "Columbia Asia" },
    { id: 6, name: "Artemis Hospital" },
    { id: 7, name: "Manipal Hospital" },
    { id: 8, name: "Narayana Health" },
    { id: 9, name: "Aster Medcity" },
    { id: 10, name: "KIMS Hospital" },
    { id: 11, name: "Medanta - The Medicity" },
    { id: 12, name: "Sir Ganga Ram Hospital" },
    { id: 13, name: "BLK Super Speciality Hospital" },
    { id: 14, name: "Indraprastha Apollo Hospital" },
    { id: 15, name: "Kokilaben Dhirubhai Ambani Hospital" },
    { id: 16, name: "Ruby Hall Clinic" },
    { id: 17, name: "Lilavati Hospital and Research Centre" },
    { id: 18, name: "Christian Medical College, Vellore" },
    { id: 19, name: "Nanavati Super Speciality Hospital" },
    { id: 20, name: "Tata Memorial Hospital" },
  ];

  const [searchValue, setSearchValue] = useState("");
  const [filteredHospitals, setFilteredHospitals] = useState(hospitalsData);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = hospitalsData.filter((hospital) =>
      hospital.name.toLowerCase().includes(value)
    );
    setSearchValue(value);
    setFilteredHospitals(filtered);
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
              left: "10px",
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
            onChange={handleSearch}
            style={{
              padding: "8px 10px 8px 30px",
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "#ffff",
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            maxHeight: "400px",
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {filteredHospitals.map((hospital, index) => (
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
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2BB673";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#D9D9D9";
              }}
            >
              <Link
                key={hospital.id}
                to={`/hospital/${hospital.id}`}
                style={{
                  textDecoration: "none",
                  fontSize: "24px",
                  color: "#000",
                  transition: "color 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#000";
                }}
              >
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                  }}
                />
                {hospital.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalPage;
