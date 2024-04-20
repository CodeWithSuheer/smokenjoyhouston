import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/Home/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import "./App.css";

// import Blogs from "./pages/blogs/Blogs";
// import Blogs2 from "./pages/blogs/Blogs2";
// import Blogs3 from "./pages/blogs/Blogs3";
// import Accessories from "./pages/accessories/Accessories";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import AboutUs from "./pages/about/AboutUs";
// import Contact from "./pages/contact/Contact";
// import Products from "./pages/products/Products";

{/* ---------- LAZY ROUTES ---------- */ }
const Products = React.lazy(() => import("./pages/products/Products"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const AboutUs = React.lazy(() => import("./pages/about/AboutUs"));
const Accessories = React.lazy(() => import("./pages/accessories/Accessories"));
const PrivacyPolicy = React.lazy(() => import("./components/PrivacyPolicy"));
const Blogs = React.lazy(() => import("./pages/blogs/Blogs"));
const Blogs2 = React.lazy(() => import("./pages/blogs/Blogs2"));
const Blogs3 = React.lazy(() => import("./pages/blogs/Blogs3"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/accessories" element={<Accessories />} /> */}
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          {/* <Route path="/blogs2" element={<Blogs2 />} /> */}
          {/* <Route path="/blogs3" element={<Blogs3 />} /> */}
          {/* <Route path="/aboutus" element={<AboutUs />} /> */}
          {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}

          {/* ---------- LAZY ROUTES ---------- */}
          <Route path="/products" element={<Suspense fallback={<Loader />}><Products /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<Loader />}><Contact /></Suspense>} />
          <Route path="/aboutus" element={<Suspense fallback={<Loader />}><AboutUs /></Suspense>} />
          <Route path="/accessories" element={<Suspense fallback={<Loader />}><Accessories /></Suspense>} />
          <Route path="/privacy-policy" element={<Suspense fallback={<Loader />}><PrivacyPolicy /></Suspense>} />
          <Route path="/blogs" element={<Suspense fallback={<Loader />}><Blogs /></Suspense>} />
          <Route path="/blogs2" element={<Suspense fallback={<Loader />}><Blogs2 /></Suspense>} />
          <Route path="/blogs3" element={<Suspense fallback={<Loader />}><Blogs3 /></Suspense>} />

        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
