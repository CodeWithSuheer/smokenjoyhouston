import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Content from "./Content";
import HomeProducts from "./HomeProducts";
import Stats from "./Stats";
import TopBrands from "./TopBrands";
import HomeSlider from "./HomeSlider";
import OurBlog from "./OurBlog";
import "./Home.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  // AOS
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <main>
        {/* --------- SLIDER ----------- */}
        <HomeSlider />

        {/* --------- CATEGORY SECTION ----------- */}
        <section className="py-4 sm:py-8 px-4 sm:px-4 xl:px-0">
          <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              {/* LEFT SIDE */}
              <div className="group relative transition overflow-hidden duration-500 flex items-center min-h-[20rem] bg-gray-700 text-gray-50">
                <img
                  src="https://wpbingosite.com/wordpress/vapas/wp-content/uploads/2019/11/banner3-2-1.jpg"
                  alt="product"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full transition duration-500 group-hover:scale-105"
                />

                <div className="content absolute px-5 sm:px-16">
                  <h2 className="Cormorant mb-2 uppercase text-2xl sm:text-3xl font-bold">
                    E Liquid
                  </h2>
                  <p className="mb-6 max-w-xs">
                    Explore flavorful experiences with our premium E Liquid
                    collection today.
                  </p>

                  <Link
                    to="/products"
                    onClick={() => window.scroll(0, 0)}
                    className="px-7 py-2 mt-3 sm:mt-5 font-medium border-2 border-white hover:bg-gray-100 hover:text-gray-800 transition-colors"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="group relative transition overflow-hidden duration-500 flex items-center min-h-[20rem] bg-gray-700 text-gray-50">
                <img
                  src="https://wpbingosite.com/wordpress/vapas/wp-content/uploads/2019/11/banner3-1.jpg"
                  alt="product"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full transition duration-500 group-hover:scale-105"
                />

                <div className="content absolute px-5 sm:px-16">
                  <h2 className="Cormorant mb-2 uppercase text-2xl sm:text-3xl font-bold">
                    Dispossible Vape
                  </h2>
                  <p className="mb-6 max-w-xs">
                    Easy, portable vaping pleasure with our disposable vape
                    collection.
                  </p>

                  <Link
                    to="/products"
                    onClick={() => window.scroll(0, 0)}
                    className="px-7 py-2 font-medium border-2 border-white hover:bg-gray-100 hover:text-gray-800 transition-colors"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --------- PRODUCTS SECTION ----------- */}
        <HomeProducts />

        {/* --------- TOP BRANDS ----------- */}
        <TopBrands />

        {/* --------- TOP BRANDS ----------- */}
        <Content />

        {/* --------- STATS SECTION ----------- */}
        <Stats />

        {/* --------- CONTENT SECTION ----------- */}
        <OurBlog />

        {/* --------- CTA SECTION ----------- */}
        {/* <CTASection /> */}

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
