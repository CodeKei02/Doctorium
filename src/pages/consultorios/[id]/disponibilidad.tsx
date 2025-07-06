import { Button } from "@/components/ui/Button";
import { useRouter } from "next/router";

const days = [
  {
    name: "Lunes",
    horarios: [
      {
        hora: "08:00",
        horaHasta: "09:00",
      },
    ],
  },
  {
    name: "Martes",
    horarios: [
      {
        hora: "08:00",
        horaHasta: "09:00",
      },
    ],
  },
  {
    name: "Miercoles",
    horarios: [
      {
        hora: "08:00",
        horaHasta: "09:00",
      },
    ],
  },
  {
    name: "Jueves",
    horarios: [
      {
        hora: "08:00",
        horaHasta: "09:00",
      },
    ],
  },
  {
    name: "Viernes",
    horarios: [
      {
        hora: "08:00",
        horaHasta: "09:00",
      },
    ],
  },
  {
    name: "Sabado",
    horarios: [
      {
        hora: "05:00",
        horaHasta: "09:00",
      },
    ],
  },
  {
    name: "Domingo",
    horarios: [
      {
        hora: "07:00",
        horaHasta: "09:00",
      },
    ],
  },
];

const DisponibilidadConsultorio = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Disponibilidad - Consultorio {id}
        </h1>
        <Button onClick={() => router.back()}>← Volver</Button>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Horarios de Atención</h2>
        <div className="space-y-4">
          {days.map((day, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
            >
              <div key={index} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={day.name}
                  className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                  defaultChecked
                />
                <label htmlFor={day.name} className="font-medium">
                  {day.name}
                </label>
              </div>
              <div className="flex items-center space-x-3">
                {day.horarios.map((horario) => (
                  <>
                    <input
                      type="time"
                      id={horario.hora}
                      name={horario.hora}
                      value={horario.hora}
                      className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="time"
                      id={horario.horaHasta}
                      name={horario.horaHasta}
                      value={horario.horaHasta}
                      className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                    />
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 pt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-md hover:opacity-90 transition-opacity"
          >
            Guardar Horarios
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisponibilidadConsultorio;
