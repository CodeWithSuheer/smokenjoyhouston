import { motion } from "framer-motion";
import { categories } from "../../Data/index";

// fadeInAnimationVariants
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * index,
    },
  }),
};

const HomeProducts = () => {

  return (
    <>
      <section id="shop" className="py-10 px-5 lg:px-0 min-h-[80vh]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex items-center justify-center xl:justify-start">
            <div className="heading">
              <h2 className="text-3xl font-bold tracking-normal">
                Our Products
              </h2>
              <p className="bg-[#C29168] h-[0.20rem] mt-2"></p>
            </div>
          </div>

          <div className="products">
            <div className="mx-auto max-w-2xl py-4 lg:py-6 sm:px-6 sm:py-6 lg:max-w-full lg:px-5 xl:px-0">
              <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {categories?.map((product, index) => (
                  <motion.div
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                    key={index}
                    className="group relative mt-1"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full cursor-pointer border border-gray-300 overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                      <img
                        src={product?.image}
                        alt="product"
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-2 lg:mt-3 flex justify-center">
                      <div>
                        <h3 className="pl-2 sm:pl-0 text-md lg:text-lg font-semibold text-black cursor-pointer">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProducts;
