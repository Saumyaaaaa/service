import Services from "./Service";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center bg-white p-4 ">
        <div className="navbar-brand text-lg font-bold flex items-center font-['Exo']">
          <img src="/metalogo.png" alt="MetaLogic" className="h-12 w-12 mr-2" />
          <h1 className="__className_1e998c flex text-3xl font-bold tracking-widest text-primary  text-blue-950">
            <span>Meta</span>
            <span>Logic</span>
          </h1>
        </div>
        <ul className="flex list-none gap-4">
          <li className="nav-item ">
            <a href="/home" className="font-bold text-gray-800 font-inter">
              Home
            </a>
          </li>
          <li className="nav-item">
            <Services /> {/* Render the Services component */}
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
