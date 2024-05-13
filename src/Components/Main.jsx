import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div id="services" className="w-full relative bg-white">
      <style>
        {`
          .tabs-container ul {
            display: flex;
            list-style: none;
            padding: 0;
          }

          .tabs-container li {
            flex: 1;
          }

          .tabs-container li:first-child {
            flex: 0 0 50%; /* Set the first child (Hospitals) to take up 50% of the width */
          }

          .tabs-container li a {
            display: block;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            color: black;
            transition: background-color 0.3s ease;
            width: 100%;
            text-align: center;
          }

          .tabs-container li a:hover {
            background-color: #2BB673;
            color: white;
          }
        `}
      </style>
      <div className="tabs-container">
        <ul>
          <li>
            <Link to="/hospital">Hospitals</Link>
          </li>
          <li>
            <Link to="/lab">Labs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
