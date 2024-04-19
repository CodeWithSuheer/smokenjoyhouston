import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { createQueryAsync } from "../../features/queriesSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const { isLoading } = useSelector((state) => state.queries);

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(createQueryAsync(formdata)).then(() =>
        setFormdata({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      );
  };

  return (
    <>
      <section className="bg-gray-100">
        <div className="max-w-5xl xl:max-w-7xl px-3 sm:px-6 py-8 mx-auto min-h-screen">
          <div className="lg:flex lg:items-center">
            {/* CONTENT SECTON */}
            <div className="lg:w-1/2 px-2 lg:mx-6">
              <h3 className="text-sm uppercase font-semibold text-black lg:text-md">
                Contact Details
              </h3>
              <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                GET IN TOUCH
              </h2>
              <p className="mt-4 text-sm w-[100%] sm:w-[90%]">
                Questions or projects? Reach out to us today! Use the form or
                contact details, and we'll respond quickly.
              </p>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <FaLocationDot size={22} className="mt-2" />
                  <span className="mx-2 text-gray-700 truncate max-w-sm text-wrap">
                    SmokEnjoy Smoke & Vape Shop, 4922 Washington Ave, Houston,
                    TX 77007, United States
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <FaPhoneAlt size={22} className="" />
                  <a
                    href="tel:+1-281-607-5120"
                    className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400"
                  >
                    +1 (281) 607-5120
                  </a>
                </p>

                <p className="flex items-start -mx-2">
                  <AiOutlineMail size={22} className="" />
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    <a href="mailto:info@octatechsolution.com" target="_blank">
                      info@octatechsolution.com
                    </a>
                  </span>
                </p>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>
                <div className="flex mt-4 -mx-1.5">
                  <a
                    href="https://www.linkedin.com/company/octa-tech-solutionn"
                    target="_blank"
                  >
                    <FaLinkedin
                      size={22}
                      className="mr-5 cursor-pointer text-gray-500 hover:text-[#0073AF]"
                    />
                  </a>
                  <a href="#" target="_blank">
                    <BsInstagram
                      size={22}
                      className="mr-5 cursor-pointer text-gray-500 hover:text-[#E83274]"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Octa-Tech-Solution/61557413701455/"
                    target="_blank"
                  >
                    <FaFacebookF
                      size={22}
                      className="mr-5 cursor-pointer text-gray-500 hover:text-[#1C9CEA]"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@octatechsolution"
                    target="_blank"
                  >
                    <IoLogoYoutube
                      size={22}
                      className="mr-5 cursor-pointer text-gray-500 hover:text-[#FF0000]"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* FORM SECTON */}
            <div className="mt-8 lg:w-1/2 lg:mx-6 ">
              <div className="w-full px-4 sm:px-8 py-10 mx-auto overflow-hidden bg-[#252525] rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50 ">
                <h2 className="text-lg font-medium text-white">LET'S TALK</h2>
                <h2 className="mt-2 text-2xl font-semibold tracking-wider text-white">
                  READY TO GET STARTED?
                </h2>
                <p className="mt-2 text-white">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                {/* FORM */}
                <form className="mt-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4">
                    {/* NAME & PHONE */}
                    <div className="">
                      <label className="block mb-2 text-sm text-white">
                        Full Name *
                      </label>
                      <input
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Enter Full Name"
                        type="text"
                        value={formdata.name}
                        onChange={(e) =>
                          setFormdata({ ...formdata, name: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="">
                      <label className="block mb-2 text-sm text-white">
                        Phone *
                      </label>
                      <input
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Enter Phone Number"
                        type="number"
                        value={formdata.phoneNumber}
                        onChange={(e) =>
                          setFormdata({ ...formdata, phoneNumber: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  {/* EMAIL ADDRESS */}
                  <div className="w-full mt-4">
                    <div className="">
                      <label className="block mb-2 text-sm text-white">
                        Email Address *
                      </label>
                      <input
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Enter Email Address"
                        type="email"
                        value={formdata.email}
                        onChange={(e) =>
                          setFormdata({ ...formdata, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="w-full mt-4">
                    <label className="block mb-2 text-sm text-white">
                      Message *
                    </label>
                    <textarea
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-36 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Enter Your Message"
                      value={formdata.message}
                      onChange={(e) =>
                        setFormdata({ ...formdata, message: e.target.value })
                      }
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <button
                      disabled={isLoading}
                      type="submit"
                      className="mt-6 px-10 py-2 font-medium border-2 tracking-wider text-white border-white hover:bg-gray-100 hover:text-gray-800 transition-colors"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
