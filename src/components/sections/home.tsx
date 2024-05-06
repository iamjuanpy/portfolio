import { Button } from "../button";

export const Home = () => {
  return (
    <section id="home" className="flex flex-row p-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl sm:text-6xl text-zinc-800 dark:text-zinc-100 transition-colors animate-fade-in-right animate-duration-700">
          Hello,
        </h1>
        <h1 className="text-5xl sm:text-6xl text-zinc-800 dark:text-zinc-100 transition-colors animate-fade-in-right animate-duration-700 animate-delay-100">
          I am <b className="text-lime-500 font-semibold">Juan Pablo</b>,
        </h1>
        <h1 className="text-5xl font-semibold sm:text-6xl text-lime-500 animate-fade-in-right animate-duration-700 animate-delay-150">
          Software Developer
        </h1>
        <div className="flex flex-row pt-2 gap-4">
          <Button
            className="p-4 font-medium animate-fade-in animate-duration-slower animate-delay-400"
            coloured
          >
            Contact Me
          </Button>
          <Button
            className="p-4 font-medium animate-fade-in animate-duration-slower animate-delay-500"
            coloured
          >
            Download my CV
          </Button>
        </div>
      </div>
      <p></p>
      <div></div>
    </section>
  );
};
