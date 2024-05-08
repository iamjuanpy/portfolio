type ProjectTagProps = {
  value: string;
};

export const ProjectTag: React.FC<ProjectTagProps> = ({ value }) => {
  return (
    <span className="text-sm bg-lime-600 rounded-lg text-zinc-100 dark:text-zinc-800 px-2 select-none">
      {value}
    </span>
  );
};
