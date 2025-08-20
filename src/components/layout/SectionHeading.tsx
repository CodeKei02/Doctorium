import { MuiIcon, MuiIconName } from "../ui/MuiIcon";

interface SectionHeadingProps {
  title: string;
  icon: MuiIconName;
  description: string;
}

export default function SectionHeading({
  title,
  icon,
  description,
}: SectionHeadingProps) {
  return (
    <div>
      <span className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
        <MuiIcon name={icon} />
        {title}
      </span>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
