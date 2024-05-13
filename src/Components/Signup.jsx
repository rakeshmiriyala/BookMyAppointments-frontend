import { useState } from "react";

const Verification = () => {
  return (
    <div
      className="max-w-lg mx-auto bg-white"
      style={{ width: "300px", height: "200px" }}
    >
      <p className="text-black">We have sent a code to your mobile.</p>
      {/* Add 4-digit input boxes here */}
      <div className="flex justify-center mt-4">
        {[1, 2, 3, 4].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            className="w-12 h-12 text-4xl bg-white mx-2 border-b-2 text-center"
          />
        ))}
      </div>
      {/* Add Verify button here */}
      <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 w-full mt-8">
        Verify
      </button>
    </div>
  );
};

const Signup = () => {
  const [showVerification, setShowVerification] = useState(false);

  const handleSignupClick = () => {
    setShowVerification(true);
  };

  return (
    <div className="max-w-lg mx-auto" style={{ width: "300px" }}>
      {!showVerification ? (
        <div>
          <h2 className="text-2xl text-center text-black font-semibold mb-4">
            Register
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
          <button
            onClick={handleSignupClick}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 w-full"
          >
            Sign up
          </button>
        </div>
      ) : (
        <Verification />
      )}
    </div>
  );
};

export default Signup;
