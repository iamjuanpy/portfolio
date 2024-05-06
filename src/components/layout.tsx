import { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-600 transition-colors">
      <div className="flex-1 pt-2 h-screen w-screen m-auto sm:container shadow-2xl">
        {children}
      </div>
    </div>
  );
};
