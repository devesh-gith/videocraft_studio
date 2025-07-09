import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ServiceCard = ({ service, isActive, onToggle }) => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className={`relative bg-card rounded-2xl border transition-all duration-500 ${
      isActive ? 'border-accent shadow-2xl scale-105' : 'border-border hover:border-accent/50'
    }`}>
      {/* Service Header */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
            isActive ? 'bg-accent text-primary' : 'bg-accent/10 text-accent'
          } transition-all duration-300`}>
            <Icon name={service.icon} size={32} strokeWidth={2} />
          </div>
          
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-accent"
            iconName={isActive ? "ChevronUp" : "ChevronDown"}
            iconSize={20}
            onClick={onToggle}
          />
        </div>

        <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
          {service.title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Key Features */}
        <div className="space-y-3 mb-6">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Icon name="Check" size={16} className="text-success flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {service.pricing.map((tier, index) => (
            <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">{tier.name}</div>
              <div className="text-lg font-bold text-foreground">{tier.price}</div>
              <div className="text-xs text-muted-foreground">{tier.duration}</div>
            </div>
          ))}
        </div>

        {/* Demo Toggle */}
        <Button
          variant="outline"
          fullWidth
          className="border-accent/30 text-accent hover:bg-accent/10 mb-4"
          iconName="Play"
          iconPosition="left"
          iconSize={16}
          onClick={() => setShowDemo(!showDemo)}
        >
          {showDemo ? 'Hide Demo' : 'View Demo'}
        </Button>
      </div>

      {/* Expandable Demo Section */}
      {(isActive || showDemo) && (
        <div className="border-t border-border p-8 bg-muted/20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before/After Comparison */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Before & After</h4>
              <div className="space-y-4">
                <div className="relative">
                  <Image
                    src={service.demo.before}
                    alt="Before transformation"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2 bg-error/90 text-error-foreground px-2 py-1 rounded text-xs">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={service.demo.after}
                    alt="After transformation"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2 bg-success/90 text-success-foreground px-2 py-1 rounded text-xs">
                    After
                  </div>
                </div>
              </div>
            </div>

            {/* Results & Metrics */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Results</h4>
              <div className="space-y-4">
                {service.demo.metrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-card rounded-lg">
                    <span className="text-sm text-muted-foreground">{metric.label}</span>
                    <span className="text-sm font-semibold text-success">{metric.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Quote" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-accent">Client Testimonial</span>
                </div>
                <p className="text-sm text-foreground italic">"{service.demo.testimonial}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;