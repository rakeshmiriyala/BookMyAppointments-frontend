import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import HospitalDetailsPage from "./Components/HospitalDetailsPage";
import Booking from "./Components/Booking";
import Main from "./Components/Main";
import Checkout from "./Components/Checkout";
import HospitalPage from "./Components/HospitalPage";
import LabPage from "./Components/LabPage";
import Login from "./Components/Login";
import Dummy from "./Components/Dummy";
import Testing from "./Components/testing";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dummy" element={<Dummy />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/testing" element={<Testing />} />
        <Route exact path="/hospital" element={<HospitalPage />} />
        <Route exact path="/lab" element={<LabPage />} />
        <Route exact path="/hospital/:id" element={<HospitalDetailsPage />} />
        <Route
          exact
          path="/hospital/:hospitalId/card/:cardNumber/doctor/:doctorId"
          element={<Booking />}
        />
        <Route
          exact
          path="/hospital/:hospitalId/card/:cardNumber/doctor/:doctorId/checkout"
          element={<Checkout />}
        />
      </Routes>
    </Router>
  );
};

export default App;
