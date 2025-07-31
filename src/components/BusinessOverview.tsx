import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Target, Award, TrendingUp } from "lucide-react";

export const BusinessOverview = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-start space-x-4 mb-6">
          <div className="text-primary">
            <Globe className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              <a href="https://www.eduguide.co" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                EduGuide.co
              </a>
            </h3>
            <Badge variant="outline" className="border-academic-green text-academic-green mb-3">
              International Higher Education Consulting
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Company Overview */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Company Profile</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-academic-blue" />
                <span><strong>Focus:</strong> World Top 100 Universities</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-academic-green" />
                <span><strong>Model:</strong> Mentor & Academician-driven Consulting</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-academic-orange" />
                <span><strong>USP:</strong> Zero University Partnerships (Bias-free)</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-academic-purple" />
                <span><strong>Stage:</strong> Early-stage Startup</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Core Services</h4>
            <div className="space-y-2">
              {[
                "Profile Evaluation & Assessment",
                "Personalized Profile Building Roadmap", 
                "Application Strategy & Guidance",
                "University Enrollment Assistance",
                "Mentorship from Academic Experts"
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Market Problem */}
      <Card className="p-6 border-l-4 border-l-destructive/50">
        <h4 className="text-xl font-semibold text-destructive mb-4">Industry Challenges</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-destructive/5 p-4 rounded-lg">
            <h5 className="font-semibold text-foreground mb-2">Commission-Driven Bias</h5>
            <p className="text-sm text-muted-foreground">Middlemen prioritize university commissions over student needs</p>
          </div>
          <div className="bg-destructive/5 p-4 rounded-lg">
            <h5 className="font-semibold text-foreground mb-2">Accessibility Gap</h5>
            <p className="text-sm text-muted-foreground">Premium consulting costs $6K-$75K, excluding most students</p>
          </div>
          <div className="bg-destructive/5 p-4 rounded-lg">
            <h5 className="font-semibold text-foreground mb-2">Lack of Personalization</h5>
            <p className="text-sm text-muted-foreground">Generic advice ignoring individual preferences and personality</p>
          </div>
        </div>
      </Card>
    </div>
  );
};