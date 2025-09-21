import { Btn } from "@/components/ui/Button";
import DragAndDrop from "@/components/layout/DragAndDrop";

const CalendarioPage = () => {
  return (
    <>
      <div className="flex justify-between w-[90%] mx-auto my-2">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          Reprogramar citas
        </h2>
      </div>
      
      <DragAndDrop />
    </>
  );
};

export default CalendarioPage;
