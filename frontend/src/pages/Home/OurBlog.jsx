import { Link } from "react-router-dom";

const OurBlog = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between sm:px-6">
          <div className="heading">
            <h2 className="text-3xl font-bold tracking-wide">Our Blog</h2>
            <p className="bg-[#C29168] h-[0.20rem] mt-2"></p>
          </div>
          {/* GO TO BLOGS BUTTON */}
          <Link
            to="/blogs"
            onClick={() => window.scroll(0, 0)}
            className="px-10 py-2 mt-5 font-medium border-2 border-black hover:bg-[#252525] hover:text-white transition-colors"
          >
            GO TO BLOG
          </Link>
        </div>

        {/* BLOG SECTION */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 py-16 sm:px-6 sm:py-6 px-0">
          {/* CARD 1 */}
          <article className="group relative overflow-hidden shadow transition hover:shadow-lg">
            <img
              alt=""
              src="https://wpbingosite.com/wordpress/vapas/wp-content/uploads/2017/04/Image-10-370x460.jpg"
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="relative pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="mt-0.5 text-2xl font-semibold text-white">
                    How to position your furniture for positivity
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

          {/* CARD 2 */}
          <article className="group relative overflow-hidden shadow transition hover:shadow-lg">
            <img
              alt=""
              src="https://wpbingosite.com/wordpress/vapas/wp-content/uploads/2017/04/Image-11-370x460.jpg"
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="relative pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="mt-0.5 text-2xl font-semibold text-white">
                    How to position your furniture for positivity
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

          {/* CARD 3 */}
          <article className="group relative overflow-hidden shadow transition hover:shadow-lg">
            <img
              alt=""
              src="https://wpbingosite.com/wordpress/vapas/wp-content/uploads/2017/04/Image-6-370x460.jpg"
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="relative pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="mt-0.5 text-2xl font-semibold text-white">
                    How to position your furniture for positivity
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
