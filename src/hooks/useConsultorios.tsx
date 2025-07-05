import { useDispatch, useSelector } from "react-redux";
import {
  addConsultorio,
  updateConsultorio,
  deleteConsultorio,
} from "../contexts/consultorios/consultoriosSlice";
import { RootState } from "@/contexts/store";

export const useConsultorios = () => {
  const dispatch = useDispatch();
  const consultorios = useSelector(
    (state: RootState) => state.consultorios.consultorios
  );

  const add = (consultorios: any) => {
    dispatch(addConsultorio(consultorios));
  };

  const update = (consultorios: []) => {
    dispatch(updateConsultorio(consultorios));
  };

  const delet = (id: string) => {
    dispatch(deleteConsultorio(id));
  };
  return {
    consultorios,
    add,
    update,
    delet,
  };
};
