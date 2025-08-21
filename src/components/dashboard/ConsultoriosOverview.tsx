import { StatCard } from "@/components/ui/StatCard";
import { MedicalSpacesCard } from "@/components/layout/MedicalSpacesCard";
import { info } from "@/constants/consultorios-info";
export const ConsultoriosOverview = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {info.map((card) => (
          <StatCard
            key={card.title}
            title={card.title}
            number={Number(card.number)}
            icon={card.icon}
          >
            <p className="text-xs text-gray-600">{card.text}</p>
          </StatCard>
        ))}
      </div>
      <MedicalSpacesCard />
    </div>
  );
};
