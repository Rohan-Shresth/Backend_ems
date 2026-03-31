import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import "./index.css";
import OTPPage from "./pages/OTPPage";

function App() {
  return (
    <div className=" bg-[#F8FAFC] min-h-screen text-black overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/otp" element={<OTPPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
