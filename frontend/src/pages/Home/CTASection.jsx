const CTASection = () => {
  return (
    <>
      <section className="lg:pt-2 lg:pb-16 lg:flex lg:justify-center">
        <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2">
            <div
              className="h-64 bg-cover lg:h-full"
              style={{
                backgroundImage: 'url(\'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80\')'
              }}
            />
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2 bg-[#252525]">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Build Your New{' '}
              <span className="text-blue-500">
                Idea
              </span>
            </h2>
            <p className="mt-4 text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.                Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam                mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
            </p>
            <div className="inline-flex w-full mt-6 sm:w-auto">
              <button className="px-7 py-2 font-medium border-2 border-white hover:bg-gray-100 text-white hover:text-gray-800 transition-colors">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
