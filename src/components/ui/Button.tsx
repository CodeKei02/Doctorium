import Link from "next/link";
import { Button } from "@mui/material";
export const Btn: React.FC<{
  type?: "button" | "submit" | "reset";
  others?: string;
  disabled?: boolean;
  linkTo?: string | { pathname: string; query: { id: string } };
  children: React.ReactNode | string;
  onClick?: () => void;
}> = ({ others, children, linkTo, onClick, type, disabled }) => {
  if (linkTo) {
    return (
      <Link
        href={linkTo}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-black border border-gray-300 w-full xs:w-auto hover:bg-[var(--primary-color)] hover:text-white"
      >
        {children}
      </Link>
    );
  }
  return (
    <Button
      variant="contained"
      onClick={onClick}
      className={`inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${others}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
