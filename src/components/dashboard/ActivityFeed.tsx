import { Card } from "@/components/ui/Card";
import { ListCard } from "@/components/ui/ListCard";
import { useMemo } from "react";
import { activity } from "@/constants/pacients-info";

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
