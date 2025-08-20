import Link from "next/link";
import { Button } from "@mui/material";
export const Btn: React.FC<{
  others?: string;
  linkTo?: string;
  children: React.ReactNode | string;
  onClick?: () => void;
}> = ({ others, children, linkTo, onClick }) => {
  if (linkTo) {
    return (
      <Link
        href={linkTo}
        className={`inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${others}`}
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
    >
      {children}
    </Button>
  );
};
