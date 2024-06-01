const VerifyOTP = () => {
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

export default VerifyOTP;
