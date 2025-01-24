import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanding, setIsLanding] = useState(false); // Untuk kontrol animasi saat landing page

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Memicu animasi smooth muncul
    const timer = setTimeout(() => {
      setIsLanding(true);
    }, 500); // Delay kecil untuk memastikan animasi terlihat

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav
      className={`p-4 fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#FFFFF4]/50" : "bg-transparent"
      } transform transition-transform duration-700 ease-out ${
        isLanding ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo bagian kiri */}
        <div className="relative">
          <div className="flex flex-col font-montserrat">
            <span className="font-light">DAFFA</span>
            <div className="relative group cursor-pointer">
              <span className="relative mx-2 z-10 font-lato font-bold">
                HARDHAN
              </span>
              {/* <div className="absolute left-5 top-0 -translate-y-1/2 w-10 h-14 bg-[#FBDFDF] -z-10 group-hover:w-24 duration-300 ease-in-out"></div>*/}
            </div>
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          className="flex flex-col items-center justify-center space-y-1 text-[#FFFFF4] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-[#262626] transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          ></span>

          <span
            className={`block w-6 h-0.5 bg-[#262626] transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Menu Navigasi */}
        <ul
          className={`absolute top-20 right-0 w-full bg-[#FFFFF4]/50 text-[#222] shadow-xl rounded-b-md overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "roll-in" : "hidden"
          }`}
        >
          <li className="text-center border-b border-gray-300">
            <Link
              to="/"
              className="block py-4 px-6 text-xs font-normal font-lato hover:bg-[#FFEBE0] hover:bg-opacity-45 hover:font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li className="text-center border-b border-gray-300">
            <Link
              to="/about"
              className="block py-4 px-6 text-xs font-normal font-lato hover:bg-[#FFEBE0] hover:bg-opacity-45  hover:font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
          </li>
          <li className="text-center border-b border-gray-300">
            <Link
              to="/portofolio"
              className="block py-4 px-6 text-xs font-normal font-lato hover:bg-[#FFEBE0] hover:bg-opacity-45  hover:font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              PORTOFOLIO
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/contact"
              className="block py-4 px-6 text-xs font-normal font-lato hover:bg-[#FFEBE0] hover:bg-opacity-45  hover:font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
