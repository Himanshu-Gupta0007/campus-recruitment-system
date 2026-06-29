import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Companies", href: "#" },
  { label: "Students", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-blue-800 shadow-xl"
          : "bg-gradient-to-r from-blue-700 to-indigo-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 flex-shrink-0 group"
            aria-label="Campus Recruitment — home"
          >
            <div className="bg-white text-blue-700 font-bold w-10 h-10 rounded-full flex items-center justify-center text-sm tracking-tight select-none group-hover:scale-105 transition-transform duration-200">
              CR
            </div>
            <div className="leading-tight">
              <p className="text-white font-bold text-lg leading-5">
                Campus Recruitment
              </p>
              <p className="text-blue-200 text-xs">
                Connecting Talent with Opportunity
              </p>
            </div>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setActive(label)}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    active === label
                      ? "text-yellow-300"
                      : "text-white hover:text-yellow-300"
                  }`}
                  aria-current={active === label ? "page" : undefined}
                >
                  {label}
                  {/* Active underline indicator */}
                  {active === label && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-yellow-300 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="border border-white/70 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-white hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white transition-all duration-200"
              onClick={() => alert("Login")}
            >
              Log in
            </button>
            <button
              className="bg-yellow-400 text-gray-900 text-sm font-semibold px-5 py-2 rounded-lg hover:bg-yellow-300 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-300 transition-all duration-200"
              onClick={() => alert("Register")}
            >
              Register
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-white/10 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>

        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="bg-blue-800 border-t border-white/10 px-4 pt-2 pb-4 space-y-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => {
                setActive(label);
                setMenuOpen(false);
              }}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                active === label
                  ? "bg-white/10 text-yellow-300"
                  : "text-white hover:bg-white/10 hover:text-yellow-300"
              }`}
              aria-current={active === label ? "page" : undefined}
            >
              {label}
            </a>
          ))}

          {/* Mobile CTA buttons */}
          <div className="pt-3 flex flex-col gap-2">
            <button
              className="w-full border border-white/60 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-200"
              onClick={() => alert("Login")}
            >
              Log in
            </button>
            <button
              className="w-full bg-yellow-400 text-gray-900 text-sm font-semibold py-2.5 rounded-lg hover:bg-yellow-300 transition-all duration-200"
              onClick={() => alert("Register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;