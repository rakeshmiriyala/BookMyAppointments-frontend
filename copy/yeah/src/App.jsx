import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import HospitalDetailsPage from "./Components/HospitalDetailsPage";
import Specialdata from "./Components/Specialdata";
import Search from "./Components/Search";
import Booking from "./Components/Booking";
import Main from "./Components/Main";
import Checkout from "./Components/Checkout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/hospital/:id" element={<HospitalDetailsPage />} />
        <Route
          exact
          path="/hospital/:hospitalId/special/:specialId"
          element={<Specialdata />}
        />
        <Route
          exact
          path="/hospital/:hospitalId/special/search"
          element={<Search />}
        />
        <Route
          exact
          path="/hospital/:hospitalId/special/:specialId/doctor/:doctorId"
          element={<Booking />}
        />
        <Route
          exact
          path="/hospital/:hospitalId/special/:specialId/doctor/:doctorId/checkout"
          element={<Checkout />}
        />
      </Routes>
    </Router>
  );
};

export default App;
