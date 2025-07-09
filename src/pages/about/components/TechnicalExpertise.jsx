import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const TechnicalExpertise = () => {
  const [activeCategory, setActiveCategory] = useState('software');

  const categories = [
    { id: 'software', label: 'Software Mastery', icon: 'Monitor' },
    { id: 'equipment', label: 'Equipment', icon: 'Camera' },
    { id: 'trends', label: 'Industry Trends', icon: 'TrendingUp' },
    { id: 'skills', label: 'Core Skills', icon: 'Zap' }
  ];

  const software = [
    {
      name: "Adobe Premiere Pro",
      proficiency: 80,
      experience: "3 years",
      certification: "Intermediate",
      description: "Versatile editing platform for all types of video projects. Comfortable with timeline editing, effects, and export workflows.",
      features: ["Multi-cam editing", "Color correction", "Audio mixing", "Motion graphics integration", "Transitions", "Keyframing", "Speed ramping", "Subtitles"],
      icon: "Play"
    },
    {
      name: "DaVinci Resolve",
      proficiency: 70,
      experience: "2 years",
      certification: "Intermediate",
      description: "Professional color grading and editing. Familiar with node-based color workflows and Fairlight audio.",
      features: ["Color grading", "Fusion VFX", "Audio mixing", "Masking", "Timeline editing", "Transitions"],
      icon: "Palette"
    },
    {
      name: "VN Video Editor",
      proficiency: 75,
      experience: "2 years",
      certification: "Intermediate",
      description: "Mobile and desktop editor for quick edits, social media content, and creative effects.",
      features: ["Transitions", "Speed ramping", "Filters", "Text overlays", "Music sync", "Templates"],
      icon: "Smartphone"
    },
    {
      name: "CapCut",
      proficiency: 75,
      experience: "2 years",
      certification: "Intermediate",
      description: "Popular for social media video creation, effects, and quick edits.",
      features: ["Auto-captions", "Filters", "Transitions", "Stickers", "Music library", "AI effects"],
      icon: "Film"
    }
  ];

  const equipment = [
    {
      category: "Workstation",
      items: [
        { name: "MacBook Pro M2 Max", specs: "32GB RAM, 2TB SSD", purpose: "Primary editing workstation" },
        { name: "Mac Studio M1 Ultra", specs: "64GB RAM, 4TB SSD", purpose: "Heavy rendering and color work" },
        { name: "Custom PC Build", specs: "RTX 4080, 64GB RAM", purpose: "Windows-specific workflows" }
      ]
    },
    {
      category: "Displays",
      items: [
        { name: "LG UltraFine 5K", specs: "27-inch, P3 color space", purpose: "Color-accurate editing" },
        { name: "ASUS ProArt Display", specs: "32-inch, 4K HDR", purpose: "HDR content creation" },
        { name: "Dual 4K Monitors", specs: "Dell UltraSharp series", purpose: "Extended workspace" }
      ]
    },
    {
      category: "Audio",
      items: [
        { name: "Audio-Technica ATH-M50x", specs: "Professional headphones", purpose: "Audio editing and mixing" },
        { name: "Yamaha HS8 Monitors", specs: "Studio monitors", purpose: "Accurate audio monitoring" },
        { name: "Focusrite Scarlett 2i2", specs: "Audio interface", purpose: "Professional audio I/O" }
      ]
    },
    {
      category: "Storage & Backup",
      items: [
        { name: "Synology NAS", specs: "24TB RAID 5", purpose: "Project storage and backup" },
        { name: "Samsung T7 SSDs", specs: "Multiple 2TB drives", purpose: "Active project storage" },
        { name: "LaCie Rugged Drives", specs: "Various capacities", purpose: "Client deliveries and backup" }
      ]
    }
  ];

  const trends = [
    {
      trend: "AI-Assisted Editing",
      status: "Actively Learning",
      description: "Exploring AI tools for automated transcription, scene detection, and rough cut assembly to enhance efficiency.",
      tools: ["Adobe Sensei", "Runway ML", "Descript"],
      impact: "30% faster initial assembly",
      icon: "Brain"
    },
    {
      trend: "HDR Content Creation",
      status: "Proficient",
      description: "Creating high dynamic range content for streaming platforms and modern displays.",
      tools: ["DaVinci Resolve", "HDR monitors", "Rec. 2020 workflows"],
      impact: "Premium content quality",
      icon: "Sun"
    },
    {
      trend: "Remote Collaboration",
      status: "Expert",
      description: "Mastered cloud-based workflows and real-time collaboration tools for distributed teams.",
      tools: ["Frame.io", "Dropbox Replay", "Zoom integration"],
      impact: "Seamless client collaboration",
      icon: "Globe"
    },
    {
      trend: "Vertical Video Optimization",
      status: "Specialized",
      description: "Adapting content for mobile-first platforms with vertical and square aspect ratios.",
      tools: ["Social media templates", "Multi-format exports", "Platform-specific optimization"],
      impact: "Higher social engagement",
      icon: "Smartphone"
    },
    {
      trend: "Real-time Rendering",
      status: "Advanced",
      description: "Utilizing GPU acceleration and proxy workflows for faster preview and rendering.",
      tools: ["NVIDIA RTX", "Apple Silicon optimization", "Proxy media workflows"],
      impact: "50% faster turnaround",
      icon: "Zap"
    }
  ];

  const skills = [
    {
      skill: "Storytelling",
      level: "Expert",
      description: "Crafting compelling narratives through pacing, structure, and emotional arc development.",
      applications: ["Brand stories", "Documentary editing", "Commercial narratives"],
      icon: "BookOpen"
    },
    {
      skill: "Color Grading",
      level: "Advanced",
      description: "Professional color correction and creative grading for cinematic and branded content.",
      applications: ["Cinematic looks", "Brand consistency", "Mood enhancement"],
      icon: "Palette"
    },
    {
      skill: "Audio Post-Production",
      level: "Advanced",
      description: "Complete audio workflow from dialogue editing to final mix and mastering.",
      applications: ["Dialogue cleanup", "Music mixing", "Sound design"],
      icon: "Volume2"
    },
    {
      skill: "Motion Graphics",
      level: "Intermediate",
      description: "Creating custom animations, titles, and visual elements to enhance storytelling.",
      applications: ["Title sequences", "Lower thirds", "Animated infographics"],
      icon: "Layers"
    },
    {
      skill: "Project Management",
      level: "Expert",
      description: "Efficient workflow management, client communication, and deadline adherence.",
      applications: ["Timeline management", "Client relations", "Team coordination"],
      icon: "Calendar"
    },
    {
      skill: "Technical Problem Solving",
      level: "Expert",
      description: "Troubleshooting complex technical issues and optimizing workflows for efficiency.",
      applications: ["Workflow optimization", "Format compatibility", "Performance tuning"],
      icon: "Settings"
    }
  ];

  const renderContent = () => {
    switch (activeCategory) {
      case 'software':
        return (
          <div className="space-y-8">
            {software.map((app, index) => (
              <div key={index} className="bg-card rounded-xl p-6 cinematic-shadow">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Icon name={app.icon} size={24} color="var(--color-accent)" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{app.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{app.experience} experience</span>
                          <span>•</span>
                          <span className="text-accent">{app.certification}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{app.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {app.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-foreground mb-1">{app.proficiency}%</div>
                      <div className="text-sm text-muted-foreground">Proficiency</div>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full smooth-transition"
                        style={{ width: `${app.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'equipment':
        return (
          <div className="space-y-8">
            {equipment.map((category, index) => (
              <div key={index} className="bg-card rounded-xl p-6 cinematic-shadow">
                <h3 className="text-xl font-semibold text-foreground mb-6">{category.category}</h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="bg-surface rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">{item.name}</h4>
                      <p className="text-sm text-accent mb-2">{item.specs}</p>
                      <p className="text-xs text-muted-foreground">{item.purpose}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'trends':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {trends.map((trend, index) => (
              <div key={index} className="bg-card rounded-xl p-6 cinematic-shadow">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={trend.icon} size={24} color="var(--color-accent)" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{trend.trend}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        trend.status === 'Expert' ? 'bg-success/20 text-success' :
                        trend.status === 'Advanced'|| trend.status === 'Proficient' || trend.status === 'Specialized' ? 'bg-accent/20 text-accent' : 'bg-warning/20 text-warning'
                      }`}>
                        {trend.status}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{trend.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-1">Tools & Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {trend.tools.map((tool, toolIdx) => (
                            <span key={toolIdx} className="px-2 py-1 bg-surface rounded text-xs text-muted-foreground">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm">
                        <Icon name="Target" size={16} color="var(--color-success)" />
                        <span className="text-success font-medium">Impact: {trend.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'skills':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-card rounded-xl p-6 cinematic-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={skill.icon} size={24} color="var(--color-accent)" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{skill.skill}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        skill.level === 'Expert' ? 'bg-success/20 text-success' :
                        skill.level === 'Advanced'? 'bg-accent/20 text-accent' : 'bg-warning/20 text-warning'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{skill.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Applications:</h4>
                      <ul className="space-y-1">
                        {skill.applications.map((app, appIdx) => (
                          <li key={appIdx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
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
            <Icon name="Code" size={16} />
            <span>Technical Expertise</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-6">
            Ujjwal – Intermediate Video Editor
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I use Premiere Pro, DaVinci Resolve, VN, CapCut, and more. Comfortable with a wide range of video editing tools and features:
          </p>
          <ul className="text-muted-foreground max-w-2xl mx-auto text-left list-disc pl-6 mt-4">
            <li>Transitions & Effects</li>
            <li>Color Grading & Correction</li>
            <li>Keyframing & Animation</li>
            <li>Masking & Layering</li>
            <li>Speed Ramping</li>
            <li>Audio Sync & Mixing</li>
            <li>Subtitles & Captions</li>
            <li>Export for Social Media</li>
            <li>Templates & Presets</li>
          </ul>
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

        {/* Commitment to Learning */}
        <div className="mt-16 bg-card rounded-2xl p-8 cinematic-shadow">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Commitment to Continuous Learning
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The video industry evolves rapidly. I invest in continuous education and stay current with emerging technologies to deliver cutting-edge results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-3">
                <Icon name="BookOpen" size={24} color="var(--color-accent)" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Monthly Training</h4>
              <p className="text-sm text-muted-foreground">Regular skill updates and new technique learning</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Users" size={24} color="var(--color-success)" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Industry Network</h4>
              <p className="text-sm text-muted-foreground">Active participation in professional communities</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-trust/20 rounded-lg flex items-center justify-center mb-3">
                <Icon name="Zap" size={24} color="var(--color-trust)" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Early Adoption</h4>
              <p className="text-sm text-muted-foreground">Testing and implementing new technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;