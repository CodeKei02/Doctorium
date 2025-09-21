import { WelcomeBanner } from "@/components/layout/WelcomeBanner";
import { StatCard } from "@/components/ui/StatCard";
import { NavigationCard } from "@/components/dashboard/NavigationCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { RecentPatients } from "@/components/dashboard/RecentPatients";
import { MuiIconName } from "@/components/ui/MuiIcon";

const cardsInfo: Array<{
  title: string;
  icon: MuiIconName;
  number: number;
  color: string;
}> = [
  {
    title: "Consultorios",
    icon: "Business",
    number: 4,
    color: "text-blue-500",
  },
  {
    title: "Pacientes",
    icon: "PeopleAlt",
    number: 127,
    color: "text-green-500",
  },
  {
    title: "Cita esta semana",
    icon: "CalendarMonth",
    number: 23,
    color: "text-violet-500",
  },
  {
    title: "Consultas hoy",
    icon: "AccessAlarm",
    number: 8,
    color: "text-red-500",
  },
];

const links: Array<{ icon: MuiIconName; label: string; href: string }> = [
  {
    icon: cardsInfo[0].icon,
    label: "Gestionar Consultorios",
    href: "/consultorios#consultorios",
  },
  {
    icon: cardsInfo[1].icon,
    label: "Gestionar Pacientes",
    href: "/pacientes",
  },
  {
    icon: cardsInfo[2].icon,
    label: "Gestionar Citas",
    href: "/calendario",
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
