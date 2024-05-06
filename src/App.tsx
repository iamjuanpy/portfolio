import useTheme from "./hooks/use-theme";
import { NavBar } from "./components/navbar/navbar";
import { Layout } from "./components/layout";
import { Footer } from "./components/footer";
import { Home } from "./components/sections/home";
import { AboutMe } from "./components/sections/about-me";
import { Projects } from "./components/sections/projects";
import { ContactMe } from "./components/sections/contact-me";

export const App = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`font-montserrat ${darkMode ? "dark" : ""}`}>
      <NavBar></NavBar>
      <Layout>
        <Home />
        <AboutMe />
        <Projects />
        <ContactMe />
      </Layout>
      <Footer></Footer>
    </div>
  );
};
