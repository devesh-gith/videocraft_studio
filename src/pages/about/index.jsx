import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import JourneyTimeline from './components/JourneyTimeline';
import BehindTheScenes from './components/BehindTheScenes';
import PhilosophySection from './components/PhilosophySection';
import CredentialsSection from './components/CredentialsSection';
import TestimonialsSection from './components/TestimonialsSection';
import TechnicalExpertise from './components/TechnicalExpertise';
import PersonalTouch from './components/PersonalTouch';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <JourneyTimeline />
        <BehindTheScenes />
        <PhilosophySection />
        <CredentialsSection />
        <TestimonialsSection />
        <TechnicalExpertise />
        <PersonalTouch />
      </main>
    </div>
  );
};

export default About;