import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerLogin from "./components/Customers/customerLogin";
import CustomerSignup from "./components/Customers/customerSignup";
import FarmerProductPage from "./components/Farmers/farmerProduct";
import FarmerProductInformation from "./components/Farmers/farmerProductInformation";
import FarmerSignup from "./components/Farmers/farmerSignup";
import FarmerLogin from "./components/Farmers/farmerLogin";
import Footer from "./components/utils/Footer";
import Header from "./components/utils/Header";
import Welcome from "./components/Welcome/welcome";
import Adduser from "./components/Users/adduser";
import ContactUs from "./components/Contact Us/contactUs";
import orderDetails from "./components/Order details/orderDetails"
import OrderDetails from "./components/Order details/orderDetails";

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
        <Route path="farmer/adduser" element={<Adduser />} />
        <Route path="farmer/contactUs" element={<ContactUs />} />
        <Route path="farmer/orderDetails" element={<OrderDetails />} />
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
