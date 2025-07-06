import { Headline } from "../ui/Headline";
import { CompanyList } from "../dashboard/CompanyList";
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
