import { useState } from "react";

const VerificationCodeForm = () => {
  const [code, setCode] = useState(["", "", "", ""]); // Array to store each digit of the code

  // Function to handle input change for each digit
  const handleInputChange = (index, value) => {
    if (value.length > 1) return; // Prevent entering more than one character
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  // Function to handle verification code submission
  const handleVerify = () => {
    const enteredCode = code.join(""); // Concatenate all digits into a single string
    // Perform verification logic here
    console.log("Verification code:", enteredCode);
  };

  return (
    <div className="max-w-md mx-auto">
      <p className="text-center text-lg font-semibold mb-4">
        We have sent a code to your mobile
      </p>
      <div className="flex justify-center space-x-4 mb-6">
        {/* Input boxes for each digit */}
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className="w-12 h-12 text-center border border-gray-300 rounded"
          />
        ))}
      </div>
      <button
        onClick={handleVerify}
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 w-full"
      >
        Verify
      </button>
    </div>
  );
};

export default VerificationCodeForm;
