const CTASection = () => {
  return (
    <>
      <section className=" py-20">
        <div className="relative mx-auto max-w-6xl ">
          <div
            className="rounded-xl p-1"
            style={{
              backgroundImage:
                "linear-gradient(to right bottom, rgb(79, 70, 229) 0%, rgb(165, 56, 164) 50%, rgb(220, 38, 38) 100%)",
            }}
          >
            <div className="rounded-lg bg-black/80 backdrop-blur">
              <div className="flex w-full flex-wrap items-center justify-between gap-4 px-8 py-20 sm:px-16 lg:flex-nowrap">
                <div className="lg:max-w-xl">
                  <h2 className="block w-full pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                    THE BEST E-LIQUID PRICES
                  </h2>
                  <p className="my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
                    Great value UK made e-liquid. $13.33 per 10ml bottle!
                    Available this week!
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6 ">
                  <button className="bg-violet-600 text-white button-text flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 px-8 py-3 text-xs sm:text-sm">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
