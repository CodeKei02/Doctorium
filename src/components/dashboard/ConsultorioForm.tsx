import { useRouter } from "next/router";
import { Btn } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CustomSelect } from "@/components/ui/CustomSelect";
import { Form, Formik } from "formik";
import { Card } from "@/components/ui/Card";
import { Field } from "formik";
import { MuiIcon, MuiIconName } from "@/components/ui/MuiIcon";
import { useMemo } from "react";

interface InputField {
  type: "input";
  name: string;
  title: string;
  label: string;
  value?: string;
  inputType: "text" | "textarea" | "select";
  placeholder: string;
  icon: MuiIconName;
  options?: { value: string; label: string }[];
}

interface InputGroup {
  type: "input-group";
  title: string;
  icon: MuiIconName;
  value?: string;
  subInputs: {
    name: string;
    label?: string;
    type: "text" | "textarea" | "select";
    placeholder?: string;
    options?: { value: string; label: string }[];
  }[];
}

interface InfoCard {
  type: "info-card";
  title: string;
  icon: MuiIconName;
  paragraph: string;
  button?: {
    text: string;
    onClick: () => void;
    variant?: "primary" | "secondary";
  };
}

export const ConsultorioForm = ({
  initialState,
  children,
}: {
  initialState: object;
  children?: [] | null;
}) => {
  const baseContentItems: (InputField | InputGroup | InfoCard)[] = [
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

  const router = useRouter();

  const text = [
    {
      title: "Volver",
      onClick: () => router.back(),
      others:
        "px-4 py-2 text-gray-600 border border-gray-300 text-black rounded-md hover:text-white hover:bg-[var(--primary)]",
    },
    {
      title: "Crear Consultorio",

      others:
        "px-4 py-2 text-gray-600 border border-gray-300 bg-[var(--primary)] text-white rounded-md hover:text-black",
    },
  ];

  const contentItems = useMemo(() => {
    return children ? [...baseContentItems, ...children] : baseContentItems;
  }, [baseContentItems, children]);

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex items-center gap-4">
        {text.map((text) => (
          <Btn key={text.title} onClick={text.onClick} others={text.others}>
            {text.title}
          </Btn>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <Formik initialValues={initialState} onSubmit={() => {}}>
          <Form>
            {contentItems.map((item: InputField | InputGroup | InfoCard) => (
              <Card
                key={item.title}
                style="mb-4 pl-5 border border-gray-200 rounded-lg p-2 gap-2 "
              >
                <div className="flex items-center gap-2 my-2 py-1">
                  <MuiIcon name={item.icon} />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>

                {item.type === "input" ? (
                  <Input
                    title={item.title}
                    name={item.name}
                    label={item.label}
                    type={item.inputType}
                    placeholder={item.placeholder}
                    icon={item.icon}
                  />
                ) : item.type === "input-group" ? (
                  item.subInputs.map((subItem) => (
                    <div key={subItem.name} className="space-y-2">
                      {subItem.type === "select" ? (
                        <div className="flex items-center gap-2">
                          <CustomSelect
                            name={subItem.name}
                            label={subItem.label}
                            options={
                              (
                                subItem as {
                                  options: { value: string; label: string }[];
                                }
                              ).options
                            }
                            required={true}
                            className="w-32"
                          />
                          {subItem.name === "codigoPais" ? (
                            <Field
                              name={subItem.name}
                              type={subItem.type}
                              placeholder="Ingresa el teléfono"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                            />
                          ) : subItem.name === "duracionConsulta" ? (
                            <span className="text-gray-500">minutos</span>
                          ) : null}
                        </div>
                      ) : (
                        <div className="mt-3">
                          {subItem.label && (
                            <label
                              htmlFor={subItem.name}
                              className="text-sm mb-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {subItem.label}
                            </label>
                          )}

                          <Field
                            id={subItem.name}
                            name={subItem.name}
                            type={subItem.type}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] ${
                              subItem.type === "textarea" ? "resize-none" : ""
                            }`}
                            as={
                              subItem.type === "textarea" ? "textarea" : "input"
                            }
                            rows={subItem.type === "textarea" ? 3 : undefined}
                          />
                        </div>
                      )}
                    </div>
                  ))
                ) : item.type === "info-card" ? (
                  <div className="flex px-5 justify-between items-center gap-2">
                    <p className="text-gray-700">{item.paragraph}</p>
                  </div>
                ) : null}
              </Card>
            ))}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ConsultorioForm;
