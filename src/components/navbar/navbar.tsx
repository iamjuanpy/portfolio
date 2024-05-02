import { NavbarLink } from "./navbar-link";
import { NavbarLogo } from "./navbar-logo";
import { NavbarMobile } from "./navbar-mobile";
import { ThemeToggler } from "./theme-toggler";

export const NavBar = () => {
  return (
    <div className="sticky bg-gray-100 dark:bg-gray-800 transition-colors left-0 right-0 top-0 z-[100] w-full shadow-lg">
      <div className="mx-auto h-20 p-4 flex items-center justify-between sm:container">
        <NavbarMobile />
        <NavbarLogo />
        <span className="hidden sm:block ml-auto">
          <NavbarLink link="/">home</NavbarLink>
          <NavbarLink link="/">about me</NavbarLink>
          <NavbarLink link="/">projects</NavbarLink>
        </span>
        <ThemeToggler></ThemeToggler>
      </div>
    </div>
  );
};
