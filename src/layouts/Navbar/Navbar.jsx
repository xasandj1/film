import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { links } from "../../data";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const Show = () => {
    setShow((show) => !show);
  };

  return (
    <nav className="sticky top-0 left-0 w-full font-roboto border bg-color border-gray-900 nav z-10">
      <div className="container">
        <div className="flex items-center py-5 lg:py-8 justify-between flex-wrap lg:flex-row">
          <Link to="/" className="">
            <img
              src={images.logo}
              alt=""
              className="max-w-[100px] md:max-w-[160px] w-full"
            />
          </Link>
          <div className="screen-small">
            <button
              onClick={Show}
              className="flex items-center justify-center p-2 bg-[#81BECB] rounded-sm"
            >
              <AiOutlineMenu fontSize={25} color="white" />
            </button>
            {show && (
              <div className="screen-block fixed top-0 left-0 w-full h-full z-[100] flex items-center justify-center backdrop-blur-md">
                <button onClick={Show} className="absolute top-7 right-4 flex items-center justify-center p-2 bg-[#81BECB] rounded-sm">
                  <VscChromeClose fontSize={25} color="white" />
                </button>
                <div className="flex items-center justify-center">
                  <ul className="flex items-center flex-col">
                    {links.map(({ id, name, href }) => (
                      <li className="" key={id}>
                        <Link
                          to={href}
                          className="text-white inline-block py-4 hover:text-blue-300"
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <ul className="hidden md:flex items-center">
            {links.map(({ id, name, href }) => (
              <li className="" key={id}>
                <Link
                  to={href}
                  className="text-white link px-4 hover:text-blue-300"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <form className="lg:max-w-[400px] xl:max-w-2xl w-full mt-4 lg:mt-0">
            <div className="relative  ">
              <div className="flex absolute inset-y-0 right-5 items-center pl-3 pointer-events-none">
                <BsSearch className="text-white text-xl" />
              </div>
              <input
                type="search"
                id="default-search"
                className="rounded-3xl w-full border-2 p-4 text-xl bg-gray-900 border-gray-800 focus:ring-gray-800 focus:border-gray-800 text-white items-center flex"
                placeholder="Поиск по сайту"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
