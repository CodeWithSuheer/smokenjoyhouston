import CTASection from "./CTASection";
import Content from "./Content";
import HomeProducts from "./HomeProducts";
import Stats from "./Stats";
import TopBrands from "./TopBrands";
import "./Home.css";

const HomePage = () => {
  return (
    <>
      <main>
        {/* --------- CATEGORY SECTION ----------- */}
        <section className="py-10 px-5 sm:px-0 bg-white">
          <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              {/* LEFT SIDE */}
              <div className="group second_sec_left_img px-16 transition duration-500 group-hover:scale-105 flex items-center min-h-[20rem] bg-gray-700 text-gray-50">
                <div className="content">
                  <h2 className="mb-3 text-3xl font-bold">Vaper Just Ice</h2>
                  <p className="mb-3 max-w-xs">
                    It is a long established fact that content of a page when
                    looking.
                  </p>

                  <button className="px-7 py-2 mt-5 font-medium border-2 border-white hover:bg-gray-100 hover:text-gray-800 transition-colors">
                    SHOP NOW
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="group second_sec_right_img px-16 transition duration-500 group-hover:scale-105 flex items-center min-h-[20rem] bg-gray-700 text-gray-50">
                <div className="content">
                  <h2 className="mb-3 text-3xl font-bold">Pen Vaper</h2>
                  <p className="mb-3 max-w-xs">
                    It is a long established fact that content of a page when
                    looking.
                  </p>

                  <button className="px-7 py-2 mt-5 font-medium border-2 border-white hover:bg-gray-100 hover:text-gray-800 transition-colors">
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
        <CTASection />

        {/* --------- CONTENT SECTION ----------- */}
        <Content />

        {/* --------- STATS SECTION ----------- */}
        <Stats />
      </main>
    </>
  );
};

export default HomePage;
