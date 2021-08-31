import React from "react";
import plantrlogo from './plantrlogo.svg';
import mySvg from './navpattern.svg';


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-nvbg shadow-lg mb-3" style={{ backgroundImage: `url(${mySvg})` }} >
       <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl font-bold leading-relaxed inline-block ml-0 mr-4 py-2 whitespace-nowrap uppercase text-secondary"
              href="#pablo"
            >
            <img className="img-responsive w-60  mt-4" src={plantrlogo} alt="logo"/>
            </a>
            <button
              className="fa-f text-black cursor-pointer mt-2 shadow-md text-xl leading-none px-4 w-10 h-10 py-1  bg-white border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 mt-4 py-2 flex items-center text-s  font-bold  font-poppins leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className=" text-lg leading-lg text-dark opacity-75"></i><span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 mt-4 flex items-center text-s  font-bold  font-poppins leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-dark opacity-75"></i><span className="ml-2">Learn More</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 mt-4 flex items-center text-s  font-bold  font-poppins leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-dark opacity-75"></i><span className="ml-2">Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
