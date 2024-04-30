import { ReactNode, createContext, useEffect, useState } from "react";

type ThemeProviderProps = {
  children?: ReactNode;
};
type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const getDefaultTheme = () => {
  const storedTheme = localStorage.getItem("darkMode");

  return storedTheme
    ? JSON.parse(storedTheme)
    : window.matchMedia("(prefers-color-scheme: dark)").matches
    ? true
    : false;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(getDefaultTheme());

  const toggleDarkMode = () => {
    setDarkMode((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    setDarkMode(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
