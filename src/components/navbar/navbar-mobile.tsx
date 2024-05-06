import { useState } from "react";
import { Button } from "../button";
import { NavbarLink } from "./navbar-link";

export const NavbarMobile: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  //   useEffect(() => {
  //     function handleClickOutside(event: MouseEvent | TouchEvent) {
  //       if (navRef !== null) {
  //         if (!navRef.current?.contains(event.target as Node)) {
  //           setOpen(false);
  //         }
  //       }
  //     }

  //     document.addEventListener("touchstart", handleClickOutside);
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("touchstart", handleClickOutside);
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [navRef]);

  return (
    <>
      <Button className="sm:hidden" onClick={toggleMenu}>
        <svg
          className="h-6 w-6 text-zinc-800 dark:text-zinc-100 stroke-current fill-current transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="none"
        >
          {open ? (
            <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z" />
          ) : (
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          )}
        </svg>
      </Button>
      {open && (
        <nav className="absolute sm:hidden left-0 right-0 top-20 z-[99] w-screen p-2 flex flex-col justify-center gap-2 border-t-2 bg-zinc-100 dark:bg-zinc-800 transition-all animate-fade-in-down animate-duration-slower">
          <NavbarLink to="home" onClick={toggleMenu}>
            home
          </NavbarLink>
          <NavbarLink to="about" onClick={toggleMenu}>
            about me
          </NavbarLink>
          <NavbarLink to="projects" onClick={toggleMenu}>
            projects
          </NavbarLink>
          <NavbarLink to="contact" onClick={toggleMenu}>
            contact me
          </NavbarLink>
        </nav>
      )}
    </>
  );
};
