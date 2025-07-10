import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';
import Button from '../components/ui/Button';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number) when you contact us or book consultations",
        "Project details and requirements you share with us",
        "Communication history and feedback you provide",
        "Website usage data and analytics (cookies, IP address, browser type)",
        "Payment information processed securely through our payment partners"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide video editing services and fulfill project requirements",
        "To communicate with you about your projects and consultations",
        "To send project updates, invoices, and delivery confirmations",
        "To improve our services and website functionality",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share information with trusted service providers who assist in our operations",
        "Information may be disclosed if required by law or to protect our rights",
        "We ensure all third-party partners maintain strict confidentiality standards"
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your information",
        "All data is encrypted during transmission and storage",
        "Regular security audits and updates are performed",
        "Access to personal information is limited to authorized personnel only"
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Access and review your personal information",
        "Request corrections or updates to your data",
        "Request deletion of your personal information",
        "Opt-out of marketing communications",
        "File a complaint with relevant authorities"
      ]
    },
    {
      title: "Cookies and Tracking",
      content: [
        "We use cookies to improve website functionality and user experience",
        "Analytics cookies help us understand website usage patterns",
        "You can control cookie settings through your browser preferences",
        "Third-party cookies may be used for payment processing and analytics"
      ]
    },
    {
      title: "Data Retention",
      content: [
        "Project files and communications are retained for 3 years",
        "Financial records are kept for 7 years as required by law",
        "Marketing data is retained until you opt-out",
        "You may request deletion of your data at any time"
      ]
    },
    {
      title: "International Transfers",
      content: [
        "Your data may be processed in countries other than your residence",
        "We ensure adequate protection measures are in place",
        "All transfers comply with applicable data protection laws",
        "We maintain the same level of protection regardless of location"
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
              <Icon name="Shield" size={16} />
              <span>Privacy & Security</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            
            <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} />
                <span>Last updated: {new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Eye" size={16} />
                <span>Effective immediately</span>
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
                  <Icon name={index === 0 ? "User" : index === 1 ? "Settings" : index === 2 ? "Share2" : index === 3 ? "Lock" : index === 4 ? "CheckCircle" : index === 5 ? "Cookie" : index === 6 ? "Clock" : "Globe"} size={24} className="text-primary" />
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
              Questions About Privacy?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or how we handle your data, 
              please don't hesitate to contact us. We're here to help.
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

export default PrivacyPolicy; 