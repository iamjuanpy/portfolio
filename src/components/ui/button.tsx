import { ReactNode } from "react";

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  coloured?: boolean;
  fullSize?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
  coloured,
  fullSize,
}) => {
  const background = coloured
    ? "bg-lime-600 hover:bg-lime-500"
    : "hover:bg-zinc-300 hover:dark:bg-zinc-900";

  const text = "text-zinc-100 dark:text-zinc-800";

  return (
    <button
      className={`flex justify-center ${
        fullSize ? "w-full" : "w-fit"
      } h-fit p-2 rounded-md ${background} ${text} transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
