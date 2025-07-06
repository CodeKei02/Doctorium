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

  const add = (consultorio: any) => {
    dispatch(addConsultorio(consultorio));
  };

  const update = (consultorio: any) => {
    dispatch(updateConsultorio(consultorio));
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
