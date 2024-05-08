import useTheme from "../../hooks/use-theme";
import { Button } from "../ui/button";

export const ThemeToggler = () => {
  const { toggleDarkMode } = useTheme();
  return (
    <Button onClick={toggleDarkMode} accessName="Toggle Dark Mode">
      <svg
        className="scale-0 h-6 w-6 text-zinc-100 stroke-current transition-all dark:scale-100"
        fill="none"
        height="35"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      </svg>
      <svg
        className="absolute scale-100 h-6 w-6 text-zinc-800 stroke-current transition-all dark:scale-0"
        fill="none"
        height="35"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <circle cx="12" cy="12" r="4" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
      </svg>
    </Button>
  );
};
