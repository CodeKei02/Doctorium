import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

interface Link {
  icon: string;
  label: string;
  href: string;
}

export const NavigationCard = ({ links }: { links?: Link[] }) => {
  if (!links || links.length === 0) {
    return (
      <Card>
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Acciones Rapidas
        </h3>
        <div className="mt-5">
          <p className="text-gray-500">No hay acciones disponibles</p>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <h3 className="text-2xl font-semibold leading-none tracking-tight">
        Acciones Rapidas
      </h3>
      <div className="flex flex-col gap-2 mt-5 ">
        {links.map((link) => (
          <Button
            key={link.label}
            others="pl-4 py-2 rounded-md hover:bg-[var(--primary-color)] hover:text-white border border-gray-200"
            linkTo={link.href}
          >
            <svg className="w-4 h-4">
              <use href={link.icon} />
            </svg>
            {link.label}
          </Button>
        ))}
      </div>
    </Card>
  );
};
