const Content = () => {
  return (
    <>
      <section className="py-10 px-5 sm:px-0 bg-gray-600 min-h-screen">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <div className="heading">
              <h2 className="text-3xl font-bold tracking-wide">Our Blog</h2>
              <p className="bg-gray-300 h-0.5 mt-2"></p>
            </div>
            <button className="px-10 py-2 mt-5 font-medium border-2 border-white hover:bg-gray-100 hover:text-gray-800 transition-colors">
              GO TO BLOGS
            </button>
          </div>


          
        </div>
      </section>
    </>
  );
};

export default Content;
