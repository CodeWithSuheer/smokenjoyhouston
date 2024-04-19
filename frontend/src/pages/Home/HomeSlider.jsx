import { useRef, useState } from "react";
import { Link } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [slidesToShow] = useState(1);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const data = [
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/dripper-one-hand-making-cloud-fume.jpg?v=1713388466",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/man-1854175_1920.jpg?v=1713388463",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/IMG_2559.png?v=1713559234",
    },
    // {
    //   img: "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/IMG_2560.png?v=1713559234",
    // },
  ];

  return (
    <div className="relative mx-0 px-0 sm:px-0 h-[70vh] overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {data.map((data, index) => (
          <div key={index} className="w-full h-[70vh] relative cursor-pointer">
            <img
              className="h-full w-full object-cover"
              src={data.img}
              alt="banner_img"
            />

            {/* TEXT FOR DESKTOP VIEW */}
            <div className="content hidden sm:block absolute z-50 top-1/2 md:left-[21rem] transform -translate-x-1/2 -translate-y-1/2 text-white">
              <h2 className="mb-6 text-xl md:text-5xl font-semibold">
                SMOKENJOY
              </h2>
              <p className="mb-8 w-full md:max-w-md text-md">
                Discover Houston's premier destination for smoke and vape
                products! From premium e-liquids to top-of-the- line vape
                devices, we've got everything you need.
              </p>

              <Link
                to="shop"
                spy={true}
                smooth={true}
                duration={700}
                type="button"
                className="px-7 py-2 font-medium border-2 border-white hover:bg-gray-100 hover:text-gray-800 transition-colors cursor-pointer"
              >
                <span>SHOP NOW</span>
              </Link>
            </div>

            {/* TEXT FOR MOBILE VIEW */}
            <div className="content sm:hidden absolute z-50 left-1/2 bottom-10 transform -translate-x-1/2 text-white">
              <Link
                to="shop"
                spy={true}
                smooth={true}
                duration={700}
                type="button"
                className="px-7 py-2 font-medium border-2 border-white hover:bg-gray-100 hover:text-gray-800 transition-colors cursor-pointer"
              >
                <span>SHOP NOW</span>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
