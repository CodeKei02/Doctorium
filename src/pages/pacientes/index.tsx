import { patients, type PatientInfo } from "@/constants/patients-info";
import Link from "next/link";
function StatusBadge({ value }: { value: PatientInfo["status"] }) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border";
  const byStatus: Record<PatientInfo["status"], string> = {
    Activo: "bg-green-100 text-green-800 border-green-200",
    Inactivo: "bg-gray-100 text-gray-700 border-gray-200",
    Pendiente: "bg-yellow-100 text-yellow-800 border-yellow-200",
  };
  return <span className={`${base} ${byStatus[value]}`}>{value}</span>;
}

const PacientesPage = () => {
  return (
    <div className="px-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Pacientes</h1>
      </div>

      <div className="border border-gray-200 rounded-lg shadow-sm">
        <div className="divide-y">
          <div className="grid grid-cols-12 gap-2 px-3 py-2 text-xs text-gray-500">
            <div className="col-span-5">Paciente</div>
            <div className="col-span-2">Teléfono</div>
            <div className="col-span-1">Edad</div>
            <div className="col-span-2">Última visita</div>
            <div className="col-span-2">Estado</div>
          </div>

          {patients.map((p) => (
            <div
              key={p.id}
              className="grid grid-cols-12 gap-2 border border-gray-200 items-center px-3 py-3 hover:bg-gray-50"
            >
              <div className="col-span-5">
                <div className="relative group inline-block">
                  <Link href={`/pacientes/${p.id}`}>{p.name}</Link>
                  {/* Hover quick view */}
                  <div
                    role="tooltip"
                    className="pointer-events-none absolute left-0 top-full z-50 mt-2 hidden w-72 -translate-y-1 transform rounded-md border border-gray-200 bg-white p-3 text-sm text-gray-700 shadow-lg transition-all group-hover:block group-hover:translate-y-0"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-semibold text-gray-900">
                        Resumen rápido
                      </span>
                      <StatusBadge value={p.status} />
                    </div>
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <div>
                        <dt className="text-gray-500">Última visita</dt>
                        <dd>{p.lastVisit}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500">Próxima visita</dt>
                        <dd>{p.nextVisit}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500">Edad</dt>
                        <dd>{p.age}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500">Teléfono</dt>
                        <dd>{p.phone}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="col-span-2 text-gray-700">{p.phone}</div>
              <div className="col-span-1 text-gray-700">{p.age}</div>
              <div className="col-span-2 text-gray-700">{p.lastVisit}</div>
              <div className="col-span-2">
                <StatusBadge value={p.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PacientesPage;
