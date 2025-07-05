import { useRouter } from "next/router";
import { Button } from "../../components/ui/Button";
import { useConsultorios } from "@/hooks/useConsultorios";
import { v4 as uuidv4 } from "uuid";
const NuevoConsultorio = () => {
  const router = useRouter();
  const { add } = useConsultorios();
  const initialState = {
    id: uuidv4(),
    name: "",
    address: "",
    city: "",
    phone: "",
  };
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex items-center gap-4">
        <Button
          onClick={() => router.back()}
          others="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:text-gray-800"
        >
          ← Volver
        </Button>
        <Button
          onClick={() => add([initialState])}
          others="px-4 py-2 text-gray-600 border border-gray-300 bg-[var(--primary-color)] text-white rounded-md hover:text-black"
        >
          Crear Consultorio
        </Button>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre del Consultorio
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              placeholder="Ej: Clínica Caracas"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dirección
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              placeholder="Ej: Calle Simón Bolívar, Caracas"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ciudad
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                placeholder="Ej: Caracas"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                placeholder="Ej: 04123456789"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="reserva-online"
              className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
            />
            <label htmlFor="reserva-online" className="text-sm text-gray-700">
              Reserva online disponible
            </label>
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-md hover:opacity-90 transition-opacity"
            >
              Crear Consultorio
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NuevoConsultorio;
