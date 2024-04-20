import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Content from "./Content";
import HomeProducts from "./HomeProducts";
import Stats from "./Stats";
import TopBrands from "./TopBrands";
import HomeSlider from "./HomeSlider";
import OurBlog from "./OurBlog";
import CategorySec from "./CategorySec";
import { categories } from "../../Data/index";
import "./Home.css";

const HomePage = () => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    setHomeData(categories);
  }, []);

  return (
    <>
      <main>
        {/* --------- SLIDER ----------- */}
        <HomeSlider />

        {/* --------- CATEGORY SECTION ----------- */}
        <CategorySec />

        {/* --------- PRODUCTS SECTION ----------- */}
        <HomeProducts homeData={homeData} />

        {/* --------- TOP BRANDS ----------- */}
        <TopBrands />

        {/* --------- TOP BRANDS ----------- */}
        <Content />

        {/* --------- STATS SECTION ----------- */}
        <Stats />

        {/* --------- CONTENT SECTION ----------- */}
        <OurBlog />

        {/* --------- LOACTION ----------- */}
        <section>
          <div className="max-w-full mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d110823.66715407837!2d-95.493616362117!3d29.770712661721642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8640c0b4c9601d63%3A0x125d33f24c1f82d5!2s4922%20Washington%20Ave%2C%20Houston%2C%20TX%2077007%2C%20United%20States!3m2!1d29.7707382!2d-95.411215!5e0!3m2!1sen!2s!4v1713396724125!5m2!1sen!2s"
              className="border-none w-full min-h-[70vh]"
              allowFullScreen=""
              loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
