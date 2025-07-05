import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Check } from "../ui/Check";
import { Grid } from "../ui/Grid";
import { Headline } from "../ui/Headline";
import { Indicator } from "../ui/Indicator";
import { useState } from "react";

const customers = [
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

const buttonContent = (customer: any) => [
  {
    label: "Editar Consultorio",
    icon: "",
    linkTo: `/consultorios/${customer.id}/editar`,
  },
  {
    label: "Editar Disponibilidad",
    icon: "",
    linkTo: `/consultorios/${customer.id}/disponibilidad`,
  },
];

export const CustomerList = () => {
  const [checkStates, setCheckStates] = useState<{ [key: string]: boolean }>(
    {}
  );
  const handleCheckChange = (id: string) => {
    setCheckStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-4">
      {customers.map((customer) => (
        <Card key={customer.id}>
          <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-4">
            <div className="flex items-start space-x-2 min-w-0 flex-1">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-10 h-10 text-black p-1">
                  <use href="/images/sprite.svg#consultorios-icon" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                  {customer.name}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <svg className="w-4 h-4 mr-1 flex-shrink-0">
                    <use href="/images/sprite.svg#location-icon" />
                  </svg>
                  <span className="text-sm truncate">
                    {customer.adress},{customer.city}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center space-x-2">
                    <Indicator
                      indicatorColor={
                        checkStates[customer.id] ? "bg-green-500" : "bg-red-500"
                      }
                    />
                    <p
                      className={`text-sm ${
                        checkStates[customer.id]
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      Reserva Online {!checkStates[customer.id] && "No"}{" "}
                      disponible
                    </p>
                  </div>
                  <Check
                    id={customer.id.toString()}
                    checked={checkStates[customer.id.toString()] || false}
                    setChecked={handleCheckChange}
                  />
                </div>
                <Grid items={customer.numbers} />
              </div>
            </div>
            <div className="flex flex-col xs:flex-row items-center justify-start xs:justify-end gap-2 flex-shrink-0 w-full xs:w-auto button-container">
              {buttonContent(customer).map((button) => (
                <Button
                  key={button.label}
                  others="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 text-black border border-gray-300 hover:bg-[var(--primary-color)] hover:text-white w-full xs:w-auto"
                  linkTo={button.linkTo}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
