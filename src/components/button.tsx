import { ReactNode } from "react";

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  coloured?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
  coloured,
}) => {
  const background = coloured
    ? "bg-lime-500 hover:bg-lime-400"
    : "hover:bg-zinc-300 hover:dark:bg-zinc-900";

  const text = "text-zinc-100 dark:text-zinc-800";

  return (
    <button
      className={`flex w-fit h-fit p-2 rounded-md ${background} ${text} transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
