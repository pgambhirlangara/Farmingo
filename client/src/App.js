import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerLogin from "./components/Customers/customerLogin";
import CustomerSignup from "./components/Customers/customerSignup";
import FarmerProductPage from "./components/Farmers/farmerProduct";
import FarmerProductInformation from "./components/Farmers/farmerProductInformation";
import FarmerAddUser from "./components/Farmers/farmerAddUser";
import FarmerSignup from "./components/Farmers/farmerSignup";
import FarmerLogin from "./components/Farmers/farmerLogin";
import FarmerOrder from "./components/Farmers/farmerOrderHistory";
import Footer from "./components/utils/Footer";
import Header from "./components/utils/Header";
import Welcome from "./components/Welcome/welcome";
import ContactUs from "./components/Contact Us/contactUs";
import OrderDetails from "./components/Farmers/orderDetails";
import Settings from "./components/Farmers/settings";
import ProfileInformation from "./components/Farmers/profileInformation";
import Customerfaq from "./components/Customers/customerfaq";
import FarmProfile from "./components/Farmers/FarmProfile";
import Faqfarmer from "./components/Farmers/faqfarmer";
import FarmerCreatePost from "./components/Farmers/farmerCreatePost";
import FarmerEditPost from "./components/Farmers/farmerEditPost";
import CustomerHome from "./components/Customers/customerHome";
import CustomerProduct from "./components/Customers/customerProduct";
import CustomerPayment from "./components/Customers/customerPayment";
import { isLogin } from "./auth";
import RequestPayment from "./components/Farmers/requestPayment";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {isLogin() ? (
          <Route path="/" element={<FarmerProductPage />} />
        ) : (
          <Route path="/" element={<Welcome />} />
        )}
        <Route path="customer/signup" element={<CustomerSignup />} />
        <Route path="customer/login" element={<CustomerLogin />} />
        <Route path="farmer/signup" element={<FarmerSignup />} />
        <Route path="farmer/login" element={<FarmerLogin />} />
        <Route path="/" element={<FarmerProductPage />} />
        <Route path="farmer/order-history" element={<FarmerOrder />} />
        <Route path="farmer/contactUs" element={<ContactUs />} />
        <Route path="farmer/settings" element={<Settings />} />
        <Route path="farmer/profile" element={<ProfileInformation />} />
        <Route path="farmer/createprofile" element={<FarmProfile />} />
        <Route path="farmers/profile" element={<FarmProfile />} />
        <Route path="farmer/addUser" element={<FarmerAddUser />} />
        <Route path="farmer/faq" element={<Faqfarmer />} />
        <Route path="farmer/createpost" element={<FarmerCreatePost />} />
        <Route
          path="farmer/product/:id"
          element={<FarmerProductInformation />}
        />
        <Route path="farmer/product/edit/:id" element={<FarmerEditPost />} />
        <Route path="farmer/orderDetails/:id" element={<OrderDetails />} />
        <Route path="customer/faq" element={<Customerfaq />} />

        <Route
          path="utils/transactionSuccess"
          element={<transactionSuccess />}
        />
        <Route path="utils/transactionFail" element={<transactionFail />} />
        <Route path="customer/home" element={<CustomerHome />} />
        <Route path="customer/products/:id" element={<CustomerProduct />} />
        <Route path="customer/payment" element={<CustomerPayment />} />
        <Route path="farmer/request" element={<RequestPayment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
