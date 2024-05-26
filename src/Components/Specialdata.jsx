/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaHeart, FaSearch, FaStar } from "react-icons/fa"; // Import FaStar icon
import hospitalDetails from "./HospitalData";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const DoctorCard = ({ doctor }) => {
  const { hospitalId } = useParams();
  const doctorId = doctor.id;

  // Function to generate star icons based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          style={{
            color: i < rating ? "yellow" : "gray",
            marginRight: "3px",
            fontSize: "20px",
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "20px",
        backgroundColor: "#D9D9D9",
        color: "#000",
      }}
    >
      {/* Doctor Image */}
      <div style={{ marginRight: "20px" }}>
        <div
          style={{
            width: "70px",
            height: "80px",
            overflow: "hidden",
            borderRadius: "5px",
          }}
        >
          <img
            src={doctor.image}
            alt={doctor.name}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* Doctor Details */}
      <div style={{ flex: 1 }}>
        <h4>{doctor.name}</h4>
        <div
          style={{
            textAlign: "right",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <FaHeart style={{ color: doctor.heartcolor, cursor: "pointer" }} />
        </div>
        <p>
          <strong>Specialty:</strong> {doctor.specialty}
        </p>
        <p style={{ display: "flex" }}>
          <strong>Rating:</strong>
          <span style={{ display: "flex", marginLeft: "5px" }}>
            {renderStars(doctor.rating)} {/* Render stars */}
          </span>
        </p>
        <br />
        <Link
          to={`/hospital/${hospitalId}/doctor/${doctorId}`}
          style={{
            padding: "5px 15px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s ease",
            textDecoration: "none",
          }}
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

const Specialdata = () => {
  const [searchValue, setSearchValue] = useState("");
  const { hospitalId, specialId } = useParams();

  const Specialdata = hospitalDetails[hospitalId].cards[specialId - 1];
  const doctors = Specialdata.doctors;

  const filteredDoctors = searchValue
    ? doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : doctors;

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px", backgroundColor: "#fff" }}>
        <div style={{ marginBottom: "20px" }}>
          {/* <div className="search-container" style={{ position: "relative" }}>
            <FaSearch
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#888",
                cursor: "pointer",
              }}
            />
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              style={{
                padding: "8px 10px 8px 30px",
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "#fff",
              }}
            />
          </div> */}
        </div>

        <div>
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialdata;
