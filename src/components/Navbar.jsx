import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Resume stays hidden by default so casually sharing this link (e.g.
  // on LinkedIn) doesn't expose a public download. Only appears when
  // the URL includes ?resume=true — use that version of the link
  // specifically when a job portal asks for a portfolio URL.
  const showResume = new URLSearchParams(location.search).get("resume") === "true";
  const visibleNavLinks = navLinks.filter((nav) => nav.id !== "resume" || showResume);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (nav) => {
    setActive(nav.title);
    if (nav.url) {
      window.open(nav.url, '_blank');
    }
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      {/* Pinned to the true left edge of the viewport, independent of
          the centered max-w-7xl content below — so it sits at the
          actual screen corner on wide screens instead of wherever the
          centered container's edge happens to fall. */}
      <Link
        to={{ pathname: "/", search: location.search }}
        aria-label='Back to landing page'
        className='absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-secondary hover:text-white transition-colors duration-200 text-[16px] leading-none z-30'
      >
        ←
      </Link>

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to={{ pathname: "/home", search: location.search }}
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Eronic &nbsp;
            <span className='sm:block hidden'> | Portfolio</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row items-center gap-10'>
          {visibleNavLinks.map((nav) =>
            // Resume is an external action (opens a PDF), not a scroll
            // target — styled as a pill button so it visually reads as
            // "do a thing" rather than "jump to a section".
            nav.url ? (
              <li key={nav.id}>
                <button
                  onClick={() => handleNavClick(nav)}
                  className='border border-[#BB86FC] text-[#BB86FC] hover:bg-[#BB86FC] hover:text-primary transition-colors duration-200 text-[14px] font-semibold px-5 py-2 rounded-full'
                >
                  {nav.title}
                </button>
              </li>
            ) : (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => handleNavClick(nav)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            )
          )}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {visibleNavLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    handleNavClick(nav);
                  }}
                >
                  {nav.url ? (
                    <span>{nav.title}</span>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
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