import { Headline } from "../ui/Headline";
import { CustomerList } from "../dashboard/CustomerList";
export const MedicalSpacesCard = () => {
  return (
    <>
      <Headline
        title="Gestiona tus espacios de atención médica"
        links={[
          {
            linkTo: "/consultorios/nuevo",
            label: "Agregar consultorio",
          },
        ]}
      />
      <CustomerList />
    </>
  );
};
