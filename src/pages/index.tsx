import { WelcomeBanner } from "@/components/layout/WelcomeBanner";
import { StatCard } from "@/components/ui/StatCard";
import { NavigationCard } from "@/components/dashboard/NavigationCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { RecentPatients } from "@/components/dashboard/RecentPatients";

const cardsInfo = [
  {
    title: "Consultorios",
    icon: "/images/sprite.svg#consultorios-icon",
    number: 4,
    color: "text-blue-500",
  },
  {
    title: "Pacientes",
    icon: "/images/sprite.svg#pacientes-icon",
    number: 127,
    color: "text-green-500",
  },
  {
    title: "Cita esta semana",
    icon: "/images/sprite.svg#calendario-icon",
    number: 23,
    color: "text-violet-500",
  },
  {
    title: "Consultas hoy",
    icon: "/images/sprite.svg#clock-icon",
    number: 8,
    color: "text-red-500",
  },
];

const links = [
  {
    icon: "/images/sprite.svg#consultorios-icon",
    label: "Gestionar Consultorios",
    href: "/consultorios#consultorios",
  },
  {
    icon: "/images/sprite.svg#pacientes-icon",
    label: "Gestionar Pacientes",
    href: "/pacientes",
  },
  {
    icon: "/images/sprite.svg#calendario-icon",
    label: "Gestionar Citas",
    href: "/citas",
  },
  {
    icon: "/images/sprite.svg#plantillas-icon",
    label: "Gestionar Plantillas",
    href: "/plantillas",
  },
];

const index = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <WelcomeBanner
        doctorName="Dr. Mendoza"
        subtitle="Aqui tienes un resumen de tu actividad medica"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-4">
        <NavigationCard links={links} />
        <ActivityFeed />
      </div>
      <RecentPatients />
    </div>
  );
};

export default index;
