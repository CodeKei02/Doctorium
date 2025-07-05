import { useRouter } from "next/router";

const EditarConsultorio = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Editar Consultorio {id}</h1>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          ← Volver
        </button>
      </div>
      {/* Formulario de edición */}
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
              defaultValue="Clínica Caracas"
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
              defaultValue="Calle Simón Bolívar"
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
                defaultValue="Caracas"
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
                defaultValue="04123456789"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="reserva-online"
              className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
              defaultChecked
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
              Guardar Cambios
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

export default EditarConsultorio;
