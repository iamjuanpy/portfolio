import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="flex flex-col p-4 py-8 sm:px-0 m-auto sm:container gap-4">
        <h1 className="text-5xl font-semibold sm:text-6xl text-lime-600 text-center animate-fade-in-down animate-duration-700 animate-delay-800 w-full">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-auto py-8">
          <ProjectCard
            title="pomJS"
            image="/pom.png"
            description="Web Templating Language and Engine for React, developed as my Computer Science Degree Thesis as a simplier and easier to use alternative to JSX inspired by VueJS templating system and its directives."
            tags={["javascript", "react", "vue", "templating", "languages"]}
            code="https://github.com/iamjuanpy/pomjs"
          />
          <ProjectCard
            title="TuCasaca Store"
            image="/tucasacafront.png"
            description="Website for Football Jerseys' Store. Developed in React as a group project for a college course, using Tailwind CSS and following Responsive Design Principles and Accessibility W3C fundamentals for better user experience."
            tags={["javascript", "react", "tailwind"]}
            code="https://github.com/iamjuanpy/tucasaca-frontend"
            deploy="https://tucasaca-js.vercel.app/"
          />
          <ProjectCard
            title="TuCasaca CRUD/API"
            image="/tucasacaback.png"
            description="CRUD Website and API for Football Jerseys' Store management. Developed in Laravel PHP as a group project for a college course, practicing and learning not only about web development's basics and Laravel framework but also API design, authentication, payment authorizations, deployment and version control."
            tags={["php", "laravel", "postgres", "REST"]}
            code="https://github.com/iamjuanpy/tucasaca-backend"
            deploy="https://tucasaca-laravel.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
};
