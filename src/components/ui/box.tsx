import { ReactNode } from "react";

type BoxProps = {
  children?: ReactNode;
};
export const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className="rounded-md border-zinc-400 dark:border-zinc-800 border w-fit shadow-xl p-2 transition-colors">
      {children}
    </div>
  );
};
