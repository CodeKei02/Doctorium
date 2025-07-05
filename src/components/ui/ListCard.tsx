import { Avatar } from "./Avatar";
import { Card } from "./Card";
import { Indicator } from "./Indicator";

interface ListItem {
  name: string;
  title?: string;
  date?: string;
  hours?: string;
  id?: string | number;
}

interface ListCardProps {
  title: string;
  items: ListItem[];
  avatar?: boolean;
  showHours?: boolean;
  showIndicator?: boolean;
  indicatorColor?: string;
  className?: string;
  otherClassName?: string;
  size?: string;
  bgColor?: string;
}

export const ListCard: React.FC<ListCardProps> = ({
  title,
  items,
  showHours = true,
  showIndicator = true,
  indicatorColor = "bg-[var(--primary-color)]",
  className = "",
  avatar = false,
  otherClassName = "",
  size,
  bgColor,
}) => {
  return (
    <Card>
      <h3 className="text-2xl font-semibold leading-none tracking-tight">
        {title}
      </h3>
      <div className={`space-y-4 mt-5 ${className}`}>
        {items.map((item, index) => (
          <div
            key={item.id || item.name || index}
            className={`flex items-center space-x-3 p-3 ${bgColor} rounded-lg`}
          >
            {avatar && <Avatar name={item.name} size={size} />}

            {showIndicator && <Indicator indicatorColor={indicatorColor} />}
            <div className="flex-1">
              {item.title && (
                <p className="text-sm font-medium">{item.title}</p>
              )}
              <p className={otherClassName}>{item.name}</p>
              {item.date && (
                <p className="text-sm text-gray-500">{item.date}</p>
              )}
            </div>
            {showHours && item.hours && (
              <div className="text-xs text-gray-500">{item.hours}</div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};
