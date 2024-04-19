import { TbTargetArrow } from "react-icons/tb";
import "./About.css";

const AboutUs = () => {
  return (
    <>
      <section className="about">
        <div className="py-12 sm:py-20 about_cont px-2.5 flex justify-center items-center flex-col">
          <h2 className="mb-2 text-white text-2xl sm:text-4xl font-semibold text-center max-w-xl">
            About Us
          </h2>
          <h2 className="mb-5 text-white text-md sm:text-md font-light text-center max-w-xl">
            Home / About Us
          </h2>
        </div>
      </section>

      {/* ----------- IMAGE & TEXT SECTION -----------  */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-2xl"
              alt="hero"
              src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/cigarette-8547965_1920.jpg?v=1713473308"
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 xl:pl-16 lg:pl-20 md:pl-16 flex flex-col text-left">
            <h1 className="mb-5 font-bold max-w-md text-3xl md:text-4xl text-[#272727]">
              About SmokEnjoy
            </h1>
            <p className="mb-6 leading-relaxed">
              Welcome to SmokEnjoy, your dependable resource for help with
              academic writing. We take great pride in being a dependable
              supplier of superior academic services. You will receive
              professional advice and help from our team of seasoned
              professionals with advanced degrees in a range of disciplines.
            </p>
            <p className="mb-6 leading-relaxed">
              We at SmokEnjoy are aware of the difficulties students have while
              pursuing their academic goals. Because of this, we provide
              thorough and reasonably priced academic support that is catered to
              your needs. Our main objective is to provide outstanding results
              and support your academic progress.
            </p>
          </div>
        </div>
      </section>

      {/* ----------- OUR MISSION & VISSION -----------  */}
      <section className="bg-[#252525] text-white">
        <div className="py-5 sm:py-14 max-w-6xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {/* LEFT BOX */}
          <div className="left_box text-center px-4 sm:px-10 py-12 border-0 md:border-r">
            <TbTargetArrow className="mx-auto" size={50} />
            <h2 className="mt-3 text-4xl font-semibold ">Our Mission</h2>
            <p className="mt-3 font-light">
              Our goal at SmokEnjoy is to empower students by offering them
              dependable, convenient, and excellent academic support. In order
              to help students achieve academic success and overcome obstacles
              in their educational journey, we work hard to earn their trust as
              a partner. Our goal is to provide a welcoming environment where
              people can work together to advance learning, excellence, and
              growth.
            </p>
          </div>

          {/* RIGHT BOX */}
          <div className="right_box text-center px-4 sm:px-10 py-12 border-t md:border-0">
            <img
              className="w-12 mx-auto"
              src="https://s3-alpha-sig.figma.com/img/1374/6866/d80b58313150f7cd47678a90160e3a6e?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O2kgEFtpyXRmqJXQYH5TwyrjEG-N-mzwDzzTff4QAbeugZDMcZEiWPL1drwo7E7J8XEDMZTs-vrlDFt4NNEv~hh4kicaHPJBt3c0hvt271l-XXEAwxHwm8OB1cyMLUtY4RNd2ONjaobDFTTd9nYuF-pBO1x9mvhuF402AXePYHX0jUdnbu5MMj-86smU7FdwY9xQcEzVAy-YwbqKO5Ynxe4HwUos4G0AYSjhsHuNSGY1kuMmG-F~V4Xgz0Zz397xQsSn4XHhPcDd7jIpFeGE-iy2tFhqpypA4iTeASRt8qxKAhWXXz87bbts8eZRd8ZXFimA4W8Ey-7ipfsHZUv7oA__"
              alt=""
            />
            <h2 className="mt-3 text-4xl font-semibold">Our Vision</h2>
            <p className="mt-3 font-light">
              At SmokEnjoy, our mission is to be the premier academic help
              company, known for our dedication to student success and unmatched
              level of customer care. We picture a day when students from all
              backgrounds may get dependable, inexpensive academic support,
              enabling them to fulfil their educational aspirations. We hope to
              have a beneficial influence on students’ lives all around the
              world by assisting them in realizing their full potential and
              succeeding in their academic endeavors.
            </p>
          </div>
        </div>
      </section>

      {/* ----------- IMAGE & TEXT SECTION -----------  */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 xl:pr-16 lg:pr-20 md:pr-16 flex flex-col text-left">
            <h1 className="mb-5 font-bold max-w-md text-3xl md:text-4xl text-[#272727]">
              About SmokEnjoy
            </h1>
            <p className="mb-6 leading-relaxed">
              Welcome to SmokEnjoy, your dependable resource for help with
              academic writing. We take great pride in being a dependable
              supplier of superior academic services. You will receive
              professional advice and help from our team of seasoned
              professionals with advanced degrees in a range of disciplines.
            </p>
            <p className="mb-6 leading-relaxed">
              We at SmokEnjoy are aware of the difficulties students have while
              pursuing their academic goals. Because of this, we provide
              thorough and reasonably priced academic support that is catered to
              your needs. Our main objective is to provide outstanding results
              and support your academic progress.
            </p>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-2xl"
              alt="hero"
              src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/hookan-by-table-side-view.jpg?v=1713473315"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
