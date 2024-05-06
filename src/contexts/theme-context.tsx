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

  return storedTheme ? JSON.parse(storedTheme) : false;
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

  return (
    <ThemeContext.Provider
      value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
