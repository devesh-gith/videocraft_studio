import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';
import Button from '../components/ui/Button';

const CookiePolicy = () => {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly",
      purpose: "Enable core functionality like navigation, security, and basic features",
      duration: "Session or up to 1 year",
      examples: ["Authentication cookies", "Security tokens", "Session management"],
      canDisable: false
    },
    {
      name: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website",
      purpose: "Improve website performance and user experience",
      duration: "Up to 2 years",
      examples: ["Google Analytics", "Page view tracking", "User behavior analysis"],
      canDisable: true
    },
    {
      name: "Functional Cookies",
      description: "Remember your preferences and provide enhanced features",
      purpose: "Personalize your experience and save your settings",
      duration: "Up to 1 year",
      examples: ["Language preferences", "Theme settings", "Form data"],
      canDisable: true
    },
    {
      name: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and track campaign performance",
      purpose: "Show you relevant content and measure advertising effectiveness",
      duration: "Up to 2 years",
      examples: ["Social media pixels", "Ad tracking", "Retargeting"],
      canDisable: true
    }
  ];

  const thirdPartyServices = [
    {
      name: "Google Analytics",
      purpose: "Website analytics and performance tracking",
      dataCollected: "Page views, user behavior, device information",
      privacyPolicy: "https://policies.google.com/privacy"
    },
    {
      name: "Google Maps",
      purpose: "Location services and directions",
      dataCollected: "Location data, IP address",
      privacyPolicy: "https://policies.google.com/privacy"
    },
    {
      name: "Payment Processors",
      purpose: "Secure payment processing",
      dataCollected: "Payment information, transaction details",
      privacyPolicy: "Varies by processor"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-conversion/10 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Cookie" size={16} />
              <span>Cookie Policy</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
              Cookie Policy
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              This policy explains how VideoCraft Studio uses cookies and similar technologies 
              to enhance your browsing experience and improve our services.
            </p>
            
            <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} />
                <span>Last updated: {new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} />
                <span>Applies to all visitors</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* What are Cookies */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Info" size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
                  What Are Cookies?
                </h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                analyzing how you use our site, and personalizing content.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We use both session cookies (which expire when you close your browser) and persistent 
                cookies (which remain on your device for a set period) to enhance your experience.
              </p>
            </div>
          </div>

          {/* Cookie Types */}
          <div className="space-y-6">
            <h2 className="text-3xl font-headline font-bold text-foreground text-center mb-8">
              Types of Cookies We Use
            </h2>
            
            {cookieTypes.map((cookie, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={index === 0 ? "Shield" : index === 1 ? "BarChart3" : index === 2 ? "Settings" : "Target"} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-headline font-bold text-foreground mb-2">
                        {cookie.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {cookie.description}
                      </p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cookie.canDisable 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {cookie.canDisable ? 'Optional' : 'Required'}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Purpose</h4>
                    <p className="text-sm text-muted-foreground">{cookie.purpose}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Duration</h4>
                    <p className="text-sm text-muted-foreground">{cookie.duration}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-foreground mb-2">Examples</h4>
                  <div className="flex flex-wrap gap-2">
                    {cookie.examples.map((example, exampleIndex) => (
                      <span key={exampleIndex} className="px-3 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third Party Services */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="ExternalLink" size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
                  Third-Party Services
                </h2>
                <p className="text-muted-foreground">
                  We use third-party services that may set their own cookies
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {thirdPartyServices.map((service, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{service.name}</h4>
                    <a 
                      href={service.privacyPolicy} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 text-sm flex items-center space-x-1"
                    >
                      <span>Privacy Policy</span>
                      <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{service.purpose}</p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Data collected:</strong> {service.dataCollected}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cookie Management */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="Settings" size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
                  Managing Your Cookie Preferences
                </h2>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Browser Settings</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Chrome: Settings → Privacy and security → Cookies</p>
                    <p>• Firefox: Options → Privacy & Security → Cookies</p>
                    <p>• Safari: Preferences → Privacy → Cookies</p>
                    <p>• Edge: Settings → Cookies and permissions</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What You Can Control</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Accept or reject all cookies</p>
                    <p>• Delete existing cookies</p>
                    <p>• Set preferences for specific sites</p>
                    <p>• Block third-party cookies</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="AlertTriangle" size={20} className="text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Important Note</h4>
                    <p className="text-sm text-muted-foreground">
                      Disabling certain cookies may affect website functionality. Essential cookies 
                      cannot be disabled as they are required for the site to work properly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-accent/10 to-conversion/10 rounded-2xl border border-accent/20 p-8 text-center">
            <Icon name="MessageCircle" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Questions About Cookies?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have questions about our use of cookies or need help managing your preferences, 
              please don't hesitate to contact us.
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
              <Link to="/privacy-policy">
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10"
                  iconName="Shield"
                  iconPosition="left"
                  iconSize={16}
                >
                  Privacy Policy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 