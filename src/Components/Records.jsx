import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import Navbar from "./Navbar";

const AddFilesPage = () => {
  const [files, setFiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [fileType, setFileType] = useState(""); // To store the type of file selected
  const fileInputRef = useRef(null); // Ref for file input

  const handleFileUpload = (type) => {
    setFileType(type);
    fileInputRef.current.click(); // Trigger file input click
  };

  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 bg-white text-black py-8">
        <div className="lg:h-[450px] xs:h-[350px] flex flex-col justify-end">
          <div className="mb-4">
            {files.length === 0 ? (
              <p className="text-gray-500 text-center lg:text-5xl xs:text-4xl">
                No records
              </p>
            ) : (
              <ul>
                {files.map((file, index) => (
                  <li
                    key={index}
                    className="mt-2 flex justify-between items-center"
                  >
                    {file.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center justify-end relative">
            <div
              className="flex items-center justify-center h-12 w-12 bg-[#2BB673] text-white rounded-full cursor-pointer"
              onClick={() => setShowModal(true)} // Show modal on click
            >
              <FaPlus className="text-2xl font-bold" />
            </div>
            {showModal && (
              <div
                className="absolute bg-[#333333] p-4 rounded-lg mt-2 xs:left-[70%] lg:left-[95%]"
                style={{
                  top: "-150px",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="flex flex-col space-y-2">
                  <input
                    type="file"
                    accept={
                      fileType === "image" ? "image/*" : ".pdf,.doc,.docx,.txt"
                    }
                    onChange={handleFileChange}
                    style={{ display: "none" }} // Hide the input element
                    ref={fileInputRef} // Reference to the input element
                  />
                  <button
                    className="text-xl font-medium mr-2 text-white bg-[#333333] px-4 py-2 rounded-md hover:bg-[#333333]"
                    onClick={() => handleFileUpload("image")}
                  >
                    Image
                  </button>
                  <button
                    className="text-xl font-medium mr-2 text-white bg-[#333333] px-4 py-2 rounded-md hover:bg-[#333333]"
                    onClick={() => handleFileUpload("file")}
                  >
                    File
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFilesPage;
