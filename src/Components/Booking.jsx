/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import hospitalDetails from "./HospitalData";
import { FaStar } from "react-icons/fa";

function Booking() {
  const { hospitalId, specialId, doctorId } = useParams();
  const specialData = hospitalDetails[hospitalId]?.cards[specialId - 1];

  if (!specialData) {
    return <div className="bg-red-200 p-4 rounded">Specialty not found.</div>;
  }

  const doctors = specialData.doctors;
  const selectedDoctor = doctors.find(
    (doctor) => doctor.id === parseInt(doctorId)
  );

  if (!selectedDoctor) {
    return <div className="bg-red-200 p-4 rounded">Doctor not found.</div>;
  }

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

  // State to keep track of the selected part, time slot, text, and number
  const [selectedPart, setSelectedPart] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [parts, setParts] = useState([]);

  // Function to handle confirmation
  const handleConfirm = () => {
    if (selectedPart && selectedSlot) {
      // Perform confirmation actions here
      console.log("Confirmed:", selectedPart, selectedSlot);
    } else {
      alert("Please select both part and time slot before confirming.");
    }
  };

  // Fetch parts data from the server
  useEffect(() => {
    // Example fetch call (replace with actual fetch call)
    const fetchData = async () => {
      try {
        // Fetch parts data from the server
        const response = await fetch("your-api-endpoint-here");
        const data = await response.json();
        // Update the parts state with the fetched data
        setParts(data.parts);
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };
    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array to only run the effect once when the component mounts

  return (
    <div>
      {/* Doctor details */}
      <div
        className="p-4 rounded m-10"
        style={{ backgroundColor: "#D9D9D9", color: "#000" }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
          {/* Doctor image */}
          <div className="mb-4 lg:mb-0 lg:mr-4 lg:flex-none">
            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className="w-32 rounded"
            />
          </div>
          {/* Doctor details */}
          <div className="lg:flex-grow text-center lg:text-left">
            <h1 className="text-2xl font-bold">{selectedDoctor.name}</h1>
            <p>
              <strong>Specialty:</strong> {selectedDoctor.specialty}
            </p>
            <p>
              <strong>Contact:</strong> {selectedDoctor.contact}
            </p>
            <p>
              <strong>Address:</strong> {selectedDoctor.address}
            </p>
            <p>
              <strong>Bio:</strong> {selectedDoctor.bio}
            </p>
          </div>
          {/* Doctor rating */}
          <div className="mt-4 lg:mt-28 ">
            <p style={{ display: "flex", alignItems: "center" }}>
              {renderStars(selectedDoctor.rating)} {/* Render stars */}
            </p>
          </div>
        </div>
      </div>
      {/* Wrapping all the parts in a box */}
      <div className="p-4 rounded border border-gray-300 m-10">
        <div className="flex justify-between">
          {/* Each part with text and number */}
          {parts.map((part, index) => (
            <div className="w-1/7 text-center" key={index}>
              <div
                className={`p-4 cursor-pointer ${
                  selectedPart === part.id && "bg-[#2BB673]"
                }`}
                onClick={() => setSelectedPart(part.id)}
              >
                <p className="text-lg font-bold">{part.text}</p>
                <p className="text-sm">{part.number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Time slots */}
      <div className="p-4 rounded border border-gray-300 m-10">
        <div className="flex justify-between">
          {/* Time slot divs */}
          <div className="w-1/7 text-center">
            <div
              className={`p-4 cursor-pointer ${
                selectedSlot === "9:00 AM" && "bg-[#2BB673]"
              }`}
              onClick={() => setSelectedSlot("9:00 AM")}
            >
              <p className="text-lg font-bold">9:00 AM</p>
            </div>
          </div>
          {/* Add similar divs for the remaining time slots */}
        </div>
      </div>
      {/* Confirm button */}
      <div className="text-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Booking;
