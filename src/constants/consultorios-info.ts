import { MuiIconName } from "@/components/ui/MuiIcon";

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

export { info };
