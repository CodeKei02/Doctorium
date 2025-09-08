import ConsultorioForm from "@/components/dashboard/ConsultorioForm";
import { v4 as uuidv4 } from "uuid";

const NuevoConsultorio = () => {
  const initialState = {
    id: uuidv4(),
    name: "",
    address: "",
    street: "",
    indication: "",
    country_code: "",
    phone: "",
    duration: "",
  };
  return <ConsultorioForm initialState={initialState} />;
};

export default NuevoConsultorio;
