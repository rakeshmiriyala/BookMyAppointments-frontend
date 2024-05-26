import { useState } from "react";

const Verification = () => {
  const HandleVerify = () => {
    window.location.href = "/dummy";
  };
  return (
    <div
      className="max-w-lg mx-auto bg-white"
      style={{ width: "300px", height: "200px" }}
    >
      <p className="text-black text-xl">We have sent a code to your mobile.</p>
      {/* Add 4-digit input boxes here */}
      <div className="flex justify-center mt-4">
        {[1, 2, 3, 4].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            className="w-12 h-12 text-4xl bg-white mx-2 text-center border-b  focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
          />
        ))}
      </div>
      {/* Add Verify button here */}
      <div className="flex justify-center mt-5">
        <button
          onClick={HandleVerify}
          className="bg-green-500 text-white py-2 px-4 text-lg rounded-md hover:bg-green-600 w-28"
        >
          VERIFY
        </button>
      </div>
    </div>
  );
};

const Signup = () => {
  const [showVerification, setShowVerification] = useState(false);

  const handleSignupClick = () => {
    setShowVerification(true);
  };

  return (
    <div className="max-w-lg rounded-2xl mx-auto" style={{ width: "300px" }}>
      {!showVerification ? (
        <div>
          <h2 className="text-2xl text-center text-black font-semibold mb-4">
            REGISTER
          </h2>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="mt-1 p-2 border-b-2 text-black bg-white border-gray-300 focus:outline-none w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="mt-1 p-2 border-b-2 text-black bg-white border-gray-300 focus:outline-none w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              id="phone"
              placeholder="Phone number"
              className="mt-1 p-2 border-b-2 text-black bg-white border-gray-300 focus:outline-none w-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="mt-1 p-2 border-b-2 text-black bg-white border-gray-300 focus:outline-none w-full"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="mt-1 p-2 border-b-2 text-black bg-white border-gray-300 focus:outline-none w-full"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSignupClick}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 w-28"
            >
              REGISTER
            </button>
          </div>
        </div>
      ) : (
        <Verification />
      )}
    </div>
  );
};

export default Signup;
