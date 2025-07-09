import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceCard from './components/ServiceCard';
import ProcessSection from './components/ProcessSection';
import PricingCalculator from './components/PricingCalculator';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import Icon from '../../components/AppIcon';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Corporate Video Production",
      icon: "Building",
      description: "Professional corporate videos that enhance your brand image, communicate your message effectively, and drive business growth through compelling visual storytelling.",
      features: [
        "Executive interviews and testimonials",
        "Company culture and recruitment videos",
        "Product demonstrations and launches",
        "Annual reports and investor presentations",
        "Training and onboarding content"
      ],
      pricing: [
        { name: "Basic", price: "₹2,500", duration: "2-3 weeks" },
        { name: "Professional", price: "₹4,500", duration: "3-4 weeks" },
        { name: "Premium", price: "₹8,000", duration: "4-6 weeks" }
      ],
      demo: {
        before: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop",
        after: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=225&fit=crop",
        metrics: [
          { label: "Engagement Increase", value: "+340%" },
          { label: "Lead Generation", value: "+85%" },
          { label: "Brand Awareness", value: "+220%" }
        ],
        testimonial: "VideoCraft Studio transformed our company presentation into a cinematic masterpiece that consistently impresses our clients."
      }
    },
    {
      id: 2,
      title: "Social Media Content Creation",
      icon: "Smartphone",
      description: "Platform-optimized video content designed to maximize engagement, reach, and conversions across all major social media channels.",
      features: [
        "Instagram Reels and Stories",
        "TikTok viral content creation",
        "YouTube shorts and long-form videos",
        "LinkedIn professional content",
        "Facebook video advertisements"
      ],
      pricing: [
        { name: "Basic", price: "₹800", duration: "1 week" },
        { name: "Professional", price: "₹1,500", duration: "1-2 weeks" },
        { name: "Premium", price: "₹2,800", duration: "2-3 weeks" }
      ],
      demo: {
        before: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop",
        after: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=225&fit=crop",
        metrics: [
          { label: "Video Views", value: "2.5M+" },
          { label: "Engagement Rate", value: "+180%" },
          { label: "ROI Increase", value: "+250%" }
        ],
        testimonial: "Our social media campaigns generated over 2.5M views and exceeded ROI expectations by 250%."
      }
    },
    {
      id: 3,
      title: "Brand Storytelling",
      icon: "Heart",
      description: "Emotionally compelling brand narratives that connect with your audience, build trust, and create lasting relationships with your customers.",
      features: [
        "Brand origin and mission stories",
        "Customer success narratives",
        "Behind-the-scenes documentaries",
        "Founder and team spotlights",
        "Impact and community stories"
      ],
      pricing: [
        { name: "Basic", price: "₹3,500", duration: "3-4 weeks" },
        { name: "Professional", price: "₹6,000", duration: "4-5 weeks" },
        { name: "Premium", price: "₹10,000", duration: "5-7 weeks" }
      ],
      demo: {
        before: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=225&fit=crop",
        after: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=225&fit=crop",
        metrics: [
          { label: "Brand Awareness", value: "+420%" },
          { label: "Customer Trust", value: "+95%" },
          { label: "Emotional Connection", value: "+310%" }
        ],
        testimonial: "Our brand story video became our most powerful marketing asset, securing three major partnerships within two months."
      }
    },
    {
      id: 4,
      title: "Training Video Production",
      icon: "GraduationCap",
      description: "Educational and training videos that improve learning outcomes, increase retention rates, and streamline your organization's knowledge transfer.",
      features: [
        "Employee onboarding programs",
        "Skills development tutorials",
        "Safety and compliance training",
        "Product knowledge sessions",
        "Leadership development content"
      ],
      pricing: [
        { name: "Basic", price: "₹1,800", duration: "2-3 weeks" },
        { name: "Professional", price: "₹3,200", duration: "3-4 weeks" },
        { name: "Premium", price: "₹5,500", duration: "4-5 weeks" }
      ],
      demo: {
        before: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=225&fit=crop",
        after: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
        metrics: [
          { label: "Retention Rate", value: "+65%" },
          { label: "Completion Rate", value: "94%" },
          { label: "Learning Efficiency", value: "+150%" }
        ],
        testimonial: "The training videos revolutionized our onboarding process and improved employee retention by 65%."
      }
    },
    {
      id: 5,
      title: "Promotional Content",
      icon: "Megaphone",
      description: "High-impact promotional videos that drive sales, increase conversions, and amplify your marketing campaigns across all channels.",
      features: [
        "Product launch campaigns",
        "Event promotion videos",
        "Sales funnel content",
        "Advertisement creatives",
        "Seasonal campaign content"
      ],
      pricing: [
        { name: "Basic", price: "₹2,000", duration: "1-2 weeks" },
        { name: "Professional", price: "₹3,800", duration: "2-3 weeks" },
        { name: "Premium", price: "₹6,500", duration: "3-4 weeks" }
      ],
      demo: {
        before: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
        after: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop",
        metrics: [
          { label: "Conversion Rate", value: "+275%" },
          { label: "Click-Through Rate", value: "+190%" },
          { label: "Sales Increase", value: "+320%" }
        ],
        testimonial: "Our promotional video campaign generated a 275% increase in conversions and exceeded all performance targets."
      }
    }
  ];

  const handleServiceToggle = (index) => {
    setActiveService(activeService === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <ServiceHero />

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Settings" size={16} />
              <span>Our Services</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-foreground mb-6">
              Comprehensive Video
              <span className="text-accent"> Solutions</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From corporate presentations to social media content, we offer a full spectrum of video production services tailored to your specific needs and objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                isActive={activeService === index}
                onToggle={() => handleServiceToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Pricing Calculator */}
      <PricingCalculator />

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="bg-primary border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-conversion rounded-lg flex items-center justify-center">
                  <Icon name="Video" size={24} color="#1A1A1A" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-foreground">VideoCraft</h3>
                  <p className="text-xs text-muted-foreground font-medium tracking-wide">STUDIO</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Crafting compelling video content that captivates audiences and drives results. Your story, expertly told.
              </p>
              <div className="flex items-center space-x-4">
                <Icon name="Mail" size={20} className="text-accent" />
                <span className="text-foreground">hello@videocraftstudio.com</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Corporate Videos</li>
                <li>Social Media Content</li>
                <li>Brand Storytelling</li>
                <li>Training Videos</li>
                <li>Promotional Content</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Process</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} VideoCraft Studio. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-muted-foreground">Privacy Policy</span>
              <span className="text-sm text-muted-foreground">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;