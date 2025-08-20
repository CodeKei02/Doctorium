import { StatCard } from "@/components/ui/StatCard";
import { MedicalSpacesCard } from "@/components/layout/MedicalSpacesCard";
import { MuiIconName } from "../ui/MuiIcon";

const info: Array<{
  title: string;
  number: string;
  text: string;
  icon: MuiIconName;
}> = [
  {
    title: "Total Reservas",
    number: "105",
    text: "Todas las reservas registradas",
    icon: "CalendarMonth",
  },
  {
    title: "Este Mes",
    number: "35",
    text: "Reservas en diciembre",
    icon: "TrendingUp",
  },
  {
    title: "Consultorios activos",
    number: "3",
    text: "De 4 consultorios",
    icon: "Business",
  },
  {
    title: "Promedio Pacientes",
    number: "5.6",
    text: "Pacientes por día",
    icon: "PeopleAlt",
  },
];
export const ConsultoriosOverview = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {info.map((card) => (
          <StatCard
            key={card.title}
            title={card.title}
            number={Number(card.number)}
            icon={card.icon}
          >
            <p className="text-xs text-gray-600">{card.text}</p>
          </StatCard>
        ))}
      </div>
      <MedicalSpacesCard />
    </div>
  );
};
