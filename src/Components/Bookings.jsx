import React, { useState } from "react";
import Navbar from "./Navbar";

const BookingsPage = () => {
  // Dummy data for previous bookings
  const [previousBookings, setPreviousBookings] = useState([
    {
      id: 1,
      date: "2022-05-01",
      day: "Monday",
      time: "10:00 AM",
      hospital: "ABC Hospital",
      doctor: "Dr. Smith",
      domain: "Cardiology",
      amount: 200,
      status: "Completed",
    },
    {
      id: 2,
      date: "2022-06-15",
      day: "Wednesday",
      time: "11:30 AM",
      hospital: "XYZ Hospital",
      doctor: "Dr. Johnson",
      domain: "Orthopedics",
      amount: 250,
      status: "Completed",
    },
    {
      id: 3,
      date: "2022-07-20",
      day: "Friday",
      time: "2:00 PM",
      hospital: "PQR Hospital",
      doctor: "Dr. Lee",
      domain: "Neurology",
      amount: 180,
      status: "Canceled",
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 bg-white text-black py-8">
        <div className="grid grid-cols-1 gap-4">
          {previousBookings.map((booking) => (
            <div key={booking.id} className="rounded-lg p-4 bg-[#D9D9D9]">
              <h1 className="text-2xl font-bold ">Booking Date and Time </h1>
              <h1 className="text-lg font-normal text-end">
                Booked on {booking.date}
              </h1>
              <div className="flex justify-between">
                <div className="flex-1">
                  <p className="text-lg font-medium">
                    {booking.day}, {booking.date}, {booking.time}
                  </p>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-xl font-bold">{booking.hospital}</p>
                  <p className="text-lg font-semibold">{booking.doctor}</p>
                  <p className="text-lg font-normal">{booking.domain}</p>
                </div>
                <div className="flex-1  text-right">
                  <br />
                  <p className="text-2xl text-center font-semibold">
                    Paid Amount{" "}
                  </p>
                  <p className="text-2xl text-center font-semibold">
                    ₹{booking.amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookingsPage;
