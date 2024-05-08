import { ProjectTag } from "./project-tag";
import { Button } from "../../ui/button";

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  tags: string[];
  code?: string;
  deploy?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  tags,
  code,
  deploy,
}) => {
  return (
    <div className="flex flex-col rounded-md border-zinc-400 dark:border-zinc-800 border w-fit shadow-xl gap-4 p-4 transition-colors">
      <img
        className={`rounded-md aspect-video md:max-h-[225px] w-full bg-no-repeat object-cover`}
        src={image}
      />
      <p className="text-xl font-bold text-center text-zinc-800 dark:text-zinc-100">
        {title}
      </p>
      <span className="flex gap-1">
        {tags.map((tag) => (
          <ProjectTag value={tag} />
        ))}
      </span>
      <p className="text-wrap sm:text-lg text-zinc-800 dark:text-zinc-100 transition-colors">
        {description}
      </p>
      <div className="flex flex-col h-full gap-2">
        {code && (
          <a className="mt-auto" href={code} target="_blank">
            <Button className="font-bold" coloured fullSize>
              Code
            </Button>
          </a>
        )}
        {deploy && (
          <a href={deploy} target="_blank">
            <Button className="font-bold" coloured fullSize>
              Deploy
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};
