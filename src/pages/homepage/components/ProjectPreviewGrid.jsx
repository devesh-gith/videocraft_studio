import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectPreviewGrid = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Corporate', 'Social Media', 'Brand Stories', 'Training'];

  const projects = [
    {
      id: 1,
      title: "Brand Showcase",
      category: "Corporate",
      thumbnail: "https://img.youtube.com/vi/ONQ1axS9IWQ/hqdefault.jpg",
      videoPreview: "https://www.youtube.com/watch?v=ONQ1axS9IWQ",
      duration: "2:30",
      client: "Solfin Sustainable Finace pvt. ltd.",
      year: "2024",
      description: "Complete brand story showcasing innovation and leadership in technology sector"
    },
    {
      id: 2,
      title: "LetsStartDance",
      category: "Sustainability",
      thumbnail: "https://img.youtube.com/vi/zKpG8D3AK0I/hqdefault.jpg",
      videoPreview: "https://www.youtube.com/watch?v=zKpG8D3AK0I",
      duration: "3:10",
      client: "LetsStartDance",
      year: "2023",
      description: "A dance video showcasing the talent of the dancer crew of LetsStartDance."
    },
    {
      id: 3,
      title: "Creative Process Explaination",
      category: "Education",
      thumbnail: "https://img.youtube.com/vi/3rhZy-lSGIM/hqdefault.jpg",
      videoPreview: "https://www.youtube.com/watch?v=3rhZy-lSGIM",
      duration: "4:05",
      client: "Solfin Sustainable Finace pvt. ltd.",
      year: "2022",
      description: "An educational video telling how to apply for a loan from Solfin."
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <section className="py-20 px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our diverse portfolio of video projects that have helped brands tell their stories and achieve their goals
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-accent/20 hover:text-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-card rounded-xl overflow-hidden cinematic-shadow hover:scale-105 smooth-transition cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Thumbnail/Video */}
                <div className="relative aspect-video overflow-hidden">
                  {hoveredProject === project.id ? (
                    <iframe
                      src={project.videoPreview.replace('watch?v=', 'embed/') + '?autoplay=1&mute=1'}
                      className="w-full h-full object-cover"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      title={project.title}
                    />
                  ) : (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                    />
                  )}

                  {/* Play Overlay */}
                  {hoveredProject !== project.id && (
                    <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 smooth-transition">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                        <Icon name="Play" size={24} color="#1A1A1A" />
                      </div>
                    </div>
                  )}

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-medium text-foreground">{project.duration}</span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-accent/90 rounded-lg px-3 py-1">
                    <span className="text-sm font-medium text-accent-foreground">{project.category}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-headline font-semibold text-foreground group-hover:text-accent smooth-transition">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="Building" size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{project.client}</span>
                    </div>
                    
                    <a
                      href={project.videoPreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-accent opacity-0 group-hover:opacity-100 smooth-transition"
                    >
                      <span className="text-sm font-medium">View Project</span>
                      <Icon name="ArrowRight" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          {/* <div className="text-center mt-16">
            <Link to="/portfolio">
              <button className="bg-conversion hover:bg-conversion/90 text-conversion-foreground px-8 py-4 rounded-lg font-semibold text-lg smooth-transition inline-flex items-center space-x-2">
                <span>View All Projects</span>
                <Icon name="ArrowRight" size={20} />
              </button>
            </Link>
          </div> */}
        </div>
      </section>

      {/* Reels Section */}
      <section className="py-16 px-6 lg:px-8 bg-background border-t border-border mt-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-8 text-center">
            Instagram Reels Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reel 1 */}
            <div className="bg-card rounded-xl p-4 shadow-md flex flex-col items-center">
              <iframe
                src="https://www.instagram.com/reel/CzViLeavWOd/embed"
                className="w-full h-96 rounded-lg border-none"
                allowtransparency="true"
                allow="encrypted-media"
                title="Instagram Reel 1"
              ></iframe>
              <div className="mt-4 w-full">
                <div className="font-semibold text-lg">@ujjawalkrchoudhary</div>
                <div className="text-sm text-muted-foreground">Views: 13.2K | Likes: 1,350 | Comments: 92</div>
              </div>
            </div>
            {/* Reel 2 */}
            <div className="bg-card rounded-xl p-4 shadow-md flex flex-col items-center">
              <iframe
                src="https://www.instagram.com/reel/DA3fDQHK-LB/embed"
                className="w-full h-96 rounded-lg border-none"
                allowtransparency="true"
                allow="encrypted-media"
                title="Instagram Reel 2"
              ></iframe>
              <div className="mt-4 w-full">
                <div className="font-semibold text-lg">@ujjawalkrchoudhary</div>
                <div className="text-sm text-muted-foreground">Views: 9.1K | Likes: 1,010 | Comments: 61</div>
              </div>
            </div>
            {/* Reel 3 */}
            <div className="bg-card rounded-xl p-4 shadow-md flex flex-col items-center">
              <iframe
                src="https://www.instagram.com/reel/C3J4x_tvwm8/embed"
                className="w-full h-96 rounded-lg border-none"
                allowtransparency="true"
                allow="encrypted-media"
                title="Instagram Reel 3"
              ></iframe>
              <div className="mt-4 w-full">
                <div className="font-semibold text-lg">@ujjawalkrchoudhary</div>
                <div className="text-sm text-muted-foreground">Views: 11.4K | Likes: 1,210 | Comments: 74</div>
              </div>
            </div>
            {/* Reel 4 */}
            <div className="bg-card rounded-xl p-4 shadow-md flex flex-col items-center">
              <iframe
                src="https://www.instagram.com/reel/C5OYn1HNOvi/embed"
                className="w-full h-96 rounded-lg border-none"
                allowtransparency="true"
                allow="encrypted-media"
                title="Instagram Reel 4"
              ></iframe>
              <div className="mt-4 w-full">
                <div className="font-semibold text-lg">@ujjawalkrchoudhary</div>
                <div className="text-sm text-muted-foreground">Views: 16.7K | Likes: 1,620 | Comments: 109</div>
              </div>
            </div>
            {/* Reel 5 */}
            <div className="bg-card rounded-xl p-4 shadow-md flex flex-col items-center">
              <iframe
                src="https://www.instagram.com/reel/DAxUiDrqz2D/embed"
                className="w-full h-96 rounded-lg border-none"
                allowtransparency="true"
                allow="encrypted-media"
                title="Instagram Reel 5"
              ></iframe>
              <div className="mt-4 w-full">
                <div className="font-semibold text-lg">@ujjawalkrchoudhary</div>
                <div className="text-sm text-muted-foreground">Views: 10.5K | Likes: 1,430 | Comments: 83</div>
              </div>
            </div>
            {/* Reel 6 */}
            <div className="bg-card rounded-xl p-4 shadow-md flex flex-col items-center">
              <iframe
                src="https://www.instagram.com/reel/DA1B102qPfc/embed"
                className="w-full h-96 rounded-lg border-none"
                allowtransparency="true"
                allow="encrypted-media"
                title="Instagram Reel 6"
              ></iframe>
              <div className="mt-4 w-full">
                <div className="font-semibold text-lg">@ujjawalkrchoudhary</div>
                <div className="text-sm text-muted-foreground">Views: 12.8K | Likes: 1,510 | Comments: 97</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPreviewGrid;