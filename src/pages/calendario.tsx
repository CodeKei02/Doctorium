import DragAndDrop from "@/components/ui/DragAndDrop";
import { Btn } from "@/components/ui/Button";

const CalendarioPage = () => {
  return (
    <>
      <div className="flex justify-between w-[90%] mx-auto my-2">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Reprogramar citas
        </h2>
        {/* Implement a modal for adding new appointments */}
        <Btn onClick={() => {}}>Agregar cita</Btn>
      </div>

      <DragAndDrop />
    </>
  );
};

export default CalendarioPage;
