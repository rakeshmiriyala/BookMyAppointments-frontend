/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import hospitalDetails from "./HospitalData";
import Navbar from "./Navbar";
import { FaHeart, FaStar } from "react-icons/fa";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const DoctorCard = ({ doctor, hospitalId, cardNumber }) => {
  const handleDoctorBooking = (cardNumber) => {
    window.location.href = `/hospital/${hospitalId}/card/${cardNumber}/doctor/${doctor.id}`;
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          style={{
            color: i < rating ? "fec710" : "gray",
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
      className="hover:bg-[#2BB673] hover:text-white text-black cursor-pointer lg:p-2.5 xs:px-1.5 xs:py-1"
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
      onClick={() => handleDoctorBooking(cardNumber)}
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
              className=" lg:text-xl lg:mt-1 xs:text-2xl sm:text-xl sm:mt-0 xs:mr-1 xs:mt-0 xs:ml-[2px]"
              style={{
                color: doctor.heartcolor,
                cursor: "pointer",
              }}
            />
          </div>
          <span className="lg:mt-2 xs:mt-1" style={{ display: "flex" }}>
            {renderStars(doctor.rating)}
          </span>
          <br />
        </div>
      </div>
    </div>
  );
};

const HospitalDetailsPage = () => {
  const { id: hospitalId } = useParams(); // Get the hospitalId from the URL params
  const [hospital, setHospital] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    // Fetch hospital details based on the hospital ID
    const fetchHospitalDetails = () => {
      // Simulating asynchronous data fetching
      const fetchedHospital = hospitalDetails[hospitalId];
      setHospital(fetchedHospital);
    };

    fetchHospitalDetails();

    // By default, select the first card (e.g., cardio) when the hospital details load
    if (hospitalDetails[hospitalId]?.cards?.length > 0) {
      setSelectedCard(hospitalDetails[hospitalId].cards[0]);
    }
  }, [hospitalId]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div style={{ position: "sticky", top: "0", zIndex: "2" }}>
        <Navbar />
      </div>
      <div className="h-full pt-0  px-5 " style={{ backgroundColor: "#ffff" }}>
        {hospital && (
          <>
            <style>
              {`
                      /* Hide scrollbar for Chrome, Safari, and Opera */
                      .raki::-webkit-scrollbar {
                        display: none;
                      }
                      
                      
                    `}
            </style>
            <div
              className="xs:top-[64px] sm:top-[64px] lg:top-[70px] xl:top-[80px] raki overflow-x-scroll "
              style={{
                position: "sticky",
                zIndex: "2",
                background: "white", // Ensure the background is solid to cover any content behind it
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                overflow: "hidden", // Prevent horizontal overflow
                width: "100%",
              }}
            >
              <button
                className="scroll-button left bg-[#2BB673] text-white border-none flex justify-center rounded-full lg:w-10 lg:h-10 md:w-12 xs:w-[128px] xs:h-8 items-center z-2"
                onClick={scrollLeft}
              >
                <FaChevronLeft className="xs:text-lg md:text-xl lg:text-2xl" />
              </button>
              <div
                ref={carouselRef}
                style={{
                  display: "flex",
                  overflow: "hidden", // Hide horizontal overflow
                  scrollBehavior: "smooth", // Enable smooth scrolling
                  flexGrow: 1, // Ensure it takes available space
                }}
              >
                {hospital.cards.map((card, index) => (
                  <div
                    key={card.id}
                    style={{
                      flex: "0 0 auto",
                      marginLeft: "10px",
                      marginRight: "0px",
                      padding: "10px",
                      textAlign: "center",
                      cursor: "pointer",
                      border: selectedCard === card ? "2px solid #2BB673" : "",
                      borderRadius: "10px",
                    }}
                    onClick={() => handleCardClick(card)}
                    onMouseEnter={(e) => {
                      if (selectedCard !== card) {
                        e.currentTarget.style.border = "1px solid #2BB673";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedCard !== card) {
                        e.currentTarget.style.border = "";
                      }
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.name}
                      style={{
                        width: "100px", // Adjust width for mobile view
                        height: "80px", // Adjust height for mobile view
                        borderRadius: "10px",
                      }}
                    />
                    <h3
                      style={{
                        marginTop: "10px",
                        fontSize: "12px", // Adjust font size for mobile view
                        color: "#333",
                      }}
                    >
                      {card.name}
                    </h3>
                  </div>
                ))}
              </div>
              <button
                className="scroll-button right bg-[#2BB673] text-white border-none flex justify-center rounded-full lg:w-10 lg:h-10 md:w-12 xs:w-[128px] xs:h-8 items-center z-2"
                onClick={scrollRight}
              >
                <FaChevronRight className="xs:text-lg md:text-xl lg:text-2xl" />
              </button>
            </div>
            {/* Display doctors for the selected card */}
            {selectedCard && (
              <div
                style={{
                  marginTop: "10px",
                  maxHeight: "800px",
                  overflowY: "scroll",
                  msOverflowStyle: "none" /* IE and Edge */,
                  scrollbarWidth: "none" /* Firefox */,
                  overflowX: "hidden", // Hide horizontal overflow
                }}
              >
                <style>
                  {`
                  /* Hide scrollbar for Chrome, Safari, and Opera */
                  .doctor-list::-webkit-scrollbar {
                    display: none;
                  }
                `}
                </style>
                <div className="doctor-list">
                  {selectedCard.doctors.map((doctor) => (
                    <DoctorCard
                      key={doctor.id}
                      doctor={doctor}
                      hospitalId={hospitalId} // Pass hospitalId to DoctorCard
                      cardNumber={selectedCard.id} // Pass cardNumber to DoctorCard
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HospitalDetailsPage;
