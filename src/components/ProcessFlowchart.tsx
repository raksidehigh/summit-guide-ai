import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FlowStep {
  id: string;
  title: string;
  description: string;
  phase: string;
  timeline: string;
  color: string;
}

const flowSteps: FlowStep[] = [
  {
    id: "1",
    title: "Concept Building & Experimentation",
    description: "Maximise engagement through gamification and Socratic questioning models",
    phase: "Phase 1",
    timeline: "June-Aug 2025",
    color: "academic-blue"
  },
  {
    id: "2", 
    title: "Data Collection",
    description: "Student profiling data and historical admission patterns from top 100 universities",
    phase: "Phase 2",
    timeline: "Sep-Oct 2025",
    color: "academic-green"
  },
  {
    id: "3",
    title: "ML Model Development",
    description: "RAG implementation and predictive models for admission probability",
    phase: "Phase 3", 
    timeline: "Nov 2025",
    color: "academic-orange"
  },
  {
    id: "4",
    title: "Deployment & Feedback Loop",
    description: "Web interface deployment with WhatsApp integration and iterative improvements",
    phase: "Phase 4",
    timeline: "Nov-Dec 2025",
    color: "academic-purple"
  },
  {
    id: "5",
    title: "Capstone Report Generation",
    description: "Comprehensive analysis and documentation of results and insights",
    phase: "Phase 5",
    timeline: "Dec 2025",
    color: "primary"
  }
];

export const ProcessFlowchart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold text-primary mb-6">Project Implementation Roadmap</h3>
      <div className="space-y-4">
        {flowSteps.map((step, index) => (
          <div key={step.id} className="relative">
            {/* Connector Line */}
            {index < flowSteps.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-8 bg-border"></div>
            )}
            
            <div className="flex items-start space-x-4">
              {/* Phase Number */}
              <div className={`w-12 h-12 rounded-full ${
                step.color === 'academic-blue' ? 'bg-academic-blue/10 border-academic-blue' :
                step.color === 'academic-green' ? 'bg-academic-green/10 border-academic-green' :
                step.color === 'academic-orange' ? 'bg-academic-orange/10 border-academic-orange' :
                step.color === 'academic-purple' ? 'bg-academic-purple/10 border-academic-purple' :
                'bg-primary/10 border-primary'
              } border-2 flex items-center justify-center flex-shrink-0`}>
                <span className={`${
                  step.color === 'academic-blue' ? 'text-academic-blue' :
                  step.color === 'academic-green' ? 'text-academic-green' :
                  step.color === 'academic-orange' ? 'text-academic-orange' :
                  step.color === 'academic-purple' ? 'text-academic-purple' :
                  'text-primary'
                } font-bold`}>{step.id}</span>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Badge variant="outline" className={`${
                    step.color === 'academic-blue' ? 'border-academic-blue text-academic-blue' :
                    step.color === 'academic-green' ? 'border-academic-green text-academic-green' :
                    step.color === 'academic-orange' ? 'border-academic-orange text-academic-orange' :
                    step.color === 'academic-purple' ? 'border-academic-purple text-academic-purple' :
                    'border-primary text-primary'
                  }`}>
                    {step.phase}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{step.timeline}</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-1">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};