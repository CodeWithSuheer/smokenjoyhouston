import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Blogs from "./pages/blogs/Blogs";
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/contact/Contact";
import Accessories from "./pages/accessories/Accessories";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import {Toaster} from "react-hot-toast";
import Products from "./pages/products/Products";
import "./App.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster/>
    </>
  );
}

export default App;
