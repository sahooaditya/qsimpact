import React from "react";

const PartnerSection = () => {
  return (
    <div>
      <section className="section section-default mt-none mb-none">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-8">Our Partner</h2>
          <strong>
            <div className=" container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  <img
                    alt=""
                    src="https://www.pmits.co.uk/portals/0/images/partners/solar-communications-200.png"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  <img
                    alt=""
                    src="https://www.pmits.co.uk/portals/0/images/partners/cbf-200.png"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  <img
                    alt=""
                    src="https://www.pmits.co.uk/portals/0/images/partners/gxs-200.png"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  <img
                    alt=""
                    src="https://www.pmits.co.uk/portals/0/images/partners/jpr-200.png"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  <img
                    alt=""
                    src="https://www.pmits.co.uk/portals/0/images/partners/talk-internet-200.png"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  <img
                    alt=""
                    src="https://www.pmits.co.uk/Portals/0/img/opera3_logo.png"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="square-holder">
                  <img
                    alt=""
                    src="https://www.pmits.co.uk/Portals/0/pegasus-logo.png"
                  />
                </div>
              </div>
            </div>
          </strong>
        </div>
      </section>
    </div>
  );
};

export default PartnerSection;
