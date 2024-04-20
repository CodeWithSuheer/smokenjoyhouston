import "./Home.css";

const TopBrands = () => {
  return (
    <>
      <section className="top_brand_images py-10 px-4 sm:px-4 lg:px-10 xl:px-0">
        <div className="top_brand_images_cont max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* BRANDS */}
          <section className="">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
              <h2 className="Cormorant mb-8 lg:mb-16 text-3xl font-extrabold leading-tight text-center text-white md:text-5xl uppercase">
                Top Brands
              </h2>
              {/* GRID */}
              <div className="grid gap-8 text-gray-300 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <div className="flex justify-center items-center">
                  <h2 className="Cormorant uppercase font-semibold text-gray-300 hover:text-white tracking-wide text-4xl">Yogi</h2>
                </div>
                <div className="flex justify-center items-center">
                  <h2 className="Cormorant uppercase font-semibold text-gray-300 hover:text-white tracking-wide text-4xl">AKORA</h2>
                </div>

                <div className="flex justify-center items-center">
                  <h2 className="Cormorant uppercase font-semibold text-gray-300 hover:text-white tracking-wide text-4xl">STARBUZZ</h2>
                </div>
                <div className="flex justify-center items-center">
                  <h2 className="Cormorant uppercase font-semibold text-gray-300 hover:text-white tracking-wide text-4xl">MIT</h2>
                </div>
                <div className="flex justify-center items-center">
                  <h2 className="Cormorant uppercase font-semibold text-gray-300 hover:text-white tracking-wide text-4xl">DAZE</h2>
                </div>

              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default TopBrands;
