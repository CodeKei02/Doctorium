import { StatCard } from "../ui/StatCard";
import { MedicalSpacesCard } from "../layout/MedicalSpacesCard";

const info = [
  {
    title: "Total Reservas",
    number: "105",
    text: "Todas las reservas registradas",
    svg: "/images/sprite.svg#calendario-icon",
  },
  {
    title: "Este Mes",
    number: "35",
    text: "Reservas en diciembre",
    svg: "/images/sprite.svg#trending-up-icon",
  },
  {
    title: "Consultorios activos",
    number: "3",
    text: "De 4 consultorios",
    svg: "/images/sprite.svg#consultorios-icon",
  },
  {
    title: "Promedio Pacientes",
    number: "5.6",
    text: "Pacientes por día",
    svg: "/images/sprite.svg#pacientes-icon",
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
            children={<p className="text-xs text-gray-600">{card.text}</p>}
            icon={card.svg}
            color="text-gray-600"
          />
        ))}
      </div>
      <MedicalSpacesCard />
    </div>
  );
};
