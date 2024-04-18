const Content = () => {
  return (
    <>
      <section className="py-16 px-5 sm:px-0">
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
              <div className="ml-10">
                <h2 className="mb-3 text-3xl font-bold">Accessoires</h2>
                <p className="mb-3 max-w-full">
                  It is a long established fact that a read istracted by the
                  readable content of a page when looking. Lorem ipsum dolor sit
                  amet, conectetuer adipiscing elit. Praesent vestibulum
                  molestie
                </p>

                <button className="px-7 py-2 mt-5 font-medium border-2 border-[#C29168] hover:bg-gray-100 hover:text-gray-800 transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* SECOND CARD */}
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="flex items-center">
              <div className="mr-10">
                <h2 className="mb-3 text-3xl font-bold">Devices</h2>
                <p className="mb-3 max-w-full">
                  It is a long established fact that a read istracted by the
                  readable content of a page when looking. Lorem ipsum dolor sit
                  amet, conectetuer adipiscing elit. Praesent vestibulum
                  molestie
                </p>

                <button className="px-7 py-2 mt-5 font-medium border-2 border-[#C29168] hover:bg-gray-100 hover:text-gray-800 transition-colors">
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
              <div className="ml-10">
                <h2 className="mb-3 text-3xl font-bold">E-Juices</h2>
                <p className="mb-3 max-w-full">
                  It is a long established fact that a read istracted by the
                  readable content of a page when looking. Lorem ipsum dolor sit
                  amet, conectetuer adipiscing elit. Praesent vestibulum
                  molestie
                </p>

                <button className="px-7 py-2 mt-5 font-medium border-2 border-[#C29168] hover:bg-gray-100 hover:text-gray-800 transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* FORTH CARD */}
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="flex items-center">
              <div className="mr-10">
                <h2 className="mb-3 text-3xl font-bold">Starter Kits</h2>
                <p className="mb-3 max-w-full">
                  It is a long established fact that a read istracted by the
                  readable content of a page when looking. Lorem ipsum dolor sit
                  amet, conectetuer adipiscing elit. Praesent vestibulum
                  molestie
                </p>

                <button className="px-7 py-2 mt-5 font-medium border-2 border-[#C29168] hover:bg-gray-100 hover:text-gray-800 transition-colors">
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
