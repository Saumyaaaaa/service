

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center bg-white p-4 shadow-md">
        <div className="navbar-brand text-lg font-bold flex items-center font-['Exo']">
          <img
            src="/metalogo.png"
            alt="MetaLogic"
            className="h-12 w-12 mr-2"
          ></img>
          MetaLogic
        </div>
        <ul className="flex list-none gap-4">
          <li className="nav-item ">
            <a href="/home" className="font-bold text-gray-800 font-inter">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/services" className="font-bold text-gray-800 font-inter">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="/career" className="font-bold text-gray-800 font-inter">
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
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded cursor-pointer bg-red-500 text-white">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
