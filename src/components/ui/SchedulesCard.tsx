import { useChecked } from "@/hooks/useChecked";
import { Btn } from "./Button";
import { Check } from "./Check";
import { MuiIcon } from "./MuiIcon";
import { CustomSelect } from "./CustomSelect";
import { Form, Formik } from "formik";
import { TimeSelect } from "./TimeSelect";
const days = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export const SchedulesCard = () => {
  const { checked, handleChange } = useChecked();
  const isChecking = (id: string) => checked[id] || false;
  return (
    <>
      {days.map((day, index) => (
        <div key={index} className="border border-gray-200 rounded-md my-3 p-2">
          {/* Headline card */}
          <div className="flex justify-between">
            <div className="flex">
              <Check
                id={index.toString()}
                checked={checked[index.toString()] || false}
                onChange={(e) => handleChange(index.toString(), e)}
              />
              <div className="flex self-center gap-2">
                <p>{day}</p>
                <p className="text-gray-400">{day.slice(0, 3).toUpperCase()}</p>
              </div>
            </div>
            <Btn others="w-50">
              <MuiIcon name="Add" />
              Agregar Horario
            </Btn>
          </div>
          {/* select time */}
          {isChecking(index.toString()) ? (
            <div className="flex items-center gap-2">
              <Formik
                initialValues={{ startTime: "08:00", endTime: "17:00" }}
                onSubmit={() => {}}
              >
                <Form className="w-full my-3 p-3 rounded-md flex items-center gap-2 bg-gray-200">
                  <label>De</label>
                  <TimeSelect name={`startTime_${index}`} />
                  <label>a</label>
                  <TimeSelect name={`endTime_${index}`} />
                </Form>
              </Formik>
            </div>
          ) : (
            <div className="w-full my-3 p-3 rounded-md gap-2 bg-gray-200">
              No disponible este día
            </div>
          )}
        </div>
      ))}
    </>
  );
};
