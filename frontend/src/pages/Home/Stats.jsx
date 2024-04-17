const Stats = () => {
  return (
    <>
      <section className="py-10 px-5 sm:px-0 bg-gray-800">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto my-12">
          <div className="mx-auto px-4 py-4 sm:px-6 md:px-24 md:py-16 lg:px-0 lg:py-16">
            <div className="row-gap-8 grid grid-cols-2 md:grid-cols-4">
              <div className="mb-12 text-center md:mb-0 md:border-r-2 dark:md:border-slate-500">
                <div className="font-heading text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl">
                  4210
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-widest text-gray-200 lg:text-base">
                  VAPESTERS
                </p>
              </div>
              <div className="mb-12 text-center md:mb-0 md:border-r-2 dark:md:border-slate-500">
                <div className="font-heading text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl">
                  1002
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-widest text-gray-200 lg:text-base">
                  CIGARETTES SAVED
                </p>
              </div>
              <div className="mb-12 text-center md:mb-0 md:border-r-2 dark:md:border-slate-500">
                <div className="font-heading text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl">
                  630
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-widest text-gray-200 lg:text-base">
                  PRE-MADE FLAVORS
                </p>
              </div>
              <div className="mb-12 text-center md:mb-0 md:border-r-0 dark:md:border-slate-500">
                <div className="font-heading text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl">
                  410
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-widest text-gray-200 lg:text-base">
                  CUSTOM COMBOS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
