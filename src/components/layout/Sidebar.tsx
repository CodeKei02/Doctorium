import { useClickOutside } from "@/hooks/useClickOutside";
import { useSidebar } from "@/hooks/useSidebar";
import Link from "next/link";
import { RefObject, useRef } from "react";
import { Avatar } from "../ui/Avatar";

const links = [
  {
    icon: "/images/sprite.svg#inicio-icon",
    label: "Inicio",
    href: "/",
  },
  {
    icon: "/images/sprite.svg#calendario-icon",
    label: "Calendario",
    href: "/calendario",
  },
  {
    icon: "/images/sprite.svg#consultorios-icon",
    label: "Consultorios",
    href: "/consultorios",
  },
  {
    icon: "/images/sprite.svg#pacientes-icon",
    label: "Pacientes",
    href: "/pacientes",
  },
  {
    icon: "/images/sprite.svg#plantillas-icon",
    label: "Plantillas Episodios",
    href: "/plantillas",
  },
];

export const Sidebar = () => {
  const { isOpen, toggle, close } = useSidebar();
  const asideRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    if (isOpen) {
      close();
    }
  };

  useClickOutside(asideRef as RefObject<HTMLElement>, handleClickOutside);
  return (
    <>
      <header
        className={`h-16 bg-white border-b border-gray-200 flex px-6 w-full ${
          isOpen ? "transition-x-full" : "w-full"
        } `}
      >
        <div className="flex items-center gap-x-4 w-full">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-7 w-7 hover:bg-[hsl(262,83%,58%)] hover:text-white cursor-pointer"
            data-sidebar="trigger"
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
          >
            <svg className="w-4 h-4">
              <use href="/images/sprite.svg#button-icon" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>

        <div className="flex items-center justify-between space-x-3">
          <div className="flex items-center ">
            <span className="text-sm text-gray-600">Dr. Carlos Mendoza</span>
            <Avatar name="Carlos Mendoza" size="10" />
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
        <div
          className="h-full flex flex-col gap-5 pl-5 px-3 py-4 overflow-y-auto border-amber-50 bg-[hsl(262,100%,10%)] border-r-2 text-white"
          ref={asideRef}
        >
          <img
            src="/images/sidebar/docguia-logo-white.jpg"
            className="w-30 my-3"
          />
          <ul className="space-y-4 font-medium">
            {links.map((link) => (
              <li
                key={link.href}
                className="h-7 p-2 flex flex-col gap-5 hover:bg-[hsl(262,83%,15%)] hover:text-[hsl(0,0%,95%)] rounded-md justify-center"
              >
                <Link href={link.href} className="flex gap-0.5">
                  <svg className="w-4 h-4">
                    <use href={link.icon} />
                  </svg>
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
