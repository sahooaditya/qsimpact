const Footer = () => {
  return (
    <footer className="bg-yellow-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2022 Your Website</p>
          </div>
          <div>
            <ul className="flex flex-wrap md:flex-nowrap lg:space-x-6 md:space-x-4">
              <li className="w-1/2 md:w-auto">
                <a href="#" className="text-xs hover:text-gray-300">
                  WHO WE ARE
                </a>
              </li>
              <li className="w-1/2 md:w-auto">
                <a href="#" className="text-xs hover:text-gray-300">
                  FOR ORGANIZATION
                </a>
              </li>
              <li className="w-1/2 md:w-auto">
                <a href="#" className="text-xs hover:text-gray-300">
                  IMPACT REPORT
                </a>
              </li>
              <li className="w-1/2 md:w-auto">
                <a href="#" className="text-xs hover:text-gray-300">
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
