import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Users, Zap, MessageSquare, BarChart3, ExternalLink } from "lucide-react";

export const ProjectObjectives = () => {
  return (
    <div className="space-y-6">
      {/* Main Title */}
      <Card className="p-6 bg-gradient-to-r from-primary/10 to-academic-blue/10 border-primary/20">
        <div className="text-center">
          <Badge variant="outline" className="border-primary text-primary mb-4 px-4 py-2">
            AI-Powered Innovation
          </Badge>
          <h3 className="text-3xl font-bold text-primary mb-4">
            Hyper-Personalization & Decommoditization of International Higher Education Choices using AI
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Transforming the international education consulting landscape through AI-driven personalization, 
            eliminating commission bias, and making quality guidance accessible to all students.
          </p>
        </div>
      </Card>

      {/* Problem Statement */}
      <Card className="p-6">
        <h4 className="text-xl font-semibold text-destructive mb-4 flex items-center">
          <Target className="w-6 h-6 mr-2" />
          Problem Statement
        </h4>
        <div className="bg-destructive/5 p-4 rounded-lg mb-4">
          <p className="text-muted-foreground leading-relaxed">
            The international higher education consulting industry is dominated by commission-driven middlemen who 
            prioritize university partnerships over student welfare. Traditional counselors have sales targets, 
            while premium personalized services cost $6,000-$75,000, making quality guidance inaccessible to most students.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-destructive">85%</div>
            <div className="text-sm text-muted-foreground">Commission-driven decisions</div>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-destructive">$6K-$75K</div>
            <div className="text-sm text-muted-foreground">Premium consulting costs</div>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-destructive">Very High</div>
            <div className="text-sm text-muted-foreground">Generic advice prevalence</div>
          </div>
        </div>
      </Card>

      {/* Objectives */}
      <Card className="p-6">
        <h4 className="text-xl font-semibold text-primary mb-6 flex items-center">
          <Brain className="w-6 h-6 mr-2" />
          Project Objectives
        </h4>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <Users className="w-6 h-6" />,
              title: "Hyper-Personalized Matching",
              description: "AI-driven student profiling beyond grades and scores to understand personality, preferences, and aspirations",
              color: "academic-blue"
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Predictive Analytics",
              description: "ML models to predict admission probabilities and optimize application strategies",
              color: "academic-green"
            },
            {
              icon: <MessageSquare className="w-6 h-6" />,
              title: "Gamified Learning",
              description: "Socratic questioning models and dating app-like interfaces for engaging data collection",
              color: "academic-orange"
            },
            {
              icon: <BarChart3 className="w-6 h-6" />,
              title: "Accessible Premium Service",
              description: "Democratize high-quality consulting through AI automation and efficiency. Using university, students and professors",
              color: "academic-purple"
            }
          ].map((objective, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className={`${
                objective.color === 'academic-blue' ? 'text-academic-blue bg-academic-blue/10' :
                objective.color === 'academic-green' ? 'text-academic-green bg-academic-green/10' :
                objective.color === 'academic-orange' ? 'text-academic-orange bg-academic-orange/10' :
                'text-academic-purple bg-academic-purple/10'
              } p-2 rounded-lg`}>
                {objective.icon}
              </div>
              <div>
                <h5 className="font-semibold text-foreground mb-2">{objective.title}</h5>
                <p className="text-sm text-muted-foreground">{objective.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Success Metrics */}
      <Card className="p-6 bg-gradient-to-r from-academic-green/10 to-primary/10">
        <h4 className="text-xl font-semibold text-primary mb-4">Expected Outcomes</h4>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-academic-green">90%</div>
            <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-academic-blue">75%</div>
            <div className="text-sm text-muted-foreground">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-academic-orange">Instant</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Roadmap Generation
              <a href="https://www.eduguide.co/kyo-report/samridhi-srivastava/2085/" target="_blank" rel="noopener noreferrer" className="text-academic-orange hover:opacity-80 transition-opacity">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-academic-purple">Dynamic</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Rerouting Enabled Roadmap
              <a href="https://www.eduguide.co/dishita-roadmap.html" target="_blank" rel="noopener noreferrer" className="text-academic-purple hover:opacity-80 transition-opacity">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};