import { useState } from "react";
import Navbar from "./Navbar";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    email: "john.doe@example.com",
    mobile: "123-456-7890",
    name: "John Doe",
    gender: "Male",
    birthday: "01-01-1990",
  });

  return (
    <>
      <Navbar />
      <div className="container text-black mx-auto mt-2 lg:p-8 xs:p-6 lg:pt-4">
        <div className="space-y-5">
          {/* Account Information */}
          <div className="bg-[#D9D9D9] lg:p-6 xs:p-4 pt-2 rounded-lg">
            <h2 className="lg:text-3xl xs:text-xl font-bold mb-2">
              Account Information
            </h2>
            <br />
            <div className="space-y-4 mb-5">
              <div className="flex items-center mb-10">
                <label className="block lg:text-2xl xs:text-lg font-medium lg:w-32 xs:w-16">
                  Email
                </label>
                <input
                  type="email"
                  value={userDetails.email}
                  readOnly
                  className="mt-1 p-2 lg:w-64 xs:w-48 bg-white focus:outline-none rounded-md"
                />
              </div>
              <div className="flex items-center mb-4">
                <label className="block lg:text-2xl xs:text-lg font-medium lg:w-32 xs:w-16">
                  Mobile
                </label>
                <input
                  type="text"
                  value={userDetails.mobile}
                  readOnly
                  className="mt-1 p-2 lg:w-64 xs:w-48 bg-white focus:outline-none rounded-md"
                />
              </div>
            </div>
          </div>
          {/* Personal Information */}
          <div className="bg-[#D9D9D9] lg:p-6 xs:p-4 pt-3 rounded-lg">
            <h2 className="lg:text-3xl xs:text-xl font-bold mb-2">
              Personal Information
            </h2>
            <br />
            <div className="space-y-4 lg:flex lg:space-y-0 lg:space-x-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-10">
                  <label
                    label
                    className="block lg:text-2xl xs:text-lg font-medium lg:w-32 xs:w-16"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={userDetails.name}
                    readOnly
                    className="mt-1 p-2 lg:w-64 xs:w-32 bg-white focus:outline-none rounded-md"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <label
                    label
                    className="block lg:text-2xl xs:text-lg font-medium lg:w-32 xs:w-16"
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    value={userDetails.gender}
                    readOnly
                    className="mt-1 p-2 lg:w-64 xs:w-32 bg-white focus:outline-none rounded-md"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <label className="block lg:text-2xl xs:text-lg  font-medium">
                  Birthday(dd-mm-yyyy)
                </label>
                <input
                  type="text"
                  value={userDetails.birthday}
                  readOnly
                  className="mt-1 p-2 w-52 bg-white focus:outline-none rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
