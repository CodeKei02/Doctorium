import { useSidebar } from "@/hooks/useSidebar";
import Link from "next/link";
import Image from "next/image";
import { RefObject, useMemo, useRef } from "react";
import { AvatarUser } from "@/components/ui/AvatarUser";
import { MuiIcon, MuiIconName } from "@/components/ui/MuiIcon";

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
  {
    icon: "ContentPaste",
    label: "Plantillas Episodios",
    href: "/plantillas",
  },
];

export const Sidebar = () => {
  const { isOpen, toggle, close } = useSidebar();
  const linksData = useMemo(() => links, []);

  return (
    <>
      <header
        className={`h-16 bg-white border-b border-gray-200 flex px-6 w-full ${
          isOpen ? "transition-x-full" : "w-full"
        } `}
      >
        <div className="flex items-center gap-x-4 w-full">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-7 w-7 cursor-pointer"
            data-sidebar="trigger"
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
          >
            <MuiIcon name={isOpen ? "Close" : "Menu"} className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>

        <div className="flex items-center justify-between space-x-3">
          <div className="flex items-center ">
            <span className="text-sm text-gray-600">Dr. Carlos Mendoza</span>
            <AvatarUser name="Carlos Mendoza" />
          </div>
        </div>
      </header>

      {/* Overlay para obscurecer el contenido cuando el sidebar esta abierto */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#000c] bg-opacity-75 z-30 md:hidden"
          onClick={() => close()}
        />
      )}

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col gap-5 pl-5 px-3 py-4 overflow-y-auto border-amber-50 bg-[var(--sidebar-background-color)] border-r-2 text-white">
          <Image
            src="/logo/logo-3.png"
            alt="Doctorium Logo"
            width={500}
            height={100}
            className="w-auto my-3"
          />

          <ul className="space-y-4 font-medium">
            {linksData.map((link) => (
              <li
                key={link.href}
                className="h-7 py-5 px-2 flex flex-col hover:bg-[var(--primary-color)] hover:text-[hsl(0,0%,95%)] rounded-md justify-center"
              >
                <Link href={link.href} className="flex gap-0.5 ">
                  <MuiIcon name={link.icon} />
                  <span className="ms-3 text-sm">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
