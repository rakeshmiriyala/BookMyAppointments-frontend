import { useState } from "react";
import Hospitals from "./HospitalPage";
import Labs from "./LabPage";

const Main = () => {
  const [activeTab, setActiveTab] = useState("hospitals");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="services" className="w-full relative bg-white">
      <style>
        {`
          .tabs-container {
            position: relative;
            padding: 0 20px; /* Add padding to the left and right */
          }

          .tabs-container ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            background-color: white; /* Set background color to white */
            position: relative;
          }

          .tabs-container li {
            padding: 10px;
            text-align: center;
            cursor: pointer;
            color: black; /* Set text color to black */
            transition: color 0.3s ease; /* Add transition for color change */
          }

          .tabs-container li:hover {
            color: #333; /* Change text color on hover */
          }

          .tabs-container li.active {
            color: black; /* Set text color to black */
            // background-color: #2BB673; /* Set background color to green */
            text-decoration: none; /* Remove underline */
          }

          .tabs-container .active-bar {
            position: absolute;
            bottom: 0;
            left: ${
              activeTab === "hospitals" ? "0" : "calc(50% + 20px)"
            }; /* Adjusted to match tab padding */
            width: ${
              activeTab === "hospitals"
                ? "calc(50% - 20px)"
                : "calc(50% - 20px)"
            }; /* Adjusted to match tab padding */
            height: 2px;
            background-color: #2BB673; /* Set color of the moving bar to black */
            transition: left 0.3s ease, width 0.3s ease; /* Transition for smooth movement */
          }
        `}
      </style>
      <div className="tabs-container">
        <ul>
          <li
            onClick={() => handleTabClick("hospitals")}
            className={activeTab === "hospitals" ? "active" : ""}
          >
            Hospitals
          </li>
          <li
            onClick={() => handleTabClick("labs")}
            className={activeTab === "labs" ? "active" : ""}
          >
            Labs
          </li>
          <div className="active-bar"></div> {/* Moving bar */}
        </ul>
      </div>
      {activeTab === "hospitals" && <Hospitals />}
      {activeTab === "labs" && <Labs />}
    </div>
  );
};

export default Main;
