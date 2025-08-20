import { Btn } from "./Button";
import { Check } from "./Check";
import { MuiIcon } from "./MuiIcon";

// interface SchedulesCardProps {
//   id: string;
//   checked: boolean;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   day: string;
//   startTime: string;
//   endTime: string;
// }

const days = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const hours = "00:00";
console.log(days[0].slice(0, 3));
export const SchedulesCard = () => {
  return (
    <>
      {days.map((day, index) => (
        <div key={index}>
          {/* Headline card */}
          <div className="flex justify-between">
            <div className="flex">
              {/* <Check id={id} checked={checked} onChange={onChange} /> */}
              <p>{day}</p>
              <p>{day.slice(0, 3)}</p>
            </div>
            <Btn>
              <MuiIcon name="Add" />
              Agregar Horario
            </Btn>
          </div>
          {/* select time */}
          <div className="flex items-center gap-2">
            <p>De</p>
          </div>
        </div>
      ))}
    </>
  );
};
