import { ListCard } from "../ui/ListCard";

const activity = [
  {
    title: "Cita Agendada",
    name: "Maria Rodriguez",
    hours: "Hace 2 horas",
  },
  {
    title: "Consulta completada",
    name: "Carlos Mendoza",
    hours: "Hace 3 horas",
  },
  {
    title: "Receta generada",
    name: "Ana Garcia",
    hours: "Hace 5 horas",
  },
];

export const ActivityFeed = () => {
  return (
    <ListCard
      title="Actividad Reciente"
      items={activity}
      showHours={true}
      showIndicator={true}
      otherClassName="text-xs text-gray-600"
      bgColor="bg-gray-100"
    />
  );
};
