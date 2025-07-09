import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const PricingCalculator = () => {
  const [selectedService, setSelectedService] = useState('');
  const [duration, setDuration] = useState('');
  const [complexity, setComplexity] = useState('');
  const [turnaround, setTurnaround] = useState('');
  const [addOns, setAddOns] = useState([]);
  const [estimatedCost, setEstimatedCost] = useState(0);

  const serviceOptions = [
    { value: 'corporate', label: 'Corporate Video Production', basePrice: 2500 },
    { value: 'social', label: 'Social Media Content', basePrice: 800 },
    { value: 'brand', label: 'Brand Storytelling', basePrice: 3500 },
    { value: 'training', label: 'Training Videos', basePrice: 1800 },
    { value: 'promotional', label: 'Promotional Content', basePrice: 2000 }
  ];

  const durationOptions = [
    { value: '30', label: '30 seconds', multiplier: 0.8 },
    { value: '60', label: '1 minute', multiplier: 1.0 },
    { value: '120', label: '2 minutes', multiplier: 1.5 },
    { value: '300', label: '5 minutes', multiplier: 2.2 },
    { value: '600', label: '10+ minutes', multiplier: 3.0 }
  ];

  const complexityOptions = [
    { value: 'basic', label: 'Basic (Single location, minimal editing)', multiplier: 1.0 },
    { value: 'standard', label: 'Standard (Multiple shots, graphics)', multiplier: 1.4 },
    { value: 'advanced', label: 'Advanced (Multiple locations, animations)', multiplier: 1.8 },
    { value: 'premium', label: 'Premium (Complex production, VFX)', multiplier: 2.5 }
  ];

  const turnaroundOptions = [
    { value: 'standard', label: 'Standard (2-3 weeks)', multiplier: 1.0 },
    { value: 'expedited', label: 'Expedited (1-2 weeks)', multiplier: 1.3 },
    { value: 'rush', label: 'Rush (3-7 days)', multiplier: 1.8 },
    { value: 'emergency', label: 'Emergency (24-48 hours)', multiplier: 2.5 }
  ];

  const addOnOptions = [
    { id: 'subtitles', label: 'Subtitles & Captions', price: 200 },
    { id: 'translations', label: 'Multi-language Versions', price: 500 },
    { id: 'social-cuts', label: 'Social Media Cuts', price: 300 },
    { id: 'extended-license', label: 'Extended Usage License', price: 800 },
    { id: 'raw-footage', label: 'Raw Footage Delivery', price: 150 },
    { id: 'extra-revisions', label: 'Additional Revisions (3x)', price: 400 }
  ];

  useEffect(() => {
    calculateEstimate();
  }, [selectedService, duration, complexity, turnaround, addOns]);

  const calculateEstimate = () => {
    if (!selectedService || !duration || !complexity || !turnaround) {
      setEstimatedCost(0);
      return;
    }

    const service = serviceOptions.find(s => s.value === selectedService);
    const durationMult = durationOptions.find(d => d.value === duration)?.multiplier || 1;
    const complexityMult = complexityOptions.find(c => c.value === complexity)?.multiplier || 1;
    const turnaroundMult = turnaroundOptions.find(t => t.value === turnaround)?.multiplier || 1;

    let basePrice = service.basePrice * durationMult * complexityMult * turnaroundMult;
    
    const addOnTotal = addOns.reduce((total, addOnId) => {
      const addOn = addOnOptions.find(a => a.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);

    setEstimatedCost(Math.round(basePrice + addOnTotal));
  };

  const handleAddOnChange = (addOnId, checked) => {
    if (checked) {
      setAddOns([...addOns, addOnId]);
    } else {
      setAddOns(addOns.filter(id => id !== addOnId));
    }
  };

  const resetCalculator = () => {
    setSelectedService('');
    setDuration('');
    setComplexity('');
    setTurnaround('');
    setAddOns([]);
    setEstimatedCost(0);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-primary/20 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-conversion/10 text-conversion px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Calculator" size={16} />
            <span>Pricing Calculator</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground mb-6">
            Get Your Project
            <span className="text-conversion"> Estimate</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Use our interactive calculator to get an instant estimate for your video project based on your specific requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2 bg-card rounded-2xl border border-border p-8">
            <div className="space-y-8">
              {/* Service Selection */}
              <div>
                <Select
                  label="Select Service Type"
                  placeholder="Choose your service"
                  options={serviceOptions}
                  value={selectedService}
                  onChange={setSelectedService}
                  required
                />
              </div>

              {/* Duration */}
              <div>
                <Select
                  label="Video Duration"
                  placeholder="Select duration"
                  options={durationOptions}
                  value={duration}
                  onChange={setDuration}
                  required
                />
              </div>

              {/* Complexity */}
              <div>
                <Select
                  label="Production Complexity"
                  placeholder="Choose complexity level"
                  options={complexityOptions}
                  value={complexity}
                  onChange={setComplexity}
                  required
                />
              </div>

              {/* Turnaround */}
              <div>
                <Select
                  label="Turnaround Time"
                  placeholder="Select timeline"
                  options={turnaroundOptions}
                  value={turnaround}
                  onChange={setTurnaround}
                  required
                />
              </div>

              {/* Add-ons */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Add-on Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {addOnOptions.map((addOn) => (
                    <div key={addOn.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={addOns.includes(addOn.id)}
                          onChange={(e) => handleAddOnChange(addOn.id, e.target.checked)}
                        />
                        <span className="text-sm font-medium text-foreground">{addOn.label}</span>
                      </div>
                      <span className="text-sm text-accent font-semibold">+${addOn.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <Button
                variant="outline"
                onClick={resetCalculator}
                iconName="RotateCcw"
                iconPosition="left"
                iconSize={16}
                className="border-muted-foreground/30 text-muted-foreground hover:text-foreground"
              >
                Reset Calculator
              </Button>
            </div>
          </div>

          {/* Estimate Display */}
          <div className="bg-gradient-to-br from-accent/10 to-conversion/10 rounded-2xl border border-accent/20 p-8 h-fit sticky top-8">
            <div className="text-center mb-8">
              <Icon name="DollarSign" size={48} className="text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-headline font-bold text-foreground mb-2">
                Project Estimate
              </h3>
              <p className="text-sm text-muted-foreground">
                Based on your selections
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="text-5xl font-headline font-bold text-foreground mb-2">
                ${estimatedCost.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">
                Starting from this estimate
              </div>
            </div>

            {estimatedCost > 0 && (
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} className="text-accent" />
                  <span>Timeline: {turnaroundOptions.find(t => t.value === turnaround)?.label}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span>Includes 3 revision rounds</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Shield" size={16} className="text-trust" />
                  <span>100% satisfaction guarantee</span>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <Button
                variant="default"
                fullWidth
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={16}
                disabled={estimatedCost === 0}
              >
                Get Detailed Quote
              </Button>
              
              <Button
                variant="outline"
                fullWidth
                className="border-accent text-accent hover:bg-accent/10"
                iconName="Calendar"
                iconPosition="left"
                iconSize={16}
                disabled={estimatedCost === 0}
              >
                Schedule Consultation
              </Button>
            </div>

            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <div className="text-xs text-muted-foreground text-center">
                <Icon name="Info" size={14} className="inline mr-1" />
                Final pricing may vary based on specific requirements and consultation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;