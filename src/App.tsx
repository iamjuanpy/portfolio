import useTheme from "./hooks/use-theme";

export const App = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode}>{darkMode ? "Dark" : "Light"}</button>
  );
};
