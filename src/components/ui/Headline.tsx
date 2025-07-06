import { Button } from "./Button";

export const Headline = ({
  title,
  links,
  style,
}: {
  title: string;
  links?: { linkTo: string; label: string }[];
  style?: string;
}) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div id="consultorios">
        <p className="text-gray-600 mb-2">{title}</p>
      </div>
      {links?.map((link, index: number) => (
        <Button
          key={index}
          others={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 text-white bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90 ${style}`}
          linkTo={link.linkTo}
        >
          {link.label}
        </Button>
      ))}
    </div>
  );
};
