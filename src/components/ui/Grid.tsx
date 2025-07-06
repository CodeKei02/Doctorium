const content = [
  {
    id: 0,
    icon: "calendario-icon",
    color: "text-blue-500",
    label: "Total Reservas",
  },
  {
    id: 1,
    icon: "trending-up-icon",
    color: "text-green-500",
    label: "Este mes",
  },
  {
    id: 2,
    icon: "clock-icon",
    color: "text-orange-500",
    label: "Disponibles",
  },
  {
    id: 3,
    icon: "users-icon",
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
          <svg className={`w-4 h-4 ${item.color}`}>
            <use href={`/images/sprite.svg#${item.icon}`} />
          </svg>
          <div>
            <p className="font-medium">{items[item.id]}</p>
            <p className="text-gray-500 xs">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
