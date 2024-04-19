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
                  <h2 className="mb-3 text-2xl sm:text-3xl font-bold">
                    Vaper Just Ice
                  </h2>
                  <p className="mb-3 max-w-xs">
                    It is a long established fact that content of a page when
                    looking.
                  </p>

                  <button className="px-7 py-2 mt-3 sm:mt-5 font-medium border-2 border-white hover:bg-gray-100 hover:text-gray-800 transition-colors">
                    SHOP NOW
                  </button>
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
                  <h2 className="mb-3 text-2xl sm:text-3xl font-bold">
                    Pen Vaper
                  </h2>
                  <p className="mb-3 max-w-xs">
                    It is a long established fact that content of a page when
                    looking.
                  </p>

                  <button className="px-7 py-2 font-medium border-2 border-white hover:bg-gray-100 hover:text-gray-800 transition-colors">
                    SHOP NOW
                  </button>
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
        <section className="bg-[#252525]">
          <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl px-4 py-24 mx-auto lg:flex lg:items-center lg:justify-between">
            <h2 className="text-2xl font-semibold tracking-tight xl:text-3xl text-white">
              Join us and get the update from anywhere
            </h2>
            <div className="mt-8 lg:mt-0">
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                <input
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  id="email"
                  placeholder="Email Address"
                  type="text"
                />
                <button className="px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>

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
