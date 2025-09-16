import { v4 as uuidv4 } from "uuid";
import ConsultorioForm from "@/components/dashboard/ConsultorioForm";

const EditarConsultorio = () => {
  const initialState = {
    id: uuidv4(),
    name: "",
    address: "",
    city: "",
    phone: "",
    country: "",
    country_code: "",
    street: "",
    duration: "",
    indication: "",
  };
  return <ConsultorioForm initialState={initialState} editMode={true} />;
};

export default EditarConsultorio;
