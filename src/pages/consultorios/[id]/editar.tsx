import { v4 as uuidv4 } from "uuid";
import ConsultorioForm from "@/components/dashboard/ConsultorioForm";

const EditarConsultorio = () => {
  const initialState = {
    id: uuidv4(),
    name: "Clinica Caracas",
    address: "Calle Simon Bolivar",
    city: "Caracas",
    phone: "04123456789",
    telefonoConsultorio: "041234567890",
    direccionConsultorio: "Calle Simon Bolivar",
    indicacionesConsultorio: "Al lado de edificio",
  };
  return <ConsultorioForm initialState={initialState} />;
};

export default EditarConsultorio;
