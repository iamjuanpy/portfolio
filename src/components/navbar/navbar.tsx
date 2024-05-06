import { NavbarLink } from "./navbar-link";
import { NavbarLogo } from "./navbar-logo";
import { NavbarMobile } from "./navbar-mobile";
import { ThemeToggler } from "./theme-toggler";

export const NavBar = () => {
  return (
    <div className="sticky bg-zinc-100 dark:bg-zinc-800 transition-colors left-0 right-0 top-0 z-[100] w-full shadow-lg">
      <div className="mx-auto h-20 p-4 flex items-center justify-between sm:container">
        <NavbarMobile />
        <NavbarLogo />
        <nav className="hidden sm:block ml-auto">
          <NavbarLink to="home">home</NavbarLink>
          <NavbarLink to="about">about me</NavbarLink>
          <NavbarLink to="projects">projects</NavbarLink>
          <NavbarLink to="contact">contact me</NavbarLink>
        </nav>
        <ThemeToggler></ThemeToggler>
      </div>
    </div>
  );
};
