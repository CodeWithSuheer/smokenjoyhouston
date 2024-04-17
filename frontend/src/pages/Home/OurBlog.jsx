const OurBlog = () => {
  return (
    <>
      <section className="py-10 px-5 sm:px-0 bg-gray-900">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto my-12">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 min-h-[50vh]">
            <div className="h-full bg-gray-200">
              <img
                className="w-full object-cover"
                src="https://wpbingosite.com/wordpress/vapas/wp-content/uploads/2019/10/Untitled-3.jpg"
                alt=""
              />
            </div>
            <div className="flex items-center h-full text-gray-200">
              <div className="content pl-16">
                <h2 className="mb-3 text-3xl font-bold">Accessoires</h2>
                <p className="mb-3 max-w-full">
                  It is a long established fact that a read istracted by the
                  readable content of a page when looking. Lorem ipsum dolor sit
                  amet, conectetuer adipiscing elit. Praesent vestibulum
                  molestie
                </p>

                <button className="px-7 py-2 mt-5 font-medium border-2 border-white hover:bg-gray-100 hover:text-gray-800 transition-colors">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurBlog;
