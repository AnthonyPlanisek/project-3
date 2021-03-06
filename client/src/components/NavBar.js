import React from "react";
import plantrlogo from '../assets/images/plantrlogo.svg';
import mySvg from '../assets/images/navpattern.svg';
import tripic from '../assets/images/backgroundTri.svg';



export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className=" sticky top-0 z-50 flex flex-wrap w-auto items-center justify-between px-2 py-3 bg-nvbg  bg- mb-3" style={{ backgroundImage: `url(${mySvg})` }} >
       <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl font-bold leading-relaxed inline-block ml-0 mr-4 py-2 whitespace-nowrap uppercase text-secondary"
              href="/"
            >
            <img className="img-responsive w-60  mt-2" src={plantrlogo} alt="logo"/>
            </a>
            <button
              className=" text-black cursor-pointer  shadow-md  leading-none h-2  mt-4 border-secondary  bg-white rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img className="w-10 h-10 border-2 border-secondary rounded"  src={tripic} alt="logo"/>
             
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
                  className="px-3 mt-2 py-2 flex items-center text-s  font-bold  font-poppins leading-snug text-black hover:opacity-75"
                  href="/"
                >
                  <i className=" text-lg leading-lg text-dark opacity-75"></i><span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 mt-2 flex items-center text-s  font-bold  font-poppins leading-snug text-black hover:opacity-75"
                  href="/productivity"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-dark opacity-75"></i><span className="ml-2">Start Planning</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 mt-2 flex items-center text-s  font-bold  font-poppins leading-snug text-black hover:opacity-75"
                  href="/signup"
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