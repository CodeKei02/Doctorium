import { useRouter } from "next/router";

const DisponibilidadConsultorio = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Disponibilidad - Consultorio {id}
        </h1>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          ← Volver
        </button>
      </div>
      {/* Configuración de disponibilidad */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Horarios de Atención</h2>
        <div className="space-y-4">
          {/* Lunes */}
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="lunes"
                className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                defaultChecked
              />
              <label htmlFor="lunes" className="font-medium">
                Lunes
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="time"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                defaultValue="08:00"
              />
              <span className="text-gray-500">a</span>
              <input
                type="time"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                defaultValue="17:00"
              />
            </div>
          </div>
          {/* Martes */}
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="martes"
                className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                defaultChecked
              />
              <label htmlFor="martes" className="font-medium">
                Martes
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="time"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                defaultValue="08:00"
              />
              <span className="text-gray-500">a</span>
              <input
                type="time"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                defaultValue="17:00"
              />
            </div>
          </div>
          {/* Miércoles */}
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="miercoles"
                className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                defaultChecked
              />
              <label htmlFor="miercoles" className="font-medium">
                Miércoles
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="time"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                defaultValue="08:00"
              />
              <span className="text-gray-500">a</span>
              <input
                type="time"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                defaultValue="17:00"
              />
            </div>
          </div>
          {/* Jueves */}
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="jueves"
                className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                defaultChecked
              />
              <label htmlFor="jueves" className="font-medium">
                Jueves
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="time"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                defaultValue="08:00"
              />
              <span className="text-gray-500">a</span>
              <input
                type="time"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                defaultValue="17:00"
              />
            </div>
          </div>
          {/* Viernes */}
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="viernes"
                className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                defaultChecked
              />
              <label htmlFor="viernes" className="font-medium">
                Viernes
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="time"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                defaultValue="08:00"
              />
              <span className="text-gray-500">a</span>
              <input
                type="time"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                defaultValue="17:00"
              />
            </div>
          </div>
          {/* Sábado */}
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="sabado"
                className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
              />
              <label htmlFor="sabado" className="font-medium">
                Sábado
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="time"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                defaultValue="08:00"
                disabled
              />
              <span className="text-gray-500">a</span>
              <input
                type="time"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                defaultValue="12:00"
                disabled
              />
            </div>
          </div>
          {/* Domingo */}
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="domingo"
                className="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
              />
              <label htmlFor="domingo" className="font-medium">
                Domingo
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="time"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                defaultValue="08:00"
                disabled
              />
              <span className="text-gray-500">a</span>
              <input
                type="time"
                className="px-2 py-1 border border-gray-300 rounded text-sm"
                defaultValue="12:00"
                disabled
              />
            </div>
          </div>
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
