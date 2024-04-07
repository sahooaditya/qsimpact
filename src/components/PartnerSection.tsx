import React from "react";

const PartnerSection = () => {
  return (
    <div>
      <section className=" bg-gray-100 section section-default mt-none mb-none">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#FFAF00]">
            Our Partner
          </h2>
          <div className="max-w-screen-xl mx-auto">
            <img
              className="mx-auto"
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846471026680582071-Strip-Payment-Logos.png"
            />
          </div>
        </div>
        <div className="p-5 sm:px-10 md:px-20" id="companies"></div>
      </section>
    </div>
  );
};

export default PartnerSection;
