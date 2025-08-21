import { Card } from "@/components/ui/Card";
import { Check } from "@/components/ui/Check";
import { Grid } from "@/components/ui/Grid";
import { Indicator } from "@/components/ui/Indicator";
import Link from "next/link";
import { useChecked } from "@/hooks/useChecked";
import { MuiIcon } from "@/components/ui/MuiIcon";
import { companies } from "@/constants/companies-list";

export const CompanyList = () => {
  const { checked, handleChange } = useChecked();
  const buttonContent = (company: (typeof companies)[number]) => [
    {
      label: "Editar Consultorio",
      href: {
        pathname: "/consultorios/[id]/editar",
        query: { id: company.id },
      },
    },
    {
      label: "Editar Disponibilidad",
      href: {
        pathname: "/consultorios/[id]/disponibilidad",
        query: { id: company.id },
      },
    },
  ];

  const isChecking = (id: string) => {
    return checked[id] || false;
  };

  return (
    <div className="space-y-4">
      {companies.map((company) => (
        <Card key={company.id}>
          <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-4">
            <div className="flex items-start space-x-2 min-w-0 flex-1">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MuiIcon name="Business" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                  {company.name}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MuiIcon name="LocationOn" />
                  <span className="text-sm truncate">
                    {company.adress},{company.city}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center space-x-2">
                    <Indicator
                      indicatorColor={
                        isChecking(company.id.toString())
                          ? "bg-green-500"
                          : "bg-red-500"
                      }
                    />
                    <p
                      className={`text-sm ${
                        isChecking(company.id.toString())
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      Reserva Online {isChecking(company.id.toString()) && "No"}{" "}
                      disponible
                    </p>
                  </div>
                  <Check
                    id={company.id.toString()}
                    checked={isChecking(company.id.toString())}
                    onChange={(e) => handleChange(company.id.toString(), e)}
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
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-black border border-gray-300 w-full xs:w-auto"
                >
                  <MuiIcon name="EditDocument" />
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
