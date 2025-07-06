import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Check } from "../ui/Check";
import { Grid } from "../ui/Grid";
import { Indicator } from "../ui/Indicator";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Company {
  id: number;
  name: string;
  city: string;
  adress: string;
  country?: string;
  phone: string;
  numbers: number[];
}

const companies = [
  {
    id: 1,
    name: "Consulta privada clinica Caracas",
    city: "Caracas",
    adress: "Calle Simon Bolivar",
    country: "Venezuela",
    phone: "04123456789",
    numbers: [45, 12, 40, 8.5],
  },
  {
    id: 2,
    name: "Clinica Avila",
    city: "Caracas",
    adress: "Clinica Avila",
    phone: "04123456789",
    numbers: [32, 8, 32, 6.2],
  },
  {
    id: 3,
    name: "Stetic Glam",
    city: "Maracay",
    adress: "Av las delicias cc Locatel",
    phone: "04123456789",
    numbers: [0, 0, 0, 0],
  },
  {
    id: 4,
    name: "Centro Medico",
    city: "Maracay",
    adress: "Av Bolivar, Local 1",
    phone: "04123456789",
    numbers: [28, 15, 28, 7.8],
  },
];

export const CompanyList = () => {
  const [checkStates, setCheckStates] = useState<{ [key: string]: boolean }>(
    {}
  );
  const handleCheckChange = (id: string) => {
    setCheckStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const buttonContent = (company: Company) => [
    {
      label: "Editar Consultorio",
      icon: "/images/sprite.svg#edit-icon",
      href: {
        pathname: "/consultorios/[id]/editar",
        query: { id: company.id },
      },
    },
    {
      label: "Editar Disponibilidad",
      icon: "/images/sprite.svg#edit-disponibilidad-icon",
      href: {
        pathname: "/consultorios/[id]/disponibilidad",
        query: { id: company.id },
      },
    },
  ];

  return (
    <div className="space-y-4">
      {companies.map((company) => (
        <Card key={company.id}>
          <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-4">
            <div className="flex items-start space-x-2 min-w-0 flex-1">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-10 h-10 text-black p-1">
                  <use href="/images/sprite.svg#consultorios-icon" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                  {company.name}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <svg className="w-4 h-4 mr-1 flex-shrink-0">
                    <use href="/images/sprite.svg#location-icon" />
                  </svg>
                  <span className="text-sm truncate">
                    {company.adress},{company.city}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center space-x-2">
                    <Indicator
                      indicatorColor={
                        checkStates[company.id] ? "bg-green-500" : "bg-red-500"
                      }
                    />
                    <p
                      className={`text-sm ${
                        checkStates[company.id]
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      Reserva Online {!checkStates[company.id] && "No"}{" "}
                      disponible
                    </p>
                  </div>
                  <Check
                    id={company.id.toString()}
                    checked={checkStates[company.id.toString()] || false}
                    setChecked={handleCheckChange}
                  />
                </div>
                <Grid items={company.numbers} />
              </div>
            </div>
            <div className="flex flex-col xs:flex-row items-center justify-start xs:justify-end gap-2 flex-shrink-0 w-full xs:w-auto button-container">
              {buttonContent(company).map((button) => (
                <Link
                  key={button.label}
                  href={button.href}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 text-black border border-gray-300 hover:bg-[var(--primary-color)] hover:text-white w-full xs:w-auto"
                >
                  <svg className="w-5 h-5 text-gray-600 hover:text-white">
                    <use href={button.icon} />
                  </svg>
                  {button.label}
                </Link>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
