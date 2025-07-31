import { Card } from "@/components/ui/card";

interface GroupPhotoProps {
  imageUrl: string;
  teamName: string;
  description: string;
}

export const GroupPhoto = ({ imageUrl, teamName, description }: GroupPhotoProps) => {
  return (
    <Card className="overflow-hidden shadow-lg border-primary/20">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt="APAL01-Group1 Team" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      {teamName || description ? (
        <div className="p-6 bg-gradient-to-r from-primary/5 to-academic-green/5">
          {teamName && <h3 className="text-2xl font-bold text-primary mb-2">{teamName}</h3>}
          {description && <p className="text-muted-foreground leading-relaxed">{description}</p>}
        </div>
      ) : null}
    </Card>
  );
};