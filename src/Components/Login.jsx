import { useState } from "react";
import Signup from "./Signup";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  return (
    <div className="">
      {!showSignup && (
        <div
          className="rounded-2xl"
          style={{ width: "280px", height: "280px" }}
        >
          <h2 className="text-2xl text-center text-black font-semibold mb-4">
            LOGIN
          </h2>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Email or Phone number"
              className="mt-1 p-2 border-b-2 text-black bg-white border-gray-300 focus:outline-none  w-full"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="mt-1 p-2 border-b-2 text-black bg-white border-gray-300 focus:outline-none 0 w-full"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSignupClick}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 w-28"
            >
              LOGIN
            </button>
          </div>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">Dont have an account?</span>{" "}
            <button
              onClick={handleSignupClick}
              className="text-green-500 hover:underline focus:outline-none"
            >
              Sign up
            </button>
          </div>
        </div>
      )}
      {showSignup && <Signup />}
    </div>
  );
};

export default Login;
