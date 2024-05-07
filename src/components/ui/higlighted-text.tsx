import { ReactNode } from "react";

type HighlightedTextProps = {
  children?: ReactNode;
};

export const HighlightedText: React.FC<HighlightedTextProps> = ({
  children,
}) => {
  return <span className="text-lime-500 font-semibold">{children}</span>;
};
