const Content = () => {
  return (
    <>
      <section className="py-3 lg:py-16 px-4 sm:px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* FIRST CARD */}
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="left_img group overflow-hidden">
              <img
                className="transition duration-500 group-hover:scale-105 w-full"
                src="https://wpbingosite.com/wordpress/vapas/wp-content/uploads/2019/10/Untitled-3.jpg"
                alt=""
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 lg:ml-10">
                <h2 className="mb-1.5 sm:mb-3 text-2xl md:text-3xl font-bold">
                  Accessoires
                </h2>
                <p className="mb-1.5 sm:mb-3 text-sm md:text-md max-w-full">
                  It is a long established fact that a read istracted by the
                  readable content of a page when looking. Lorem ipsum dolor sit
                  amet, conectetuer adipiscing elit. Praesent vestibulum
                  molestie
                </p>

                <button className="px-7 py-2 mt-3 lg:mt-5 font-medium border-2 border-[#252525] hover:bg-[#252525] hover:text-white transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* SECOND CARD */}
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 sm:ml-0 mr-0 lg:mr-10">
                <h2 className="mb-1.5 sm:mb-3 text-2xl md:text-3xl font-bold">
                  Devices
                </h2>
                <p className="mb-1.5 sm:mb-3 text-sm md:text-md max-w-full">
                  It is a long established fact that a read istracted by the
                  readable content of a page when looking. Lorem ipsum dolor sit
                  amet, conectetuer adipiscing elit. Praesent vestibulum
                  molestie
                </p>

                <button className="px-7 py-2 mt-3 lg:mt-5 font-medium border-2 border-[#252525] hover:bg-[#252525] hover:text-white transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="left_img group overflow-hidden">
              <img
                className="transition duration-500 group-hover:scale-105 w-full"
                src="https://wpbingosite.com/wordpress/vapas/wp-content/uploads/2019/10/Untitled-2.jpg"
                alt=""
              />
            </div>
          </div>

          {/* THIRD CARD */}
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="left_img group overflow-hidden">
              <img
                className="transition duration-500 group-hover:scale-105 w-full"
                src="https://wpbingosite.com/wordpress/vapas/wp-content/uploads/2019/10/Untitled-1.jpg"
                alt=""
              />
            </div>
            {/* RIGHT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 lg:ml-10">
                <h2 className="mb-1.5 sm:mb-3 text-2xl md:text-3xl font-bold">
                  E-Juices
                </h2>
                <p className="mb-1.5 sm:mb-3 text-sm md:text-md max-w-full">
                  It is a long established fact that a read istracted by the
                  readable content of a page when looking. Lorem ipsum dolor sit
                  amet, conectetuer adipiscing elit. Praesent vestibulum
                  molestie
                </p>

                <button className="px-7 py-2 mt-3 lg:mt-5 font-medium border-2 border-[#252525] hover:bg-[#252525] hover:text-white transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* FORTH CARD */}
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 sm:ml-0 mr-0 lg:mr-10">
                <h2 className="mb-1.5 sm:mb-3 text-2xl md:text-3xl font-bold">
                  Starter Kits
                </h2>
                <p className="mb-1.5 sm:mb-3 text-sm md:text-md max-w-full">
                  It is a long established fact that a read istracted by the
                  readable content of a page when looking. Lorem ipsum dolor sit
                  amet, conectetuer adipiscing elit. Praesent vestibulum
                  molestie
                </p>

                <button className="px-7 py-2 mt-3 lg:mt-5 font-medium border-2 border-[#252525] hover:bg-[#252525] hover:text-white transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="left_img group overflow-hidden">
              <img
                className="transition duration-500 group-hover:scale-105 w-full"
                src="https://wpbingosite.com/wordpress/vapas/wp-content/uploads/2019/10/Untitled-4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
