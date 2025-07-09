import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CredentialsSection = () => {
  const [activeCategory, setActiveCategory] = useState('certifications');

  const categories = [
    { id: 'certifications', label: 'Certifications', icon: 'Award' },
    { id: 'awards', label: 'Awards', icon: 'Trophy' },
    { id: 'memberships', label: 'Memberships', icon: 'Users' },
    { id: 'education', label: 'Education', icon: 'GraduationCap' }
  ];

  const certifications = [
    {
      title: "Adobe Certified Expert - Premiere Pro",
      issuer: "Adobe Systems",
      date: "2023",
      status: "Active",
      verificationId: "ACE-PP-2023-AR-001",
      description: "Advanced proficiency in video editing, color correction, and audio mixing using Adobe Premiere Pro.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "DaVinci Resolve Certified Colorist",
      issuer: "Blackmagic Design",
      date: "2022",
      status: "Active",
      verificationId: "BMD-DRC-2022-AR-045",
      description: "Professional color grading and correction certification for high-end video production.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Avid Media Composer Professional",
      issuer: "Avid Technology",
      date: "2021",
      status: "Active",
      verificationId: "AVID-MCP-2021-AR-123",
      description: "Industry-standard editing certification for professional film and television production.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const awards = [
    {
      title: "Best Video Editing - Webby Awards",
      category: "Digital Marketing Campaign",
      year: "2024",
      project: "TechStart Solutions Brand Story",
      description: "Recognized for innovative storytelling approach in B2B marketing video that achieved 500% engagement increase.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Gold Medal - Local Film Festival",
      category: "Documentary Short",
      year: "2023",
      project: "Community Voices Documentary",
      description: "Award-winning editing of 15-minute documentary showcasing local community impact stories.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Excellence in Post-Production",
      category: "Corporate Video",
      year: "2022",
      project: "Annual Report Video Series",
      description: "Recognized for technical excellence and creative approach in corporate storytelling.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const memberships = [
    {
      organization: "Motion Picture Editors Guild",
      role: "Professional Member",
      since: "2020",
      status: "Active",
      description: "Professional association for film and television editors, providing industry standards and networking.",
      benefits: ["Industry networking", "Professional development", "Standards advocacy"]
    },
    {
      organization: "American Cinema Editors",
      role: "Associate Member",
      since: "2021",
      status: "Active",
      description: "Honorary society of film editors dedicated to advancing the art and craft of editing.",
      benefits: ["Mentorship programs", "Industry events", "Technical resources"]
    },
    {
      organization: "Video Professionals Association",
      role: "Board Member",
      since: "2022",
      status: "Active",
      description: "Local professional organization promoting excellence in video production and post-production.",
      benefits: ["Leadership role", "Community outreach", "Industry advocacy"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Fine Arts in Film Production",
      institution: "California Institute of the Arts",
      year: "2016",
      gpa: "3.8/4.0",
      focus: "Post-Production and Editing",
      achievements: ["Dean's List (4 semesters)", "Outstanding Student in Post-Production", "Film Festival Winner"]
    },
    {
      degree: "Certificate in Advanced Color Grading",
      institution: "New York Film Academy",
      year: "2019",
      focus: "Professional Color Correction",
      achievements: ["Top 5% of class", "Industry mentor program participant"]
    },
    {
      degree: "Continuing Education - AI in Video Production",
      institution: "Stanford Online",
      year: "2024",
      focus: "Emerging Technologies",
      achievements: ["Course completion with distinction", "Research project on AI-assisted editing"]
    }
  ];

  const renderContent = () => {
    switch (activeCategory) {
      case 'certifications':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card rounded-xl p-6 cinematic-shadow">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{cert.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'Active' ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'
                  }`}>
                    {cert.status}
                  </span>
                </div>
                
                <p className="text-sm text-accent font-medium mb-2">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Issued:</span>
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ID:</span>
                    <span className="font-mono">{cert.verificationId}</span>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4"
                  iconName="ExternalLink"
                  iconPosition="right"
                  iconSize={14}
                >
                  Verify Certificate
                </Button>
              </div>
            ))}
          </div>
        );

      case 'awards':
        return (
          <div className="space-y-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-card rounded-xl p-6 cinematic-shadow">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:col-span-3">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">{award.title}</h3>
                        <p className="text-accent font-medium">{award.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-2">
                          <Icon name="Trophy" size={24} color="var(--color-accent)" />
                        </div>
                        <span className="text-sm font-bold text-foreground">{award.year}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">{award.description}</p>
                    
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Film" size={16} color="var(--color-muted-foreground)" />
                      <span className="text-muted-foreground">Project: {award.project}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'memberships':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {memberships.map((membership, index) => (
              <div key={index} className="bg-card rounded-xl p-6 cinematic-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {membership.organization}
                    </h3>
                    <p className="text-accent font-medium">{membership.role}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    membership.status === 'Active' ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'
                  }`}>
                    {membership.status}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{membership.description}</p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium text-foreground">Member Benefits:</h4>
                  <ul className="space-y-1">
                    {membership.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-xs text-muted-foreground">
                  Member since: <span className="font-medium">{membership.since}</span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-card rounded-xl p-6 cinematic-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-accent font-medium">{edu.institution}</p>
                    {edu.focus && <p className="text-sm text-muted-foreground">Focus: {edu.focus}</p>}
                  </div>
                  <div className="text-right">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-2">
                      <Icon name="GraduationCap" size={24} color="var(--color-accent)" />
                    </div>
                    <span className="text-sm font-bold text-foreground">{edu.year}</span>
                    {edu.gpa && <p className="text-xs text-muted-foreground">GPA: {edu.gpa}</p>}
                  </div>
                </div>
                
                {edu.achievements && (
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Shield" size={16} />
            <span>Professional Credentials</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-6">
            Verified Expertise
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized certifications, awards, and professional memberships that validate my commitment to excellence and continuous learning.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium smooth-transition ${
                activeCategory === category.id
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card text-foreground hover:bg-accent/10 hover:text-accent'
              }`}
            >
              <Icon name={category.icon} size={18} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {renderContent()}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-card rounded-2xl p-8 cinematic-shadow">
          <div className="text-center mb-8">
            <h3 className="text-xl font-headline font-bold text-foreground mb-2">
              Commitment to Excellence
            </h3>
            <p className="text-muted-foreground">
              All certifications are current and verifiable through official channels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mb-3">
                <Icon name="CheckCircle" size={24} color="var(--color-success)" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Verified Credentials</h4>
              <p className="text-sm text-muted-foreground">All certifications verified through official channels</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-3">
                <Icon name="RefreshCw" size={24} color="var(--color-accent)" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Continuous Learning</h4>
              <p className="text-sm text-muted-foreground">Regular updates and new certifications</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-trust/20 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Globe" size={24} color="var(--color-trust)" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Industry Standards</h4>
              <p className="text-sm text-muted-foreground">Adherence to global industry best practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;