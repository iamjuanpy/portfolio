import { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-600 transition-colors">
      <div className="flex-1 min-h-screen h-full">{children}</div>
    </div>
  );
};
