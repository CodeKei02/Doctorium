export interface PatientInfo {
  id: number;
  name: string;
  phone: string;
  age: number;
  lastVisit: string;
  nextVisit: string;
  status: "Activo" | "Inactivo" | "Pendiente";
}

export const patients: PatientInfo[] = [
  {
    id: 1,
    name: "María Elena Rodríguez",
    phone: "+57 300 123 4567",
    age: 45,
    lastVisit: "15 de Junio, 2024",
    nextVisit: "21 de Junio, 2024",
    status: "Activo",
  },
  {
    id: 2,
    name: "Juan Pérez",
    phone: "+52 55 1234 5678",
    age: 38,
    lastVisit: "02 de Julio, 2024",
    nextVisit: "10 de Julio, 2024",
    status: "Pendiente",
  },
  {
    id: 3,
    name: "Ana Gómez",
    phone: "+57 301 765 4321",
    age: 29,
    lastVisit: "28 de Mayo, 2024",
    nextVisit: "-",
    status: "Inactivo",
  },
  {
    id: 4,
    name: "Carlos Ramírez",
    phone: "+57 302 111 2233",
    age: 52,
    lastVisit: "01 de Agosto, 2024",
    nextVisit: "15 de Agosto, 2024",
    status: "Activo",
  },
  {
    id: 5,
    name: "Lucía Fernández",
    phone: "+57 320 555 6677",
    age: 34,
    lastVisit: "10 de Abril, 2024",
    nextVisit: "-",
    status: "Pendiente",
  },
];
