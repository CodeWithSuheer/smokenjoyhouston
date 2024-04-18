import { Link } from "react-router-dom";

const Footer = () => {
  const handleMoveToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <>
      <footer className="bg-[#252525] text-white">
        <div className="container mx-auto">
          {/* FOOTER UPPER PART  */}
          <div className="pt-20 pb-14 px-4 md:px-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            {/* LOGO & HEADING */}
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl">
                SMOKEN JOY HOUSTON
              </h1>
              <p className="max-w-md mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto, itaque! Reiciendis officiis, quo quaerat provident
                expedita dignissimos cum nihil enim?
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <p className="text-xl font-semibold text-white">Quick Link</p>
              <div className="flex flex-col items-start mt-3 space-y-2">
                <Link
                  to="/"
                  onClick={handleMoveToTop}
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Home
                </Link>
                <Link
                  to="/aboutus"
                  onClick={handleMoveToTop}
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  onClick={handleMoveToTop}
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Contact Us
                </Link>
                <Link
                  to="/blogs"
                  onClick={handleMoveToTop}
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Blogs
                </Link>
              </div>
            </div>

            {/* PRODUCT & CATEGORIES */}
            <div>
              <p className="text-xl font-semibold text-white tracking-wider">
                Products
              </p>
              <div className="flex flex-col items-start mt-3 space-y-2">
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  E-Liquids
                </Link>
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  E-Cigrattes
                </Link>
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Disposible Vape
                </Link>
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Hookah & Sheesha
                </Link>
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM PART  */}
          <div className="text-sm py-8 px-4 md:px-10 border-t text-center text-white">
            <p>Copyrights © 2024 All Rights Reserved by SmokeNJoy</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
