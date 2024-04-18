import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "./Components.css";

const TextData = () => {
  return (
    <p className="mx-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliq Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Aliq
    </p>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const [responsiveMenu, setResponsiveMenu] = useState();
  // const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // const toggleDropdown = () => {
  //   setIsDropDownOpen(!isDropDownOpen);
  // };

  // const handleMoveToTop = () => {
  //   window.scroll(0, 0);
  // };

  const handleLinkClick = () => {
    setResponsiveMenu(false);
    window.scroll(0, 0);
  };

  const handleContact = () => {
    navigate("/contact");
    window.scroll(0, 0);
  };

  return (
    <>
      {/* MARQUEE */}
      <div className="header bg-[#252525] text-white py-2 text-sm">
        <Marquee speed={70}>
          <TextData />
        </Marquee>
      </div>

      {/* NAVBAR */}
      <nav className={`md:text-sm bg-white border-b border-gray-300 shadow-lg`}>
        <div className="items-center px-4 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto md:flex md:px-0">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <img
                className="w-36"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/smokeNjoy_logo222.png?v=1713462364"
                alt=""
              />
            </Link>

            <div className="md:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md"
                onClick={() => setResponsiveMenu(!responsiveMenu)}
              >
                {responsiveMenu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`flex-1 justify-self-center pb-8 mt-8 md:block md:pb-0 md:mt-0 ${
              responsiveMenu ? "block" : "hidden"
            }`}
          >
            <ul className="text-center justify-center items-center space-y-8 md:flex md:space-x-8 md:space-y-0">
              {/* <li
                className="text-gray-800 hover:text-[#1A73E8]"
                ref={dropdownRef}
              >
                <div className="dropdown relative">
                  <button
                    onClick={toggleDropdown}
                    className="text-md font-medium tracking-wide text-gray-700 rounded-xl"
                  >
                    <span className="flex items-center font-medium text-[1.07rem]">
                      Services
                      {isDropDownOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="pt-0.5 lucide lucide-chevron-up"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="pt-0.5 lucide lucide-chevron-down"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      )}
                    </span>
                  </button>

                  {isDropDownOpen && (
                    <div className="absolute right-0 z-20 w-40 py-2 mt-4 overflow-hidden origin-top-right bg-white rounded-xl shadow-xl">
                      <Link
                        to="/online-classes"
                        onClick={() => {
                          toggleDropdown();
                          handleMoveToTop();
                          handleLinkClick();
                        }}
                        className="block px-4 py-3  w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100 "
                      >
                        Online Classes
                      </Link>

                      <hr className="border-gray-200" />

                      <Link
                        to="/exams"
                        onClick={() => {
                          toggleDropdown();
                          handleMoveToTop();
                          handleLinkClick();
                        }}
                        className="block px-4 py-3 w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100 "
                      >
                        Exams
                      </Link>

                      <hr className="border-gray-200" />

                      <Link
                        to="/assignments"
                        onClick={() => {
                          toggleDropdown();
                          handleMoveToTop();
                          handleLinkClick();
                        }}
                        className="block px-4 py-3 w-full text-left text-sm text-gray-800 font-medium capitalize transition-colors duration-300 transform hover:bg-gray-100 "
                      >
                        Assignments
                      </Link>
                    </div>
                  )}
                </div>
              </li> */}

              <li className="poppins text-gray-800 hover:text-gray-600">
                <Link
                  to="/products"
                  onClick={handleLinkClick}
                  className="font-medium text-[1.07rem]"
                >
                  Products
                </Link>
              </li>

              <li className="poppins text-gray-800 hover:text-gray-600">
                <Link
                  to="/accessories"
                  onClick={handleLinkClick}
                  className="font-medium text-[1.07rem]"
                >
                  Accessories
                </Link>
              </li>

              <li className="poppins text-gray-800 hover:text-gray-600">
                <Link
                  to="/blogs"
                  onClick={handleLinkClick}
                  className="font-medium text-[1.07rem]"
                >
                  Blogs
                </Link>
              </li>

              <li className="poppins text-gray-800 hover:text-gray-600">
                <Link
                  to="/aboutus"
                  onClick={handleLinkClick}
                  className="font-medium text-[1.07rem]"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:inline-block">
            <button onClick={handleContact} className="navbar_button">
              <span>CONTACT US</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
