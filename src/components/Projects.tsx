import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import project1 from '@/assets/Mind-Mate-Cover-Small.jpg';
import project2 from '@/assets/Experience-Cover-Small.jpg';
import project3 from '@/assets/Bit-wallet-Cover-Small.jpg';
import project4 from '@/assets/Elevate-Cover-Small.jpg';
import project5 from '@/assets/DLS-Cover-Small.jpg';
import project6 from '@/assets/Leeds-Cover-Small.jpg';

const Projects = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "MindMate",
      description: "MindMate is a mental wellness app that uses gentle AI and empathetic design to provide users with personalized tools for reflection, calm, and emotional support.",
      image: project1,
      tags: ["UI/UX Design", "Mobile App", "Figma"],
      route: "/case-study/MindMate"
    },
    {
      title: "Experience.com",
      description: "Experience.com's innovative Experience Management Platform (XMP) uses AI to enhance both customer and employee experiences and simplify reputation.",
      image: project2,
      tags: ["B2B", "B2C", "Product Design"],
      route: "/case-study/Experience"
    },
    {
      title: "Bit-Wallet",
      description: "Driven by market demand, Bit-Wallet was designed as a secure, user-friendly platform for cryptocurrency exchange.",
      image: project3,
      tags: ["Web", "Cryptocurrency", "Product"],
      route: "/case-study/BitWallet"
    },
    {
      title: "Elevate",
      description: "Elevate helps companies empower their teams, providing tools for employees to continuously learn and grow on the job.",
      image: project4,
      tags: ["Redesign", "SaaS", "Responsive Design"],
      route: "/case-study/Elevate"
    },
    {
      title: "Design Language System (DLS)",
      description: "Modern social platform with real-time messaging, content sharing, and community features. Focus on clean UI and user engagement.",
      image: project5,
      tags: ["DLS", "Tool Kit", "Components"],
      route: "/case-study/DLS"
    },
    {
      title: "Leeds",
      description: "A system which can transform a complex, manual database of potential customers into a clear, connected network for sales teams.",
      image: project6,
      tags: ["Redesign", "Web Design", "UX"],
      route: "/case-study/Leeds"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work showcasing various design skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card group hover-lift overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-100 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex space-x-2">
                    <Button 
                        size="sm" 
                        className="bg-blue-600 hover:bg-blue-700 text-white" 
                        onClick={() => {
                          navigate(project.route);
                          window.scrollTo(0, 0); 
                         }}
                         >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Case Study
                      </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;