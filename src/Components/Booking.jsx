/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import hospitalDetails from "./HospitalData";
import { FaHeart, FaStar } from "react-icons/fa";
import Navbar from "./Navbar";

function Booking() {
  const { hospitalId, cardNumber, doctorId } = useParams();
  const specialData = hospitalDetails[hospitalId]?.cards.find(
    (card) => card.id === parseInt(cardNumber)
  );

  if (!specialData) {
    return <div className="bg-red-200 p-4 rounded">Specialty not found.</div>;
  }

  const selectedDoctor = specialData.doctors.find(
    (doctor) => doctor.id === parseInt(doctorId)
  );

  if (!selectedDoctor) {
    return <div className="bg-red-200 p-4 rounded">Doctor not found.</div>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          style={{
            color: i < rating ? "#fec710" : "gray",
            marginRight: "3px",
            fontSize: "26px",
          }}
        />
      );
    }
    return stars;
  };

  const getNext7Days = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(moment().add(i, "days"));
    }
    return days;
  };

  const next7Days = getNext7Days();

  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedText, setSelectedText] = useState("");

  const buttons = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
  ];

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleTextSelect = (text) => {
    setSelectedText(text);
  };

  const handleConfirmBooking = () => {
    if (selectedButton && selectedText) {
      localStorage.setItem("selectedSlot", selectedButton);
      localStorage.setItem("selectedText", selectedText);
      alert(`Booking confirmed at ${selectedButton} on ${selectedText}`);
      window.location.href = `/hospital/${hospitalId}/card/${cardNumber}/doctor/${doctorId}/checkout`;
    } else {
      alert("Please select a time slot and day for booking.");
    }
  };
  return (
    <div className="bg-white h-auto">
      <Navbar />
      <div
        className="p-4 rounded-lg mt-4 m-4"
        style={{ backgroundColor: "#D9D9D9", color: "#000" }}
      >
        <div className="flex flex-col lg:flex-row lg:justify-start items-center lg:items-start relative">
          <div className="mb-4 lg:mb-0 lg:mr-4 pt-1 lg:flex-none relative">
            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className="w-[170px] rounded-lg"
            />
          </div>
          <FaHeart
            size={24}
            className="absolute lg:hidden top-0 right-0 mt-2 mr-0"
            style={{
              color: selectedDoctor.heartcolor,
              cursor: "pointer",
            }}
          />
          <div className="lg:flex-grow text-center lg:text-left relative w-full">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h1 className="text-3xl xs:text-start xs:text-2xl font-bold">
                {selectedDoctor.name}
                <span className="text-base font-thin lg:pl-6 xs:pl-2">
                  {selectedDoctor.education}
                </span>
              </h1>
              <FaHeart
                size={24}
                className="mt-2 ml-[3px] hidden lg:inline-block"
                style={{
                  color: selectedDoctor.heartcolor,
                  cursor: "pointer",
                }}
              />
            </div>
            <p className="text-left py-2 text-lg">{selectedDoctor.education}</p>
            <p className="text-left lg:pr-56">{selectedDoctor.description}</p>
            <p
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {renderStars(selectedDoctor.rating)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#D9D9D9] text-black flex m-4 rounded-lg relative">
        {next7Days.map((day, index) => (
          <div
            key={index}
            className="flex-grow relative"
            style={{ width: `calc(100% / 7)` }}
          >
            {index > 0 && (
              <div
                className="absolute top-2 bottom-2 border-r border-black"
                style={{ zIndex: 1, left: 0 }}
              ></div>
            )}
            <div
              className={`lg:p-4 xs:py-3 cursor-pointer border-gray-300 rounded-lg ${
                selectedText === day.format("YYYY-MM-DD")
                  ? "bg-[#2BB673] rounded-lg"
                  : ""
              }`}
              onClick={() => handleTextSelect(day.format("YYYY-MM-DD"))}
            >
              <div
                className={`text-center lg:text-xl xs:text-base font-semibold ${
                  selectedText === day.format("YYYY-MM-DD") ? "text-white" : ""
                }`}
              >
                {day.format("ddd")}
              </div>
              <div
                className={`text-xl xs:text-base text-center ${
                  selectedText === day.format("YYYY-MM-DD") ? "text-white" : ""
                }`}
              >
                {day.format("DD")}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedText && (
        <div className="flex justify-center text-black items-center m-4 mr-4 mb-0 mt-4">
          <div className="bg-[#D9D9D9] lg:py-6 lg:px-24 border rounded-md grid lg:grid-cols-7 xs:grid-cols-3 xs:py-2 xs:px-2 md:grid-cols-7 md:py-4 md:px-2 gap-4 w-full">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`lg:px-6 py-1 rounded-full ${
                  selectedButton === button
                    ? "bg-[#2BB673] text-white"
                    : "bg-white"
                }`}
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="text-center p-4 bg-white rounded m-4 mb-0 mt-0">
        <button
          className="bg-[#2BB673] text-white py-2 px-4 rounded-lg"
          onClick={handleConfirmBooking}
        >
          CONFIRM
        </button>
      </div>
      <div className="p-4 rounded-lg bg-[#D9D9D9] m-4 mt-0 text-black flex flex-col lg:flex-row lg:items-start">
        <div className="mb-4 lg:mb-0 lg:mr-4 flex justify-center lg:justify-start">
          <img
            src={selectedDoctor.avatar}
            alt={selectedDoctor.name}
            className="w-24 h-24 lg:w-60 lg:h-16 rounded-full"
          />
        </div>
        <div className="text-center lg:text-left">
          <div className="flex items-center gap-1 text-2xl lg:text-4xl">
            <p className="lg:pr-5 xs:pr-5 xs:text-3xl flex">
              {selectedDoctor.ratingname}
            </p>
            {renderStars(selectedDoctor.rating)}
          </div>
          <p className="text-sm xs:text-sm xs:text-left xs:mt-1 lg:text-base mt-2 lg:mt-0">
            {selectedDoctor.review}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Booking;
