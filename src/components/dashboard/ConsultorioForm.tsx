import { Btn } from "@/components/ui/Button";
import { CustomSelect } from "@/components/ui/CustomSelect";
import { Form, Formik } from "formik";
import { Field } from "formik";
import { MuiIcon } from "@/components/ui/MuiIcon";
import { baseContentItems } from "@/constants/consultorio-items";
import { useRouter } from "next/router";
import { useConsultorioStore } from "@/stores/consultorio";

export const ConsultorioForm = ({
  initialState,
  editMode = false,
}: {
  initialState: {
    id: string;
    name: string;
    address: string;
    street: string;
    indication: string;
    city: string;
    country: string;
    country_code: string;
    phone: string;
    duration: string;
  };
  children?: [] | null;
  editMode?: boolean;
}) => {
  const router = useRouter();
  const createConsultorio = useConsultorioStore(
    (state) => state.addConsultorio
  );
  const editConsultorio = useConsultorioStore(
    (state) => state.updateConsultorio
  );

  const handleSubmit = (
    values: typeof initialState,
    {
      resetForm,
      setSubmitting,
    }: { resetForm: () => void; setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const data = {
      id: values.id,
      name: values.name,
      address: values.address,
      street: values.street,
      indication: values.indication,
      country_code: values.country_code,
      phone: values.phone,
      duration: values.duration,
      city: values.city,
      country: values.country,
    };

    setTimeout(() => {
      {
        editMode ? editConsultorio(values.id, data) : createConsultorio(data);
      }
      resetForm();
      setSubmitting(false);
      router.back();
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex flex-col gap-4">
        <Formik initialValues={initialState} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className="flex items-center gap-4">
                <Btn onClick={() => router.back()}>Volver</Btn>
                <Btn type="submit" disabled={isSubmitting}>
                  {editMode ? "Editar Consultorio" : "Crear Consultorio"}
                </Btn>
              </div>
              {baseContentItems.map((item, index) => (
                <div
                  key={index}
                  className="w-full my-4 flex-shrink border border-gray-200 rounded-lg p-2 2xs:p-3 2md:p-4 hover:shadow-md"
                >
                  <div className="flex items-center gap-2 my-2 py-1">
                    <MuiIcon name={item.icon} />
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>

                  {item.type === "input" ? (
                    <Field
                      id={item.name}
                      type={item.inputType}
                      name={item.name}
                      placeholder={item.placeholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
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

                            {subItem.name === "country_code" ? (
                              <Field
                                id={subItem.name}
                                name={subItem.name}
                                type={subItem.type}
                                placeholder="Ingresa el teléfono"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
                              />
                            ) : subItem.name === "duration" ? (
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
                                subItem.type === "textarea"
                                  ? "textarea"
                                  : "input"
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
                </div>
              ))}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ConsultorioForm;
