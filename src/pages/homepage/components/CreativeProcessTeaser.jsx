import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CreativeProcessTeaser = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Vision",
      description: "Understanding your story, audience, and objectives through collaborative consultation",
      icon: "Lightbulb",
      rawFootage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      polishedResult: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=600&h=400&fit=crop",
      duration: "1-2 Days"
    },
    {
      id: 2,
      title: "Pre-Production Planning",
      description: "Storyboarding, shot lists, and technical preparation for seamless execution",
      icon: "FileText",
      rawFootage: "https://images.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg?w=600&h=400&fit=crop",
      polishedResult: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      duration: "2-3 Days"
    },
    {
      id: 3,
      title: "Post-Production Magic",
      description: "Where raw footage transforms into compelling narratives through expert editing",
      icon: "Film",
      rawFootage: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=600&h=400&fit=crop",
      polishedResult: "https://images.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg?w=600&h=400&fit=crop",
      duration: "5-7 Days"
    },
    {
      id: 4,
      title: "Final Delivery",
      description: "Optimized formats for all platforms with comprehensive project documentation",
      icon: "CheckCircle",
      rawFootage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      polishedResult: "https://images.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg?w=600&h=400&fit=crop",
      duration: "1-2 Days"
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
            Creative Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Behind every compelling video is a meticulous process that transforms raw ideas into polished narratives
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Process Navigation */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative p-6 rounded-xl cursor-pointer smooth-transition ${
                  activeStep === index
                    ? 'bg-accent/10 border-2 border-accent' :'bg-card hover:bg-card/80 border-2 border-transparent'
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Number */}
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg smooth-transition ${
                    activeStep === index
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <Icon name={step.icon} size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-xl font-headline font-semibold smooth-transition ${
                        activeStep === index ? 'text-accent' : 'text-foreground'
                      }`}>
                        {step.title}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Active Step Indicator */}
                {activeStep === index && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-full" />
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Visual Transformation */}
          <div className="relative">
            <div 
              className="relative"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            >
              {/* Before/After Comparison */}
              <div className="relative bg-card rounded-xl p-8 cinematic-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Raw Footage */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-warning rounded-full" />
                      <span className="text-sm font-medium text-muted-foreground">RAW FOOTAGE</span>
                    </div>
                    
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={processSteps[activeStep].rawFootage}
                        alt="Raw footage"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    </div>
                  </div>

                  {/* Arrow Transformation */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="flex flex-col items-center space-y-2">
                      <Icon name="ArrowRight" size={32} className="text-accent animate-pulse" />
                      <span className="text-xs text-muted-foreground font-medium">TRANSFORM</span>
                    </div>
                  </div>

                  {/* Polished Result */}
                  <div className="space-y-4 md:col-start-2">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-success rounded-full" />
                      <span className="text-sm font-medium text-muted-foreground">POLISHED RESULT</span>
                    </div>
                    
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={processSteps[activeStep].polishedResult}
                        alt="Polished result"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Icon name="Play" size={24} color="#1A1A1A" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Process Stats */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent">15+</div>
                      <div className="text-sm text-muted-foreground">Editing Tools</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">4K</div>
                      <div className="text-sm text-muted-foreground">Resolution</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-conversion/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-xl p-8 cinematic-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Ready to Transform Your Vision?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project and create something extraordinary together
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services">
                <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold smooth-transition inline-flex items-center space-x-2">
                  <Icon name="Settings" size={18} />
                  <span>View Services</span>
                </button>
              </Link>
              
              <Link to="/contact">
                <button className="bg-conversion hover:bg-conversion/90 text-conversion-foreground px-6 py-3 rounded-lg font-semibold smooth-transition inline-flex items-center space-x-2">
                  <Icon name="MessageCircle" size={18} />
                  <span>Start Discussion</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeProcessTeaser;