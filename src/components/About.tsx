const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mr-8">
            <h2 className="text-4xl font-bold mb-4 text-[#FFAF00]">About Us</h2>
            <p className="text-gray-800 leading-relaxed mb-6">
              QS ImpACT is a global charity that offers youth the opportunity to
              receive international scholarships and awards. Youth who
              positively impact their community following any of the United
              Nations 17 Sustainable Development Goals are eligible. Build
              skills in sustainability, improve your community and get rewarded
              today!
            </p>
            <p className="text-gray-800 leading-relaxed">
              QS ImpACT Values & Principles are the pillars of our organisation
              and are set by the community. They are central to uphold our
              vision to recognize young leaders through ImpACT. We strive to be
              as radically inclusive as possible. We are a community for the big
              thinkers, the go-getters and the world changers.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/2.jpg"
              alt="About Us Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
