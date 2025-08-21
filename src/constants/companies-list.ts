const companies: {
  id: number;
  name: string;
  city: string;
  adress: string;
  country: string;
  phone: string;
  numbers: number[];
}[] = [
  {
    id: 1,
    name: "Consulta privada clinica Caracas",
    city: "Caracas",
    adress: "Calle Simon Bolivar",
    country: "Venezuela",
    phone: "04123456789",
    numbers: [45, 12, 40, 8.5],
  },
  {
    id: 2,
    name: "Clinica Avila",
    city: "Caracas",
    adress: "Clinica Avila",
    country: "Venezuela",
    phone: "04123456789",
    numbers: [32, 8, 32, 6.2],
  },
  {
    id: 3,
    name: "Stetic Glam",
    city: "Maracay",
    adress: "Av las delicias cc Locatel",
    country: "Venezuela",
    phone: "04123456789",
    numbers: [0, 0, 0, 0],
  },
  {
    id: 4,
    name: "Centro Medico",
    city: "Maracay",

    adress: "Av Bolivar, Local 1",
    country: "Venezuela",
    phone: "04123456789",
    numbers: [28, 15, 28, 7.8],
  },
];

export { companies };
