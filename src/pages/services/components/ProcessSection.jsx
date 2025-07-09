import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Strategy",
      icon: "Search",
      duration: "1-2 Days",
      description: "We dive deep into your brand, objectives, and target audience to craft a tailored video strategy.",
      details: [
        "Brand analysis and competitive research",
        "Target audience identification and persona development",
        "Content strategy and messaging framework",
        "Technical requirements and platform specifications"
      ],
      deliverables: ["Creative Brief", "Project Timeline", "Resource Requirements"]
    },
    {
      id: 2,
      title: "Pre-Production",
      icon: "FileText",
      duration: "3-5 Days",
      description: "Detailed planning and preparation to ensure smooth production and exceptional results.",
      details: [
        "Script development and storyboard creation",
        "Location scouting and talent casting",
        "Equipment planning and crew coordination",
        "Shot list creation and production schedule"
      ],
      deliverables: ["Final Script", "Storyboard", "Production Schedule"]
    },
    {
      id: 3,
      title: "Production",
      icon: "Video",
      duration: "1-3 Days",
      description: "Professional filming with state-of-the-art equipment and experienced crew.",
      details: [
        "Multi-camera setup and professional lighting",
        "High-quality audio recording and monitoring",
        "B-roll capture and supplementary footage",
        "Real-time quality control and backup systems"
      ],
      deliverables: ["Raw Footage", "Audio Files", "Production Notes"]
    },
    {
      id: 4,
      title: "Post-Production",
      icon: "Edit",
      duration: "5-10 Days",
      description: "Expert editing, color grading, and sound design to bring your vision to life.",
      details: [
        "Video editing and story assembly",
        "Color correction and grading",
        "Audio mixing and sound design",
        "Motion graphics and visual effects"
      ],
      deliverables: ["First Cut", "Revised Versions", "Final Master"]
    },
    {
      id: 5,
      title: "Review & Refinement",
      icon: "Eye",
      duration: "2-3 Days",
      description: "Collaborative review process with unlimited revisions until you\'re completely satisfied.",
      details: [
        "Client review and feedback collection",
        "Revision implementation and fine-tuning",
        "Quality assurance and technical validation",
        "Final approval and sign-off process"
      ],
      deliverables: ["Review Versions", "Revision Notes", "Final Approval"]
    },
    {
      id: 6,
      title: "Delivery & Support",
      icon: "Download",
      duration: "1 Day",
      description: "Final delivery in all required formats with ongoing support and optimization.",
      details: [
        "Multi-format export and optimization",
        "Platform-specific versions and sizing",
        "Asset delivery and file organization",
        "Usage guidelines and best practices"
      ],
      deliverables: ["Final Videos", "Source Files", "Usage Guide"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Workflow" size={16} />
            <span>Our Process</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground mb-6">
            From Concept to
            <span className="text-accent"> Completion</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 6-step process ensures every project delivers exceptional results on time and within budget.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-conversion to-trust hidden md:block"></div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative cursor-pointer transition-all duration-500 ${
                  activeStep === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStep(activeStep === index ? -1 : index)}
              >
                {/* Step Number */}
                <div className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-accent text-primary shadow-lg shadow-accent/30'
                    : 'bg-muted text-muted-foreground'
                } hidden md:flex`}>
                  {step.id}
                </div>

                {/* Step Content */}
                <div className={`md:ml-24 bg-card rounded-2xl border transition-all duration-300 ${
                  activeStep === index
                    ? 'border-accent shadow-xl shadow-accent/10'
                    : 'border-border hover:border-accent/30'
                }`}>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          activeStep === index ? 'bg-accent text-primary' : 'bg-accent/10 text-accent'
                        } transition-all duration-300`}>
                          <Icon name={step.icon} size={24} />
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-headline font-bold text-foreground">
                            {step.title}
                          </h3>
                          <div className="text-sm text-accent font-medium">
                            {step.duration}
                          </div>
                        </div>
                      </div>
                      
                      <Icon
                        name={activeStep === index ? "ChevronUp" : "ChevronDown"}
                        size={20}
                        className="text-muted-foreground"
                      />
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>

                    {/* Expanded Details */}
                    {activeStep === index && (
                      <div className="space-y-6 border-t border-border pt-6">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-4">
                              What We Do
                            </h4>
                            <ul className="space-y-3">
                              {step.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start space-x-3">
                                  <Icon name="ArrowRight" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-4">
                              Deliverables
                            </h4>
                            <div className="space-y-3">
                              {step.deliverables.map((deliverable, idx) => (
                                <div key={idx} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                                  <Icon name="CheckCircle" size={16} className="text-success" />
                                  <span className="text-sm font-medium text-foreground">{deliverable}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;