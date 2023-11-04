import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navLinks, services } from "../constants";
import { logo, menu, close } from "../assets";
// import { DropdownContext } from "../contexts/DropdownContext";
import { useDropdownContext } from "../contexts/DropdownContext";
import GoToTop from "./GoToTop";

const Navbar = () => {
  // const navigate = useNavigate();

  const { dropdownOpen, setDropdownOpen } = useDropdownContext()
  
  const [submenu, setSubmenu] = useState("");
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [navOpacity, setNavOpacity] = useState("bg-opacity-0");

  let navLinkRef = useRef();
  let mobileNavLinkRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchend", handleMobileMenuDropdown)
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchend", handleMobileMenuDropdown)
    };
  });

  const handleMobileMenuDropdown = (e) => {
    if (!mobileNavLinkRef.current.contains(e.target)){
      setToggle(false);
    }
  }

  const handleScroll = () => {
    if (window.scrollY) {
      setNavOpacity("bg-opacity-50 backdrop-filter backdrop-blur-sm");
    }
    if (window.scrollY == 0.0) {
      setNavOpacity("bg-opacity-0");
    }
  };

  return (
    <nav
    ref={navLinkRef}
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-[#293e6b] ${navOpacity}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            width={125}
            height={95}
            className=" object-contain mt-0 pt-0"
          />
        </Link>
        <ul ref={navLinkRef} className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-[#0ef] underline underline-offset-8"
                  : "text-white"
              } text-[14px] font-medium cursor-pointer hover:text-[#0ef] hover:underline hover:underline-offset-8`}
              onClick={() => {setActive(link.title)}}
            >
              <NavLink
                ref={navLinkRef}
                to={`/${link.id}`}
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "text-white underline underline-offset-8" : ""
                }
                onClick={() => {
                  link.title == "Services"
                    ? setDropdownOpen(!dropdownOpen)
                    : setDropdownOpen(false);
                  GoToTop();
                }}
                onMouseOver={() => {
                  link.title == "Services"
                    ? setDropdownOpen(!dropdownOpen)
                    : setDropdownOpen(false);
                }}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* For Mobile Screens */}
        <div ref={mobileNavLinkRef} className="flex lg:hidden flex-1 justify-end items-center z-23 inset-0">
          <img
            // src={toggle? close : menu}
            src={menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setSubmenu("");
              setToggle(!toggle);
            }}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient bg-slate-200 form-shadow absolute top-20 right-0 mx-4 my-2 w-[60vw] text-left justify-start rounded-xl z-200`}
          >
            <ul className="list-none flex flex-col justify-start items-left gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-[#0ef]" : "text-black"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    link.title == "Services"
                      ? setSubmenu("")
                      : setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  {/* <Link onClick={() => navigate(`/${link.id}`)}> */}
                  <NavLink to={`/${link.id}`}>
                    {link.title}
                  </NavLink>
                  {link.title == "Services" && active
                    ? services.map((service) => (
                        <ul
                          key={service.id}
                          className={`${
                            active === link.title
                              ? "text-[#0ef] font-bold"
                              : "text-white hidden"
                          } font-poppins font-medium cursor-pointer pl-[10px] py-[5px] text-black ${submenu}`}
                          onClick={() => {
                            setSubmenu("hidden");
                            setToggle(false);
                            setActive(services.title);
                            console.log(toggle);
                          }}
                        >
                          <NavLink
                            to={`/${service.id}`}
                            onClick={() => setToggle(!toggle)}
                            className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "text-[#0ef] font-bold" : ""
                }
                          >
                            {service.title}
                          </NavLink>
                        </ul>
                      ))
                    : ""}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
