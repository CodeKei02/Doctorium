import { v4 as uuidv4 } from "uuid";
import ConsultorioForm from "@/components/dashboard/ConsultorioForm";

const EditarConsultorio = () => {
  const initialState = {
    id: uuidv4(),
    name: "Clinica Caracas",
    address: "Calle Simon Bolivar",
    city: "Caracas",
    phone: "04123456789",
    country: "Venezuela",
    country_code: "VE",
    street: "Calle Simon Bolivar",
    duration: "30",
    indication: "Al lado de edificio",
  };
  return <ConsultorioForm initialState={initialState} />;
};

export default EditarConsultorio;
