import { Headline } from "@/components/ui/Headline";
import { CompanyList } from "@/components/dashboard/CompanyList";
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
      <CompanyList />
    </>
  );
};
