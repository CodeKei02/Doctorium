import { Btn } from "@/components/ui/Button";
import { useRouter } from "next/router";
import SaveIcon from "@mui/icons-material/Save";
import SectionHeading from "@/components/layout/SectionHeading";
import { SchedulesCard } from "@/components/ui/SchedulesCard";

const DisponibilidadConsultorio = () => {
  const router = useRouter();
  // const { id } = router.query;

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex items-center gap-3">
        <Btn
          onClick={() => router.back()}
          others="border border-gray-300 px-4 py-2 rounded-md cursor-pointer"
        >
          ← Volver
        </Btn>
        <Btn
          onClick={() => router.back()}
          others="bg-[var(--primary-color)] text-white p-2 cursor-pointer rounded"
        >
          <SaveIcon />
          Guardar horarios
        </Btn>
      </div>
      <div className="border border-gray-300 rounded-md">
        <SectionHeading
          title="Horarios de atención"
          icon="AccessAlarm"
          description="Define los días y horarios de atención en los que estarás disponible para atender pacientes"
        />
        <SchedulesCard />
      </div>
    </div>
  );
};

export default DisponibilidadConsultorio;
