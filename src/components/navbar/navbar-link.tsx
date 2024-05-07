import { ReactNode } from "react";
import { Link } from "react-scroll";

type NavbarLinkProps = {
  to: string;
  onClick?: () => void;
  children?: ReactNode;
};

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  to,
  onClick,
  children,
}) => {
  return (
    <Link
      className="m-auto cursor-pointer text-zinc-800 dark:text-zinc-100 transition-color font-medium hover:text-zinc-600 dark:hover:text-zinc-300 p-2 select-none"
      to={to}
      onClick={onClick}
      smooth={true}
      offset={-150}
    >
      {children}
    </Link>
  );
};
