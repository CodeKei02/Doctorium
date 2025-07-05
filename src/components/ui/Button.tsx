import Link from "next/link";

export const Button: React.FC<{
  others: string;
  linkTo?: string;
  children: any;
  onClick?: () => void;
}> = ({ others, children, linkTo, onClick }) => {
  return (
    <Link
      href={linkTo || ""}
      onClick={onClick}
      className={`inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${others}`}
    >
      {children}
    </Link>
  );
};
