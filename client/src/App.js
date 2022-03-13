import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerLogin from "./components/Customers/customerLogin";
import CustomerSignup from "./components/Customers/customerSignup";
import FarmerProductPage from "./components/Farmers/farmerProduct";
import FarmerProductInformation from "./components/Farmers/farmerProductInformation";
import FarmerAddUser from "./components/Farmers/farmerAddUser";
import FarmerSignup from "./components/Farmers/farmerSignup";
import FarmerLogin from "./components/Farmers/farmerLogin";
import Welcome from "./components/Welcome/welcome";
import ContactUs from "./components/Contact Us/contactUs";
import OrderDetails from "./components/Farmers/orderDetails";
import Settings from "./components/Farmers/settings";
import ProfileInformation from "./components/Farmers/profileInformation";
import Customerfaq from "./components/Customers/customerfaq";
import FarmProfile from "./components/Farmers/FarmProfile";
import Header from "./components/utils/Header";
import Footer from "./components/utils/Footer";
import Faqfarmer from "./components/Farmers/faqfarmer";


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
        <Route path="farmer/contactUs" element={<ContactUs />} />
        <Route path="farmer/orderDetails" element={<OrderDetails />} />
        <Route path="farmer/settings" element={<Settings />} />
        <Route path="farmer/profile" element={<ProfileInformation />} />
        <Route path="farmer/FarmProfile" element={<FarmProfile />} />
        <Route path="farmer/addUser" element={<FarmerAddUser />} />
        <Route path="farmer/faq" element={<Faqfarmer />} />

        <Route
          path="farmer/product/:id"
          element={<FarmerProductInformation />}
        />
        <Route path="customer/faq" element={<Customerfaq />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
