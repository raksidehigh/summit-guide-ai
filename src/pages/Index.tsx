import { PresentationHeader } from "@/components/PresentationHeader";
import { GroupPhoto } from "@/components/GroupPhoto";
import { BusinessOverview } from "@/components/BusinessOverview";
import { ProjectObjectives } from "@/components/ProjectObjectives";
import { TechnicalApproach } from "@/components/TechnicalApproach";
import { ProcessFlowchart } from "@/components/ProcessFlowchart";
import { DataCollection } from "@/components/DataCollection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <PresentationHeader 
          title="EduGenie: AI-Powered Education Pathfinder"
          subtitle="Revolutionizing International Higher Education through Intelligent Personalization"
          institution="Indian Institute of Management Calcutta"
          program="Advanced Programme in AI for Leaders (APAL01)"
          group="Group 1 - Capstone Project Proposal"
        />
      </div>

      {/* Team Photo */}
      <div className="container mx-auto px-4 py-6">
        <GroupPhoto 
          imageUrl="/lovable-uploads/8f6d384f-f720-459c-af6f-123da1a43cc9.png"
          teamName=""
          description=""
        />
      </div>

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 space-y-12 pb-16">
        {/* Section 1: Business Overview */}
        <section id="business-overview">
          <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-primary/20 pb-2">
            1. Business Background
          </h2>
          <BusinessOverview />
        </section>

        {/* Section 2: Project Objectives */}
        <section id="project-objectives">
          <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-primary/20 pb-2">
            2. Project Title & Objectives
          </h2>
          <ProjectObjectives />
        </section>

        {/* Section 3: Technical Approach */}
        <section id="technical-approach">
          <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-primary/20 pb-2">
            3. Technical Approach & Methodology
          </h2>
          <TechnicalApproach />
          <div className="mt-8">
            <ProcessFlowchart />
          </div>
        </section>

        {/* Section 4: Data Collection */}
        <section id="data-collection">
          <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-primary/20 pb-2">
            4. Data Collection Strategy
          </h2>
          <DataCollection />
        </section>
      </div>
    </div>
  );
};

export default Index;
