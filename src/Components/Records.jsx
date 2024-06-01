import React, { useState, useRef, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import Navbar from "./Navbar";

const AddFilesPage = () => {
  const [files, setFiles] = useState([]);
  const [showLabels, setShowLabels] = useState(false);
  const containerRef = useRef(null);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...uploadedFiles, ...prevFiles]);
    setShowLabels(false);
  };

  const handleIconClick = () => {
    setShowLabels(!showLabels);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowLabels(false);
    }
  };

  const handleDelete = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="container lg:pt-12 mx-auto px-4 bg-white text-black py-8">
        <div className=" h-auto flex flex-col justify-end">
          {files.length === 0 ? (
            <div className="text-center text-gray-400 text-5xl">NO RECORDS</div>
          ) : (
            <div className="mb-4">
              <ul>
                {files.map((file, index) => (
                  <li
                    key={index}
                    className="mt-2 flex justify-between items-center"
                  >
                    <span>{file.name}</span>
                    <div>
                      <button
                        onClick={() => alert(`Viewing file: ${file.name}`)}
                        className="bg-[#2BB673] text-white px-2 py-1 rounded-md mr-2"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 text-white px-2 py-1 rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex justify-end mb-4" ref={containerRef}>
            <div className="relative">
              <div
                className="flex items-center justify-center h-12 w-12 bg-[#2BB673] text-white rounded-full cursor-pointer"
                onClick={handleIconClick}
              >
                <FaPlus className="text-2xl" />
              </div>
              {showLabels && (
                <div className="absolute bottom-14 right-0 bg-[#D9D9D9] p-4 rounded-lg mb-2">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center justify-center">
                      <label className="block text-xl font-medium mr-2">
                        Image
                      </label>
                      <input
                        type="file"
                        className="text-xl"
                        onChange={handleFileUpload}
                        accept="image/*"
                      />
                    </div>
                    <hr className="border-black" />
                    <div className="flex items-center justify-center">
                      <label className="block text-xl font-medium mr-2 pr-6">
                        File
                      </label>
                      <input
                        type="file"
                        className="text-xl"
                        onChange={handleFileUpload}
                        accept=".pdf,.doc,.docx,.txt"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFilesPage;
