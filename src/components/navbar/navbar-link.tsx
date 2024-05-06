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
      className="m-auto cursor-pointer"
      to={to}
      onClick={onClick}
      smooth={true}
      offset={-150}
    >
      <span className="text-zinc-800 dark:text-zinc-100 transition-color font-medium hover:font-bold p-2 select-none">
        {children}
      </span>
    </Link>
  );
};
