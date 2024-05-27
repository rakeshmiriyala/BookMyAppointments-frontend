/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import hospitalDetails from "./HospitalData";
import Navbar from "./Navbar";

function Checkout() {
  const { hospitalId, cardNumber, doctorId } = useParams(); // Retrieve hospitalId, cardNumber, and doctorId from URL params
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

  const [coupon, setCoupon] = useState("");
  const [consultationFee, setConsultationFee] = useState(250);
  const [serviceFee, setServiceFee] = useState(20);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedText, setSelectedText] = useState("");

  useEffect(() => {
    const storedSlot = localStorage.getItem("selectedSlot");
    const storedText = localStorage.getItem("selectedText");

    if (storedSlot && storedText) {
      setSelectedSlot(storedSlot);
      setSelectedText(storedText);
    }
  }, []);

  const total = consultationFee + serviceFee;

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col text-black justify-start items-start bg-white p-4">
        <div className="">
          <h2 className="text-2xl font-bold mb-2">Booking Date and Time</h2>
          <p className="text-lg">
            {selectedText}, {selectedSlot}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-3/4 px-4 pb-4 lg:order-1 xs:order-2">
            <div className="p-4 mb-8 max-w-xl mx-auto">
              <h2 className="text-2xl text-center font-bold">
                <div>50% of Our Profits are used for</div>
                <div>Orphan Children Health Care</div>
              </h2>
            </div>
            <p className="text-2xl font-semibold ">Location</p>
            <iframe
              title="Google Maps Location"
              width="100%"
              height="255px"
              style={{ border: 0 }}
              src={selectedDoctor.location}
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full lg:w-1/4 p-4 flex flex-col justify-between order-2 xs:order-1">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="border p-3 rounded-md items-center w-full bg-white"
              />
              <button className="bg-[#2BB673] text-white py-2 px-4 rounded-md hover:bg-[#2BB673] mt-4 w-full">
                APPLY
              </button>
              <h2 className="text-xl font-bold mb-4 mt-4">Bill Details</h2>
              <div className="mb-4">
                <div className="flex justify-between">
                  <p className="text-lg">Consultation Fee:</p>
                  <p className="text-lg">₹{consultationFee}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-lg">Service Fee and Tax:</p>
                  <p className="text-lg">₹{serviceFee}</p>
                </div>
              </div>
              <div className="border-t-2 border-gray-300 pt-4">
                <p className="text-xl font-bold flex justify-between">
                  <span>Total Amount:</span>
                  <span>₹{total}</span>
                </p>
                <div className="flex mt-4 justify-center">
                  <button className="bg-[#2BB673] text-white py-2 px-4 rounded-md hover:bg-[#2BB673] w-28">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
