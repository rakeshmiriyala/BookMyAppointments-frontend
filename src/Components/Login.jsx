import { useState } from "react";
import axios from "axios";
import Signup from "./Signup";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [number, setNumber] = useState("");
  const [error, setError] = useState(null);

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://server.bookmyappointments.in/api/bma/login",
        {
          number,
        }
      );

      // Handle successful login, e.g., redirect to dashboard
      console.log("Login successful", response.data);
      setNumber("");
      setError(null);
      window.location.href = "/verifyotp";
    } catch (error) {
      // Handle login error
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="">
      {!showSignup && (
        <div
          className="rounded-2xl"
          style={{ width: "280px", height: "200px" }}
        >
          <h2 className="text-2xl text-center text-black font-semibold mb-4">
            LOGIN
          </h2>
          <div className="mb-6">
            <input
              type="tel"
              id="number"
              placeholder="Phone number"
              className="mt-1 p-2 border-b-2 text-black bg-white border-gray-300 focus:outline-none w-full"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 w-28"
              onClick={handleLogin}
            >
              LOGIN
            </button>
          </div>
          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
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
