/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useParams } from "react-router-dom";
import hospitalDetails from "./HospitalData";

function Checkout() {
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

  // State to keep track of the coupon code and bill details
  const [coupon, setCoupon] = useState("");
  const [consultationFee, setConsultationFee] = useState(250);
  const [serviceFee, setServiceFee] = useState(20);

  // Calculate total bill
  const total = consultationFee + serviceFee;

  return (
    <div className="h-auto flex flex-col text-black justify-start items-start bg-gray-100 p-4">
      {/* Booking Date and Time */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Booking Date and Time</h2>
        <p className="text-lg">Mon, 26th May 10AM</p>
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Half */}
        <div className="w-full lg:w-3/4 p-4 order-1">
          {/* Card for Profits in a box */}
          <div className="p-4 mb-8 max-w-xl mx-auto">
            <h2 className="text-2xl text-center font-bold ">
              <div>50% for Our Profits are used for</div>{" "}
              <div>Orphan Children Health Care</div>
            </h2>
          </div>
          {/* Location from Doctor Data */}
          <p className="text-sm">Location:</p>
          <iframe
            title="Google Maps Location"
            width="100%"
            height="300"
            style={{ border: 0 }}
            src={selectedDoctor.location}
            allowFullScreen
          ></iframe>
        </div>
        {/* Right Half */}
        <div className="w-full lg:w-1/4 p-4 flex flex-col justify-between order-2">
          {/* Coupon Apply */}
          <div className="self-start mb-8">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="border p-3 rounded-md w-full bg-white"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 w-full">
              Apply
            </button>
          </div>
          {/* Bill Details */}
          <div className="bg-gray-100 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Bill Details</h2>
            <div className="mb-4">
              <div className="flex justify-between">
                <p className="text-lg">Consultation Fee:</p>
                <p className="text-lg">${consultationFee}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg">Service Fee and Tax:</p>
                <p className="text-lg">${serviceFee}</p>
              </div>
            </div>
            <div className="border-t-2 border-gray-300 pt-4">
              <p className="text-xl font-bold flex justify-between">
                <span>Total:</span>
                <span>${total}</span>
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
