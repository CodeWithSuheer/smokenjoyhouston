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
        <div className="max-w-6xl mx-auto flex px-4 py-10 sm:py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-7 md:mb-0">
            <img
              className="w-full object-cover object-center"
              alt="hero"
              src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/cigarette-8547965_1920.jpg?v=1713473308"
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 xl:pl-16 lg:pl-20 md:pl-16 flex flex-col text-left">
            <h1 className="mb-3 sm:mb-5 font-bold max-w-md text-3xl md:text-4xl text-[#272727]">
              About SmokEnjoy
            </h1>
            <p className="mb-6 leading-relaxed">
              At Smokenjoy, we believe that the pleasure of smoking should be matched by the joy of discovery. Founded with a passion for providing high-quality smoking products, we curate an exquisite collection that caters to the diverse preferences of our customers. Whether you're a seasoned vape enthusiast, a hookah connoisseur, or someone exploring the world of smoking alternatives, Smokenjoy is your ultimate destination for premium smoking experiences.
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
              Our mission is simple yet profound - to elevate your smoking experience to new heights. We strive to offer the finest selection of vape devices, hookahs, disposable vapes, e-cigarettes, and e-liquids, ensuring that every puff is an indulgence in luxury and satisfaction. At Smokenjoy, we're committed to delivering not just products but experiences that leave a lasting impression.
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
              Our vision at Smokenjoy is to revolutionize the smoking industry by providing innovative and cutting-edge products that redefine the way people experience smoking. We aim to become the ultimate destination for smokers, offering a diverse range of premium vaping and smoking essentials. Our vision encompasses creating a community of passionate smokers who embrace new technologies and flavors, elevating their smoking lifestyle to unprecedented levels of enjoyment and satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* ----------- IMAGE & TEXT SECTION -----------  */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto flex px-5 py-10 sm:py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 xl:pr-16 lg:pr-20 md:pr-16 flex flex-col text-left">
            <h1 className="mb-3 sm:mb-5 font-bold max-w-md text-3xl md:text-4xl text-[#272727]">
              Customer-Centric Approach
            </h1>
            <p className="mb-6 leading-relaxed">
              At Smokenjoy, our customers are at the heart of everything we do. We value your feedback, preferences, and suggestions, using them to continually enhance our product offerings and services. Our dedicated team is always ready to assist you in finding the perfect smoking companion, answering your queries, and ensuring a seamless shopping experience from start to finish.
            </p>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-7 md:mb-0">
            <img
              className="w-full object-cover object-center"
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
