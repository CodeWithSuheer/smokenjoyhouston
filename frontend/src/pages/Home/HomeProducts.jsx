const HomeProducts = () => {
  const products = [
    {
      name: "Vape 1",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/r61-_Converted_-_Recovered_1.png?v=1711055294",
    },

    {
      name: "Vape 1",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/r61-_Converted_-_Recovered_1.png?v=1711055294",
    },

    {
      name: "Vape 1",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/r61-_Converted_-_Recovered_1.png?v=1711055294",
    },

    {
      name: "Vape 1",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/r61-_Converted_-_Recovered_1.png?v=1711055294",
    },

    {
      name: "Vape 1",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/r61-_Converted_-_Recovered_1.png?v=1711055294",
    },

    {
      name: "Vape 1",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/r61-_Converted_-_Recovered_1.png?v=1711055294",
    },

    {
      name: "Vape 1",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/r61-_Converted_-_Recovered_1.png?v=1711055294",
    },

    {
      name: "Vape 1",
      image:
        "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/r61-_Converted_-_Recovered_1.png?v=1711055294",
    },
  ];

  return (
    <>
      <section className="py-10 px-5 sm:px-0 bg-white min-h-screen">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <div className="heading">
              <h2 className="text-3xl font-bold tracking-wide">Our Products</h2>
              <p className="bg-gray-300 h-0.5 mt-2"></p>
            </div>
            <button className="px-10 py-2 mt-5 font-medium border-2 border-black hover:bg-[#252525] hover:text-white transition-colors">
              VIEW ALL
            </button>
          </div>

          {/* PRODUCTS */}
          <div className="">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-full lg:px-0">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product.id} className="group relative mt-2">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                      <img
                        src={product?.image}
                        alt="product"
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-3 flex justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-50 cursor-pointer">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </div>
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