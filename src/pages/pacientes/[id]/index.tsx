import { CustomerList } from "@/components/dashboard/CustomerList";
import { NavigationCard } from "@/components/dashboard/NavigationCard";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Paciente {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  diagnosticoActual: string;
}

const pacientesSimulados: Paciente[] = [
  {
    id: 1,
    name: "Maria Elena Rodriguez",
    email: "maria.rodriguez@gmail.com",
    phone: "+57 300 123 4567",
    age: 45,
    diagnosticoActual: "Hipertension arterial",
  },
];

const infoSalud = [
  {
    enfermedades: "Hipertension",
    alergias: ["Penicilina", "Ibuprofeno"],
    diagnosticoActual: "Hipertension arterial",
    ultimaVisita: "15 de Junio, 2024",
    proximaVisita: "21 de Junio, 2024",
    estado: "Activo",
  },
];

const tabs = [
  { label: "General" },
  { label: "Historial" },
  { label: "Recetas" },
  { label: "Nutricion" },
  { label: "Citas" },
];

const links = [
  {
    icon: "/images/sprite.svg#edit-icon",
    label: "Editar Informacion",
    href: "",
  },
  {
    icon: "/images/sprite.svg#pacientes-icon",
    label: "Agendar Cita",
    href: "",
  },
  {
    icon: "/images/sprite.svg#clock-icon",
    label: "Ver Historial",
    href: "",
  },
];

const PacienteDetalle = () => {
  const router = useRouter();
  const { id } = router.query;
  const [paciente, setPaciente] = useState<Paciente | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("General");

  useEffect(() => {
    if (id) {
      const pacienteId =
        typeof id === "string"
          ? parseInt(id, 10)
          : Array.isArray(id)
          ? parseInt(id[0], 10)
          : id;
      const pacienteEncontrado = pacientesSimulados.find(
        (p) => p.id === pacienteId
      );

      if (pacienteEncontrado) {
        setPaciente(pacienteEncontrado);
        setError(false);
      } else {
        setError(true);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col gap-4 px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-4 px-4">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Paciente no encontrado
          </h1>
          <p className="text-gray-600 mb-6">
            El paciente con ID {id} no existe en nuestros registros.
          </p>
          <button
            onClick={() => router.push("/pacientes")}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Volver a Pacientes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex items-center justify-between">
        <Button
          linkTo="/pacientes"
          others="border border-gray-300 px-4 py-2 rounded-md"
        >
          <p>← Volver</p>
        </Button>
      </div>
      {paciente && <CustomerList key={paciente.id} customers={[paciente]} />}
      <Breadcrumb tabs={tabs} onTabChange={setActiveTab}>
        {activeTab === "General" ? (
          <>
            {infoSalud.map((info) => (
              <div key={info.diagnosticoActual}>
                <Card style="mb-4">
                  <h1 className="text-xl font-semibold mb-4">
                    Alergias conocidas
                  </h1>
                  <div className="flex flex-wrap gap-2 rounded-md">
                    {info.alergias.map((alergia, index) => (
                      <p
                        key={index}
                        className="text-sm text-red-700 bg-red-100 p-2 rounded-md"
                      >
                        {alergia}
                      </p>
                    ))}
                  </div>
                </Card>
                <Card style="mb-4">
                  <h1 className="text-xl font-semibold mb-4">
                    Diagnostico actual
                  </h1>
                  <p className="text-gray-500">{info.diagnosticoActual}</p>
                </Card>
                <div className="mb-4">
                  <NavigationCard links={links} />
                </div>

                <Card style="mb-4">
                  <h1 className="text-xl font-semibold mb-4">
                    Informacion rapida
                  </h1>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">
                        Ultima consulta
                      </h3>
                      <p>{info.ultimaVisita}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">
                        Proxima cita
                      </h3>
                      <p>{info.proximaVisita}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Estado</h3>
                      <p className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800 hover:bg-green-100">
                        {info.estado}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </>
        ) : (
          <Card>
            <h3 className="text-lg font-semibold mb-4">
              {activeTab !== "General" && activeTab}
            </h3>
            <p className="text-gray-500">
              No hay registros disponibles en el {activeTab}.
            </p>
          </Card>
        )}
      </Breadcrumb>
    </div>
  );
};

export default PacienteDetalle;
