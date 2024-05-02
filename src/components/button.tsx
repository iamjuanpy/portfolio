import { ReactNode } from "react";

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <button
      className={`flex w-fit h-fit p-2 rounded-md hover:bg-gray-200 hover:dark:bg-gray-900 transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
