import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ fixed}) {
  const [menuOpen, setMenuOpen] = React.useState(false);
    return (
      <>
    
      <div className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#6182af] rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <Link to={"/Home"}>
                <a
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                  href="#pablo"
                >
                  <span className='flex items-center justify-center '><FontAwesomeIcon icon={faHospital} size='3x' color='#193152'/></span>
                </a></Link>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                  <Link to={"/patients"}>
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#"
                    >
                      patients
                    </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to={"/Visit"}>
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/Visit"
                    >
                      Visit
                    </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to={"/RDV"}>
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      RDV
                    </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to={"/Paiement"}>
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      paiement
                    </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                 
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      Profile
                    </a>
                    
                  </li>
                  <li className="nav-item">
                  
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      Settings
                    </a>
                   
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </> 
  );
}