import { FiClipboard, FiCalendar } from "react-icons/fi";
import { FaHospital } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Services = () => {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">
        Providing the best <br /> Medical Services
      </h2>
      <p className="text-gray-600 text-lg mb-12">
        World-class care for everyone. Our health System offers <br />
        unmatched, expert health care.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="service bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center transition duration-500 transform hover:-translate-y-2 hover:shadow-lg">
          <FaHospital className="text-6xl text-blue-500 mb-4" />
          <p className="text-lg mb-4">
            Find comprehensive healthcare <br /> services at our hospitals.
          </p>
          <Link to="/main" className="arrow-link">
            <IoArrowForwardCircleOutline
              size={35}
              className="inline-block mr-2"
            />
          </Link>
        </div>
        <div className="service bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center transition duration-500 transform hover:-translate-y-2 hover:shadow-lg">
          <FiClipboard className="text-6xl text-green-500 mb-4" />
          <p className="text-lg mb-4">
            Explore our advanced laboratory <br /> facilities.
          </p>
          <Link to="/main" className="arrow-link">
            <IoArrowForwardCircleOutline
              size={35}
              className="inline-block mr-2"
            />
          </Link>
        </div>
        <div className="service bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center transition duration-500 transform hover:-translate-y-2 hover:shadow-lg">
          <FiCalendar className="text-6xl text-red-500 mb-4" />
          <p className="text-lg mb-4">
            Schedule an appointment with <br /> our experienced professionals.
          </p>
          <Link to="/main" className="arrow-link">
            <IoArrowForwardCircleOutline
              size={35}
              className="inline-block mr-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

// Styles
<style>
  {`
    .arrow-link {
      text-decoration: none;
      font-weight: bold;
      color: #007bff;
      transition: all 0.3s ease-in-out;
    }

    .arrow-link:hover {
      color: #0056b3;
    }
  `}
</style>;
