const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between sm:text-[0.3rem] lg:text-[0.8rem] md:text-[0.8rem]">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2022 Your Website</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  WHO WE ARE
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  FOR ORGANIZATION
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  IMPACT REPORT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  IMPACT REPORT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
