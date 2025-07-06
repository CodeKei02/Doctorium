import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Avatar } from "../ui/Avatar";

interface Customer {
  id: number;
  name: string;
  age: number;
  email: string;
  phone: string;
  diagnosticoActual: string;
}

interface CustomerListProps {
  customers: Customer[];
}

export const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  const buttonContent = [
    {
      label: "Crear episodio",
      icon: "/images/sprite.svg#plus-icon",
    },
    {
      label: "Crear receta",
      icon: "/images/sprite.svg#save-icon",
    },
  ];
  return (
    <>
      {customers.map((customer) => (
        <Card key={customer.id}>
          <div className="flex flex-col 2md:flex-row items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                <Avatar name={customer.name} size="10" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                  {customer.name}
                </h1>
                <p className="text-sm text-gray-600 mb-2">
                  {customer.age} años, {customer.diagnosticoActual}
                </p>

                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 mr-1 flex-shrink-0">
                      <use href="/images/sprite.svg#phone-icon" />
                    </svg>
                    <span className="text-sm">{customer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 2xs:flex-col 2xs:items-start">
                    <svg className="w-4 h-4 mr-1 flex-shrink-0">
                      <use href="/images/sprite.svg#mail-icon" />
                    </svg>
                    <span className="text-sm">{customer.email}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-4 flex items-start gap-2">
              {buttonContent.map((button) => (
                <Button
                  key={button.label}
                  onClick={() => {}}
                  others="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 text-black border border-gray-300 hover:bg-[var(--primary-color)] hover:text-white w-full 2md:w-auto"
                >
                  <svg className="w-5 h-5 text-gray-600 hover:text-white">
                    <use href={button.icon} />
                  </svg>
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
