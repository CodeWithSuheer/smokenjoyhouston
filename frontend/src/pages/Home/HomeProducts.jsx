import { motion } from "framer-motion";

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
  const products = [
    {
      name: "E-Liquids",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/FRYD-60ML3.jpg?v=1713464190",
    },

    {
      name: "E-Cigrattes",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Adalya-Premium-Hookah-Tobacco-1-300x300.jpg?v=1713464541",
    },

    {
      name: "Disposible Vape",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/JUST-REDS-E-LIQUID-BY-ALT-ZERO-100M_1.jpg?v=1713464542",
    },

    {
      name: "Hookah & Sheesha",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/KHALIL-MAMOON-TRIMETAL-ZOHARIA3_1.jpg?v=1713464541",
    },
  ];

  return (
    <>
      <section id="shop" className="py-10 px-5 sm:px-0 min-h-[80vh]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <div className="heading">
              <h2 className="text-3xl font-bold tracking-wide">Our Shop</h2>
              <p className="bg-[#C29168] h-[0.20rem] mt-2"></p>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-full lg:px-0">
              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product, index) => (
                  <motion.div
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                    key={product.id}
                    className="group relative mt-1"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full border border-gray-300 overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                      <img
                        src={product?.image}
                        alt="product"
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-3 flex justify-center">
                      <div>
                        <h3 className="text-lg font-semibold text-black cursor-pointer">
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
