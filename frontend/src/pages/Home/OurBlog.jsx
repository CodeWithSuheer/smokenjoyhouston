import { useNavigate } from "react-router-dom";

const OurBlog = () => {
  const navigate = useNavigate();
  const handleBlogPage = () => {
    navigate("/blogs");
    window.scroll(0, 0);
  };
  const handleBlogPage2 = () => {
    navigate("/blogs2");
    window.scroll(0, 0);
  };
  const handleBlogPage3 = () => {
    navigate("/blogs3");
    window.scroll(0, 0);
  };
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between sm:px-6">
          <div className="heading">
            <h2 className="text-3xl font-bold tracking-wide">Our Blog</h2>
            <p className="bg-[#C29168] h-[0.20rem] mt-1"></p>
          </div>
        </div>

        {/* BLOG SECTION */}
        <div className="mt-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 py-5 sm:px-6 sm:py-6 px-0">
          {/* CARD 1 */}
          <article
            onClick={handleBlogPage}
            className="group relative overflow-hidden shadow transition hover:shadow-lg cursor-pointer"
          >
            <img
              alt=""
              src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Kroma_217-Apr-18-2024-08-53-15-3416-AM.webp?v=1713554018"
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="mt-0.5 text-2xl font-semibold text-white">
                    Ohms Too Low on a Vape: What Does It Mean?
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  If your vape mod displays the error “Ohms Too Low” when you
                  press the fire button, it means your device can’t work
                  safely .....
                </p>
              </div>
            </div>
          </article>

          {/* CARD 2 */}
          <article
            onClick={handleBlogPage2}
            className="group relative overflow-hidden shadow transition hover:shadow-lg cursor-pointer"
          >
            <img
              alt=""
              src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Klypse_Zip-1.webp?v=1713554519"
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="mt-0.5 text-2xl font-semibold text-white">
                    What Are the Best Vapes for Nicotine Salt?
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  For several years now, nicotine salt e-liquid is been one of
                  the biggest success stories in the vaping industry. It’s
                  enabled people ....
                </p>
              </div>
            </div>
          </article>

          {/* CARD 3 */}
          <article
            onClick={handleBlogPage3}
            className="group relative overflow-hidden shadow transition hover:shadow-lg cursor-pointer"
          >
            <img
              alt=""
              src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/flat-lay-yellow-luggage-with-copy-space.webp?v=1713555846"
              className="absolute  inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="mt-0.5 text-2xl font-semibold text-white">
                  Can You Bring a Vape on a Plane? How to Travel with ....
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default OurBlog;
