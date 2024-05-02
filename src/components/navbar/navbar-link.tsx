import { ReactNode } from "react";

type NavbarLinkProps = {
  link: string;
  onClick?: () => void;
  children?: ReactNode;
};

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  link,
  onClick,
  children,
}) => {
  return (
    <a className="m-auto" href={link} onClick={onClick}>
      <span className="text-gray-800 dark:text-gray-100 transition-color font-semibold hover:font-bold p-2">
        {children}
      </span>
    </a>
  );
};
