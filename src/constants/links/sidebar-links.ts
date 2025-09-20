import { MuiIconName } from "@/components/ui/MuiIcon";

export type SidebarLink = {
  icon: MuiIconName;
  label: string;
  href: string;
};

const links: SidebarLink[] = [
  {
    icon: "Home",
    label: "Inicio",
    href: "/",
  },
  {
    icon: "CalendarMonth",
    label: "Calendario",
    href: "/calendario",
  },
  {
    icon: "Business",
    label: "Consultorios",
    href: "/consultorios",
  },
  {
    icon: "PeopleAlt",
    label: "Pacientes",
    href: "/pacientes",
  },
];

export { links };
