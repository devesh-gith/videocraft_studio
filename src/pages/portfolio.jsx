import React from 'react';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

const projects = [
  {
    id: 1,
    title: " Brand Showcase",
    videoUrl: "https://www.youtube.com/embed/ONQ1axS9IWQ",
    description: "Complete brand story showcasing innovation and leadership in technology sector"
  },
  {
    id: 2,
    title: "LetsStartDance",
    videoUrl: "https://www.youtube.com/embed/zKpG8D3AK0I",
    description: "A dance video showcasing the talent of the dancer crew of LetsStartDance."
  },
  {
    id: 3,
    title: "Creative Process Explaination",
    videoUrl: "https://www.youtube.com/embed/3rhZy-lSGIM",
    description: "An educational video telling how to apply for a loan from Solfin."
    
  }
];

const reels = [
  { id: 1, url: "https://www.instagram.com/reel/CzViLeavWOd/embed", label: "Reel 1" },
  { id: 2, url: "https://www.instagram.com/reel/DA3fDQHK-LB/embed", label: "Reel 2" },
  { id: 3, url: "https://www.instagram.com/reel/C3J4x_tvwm8/embed", label: "Reel 3" },
  { id: 4, url: "https://www.instagram.com/reel/C5OYn1HNOvi/embed", label: "Reel 4" },
  { id: 5, url: "https://www.instagram.com/reel/DAxUiDrqz2D/embed", label: "Reel 5" },
  { id: 6, url: "https://www.instagram.com/reel/DA1B102qPfc/embed", label: "Reel 6" }
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-10 text-center">All Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="bg-card rounded-xl overflow-hidden shadow-md p-4 flex flex-col items-center">
              <iframe
                src={project.videoUrl}
                className="w-full aspect-video rounded-lg mb-4"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={project.title}
              />
              <h2 className="text-xl font-semibold mb-2 text-center">{project.title}</h2>
              <p className="text-muted-foreground text-center">{project.description}</p>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-headline font-bold text-foreground mb-6 text-center">Instagram Reels</h2>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {reels.map((reel) => (
            <div key={reel.id} className="min-w-[320px] max-w-xs bg-card rounded-xl p-2 shadow-md flex flex-col items-center">
              <iframe
                src={reel.url}
                className="w-full h-96 rounded-lg border-none"
                allowtransparency="true"
                allow="encrypted-media"
                title={reel.label}
              ></iframe>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage; 