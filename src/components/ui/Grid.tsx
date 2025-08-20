import { MuiIcon, MuiIconName } from "@/components/ui/MuiIcon";

const content = [
  {
    id: 0,
    icon: "CalendarMonth",
    color: "text-blue-500",
    label: "Total Reservas",
  },
  {
    id: 1,
    icon: "TrendingUp",
    color: "text-green-500",
    label: "Este mes",
  },
  {
    id: 2,
    icon: "Notifications",
    color: "text-orange-500",
    label: "Disponibles",
  },
  {
    id: 3,
    icon: "GroupsIcon",
    color: "text-purple-500",
    label: "Promedio/día",
  },
];

interface GridProps {
  items: string[] | number[];
}

export const Grid = ({ items }: GridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
      {content.map((item) => (
        <div className="flex items-center space-x-2" key={item.id}>
          <MuiIcon name={item.icon as MuiIconName} />
          <div>
            <p className="font-medium">{items[item.id]}</p>
            <p className="text-gray-500 xs">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
