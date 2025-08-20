import { Card } from "@/components/ui/Card";
import { ListCard } from "@/components/ui/ListCard";
import { useMemo } from "react";

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
  const recentlyActivity = useMemo(() => {
    return activity.map((item) => ({
      ...item,
      hours: item.hours.replace("Hace", "Hace aproximadamente"),
    }));
  }, []);
  return (
    <Card style="mt-4 border border-gray-200 rounded-lg p-4">
      <h3 className="mb-4 text-2xl font-semibold leading-none tracking-tight">
        Actividad Reciente
      </h3>
      <ListCard
        items={recentlyActivity}
        showHours={true}
        showIndicator={true}
        otherClassName="text-xs text-gray-600"
        bgColor="bg-gray-100 mt-2"
      />
    </Card>
  );
};
