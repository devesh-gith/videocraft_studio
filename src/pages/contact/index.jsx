import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ConsultationBooking from './components/ConsultationBooking';
import ContactMethods from './components/ContactMethods';
import FAQ from './components/FAQ';
import LocationMap from './components/LocationMap';

const Contact = () => {
  const [showBooking, setShowBooking] = useState(false);

  const handleBookConsultation = () => {
    setShowBooking(true);
    // Smooth scroll to booking section
    setTimeout(() => {
      const bookingSection = document.getElementById('consultation-booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us - VideoCraft Studio | Free Consultation & Project Brief</title>
        <meta name="description" content="Get in touch with VideoCraft Studio for your video production needs. Book a free consultation, submit your project brief, or contact us directly. Fast response guaranteed." />
        <meta name="keywords" content="video production contact, free consultation, project brief, video editing services, Studio City video production" />
        <meta property="og:title" content="Contact VideoCraft Studio - Free Consultation Available" />
        <meta property="og:description" content="Ready to bring your vision to life? Contact VideoCraft Studio for professional video production services. Free consultation and 24-hour response time guaranteed." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://videocraftstudio.com/contact" />
      </Helmet>

      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <ContactHero onBookConsultation={handleBookConsultation} />
        
        {/* Contact Methods */}
        <ContactMethods />
        
        {/* Project Brief Form */}
        <ContactForm />
        
        {/* Consultation Booking */}
        <div id="consultation-booking">
          <ConsultationBooking />
        </div>
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Studio Location */}
        <LocationMap />
        
        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-background via-primary to-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl cinematic-shadow p-8 lg:p-12 border border-border/50">
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                Every great video starts with a conversation. Let's discuss your vision and create something extraordinary together.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={handleBookConsultation}
                  className="inline-flex items-center space-x-2 bg-conversion hover:bg-conversion/90 text-conversion-foreground px-8 py-4 rounded-lg font-medium smooth-transition"
                >
                  <span>Book Free Consultation</span>
                </button>
                
                <a
                  href="mailto:hello@videocraftstudio.com"
                  className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 smooth-transition"
                >
                  <span>hello@videocraftstudio.com</span>
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-text-secondary">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>24-hour response time</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>No obligation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;