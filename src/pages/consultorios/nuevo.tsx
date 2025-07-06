import ConsultorioForm from "@/components/dashboard/ConsultorioForm";
import { v4 as uuidv4 } from "uuid";

const NuevoConsultorio = () => {
  const initialState = {
    id: uuidv4(),
    name: "",
    address: "",
    city: "",
    phone: "",
    telefonoConsultorio: "",
    direccionConsultorio: "",
    indicacionesConsultorio: "",
  };
  return <ConsultorioForm initialState={initialState} />;
};

export default NuevoConsultorio;
