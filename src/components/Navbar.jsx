import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]); 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 bg-white"
          : "opacity-0 -translate-y-full bg-white"
      }`}
      style={{ backdropFilter: visible ? "blur(8px)" : "none" }}
    >
      <div className="flex justify-between items-center p-4">
        <div className="navbar-brand text-lg font-bold flex items-center font-['Exo']">
          <img src="/metalogo.png" alt="MetaLogic" className="h-12 w-12 mr-2" />
          <h1 className="flex text-3xl font-bold tracking-widest text-primary text-blue-950">
            <span>Meta</span>
            <span>Logic</span>
          </h1>
        </div>
        <div className="hidden md:flex list-none gap-6">
          {/* Hide on small screens */}
          <ul className="flex space-x-6">
            {/* Ensure horizontal layout for large screens */}
            <li className="nav-item">
              <a href="/home" className="font-bold text-gray-800 font-Inter">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/service" className="font-bold text-gray-800 font-Inter">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a href="/career" className="font-bold text-gray-800 font-Inter">
                Career
              </a>
            </li>
            <li className="nav-item">
              <a href="/blogs" className="font-bold text-gray-800 font-inter">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="font-bold text-gray-800 font-inter">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          {/* Show "Get in Touch" button on large screens */}
          <button className="px-4 py-2 rounded cursor-pointer bg-red-500 text-white hidden md:block">
            Get in Touch
          </button>
          {/* Show menu icon on small screens */}
          <div className="md:hidden">
            {showMenu ? (
              <RxCross1
                onClick={toggleMenu}
                className="text-blue-950 cursor-pointer text-3xl"
              />
            ) : (
              <AiOutlineMenu
                onClick={toggleMenu}
                className="text-blue-950 cursor-pointer text-3xl"
              />
            )}
          </div>
        </div>
      </div>
      {/* Menu for small screens */}
      {showMenu && (
        <div className="md:hidden bg-white p-4">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="/home" className="font-bold text-gray-800 font-Inter">
                Home
              </a>
            </li>
            <li>
              <a href="/service" className="font-bold text-gray-800 font-Inter">
                Service
              </a>
            </li>
            <li>
              <a href="/career" className="font-bold text-gray-800 font-Inter">
                Career
              </a>
            </li>
            <li>
              <a href="/blogs" className="font-bold text-gray-800 font-inter">
                Blogs
              </a>
            </li>
            <li>
              <a href="/about" className="font-bold text-gray-800 font-inter">
                About Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
