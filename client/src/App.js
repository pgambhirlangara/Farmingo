import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerSignup from "./components/Customers/Signup/customerSignup";
import FarmerSignup from "./components/Farmers/Signup/farmerSignup";
import FarmerLogin from "./components/Farmers/Signup/farmerLogin";
import Welcome from "./components/Welcome/welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="customer/signup" element={<CustomerSignup />} />
        <Route path="farmer/signup" element={<FarmerSignup />} />
        <Route path="farmer/login" element={<FarmerLogin />} />

      </Routes>
    </div>
  );
}

export default App;
