import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Database, Search, Target } from "lucide-react";

interface DataType {
  icon: React.ReactNode;
  title: string;
  description: string;
  method: string;
  status: string;
  color: string;
}

const dataTypes: DataType[] = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Historical Student Profiles",
    description: "Profile data of selected students from India enrolled in world top 100 universities over past 2-3 years",
    method: "Student ambassadors + profiling games with incentives",
    status: "In Progress",
    color: "academic-blue"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Course Information & Guidelines", 
    description: "Comprehensive course data and eligibility criteria from target universities",
    method: "Data scraping + human verification (4-person team)",
    status: "Starting Sept 1",
    color: "academic-green"
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Current Applicant Data",
    description: "Ongoing applicant profiles, preferences, and interaction patterns",
    method: "CRM integration + gamified data collection",
    status: "Continuous",
    color: "academic-orange"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "University Admission Patterns",
    description: "Historical admission trends, acceptance rates, and decision factors",
    method: "Multi-source aggregation + ML pattern recognition",
    status: "Planning",
    color: "academic-purple"
  }
];

export const DataCollection = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-6">Data Collection Strategy</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {dataTypes.map((dataType, index) => (
            <Card key={index} className="p-4 border-l-4 border-l-primary/30 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-3">
                <div className={`${
                  dataType.color === 'academic-blue' ? 'text-academic-blue bg-academic-blue/10' :
                  dataType.color === 'academic-green' ? 'text-academic-green bg-academic-green/10' :
                  dataType.color === 'academic-orange' ? 'text-academic-orange bg-academic-orange/10' :
                  'text-academic-purple bg-academic-purple/10'
                } p-2 rounded-lg`}>
                  {dataType.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{dataType.title}</h4>
                    <Badge variant="outline" className={`${
                      dataType.color === 'academic-blue' ? 'border-academic-blue text-academic-blue' :
                      dataType.color === 'academic-green' ? 'border-academic-green text-academic-green' :
                      dataType.color === 'academic-orange' ? 'border-academic-orange text-academic-orange' :
                      'border-academic-purple text-academic-purple'
                    }`}>
                      {dataType.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{dataType.description}</p>
                  <div className="bg-muted/50 p-2 rounded text-xs">
                    <strong>Method:</strong> {dataType.method}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Data Volume Expectations */}
      <Card className="p-6">
        <h4 className="text-xl font-semibold text-primary mb-4">Expected Data Volume & Quality</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-academic-blue/10 rounded-lg">
            <div className="text-2xl font-bold text-academic-blue">2,500+</div>
            <div className="text-sm text-muted-foreground">Student Profiles</div>
          </div>
          <div className="text-center p-4 bg-academic-green/10 rounded-lg">
            <div className="text-2xl font-bold text-academic-green">100</div>
            <div className="text-sm text-muted-foreground">Universities Covered</div>
          </div>
          <div className="text-center p-4 bg-academic-orange/10 rounded-lg">
            <div className="text-2xl font-bold text-academic-orange">50,000+</div>
            <div className="text-sm text-muted-foreground">Course Records</div>
          </div>
        </div>
      </Card>
    </div>
  );
};