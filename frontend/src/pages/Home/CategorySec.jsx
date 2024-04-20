import { Link } from "react-router-dom";

const CategorySec = () => {
    return (
        <section className="py-4 sm:py-8 px-4 sm:px-4 xl:px-0">
            <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                    {/* LEFT SIDE */}
                    <div className="group relative transition overflow-hidden duration-500 flex items-center min-h-[20rem] bg-gray-700 text-gray-50">
                        <img
                            src="https://wpbingosite.com/wordpress/vapas/wp-content/uploads/2019/11/banner3-2-1.jpg"
                            alt="product"
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full transition duration-500 group-hover:scale-105"
                        />

                        <div className="content absolute px-5 sm:px-16">
                            <h2 className="Cormorant mb-2 uppercase text-2xl sm:text-3xl font-bold">
                                E Liquid
                            </h2>
                            <p className="mb-6 max-w-xs">
                                Explore flavorful experiences with our premium E Liquid
                                collection today.
                            </p>

                            <Link
                                to="/products"
                                onClick={() => window.scroll(0, 0)}
                                className="px-7 py-2 mt-3 sm:mt-5 font-medium border-2 border-white hover:bg-gray-100 hover:text-gray-800 transition-colors"
                            >
                                SHOP NOW
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="group relative transition overflow-hidden duration-500 flex items-center min-h-[20rem] bg-gray-700 text-gray-50">
                        <img
                            src="https://wpbingosite.com/wordpress/vapas/wp-content/uploads/2019/11/banner3-1.jpg"
                            alt="product"
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full transition duration-500 group-hover:scale-105"
                        />

                        <div className="content absolute px-5 sm:px-16">
                            <h2 className="Cormorant mb-2 uppercase text-2xl sm:text-3xl font-bold">
                                Dispossible Vape
                            </h2>
                            <p className="mb-6 max-w-xs">
                                Easy, portable vaping pleasure with our disposable vape
                                collection.
                            </p>

                            <Link
                                to="/products"
                                onClick={() => window.scroll(0, 0)}
                                className="px-7 py-2 font-medium border-2 border-white hover:bg-gray-100 hover:text-gray-800 transition-colors"
                            >
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategorySec
