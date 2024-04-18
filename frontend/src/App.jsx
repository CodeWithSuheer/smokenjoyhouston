import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Blogs from "./pages/blogs/Blogs";
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/contact/Contact";
import Accessories from "./pages/accessories/Accessories";
import Header from "./components/Header";
import HomeProducts from "./pages/Home/HomeProducts";
import Footer from "./components/Footer";
import "./App.css";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<HomeProducts />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
