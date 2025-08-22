import { MuiIconName } from "@/components/ui/MuiIcon";

export interface InputOption {
  value: string;
  label: string;
}

export interface InputField {
  type: "input";
  name: string;
  title: string;
  label: string;
  value?: string;
  inputType: "text" | "textarea" | "select";
  placeholder: string;
  icon: MuiIconName;
  options?: InputOption[];
}

export interface InputGroup {
  type: "input-group";
  title: string;
  icon: MuiIconName;
  value?: string;
  subInputs: {
    name: string;
    label?: string;
    type: "text" | "textarea" | "select";
    placeholder?: string;
    options?: InputOption[];
  }[];
}

export interface InfoCard {
  type: "info-card";
  title: string;
  icon: MuiIconName;
  paragraph: string;
}

export const baseContentItems: (InputField | InputGroup | InfoCard)[] = [
  {
    type: "input",
    name: "nombreConsultorio",
    title: "Nombre del Consultorio",
    label: "Nombre del consultorio *",
    inputType: "text",
    placeholder: "Ingresa el nombre de tu consultorio",
    icon: "Business",
  },
  {
    type: "input-group",
    title: "Ubicacion del consultorio",
    icon: "LocationOn",
    subInputs: [
      {
        name: "ciudadConsultorio",
        label: "Ciudad donde se ubica el consultorio *",
        type: "text",
        placeholder: "Ingresa la ciudad",
      },
      {
        name: "direccionConsultorio",
        label: "Direccion del consultorio *",
        type: "text",
        placeholder: "Ingresa la direccion",
      },
      {
        name: "indicacionesConsultorio",
        label: "Indicaciones para llegar",
        type: "textarea",
        placeholder: "Ingresa las indicaciones",
      },
    ],
  },
  {
    type: "input-group",
    title: "Datos de contacto del consultorio",
    icon: "LocalPhone",
    subInputs: [
      {
        name: "codigoPais",
        label: "",
        type: "select",
        options: [
          { value: "VE +58", label: "VE +58" },
          { value: "US +1", label: "US +1" },
        ],
      },
    ],
  },
  {
    type: "input-group",
    title: "Duracion de la consulta",
    icon: "QueryBuilder",
    value: "",
    subInputs: [
      {
        name: "duracionConsulta",
        label: "",
        type: "select",
        options: [
          { value: "30", label: "30" },
          { value: "45", label: "45" },
          { value: "60", label: "60" },
          { value: "90", label: "90" },
        ],
      },
    ],
  },
  {
    type: "info-card",
    title: "Notificaciones",
    icon: "Notifications",
    paragraph: "Recibir notificación por WhatsApp cuando se agende una cita",
  },
];
