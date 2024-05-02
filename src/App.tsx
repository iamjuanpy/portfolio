import useTheme from "./hooks/use-theme";
import { NavBar } from "./components/navbar/navbar";

export const App = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <NavBar></NavBar>
    </div>
  );
};
