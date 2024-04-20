import { Link } from "react-router-dom";

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
                <p className="mb-7 sm:mb-7 lg:mb-7 text-sm md:text-md max-w-full">
                  Elevate your smoking experience with our range of premium accessories. From sleek carrying cases to stylish drip tips, we have everything you need to enhance your vaping and smoking sessions. Discover the perfect accessories to complement your style and enjoy a seamless smoking experience every time.
                </p>

                <Link
                  to="/products"
                  onClick={() => window.scroll(0, 0)}
                  className="px-7 py-2 mt-3 lg:mt-5 font-medium border-2 border-[#252525] hover:bg-[#252525] hover:text-white transition-colors"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>

          {/* SECOND CARD */}
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 sm:ml-0 mr-0 lg:mr-10">
                <h2 className="mb-1.5 sm:mb-3 text-2xl md:text-3xl font-bold">
                  E Juice
                </h2>
                <p className="mb-7 sm:mb-7 lg:mb-7 text-sm md:text-md max-w-full">
                  Elevate your vaping experience with our exquisite selection of E Juice. From fruity delights to rich tobacco blends, discover flavors that excite your palate and invigorate your senses. Our premium E Juice collection is crafted to deliver unparalleled taste and satisfaction, ensuring every vape is a moment of pure indulgence.
                </p>

                <Link
                  to="/products"
                  onClick={() => window.scroll(0, 0)}
                  className="px-7 py-2 mt-3 lg:mt-5 font-medium border-2 border-[#252525] hover:bg-[#252525] hover:text-white transition-colors"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="left_img group overflow-hidden">
              <img
                className="transition duration-500 group-hover:scale-105 w-full"
                src="https://wpbingosite.com/wordpress/vapas/wp-content/uploads/2019/10/Untitled-1.jpg"
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
                src="https://wpbingosite.com/wordpress/vapas/wp-content/uploads/2019/10/Untitled-2.jpg"
                alt=""
              />
            </div>
            {/* RIGHT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 lg:ml-10">
                <h2 className="mb-1.5 sm:mb-3 text-2xl md:text-3xl font-bold">
                  Disposable Vape
                </h2>
                <p className="mb-7 sm:mb-7 lg:mb-7 text-sm md:text-md max-w-full">
                  Discover the convenience and portability of Disposable Vapes. Perfect for on-the-go vaping enthusiasts, these compact devices offer hassle-free usage with no need for refills or charging. Simply enjoy your favorite flavors anytime, anywhere.
                </p>

                <Link
                  to="/products"
                  onClick={() => window.scroll(0, 0)}
                  className="px-7 py-2 mt-3 lg:mt-5 font-medium border-2 border-[#252525] hover:bg-[#252525] hover:text-white transition-colors"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>

          {/* FORTH CARD */}
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 sm:ml-0 mr-0 lg:mr-10">
                <h2 className="mb-1.5 sm:mb-3 text-2xl md:text-3xl font-bold">
                  E-Cigarettes
                </h2>
                <p className="mb-7 sm:mb-7 lg:mb-7 text-sm md:text-md max-w-full">
                  E-Cigarettes offer a modern and convenient way to enjoy smoking without the harmful effects of traditional cigarettes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum molestie dolor, eget feugiat justo ullamcorper eu. Experience the freedom of vaping with our premium E-Cigarettes collection.
                </p>

                <Link
                  to="/products"
                  onClick={() => window.scroll(0, 0)}
                  className="px-7 py-2 mt-3 lg:mt-5 font-medium border-2 border-[#252525] hover:bg-[#252525] hover:text-white transition-colors"
                >
                  SHOP NOW
                </Link>
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
