import { Btn } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AvatarUser } from "@/components/ui/AvatarUser";
import { MuiIcon, MuiIconName } from "@/components/ui/MuiIcon";

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
  const buttonContent: { label: string; icon: MuiIconName }[] = [
    {
      label: "Crear episodio",
      icon: "Add",
    },
    {
      label: "Crear receta",
      icon: "Save",
    },
  ];
  return (
    <>
      {customers.map((customer) => (
        <Card key={customer.id}>
          <div className="flex flex-col 2md:flex-row items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                <AvatarUser name={customer.name} />
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
                    <MuiIcon name="LocalPhone" />
                    <span className="text-sm">{customer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 2xs:flex-col 2xs:items-start">
                    <MuiIcon name="Email" />
                    <span className="text-sm">{customer.email}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-4 flex items-start gap-2">
              {buttonContent.map((button) => (
                <Btn
                  key={button.label}
                  onClick={() => {}}
                  others="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 text-black border border-gray-300 hover:bg-[var(--primary-color)] hover:text-white w-full 2md:w-auto"
                >
                  <MuiIcon name={button.icon} />
                  {button.label}
                </Btn>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
