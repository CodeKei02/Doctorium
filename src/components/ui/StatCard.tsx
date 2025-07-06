import { Card } from "../ui/Card";
interface StatCardProps {
  title: string;
  number: number;
  icon?: string;
  color?: string;
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
  color,
  children,
}: StatCardProps) => {
  return (
    <Card>
      <div className="flex-col items-center justify-between md:grid-cols-2">
        <div className="flex items-center gap-2 justify-between">
          <h3 className="tracking-tight text-sm font-medium text-gray-600">
            {title}
          </h3>
          <svg className={`w-4 h-4 ${color}`}>
            <use href={icon} />
          </svg>
        </div>
        <span className="text-2xl font-bold">{number}</span>
        {trend ? (
          <div className="flex items-center gap-1 text-emerald-600">
            <svg className="h-3 w-3 mr-1 text-emerald-600">
              <use href="/images/sprite.svg#trending-up-icon" />
            </svg>
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
