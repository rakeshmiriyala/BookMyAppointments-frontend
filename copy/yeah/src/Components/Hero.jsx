import doctor from "../assets/Doc.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-5 md:px-36">
      {/* Left part */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <div>We help patients</div>
          <div>live a healthy,</div>
          <div>longer life.</div>
        </h2>
        <p className="text-base md:text-lg mb-6">
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div>Duis efficitur est eget eros vehicula, eu convallis odio</div>
          <div>ultricies. Suspendisse id semper nisi.</div>
        </p>
        <Link
          to="/main"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Book My Appointment
        </Link>
        <br />
        <div className="mt-6 flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 flex flex-col items-start mb-2">
            <div className="font-bold text-3xl border-b-4 border-purple-500">
              30+
            </div>
            <p className="text-base md:text-lg mb-2">Years Of Experience</p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-start mb-2">
            <div className="font-bold text-3xl border-b-4 border-green-500">
              15+
            </div>
            <p className="text-base md:text-lg mb-2">Hospital locations</p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-start mb-2">
            <div className="font-bold text-3xl border-b-4 border-yellow-500">
              100%
            </div>
            <p className="text-base md:text-lg mb-2">Patient Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Right part */}
      <div className="hidden md:block w-full md:w-1/2 mt-8 md:mt-0">
        <img src={doctor} alt="" className="object-cover rounded w-full" />
      </div>
    </div>
  );
};

export default Hero;
