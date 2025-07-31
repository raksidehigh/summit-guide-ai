import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Database, MessageCircle, Gamepad2, Users, BookOpen, ExternalLink } from "lucide-react";

export const TechnicalApproach = () => {
  return (
    <div className="space-y-6">
      {/* AI/ML Architecture */}
      <Card className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
          <Cpu className="w-8 h-8 mr-3" />
          AI/ML Technical Architecture
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* RAG Implementation */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Database className="w-5 h-5 text-academic-blue" />
              <h4 className="font-semibold text-foreground">RAG (Retrieval-Augmented Generation)</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Vector database for university/course information</li>
              <li>• Semantic search for personalised recommendations</li>
              <li>• Real-time knowledge base updates</li>
              <li>• Context-aware response generation</li>
            </ul>
          </div>

          {/* ML Models */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Cpu className="w-5 h-5 text-academic-green" />
              <h4 className="font-semibold text-foreground">Predictive ML Models</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Admission probability prediction</li>
              <li>• Student-university compatibility scoring</li>
              <li>• Application timeline optimisation</li>
              <li>• Success rate forecasting</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Three Major Challenges */}
      <Card className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-6">Three Core Business Process Challenges</h3>
        
        <div className="grid gap-6">
          {/* Challenge 1 */}
          <div className="border-l-4 border-l-academic-blue p-4 bg-academic-blue/5">
            <div className="flex items-start space-x-4">
              <div className="text-academic-blue p-2 bg-academic-blue/10 rounded-lg">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Challenge 1: Comprehensive Student Profiling
                </h4>
                <p className="text-muted-foreground mb-3">
                  Capturing data points beyond obvious metrics (grades, budgets, test scores) to truly understand student personality, aspirations, and preferences.
                </p>
                <div className="bg-background p-3 rounded border">
                  <strong className="text-sm">Solution:</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Gamified profiling process with dating app-like interface for engaging data collection. 
                    Multi-dimensional personality assessment integrated seamlessly into user experience.
                  </p>
                  <div className="mt-2">
                    <a 
                      href="https://www.eduguide.co/gamified-visuals/gamified-visuals.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Gamified Interface Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge 2 */}
          <div className="border-l-4 border-l-academic-green p-4 bg-academic-green/5">
            <div className="flex items-start space-x-4">
              <div className="text-academic-green p-2 bg-academic-green/10 rounded-lg">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Challenge 2: Critical Thinking Development
                </h4>
                <p className="text-muted-foreground mb-3">
                  Training students to question and evaluate every aspect of their educational choices, 
                  including the true meaning and relevance of university rankings.
                </p>
                <div className="bg-background p-3 rounded border">
                  <strong className="text-sm">Solution:</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Socratic questioning methodology delivered through gamified modules. 
                    Partnership with Professor David Faulkner (Co-founder SAID Business School, Oxford MBA Director) 
                    for pedagogical framework development.
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Example Case Study:</span>
                    <a 
                      href="https://www.eduguide.co/case-studies/carbon-dioxide.php" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-academic-green hover:opacity-80 transition-opacity"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge 3 */}
          <div className="border-l-4 border-l-academic-orange p-4 bg-academic-orange/5">
            <div className="flex items-start space-x-4">
              <div className="text-academic-orange p-2 bg-academic-orange/10 rounded-lg">
                <Database className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Challenge 3: High-Quality Data Volume
                </h4>
                <p className="text-muted-foreground mb-3">
                  Acquiring sufficient accurate data to build robust ML models for admission prediction 
                  and personalised recommendations.
                </p>
                <div className="bg-background p-3 rounded border">
                  <strong className="text-sm">Solution:</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Multi-source data strategy: Student ambassador network, web scraping with human verification, 
                    CRM integration, and incentivized data contribution programs.
                  </p>
                  <div className="mt-2">
                    <a 
                      href="https://www.eduguide.co/student-data-collection.php" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Data Collection Portal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Technical Stack */}
      <Card className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-6">Technology Stack & Integration</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-academic-blue">AI/ML Technologies</h4>
            <div className="space-y-2">
              {["Large Language Models", "Vector Databases", "ML Pipeline (scikit-learn/PyTorch)", "Natural Language Processing"].map((tech, i) => (
                <Badge key={i} variant="outline" className="mr-2 border-academic-blue text-academic-blue">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-academic-green">Platform & Integration</h4>
            <div className="space-y-2">
              {["Web-based Interface", "WhatsApp Integration", "CRM System", "Mobile-first Design"].map((tech, i) => (
                <Badge key={i} variant="outline" className="mr-2 border-academic-green text-academic-green">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-academic-orange">Data & Analytics</h4>
            <div className="space-y-2">
              {["Real-time Analytics", "Data Scraping Tools", "Behavioral Tracking", "Predictive Modeling"].map((tech, i) => (
                <Badge key={i} variant="outline" className="mr-2 border-academic-orange text-academic-orange">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};