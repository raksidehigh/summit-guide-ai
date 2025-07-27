import { Card } from "@/components/ui/card";

interface PresentationHeaderProps {
  title: string;
  subtitle?: string;
  institution: string;
  program: string;
  group: string;
}

export const PresentationHeader = ({ title, subtitle, institution, program, group }: PresentationHeaderProps) => {
  return (
    <Card className="bg-gradient-to-br from-primary/10 to-academic-blue/10 border-primary/20 shadow-lg">
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">{title}</h1>
        {subtitle && <p className="text-xl text-muted-foreground mb-4">{subtitle}</p>}
        <div className="space-y-2">
          <p className="text-lg font-semibold text-academic-blue">{institution}</p>
          <p className="text-base text-foreground">{program}</p>
          <p className="text-base text-primary font-medium">{group}</p>
        </div>
      </div>
    </Card>
  );
};