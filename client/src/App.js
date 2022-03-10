import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerLogin from "./components/Customers/customerLogin";
import CustomerSignup from "./components/Customers/customerSignup";
import FarmerProductPage from "./components/Farmers/farmerProduct";
import FarmerProductInformation from "./components/Farmers/farmerProductInformation";
import FarmerSignup from "./components/Farmers/farmerSignup";
import FarmerLogin from "./components/Farmers/farmerLogin";
import FarmerOrder from "./components/Farmers/farmerOrderHistoryMobile";
import Footer from "./components/utils/Footer";
import Header from "./components/utils/Header";
import Welcome from "./components/Welcome/welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="customer/signup" element={<CustomerSignup />} />
        <Route path="customer/login" element={<CustomerLogin />} />
        <Route path="farmer/signup" element={<FarmerSignup />} />
        <Route path="farmer/login" element={<FarmerLogin />} />
        <Route path="farmer/home" element={<FarmerProductPage />} />
        <Route path="farmer/order-history" element={<FarmerOrder />} />
        <Route
          path="farmer/product/:id"
          element={<FarmerProductInformation />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
