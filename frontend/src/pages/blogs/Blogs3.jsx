const Blogs3 = () => {
  return (
    <>
      <div>
        <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-2xl">
            {/* Avatar Media */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="size-12 rounded-full"
                    src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-center gap-x-2">
                    <div>
                      {/* Tooltip */}
                      <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                        <div class="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                          <span className="font-semibold text-gray-800 dark:text-neutral-200">
                            Hemok Wang
                          </span>
                          {/* Dropdown Card */}
                          <div
                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl dark:bg-neutral-950 dark:divide-neutral-700"
                            role="tooltip"
                          >
                            {/* Body */}
                            <div className="p-4 sm:p-5">
                              <div className="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                                <div className="flex-shrink-0">
                                  <img
                                    className="size-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                    alt="Image Description"
                                  />
                                </div>
                                <div className="grow">
                                  <p className="text-lg font-semibold text-gray-200 dark:text-neutral-200">
                                    Hemok Wang
                                  </p>
                                </div>
                              </div>
                              <p className="text-sm text-gray-400 dark:text-neutral-400">
                                Leyla is a Customer Success Specialist at
                                Preline and spends her time speaking to in-house
                                recruiters all over the world.
                              </p>
                            </div>
                            {/* End Body */}
                            {/* Footer */}
                            <div className="flex justify-between items-center px-4 py-3 sm:px-5">
                              <ul className="text-xs space-x-3">
                                <li className="inline-block">
                                  <span className="font-semibold text-gray-200 dark:text-neutral-200">
                                    56
                                  </span>
                                  <span className="text-gray-400 dark:text-neutral-400">
                                    articles
                                  </span>
                                </li>
                                <li className="inline-block">
                                  <span className="font-semibold text-gray-200 dark:text-neutral-200">
                                    1k+
                                  </span>
                                  <span className="text-gray-400 dark:text-neutral-400">
                                    followers
                                  </span>
                                </li>
                              </ul>
                              <div>
                                <button
                                  type="button"
                                  className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                  <svg
                                    className="flex-shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path
                                      fillRule="evenodd"
                                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                                    />
                                  </svg>
                                  Follow
                                </button>
                              </div>
                            </div>
                            {/* End Footer */}
                          </div>
                          {/* End Dropdown Card */}
                        </div>
                      </div>
                      {/* End Tooltip */}
                      <ul className="text-xs text-gray-500 dark:text-neutral-500">
                        <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                          Mar 22
                        </li>
                        <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                          8 min read
                        </li>
                      </ul>
                    </div>
                    {/* Button Group */}
                    <div>
                      <button
                        type="button"
                        className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                      >
                        <svg
                          className="size-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                        Tweet
                      </button>
                    </div>
                    {/* End Button Group */}
                  </div>
                </div>
              </div>
            </div>
            {/* End Avatar Media */}
            {/* Content */}
            <div className="space-y-5 md:space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
                  Can You Bring a Vape on a Plane? How to Travel with Your Vape
                  in 2024
                </h2>
                <p className="text-lg text-gray-800 dark:text-neutral-200">
                  If you’ve completed your transition to vaping and are no
                  longer a smoker, there’s a good chance that your need for
                  nicotine isn’t as great as it once was. You probably find that
                  you can go longer without vaping than you previously were able
                  to go without smoking a cigarette. It’s likely, however, that
                  you still don’t want to be far from your vape if you’re going
                  to be out of the house for a while – and that definitely
                  applies to traveling with your vape. It’s not so different
                  from wanting to bring your cigarettes on the plane if you were
                  flying to another country.
                </p>
              </div>
              <p className="text-lg text-gray-800 dark:text-neutral-200">
                So, can you take a vape on a plane in 2024? In most cases,
                you’ll have no trouble traveling with your vape as long as you
                obey the rules that cover traveling with liquids and batteries
              </p>
              <figure>
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/flat-lay-yellow-luggage-with-copy-space.webp?v=1713555846"
                  alt="Image Description"
                />
              </figure>
              <p className="text-lg text-gray-800 dark:text-neutral-200">
                Vaping regulations are continually evolving. Research the
                relevant laws about bringing vapes on a plane before you
                travel.The most important thing to know about bringing your vape
                on a plane is that airlines’ rules about vaping – and the vaping
                laws in the various nations around the world – can change
                without notice.
              </p>
              <p className="text-lg text-gray-800 dark:text-neutral-200">
                Vaping devices and replacement batteries always belong in your
                carry-on bag. Don’t ever bring a vape on a plane in your checked
                luggage unless the battery is removed and stored separately in
                your hand baggage.
              </p>
              <blockquote className="text-center p-4 sm:px-7">
                <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
                  Next, we’d like to discuss three offerings from Innokin that
                  we believe will be a great fit if you’re looking for the best
                  salt nic vape for your needs.
                </p>
              </blockquote>
              <figure>
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Vape_on_a_Plane_300k.webp?v=1713556000"
                  alt="Image Description"
                />
              </figure>
            </div>
            {/* End Content */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs3;
