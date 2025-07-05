import { ListCard } from "../ui/ListCard";

const patients = [
  {
    name: "María Elena Rodriguez",
    date: "Proxima cita: 21 Jun",
  },
];

export const RecentPatients = () => {
  return (
    <ListCard
      title="Acceso Rápido a Pacientes"
      items={patients}
      showHours={false}
      showIndicator={false}
      avatar={true}
      otherClassName="font-medium"
      size="10"
      bgColor="border border-gray-200"
    />
  );
};
