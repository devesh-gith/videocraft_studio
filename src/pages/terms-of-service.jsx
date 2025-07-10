import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';
import Button from '../components/ui/Button';

const TermsOfService = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using VideoCraft Studio services, you agree to be bound by these Terms of Service",
        "These terms apply to all services, including video editing, consultation, and project delivery",
        "We reserve the right to modify these terms at any time with notice to clients",
        "Continued use of our services after changes constitutes acceptance of new terms"
      ]
    },
    {
      title: "Service Description",
      content: [
        "VideoCraft Studio provides professional video editing and post-production services",
        "Services include but are not limited to: video editing, color grading, motion graphics, and audio mixing",
        "We offer consultation services to help plan and execute video projects",
        "All services are provided on a project-by-project basis with custom quotes"
      ]
    },
    {
      title: "Project Terms",
      content: [
        "Projects begin upon receipt of 50% deposit payment",
        "Client must provide all necessary source materials and clear project requirements",
        "We include 3 rounds of revisions in standard project pricing",
        "Additional revisions are available at ₹12,500/hour",
        "Project timelines are estimates and may vary based on complexity and client feedback"
      ]
    },
    {
      title: "Payment Terms",
      content: [
        "50% deposit required to begin work on any project",
        "25% payment due upon rough cut approval",
        "Final 25% payment due upon project delivery",
        "All payments are in INR (Indian Rupees)",
        "Net 15 payment terms available for established clients",
        "Late payments may result in project delays or additional fees"
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "Client retains ownership of original source materials provided",
        "Final edited videos are delivered to client upon full payment",
        "VideoCraft Studio retains rights to use completed work in portfolio (with client permission)",
        "We do not claim ownership of client's intellectual property",
        "Client is responsible for ensuring they have rights to all source materials"
      ]
    },
    {
      title: "Client Responsibilities",
      content: [
        "Provide clear project requirements and feedback within agreed timelines",
        "Ensure all source materials are of adequate quality for editing",
        "Review and approve project milestones in a timely manner",
        "Provide necessary permissions for use of third-party content",
        "Maintain confidentiality of project details and pricing"
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "VideoCraft Studio's liability is limited to the amount paid for services",
        "We are not liable for indirect, incidental, or consequential damages",
        "We do not guarantee specific outcomes or results",
        "Client is responsible for backing up all project files",
        "Force majeure events may affect project timelines"
      ]
    },
    {
      title: "Cancellation and Refunds",
      content: [
        "Projects may be cancelled with written notice",
        "Deposits are non-refundable once work has begun",
        "Partial refunds may be available for cancelled projects based on work completed",
        "Cancellation fees may apply for projects in progress",
        "Refunds are processed within 15 business days"
      ]
    },
    {
      title: "Confidentiality",
      content: [
        "We maintain strict confidentiality of all client information and project details",
        "Non-disclosure agreements are available upon request",
        "Project files and communications are kept secure",
        "We do not share client information with third parties without permission",
        "Confidentiality obligations survive project completion"
      ]
    },
    {
      title: "Dispute Resolution",
      content: [
        "We prefer to resolve disputes through direct communication",
        "Mediation is the preferred method for resolving disagreements",
        "Legal action should be a last resort",
        "Gurugram, Haryana courts have jurisdiction over disputes",
        "These terms are governed by Indian law"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-conversion/10 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="FileText" size={16} />
              <span>Legal Terms</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These terms govern your use of VideoCraft Studio services. Please read them carefully 
              before engaging our services.
            </p>
            
            <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} />
                <span>Last updated: {new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Gurugram, Haryana, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-card rounded-2xl border border-border p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={index === 0 ? "CheckCircle" : index === 1 ? "Video" : index === 2 ? "Clipboard" : index === 3 ? "CreditCard" : index === 4 ? "Copyright" : index === 5 ? "UserCheck" : index === 6 ? "Shield" : index === 7 ? "RotateCcw" : index === 8 ? "Lock" : "Gavel"} size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
                    {section.title}
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-accent/10 to-conversion/10 rounded-2xl border border-accent/20 p-8 text-center">
            <Icon name="MessageCircle" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Questions About Terms?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have any questions about these Terms of Service or need clarification on any points, 
              please contact us. We're happy to explain anything that's unclear.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  variant="default"
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                  iconName="Mail"
                  iconPosition="left"
                  iconSize={16}
                >
                  Contact Us
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
                iconName="Download"
                iconPosition="left"
                iconSize={16}
                onClick={() => window.print()}
              >
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 