import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const ChartCard = ({ title, icon, children }: ChartCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          {icon && icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ChartCard;
