import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import ProjectPreviewGrid from './components/ProjectPreviewGrid';
import CreativeProcessTeaser from './components/CreativeProcessTeaser';
import ClientTestimonials from './components/ClientTestimonials';
import LiveMetricsCounter from './components/LiveMetricsCounter';
import RecentRecognition from './components/RecentRecognition';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section with Cinematic Video Montage */}
        <HeroSection />
        
        {/* Interactive Project Preview Grid */}
        <ProjectPreviewGrid />
        
        {/* Creative Process Teaser with Parallax */}
        <CreativeProcessTeaser />
        
        {/* Client Video Testimonials */}
        <ClientTestimonials />
        
        {/* Live Metrics Counter */}
        <LiveMetricsCounter />
        
        {/* Recent Recognition & Awards */}
        <RecentRecognition />
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;