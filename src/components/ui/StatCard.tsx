import { Card } from "../ui/Card";
import { MuiIcon, MuiIconName } from "./MuiIcon";

interface StatCardProps {
  title: string;
  number: number;
  icon: MuiIconName;
  trend?: {
    percentage: number;
    label: string;
  };
  children?: React.ReactElement | string;
}

export const StatCard = ({
  title,
  number,
  icon,
  trend,
  children,
}: StatCardProps) => {
  return (
    <Card>
      <div className="flex-col items-center justify-between md:grid-cols-2">
        <div className="flex items-center gap-2 justify-between">
          <h3 className="tracking-tight text-sm font-medium text-gray-600">
            {title}
          </h3>
          <MuiIcon name={icon} />
        </div>
        <span className="text-2xl font-bold">{number}</span>
        {trend ? (
          <div className="flex items-center gap-1 text-emerald-600">
            <MuiIcon name="TrendingUp" />
            <span>
              {trend.percentage > 0 ? "+" : ""}
              {trend.percentage}% {trend.label}
            </span>
          </div>
        ) : (
          <div>{children}</div>
        )}
      </div>
    </Card>
  );
};
