import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

const links = [
  {
    icon: "./images/sprite.svg#consultorios-icon",
    label: "Gestionar Consultorios",
    href: "/consultorios#consultorios",
  },
  {
    icon: "./images/sprite.svg#pacientes-icon",
    label: "Gestionar Pacientes",
    href: "/pacientes",
  },
  {
    icon: "./images/sprite.svg#calendario-icon",
    label: "Gestionar Citas",
    href: "/citas",
  },
  {
    icon: "./images/sprite.svg#plantillas-icon",
    label: "Gestionar Plantillas",
    href: "/plantillas",
  },
];

export const NavigationCard = () => {
  return (
    <Card>
      <h3 className="text-2xl font-semibold leading-none tracking-tight">
        Acciones Rapidas
      </h3>
      <div className="flex flex-col gap-2 mt-5">
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
