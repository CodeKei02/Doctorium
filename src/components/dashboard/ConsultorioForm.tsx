import { Btn } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CustomSelect } from "@/components/ui/CustomSelect";
import { Form, Formik } from "formik";
import { Card } from "@/components/ui/Card";
import { Field } from "formik";
import { MuiIcon } from "@/components/ui/MuiIcon";
import { baseContentItems } from "@/constants/consultorio-items";
import { useRouter } from "next/router";

export const ConsultorioForm = ({
  initialState,
}: {
  initialState: object;
  children?: [] | null;
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex items-center gap-4">
        <Btn onClick={() => router.back()}>Volver</Btn>
        <Btn onClick={() => {}}>Crear Consultorio</Btn>
      </div>
      <div className="flex flex-col gap-4">
        <Formik initialValues={initialState} onSubmit={() => {}}>
          <Form>
            {baseContentItems.map((item) => (
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
