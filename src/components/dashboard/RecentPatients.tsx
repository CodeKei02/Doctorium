import { Card } from "@/components/ui/Card";
import { ListCard } from "@/components/ui/ListCard";
import { Btn } from "@/components/ui/Button";

const patients = [
  {
    name: "María Elena Rodriguez",
    date: "Proxima cita: 21 Jun",
  },
];

export const RecentPatients = () => {
  return (
    <Card>
      <h3 className="mb-4 text-2xl font-semibold leading-none tracking-tight">
        Acceso Rápido a Pacientes
      </h3>
      <Btn linkTo="/pacientes/1">
        <ListCard
          items={patients}
          showHours={false}
          showIndicator={false}
          avatar={true}
          otherClassName="font-medium"
          size="10"
          bgColor="border border-gray-200"
        />
      </Btn>
    </Card>
  );
};
