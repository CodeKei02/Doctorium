import { createSlice } from "@reduxjs/toolkit";

interface Consultorio {
  id: string;
  name: string;
  city: string;
  country: string;
  adress: string;
  status: boolean;
  phone: string;
}

const initialState: { consultorios: Consultorio[] } = {
  consultorios: [],
};

const consultoriosSlice = createSlice({
  name: "consultorios",
  initialState,
  reducers: {
    setConsultorios: (state: any, action: any) => {
      state.consultorios = action.payload;
    },
    addConsultorio: (state, action) => {
      state.consultorios.push(action.payload);
    },
    updateConsultorio: (state, action) => {
      state.consultorios = state.consultorios.map((consultorio) =>
        consultorio.id === action.payload.id ? action.payload : consultorio
      );
    },
    deleteConsultorio: (state, action) => {
      state.consultorios = state.consultorios.filter(
        (consultorio) => consultorio.id !== action.payload
      );
    },
  },
});

export const {
  setConsultorios,
  addConsultorio,
  updateConsultorio,
  deleteConsultorio,
} = consultoriosSlice.actions;
export default consultoriosSlice.reducer;
