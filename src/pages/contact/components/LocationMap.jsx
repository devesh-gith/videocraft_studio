import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  // Studio location coordinates (Tulip Lemon, Sector-69, Gurugram)
  const studioLat = 28.39632025102484;
  const studioLng = 77.03602437217438;

  const studioInfo = {
    name: "Ujjwal Kumar Choudhary",
    address: "Tulip Lemon, sector-69, Gurugram, HARYANA",
    phone: "+91 8887967394",
    email: "ujjwalchoudhary994@gmail.com",
    hours: {
      weekdays: "Monday - Saturday: 9:00 AM - 6:00 PM",
      weekend: "Sunday: By Appointment Only"
    },
    parking: "Free parking available in our private lot",
    accessibility: "Wheelchair accessible with elevator access"
  };

  const nearbyLandmarks = [
    { name: "Cyber City", distance: "3.2 km" },
    { name: "DLF CyberHub", distance: "4.1 km" },
    { name: "Ambience Mall", distance: "5.8 km" },
    { name: "Indira Gandhi International Airport", distance: "12 km" }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Visit Our Studio
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Located in the heart of Gurugram, our creative space is designed for collaboration and inspiration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map - Top Left */}
          <div className="bg-card rounded-2xl cinematic-shadow overflow-hidden">
            <div className="aspect-video relative">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="VideoCraft Studio Location"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${studioLat},${studioLng}&z=14&output=embed`}
                className="border-0"
              />
              
              {/* Map Overlay Info */}
              <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 border border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">
                    {studioInfo.name}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Studio Information - Top Right */}
          <div className="bg-card rounded-2xl cinematic-shadow p-6">
            <h3 className="text-xl font-headline font-semibold text-foreground mb-6">
              Studio Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={20} className="text-accent mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Address</div>
                  <div className="text-sm text-text-secondary">{studioInfo.address}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Phone" size={20} className="text-accent mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Phone</div>
                  <a 
                    href={`tel:${studioInfo.phone}`}
                    className="text-sm text-accent hover:text-accent/80 smooth-transition"
                  >
                    {studioInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Mail" size={20} className="text-accent mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <a 
                    href={`mailto:${studioInfo.email}`}
                    className="text-sm text-accent hover:text-accent/80 smooth-transition"
                  >
                    {studioInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Clock" size={20} className="text-accent mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Hours</div>
                  <div className="text-sm text-text-secondary">
                    <div>{studioInfo.hours.weekdays}</div>
                    <div>{studioInfo.hours.weekend}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Landmarks - Bottom Left */}
          <div className="bg-card rounded-2xl cinematic-shadow p-6">
            <h3 className="text-xl font-headline font-semibold text-foreground mb-6">
              Nearby Landmarks
            </h3>
            
            <div className="space-y-4">
              {nearbyLandmarks.map((landmark, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon name="Navigation" size={18} className="text-text-secondary" />
                    <span className="text-foreground">{landmark.name}</span>
                  </div>
                  <span className="text-sm text-text-secondary font-medium">{landmark.distance}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Studio Amenities - Bottom Right */}
          <div className="bg-card rounded-2xl cinematic-shadow p-6">
            <h3 className="text-xl font-headline font-semibold text-foreground mb-6">
              Studio Amenities
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-3">
                <Icon name="Car" size={18} className="text-success" />
                <span className="text-foreground">Free Parking</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Accessibility" size={18} className="text-success" />
                <span className="text-foreground">Wheelchair Access</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Wifi" size={18} className="text-success" />
                <span className="text-foreground">High-Speed WiFi</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Coffee" size={18} className="text-success" />
                <span className="text-foreground">Refreshments</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Monitor" size={18} className="text-success" />
                <span className="text-foreground">4K Monitors</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Volume2" size={18} className="text-success" />
                <span className="text-foreground">Pro Audio Setup</span>
              </div>
            </div>
          </div>
        </div>

        {/* Directions CTA */}
        <div className="mt-12 text-center">
          <div className="bg-card rounded-2xl cinematic-shadow p-8 max-w-2xl mx-auto">
            <Icon name="Navigation" size={48} className="mx-auto text-accent mb-4" />
            <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
              Need Directions?
            </h3>
            <p className="text-text-secondary mb-6">
              Get turn-by-turn directions to our studio or schedule a virtual tour if you can't visit in person.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${studioLat},${studioLng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-accent text-background px-6 py-3 rounded-lg font-medium hover:bg-accent/90 smooth-transition"
              >
                <Icon name="Navigation" size={16} />
                <span>Get Directions</span>
              </a>
              
              <button className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 smooth-transition">
                <Icon name="Video" size={16} />
                <span>Virtual Studio Tour</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;