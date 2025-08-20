import { AvatarUser } from "./AvatarUser";
import { Indicator } from "./Indicator";

interface ListItem {
  name: string;
  title?: string;
  date?: string;
  hours?: string;
  id?: string | number;
}

interface ListCardProps {
  items: ListItem[];
  avatar?: boolean;
  showHours?: boolean;
  showIndicator?: boolean;
  indicatorColor?: string;
  otherClassName?: string;
  size?: string;
  bgColor?: string;
  linkTo?: string;
}

export const ListCard: React.FC<ListCardProps> = ({
  items,
  showHours = true,
  showIndicator = true,
  indicatorColor = "bg-[var(--primary-color)]",
  avatar = false,
  otherClassName = "",
  bgColor,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={item.id || item.name || index}
          className={`flex items-center space-x-3 p-3 ${bgColor} rounded-lg`}
        >
          {avatar && <AvatarUser name={item.name} />}

          {showIndicator && <Indicator indicatorColor={indicatorColor} />}
          <div className="flex-1">
            {item.title && <p className="text-sm font-medium">{item.title}</p>}
            <p className={otherClassName}>{item.name}</p>
            {item.date && <p className="text-sm text-gray-500">{item.date}</p>}
          </div>
          {showHours && item.hours && (
            <div className="text-xs text-gray-500">{item.hours}</div>
          )}
        </div>
      ))}
    </>
  );
};
