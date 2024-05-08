import { ReactNode } from "react";

type ContactCardProps = {
  icon: ReactNode;
  service: string;
  user: string;
  link: string;
};

export const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  service,
  user,
  link,
}) => {
  return (
    <a
      className="flex flex-row rounded-md gap-2 p-2 bg-lime-600 w-screen max-w-[350px] hover:bg-lime-500 m-auto"
      href={link}
      target="_blank"
    >
      <div className="text-zinc-100 dark:text-zinc-800 fill-current stroke-current transition-colors">
        {icon}
      </div>
      <div className="flex flex-col text-zinc-100 dark:text-zinc-800 select-none">
        {service}
        <b className={`text-zinc-50 dark:text-zinc-800 text-lg`}>{user}</b>
      </div>
    </a>
  );
};
