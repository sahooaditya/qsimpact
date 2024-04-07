import React from "react";

const Post = () => {
  return (
    <div>
      <div
        className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-indigo-100"
        id="blog-posts"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="xl:flex">
            <div>
              <h3 className="leading-none font-black text-3xl text-[#FFAF00]">
                Popular Posts
              </h3>
              <div className="flex flex-col items-center  md:space-x-5 md:flex-row lg:flex-row lg:items-stretch lg:justify-around">
                <a
                  href="https://owaiskhan.me"
                  className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8"
                >
                  <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg bg-gray-100 relative">
                    <div className="w-full h-48 bg-cover rounded-t-lg">
                      <img src="/post.jpg" alt="About Us Image" />
                    </div>
                    <div className="p-6">
                      <div className="text-lg font-bold mt-2 text-[#FFAF00]">
                        Climate Literacy and Action Training
                      </div>
                      <div className="mt-2 text-gray-900 text-sm">
                        This Climate Literacy Training for Educators,
                        Communities, Organizations, and Students CLT-ECOS equips
                        you with the information and skills needed to make
                        high-impact changes in your social and professional
                        life.
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://timerse.com"
                  className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8"
                >
                  <div className="transition-all  duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg bg-gray-100 relative">
                    <div className="w-full h-48 bg-cover rounded-t-lg">
                      <img src="/post1.jpg" alt="About Us Image" />
                    </div>
                    <div className="p-6">
                      <div className="text-lg font-bold mt-2 text-[#FFAF00]">
                        Live Impact Program
                      </div>
                      <div className="mt-2 text-gray-900 text-sm">
                        A 10 week virtual global collaboration program where
                        young people work with our councils to learn, create and
                        implement solutions through a hands-on project in DRC,
                        Niger, Pakistan or Uganda.
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-12 xl:mt-0 xl:ml-8">
              <h3 className="leading-none font-black text-3xl text-[#FFAF00]">
                Recent Posts
              </h3>
              <div className="flex flex-col md:space-x-5 md:flex-row  items-center lg:flex-row lg:items-stretch lg:justify-around xl:flex-col">
                <a
                  href="https://owaiskhan.me"
                  className="flex w-full max-w-sm mt-6 lg:mt-8"
                >
                  <div
                    className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg
                    bg-gray-100 relative xl:flex xl:flex-row-reverse xl:items-center xl:px-6 xl:py-8"
                  >
                    <div className="w-full h-48 bg-cover rounded-t-lg xl:w-32 xl:h-20 xl:rounded-lg xl:ml-2">
                      <img src="/post2.jpg" alt="About Us Image" />
                    </div>
                    <div className="p-6 xl:p-0">
                      <div className="text-lg font-bold mt-2 text-[#FFAF00]">
                        How to work effectively with QsImpact
                      </div>
                      <div className="mt-2 text-gray-900 text-sm xl:hidden">
                        Hiring a freelancer for your new project can be
                        challenging if you ve never done before. Learn some tips
                        that will allow you to .
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://owaiskhan.me"
                  className="flex w-full max-w-sm mt-6 lg:mt-8"
                >
                  <div
                    className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg
                    bg-gray-100 relative xl:flex xl:flex-row-reverse xl:items-center xl:px-6 xl:py-8"
                  >
                    <div className="w-full h-48 bg-cover rounded-t-lg xl:w-32 xl:h-20 xl:rounded-lg xl:ml-2">
                      <img src="/post3.jpg" alt="About Us Image" />
                    </div>
                    <div className="p-6 xl:p-0">
                      <div className="text-lg font-bold text-[#FFAF00]">
                        Participants get featured in a blog post.
                      </div>
                      <div className="mt-2 text-gray-900 text-sm xl:hidden">
                        Animations play a vital role in user experience. This
                        article describes how you can create butter smooth 60
                        FPS animations easily.
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
