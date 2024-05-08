import { Link } from "react-scroll";
import { Button } from "../ui/button";
import { HighlightedText } from "../ui/higlighted-text";
import { HomeBackground } from "../ui/home-background";

export const Home = () => {
  return (
    <section id="home" className="overflow-hidden relative">
      <HomeBackground />
      <div className="flex flex-col p-4 pb-8 sm:px-0 gap-4 m-auto h-screen max-h-[42rem] sm:container">
        <h1 className="text-5xl sm:text-6xl text-zinc-800 dark:text-zinc-100 transition-colors animate-fade-in-right animate-duration-700">
          Hello,
        </h1>
        <h1 className="text-5xl sm:text-6xl text-zinc-800 dark:text-zinc-100 transition-colors animate-fade-in-right animate-duration-700 animate-delay-100">
          I am <HighlightedText>Juan Pablo</HighlightedText>,
        </h1>
        <h1 className="text-5xl sm:text-6xl animate-fade-in-right animate-duration-700 animate-delay-150">
          <HighlightedText>Software Developer</HighlightedText>
        </h1>
        <div className="mt-auto flex flex-row pt-2 gap-4">
          <Link
            className="cursor-pointer"
            to={"contact"}
            smooth={true}
            offset={-150}
          >
            <Button
              className="p-4 font-semibold animate-fade-in animate-duration-slower animate-delay-400"
              coloured
            >
              Contact Me
            </Button>
          </Link>
          <a href="/CV Sumski.pdf" target="_blank">
            <Button
              className="p-4 font-semibold animate-fade-in animate-duration-slower animate-delay-500"
              coloured
            >
              Download Resumee
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
