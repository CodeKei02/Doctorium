import { WelcomeBanner } from "@/components/layout/WelcomeBanner";
import { StatCard } from "@/components/ui/StatCard";
import { NavigationCard } from "@/components/dashboard/NavigationCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { RecentPatients } from "@/components/dashboard/RecentPatients";

const cardsInfo = [
  {
    title: "Consultorios",
    icon: "./images/sprite.svg#consultorios-icon",
    number: 4,
    color: "text-blue-500",
  },
  {
    title: "Pacientes",
    icon: "./images/sprite.svg#pacientes-icon",
    number: 127,
    color: "text-green-500",
  },
  {
    title: "Cita esta semana",
    icon: "./images/sprite.svg#calendario-icon",
    number: 23,
    color: "text-violet-500",
  },
  {
    title: "Consultas hoy",
    icon: "./images/sprite.svg#clock-icon",
    number: 8,
    color: "text-red-500",
  },
];

const index = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <WelcomeBanner
        doctorName="Dr. Mendoza"
        subtitle="Aqui tienes un resumen de tu actividad medica"
      />
      {cardsInfo.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          number={card.number}
          icon={card.icon}
          trend={{
            percentage: 12,
            label: "vs mes anterior",
          }}
          color={card.color}
        />
      ))}
      <NavigationCard />
      <ActivityFeed />
      <RecentPatients />
    </div>
  );
};

export default index;
