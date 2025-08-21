import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-between relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Main Content Container with flex-grow to push content and button apart */}
      <div className="container mx-auto px-6 relative z-10 flex-grow flex items-center justify-center">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="gradient-text">Syed Layeeqh</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-muted-foreground">
              Senior Product Designer
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 7.5+ years, I've designed digital journeys that are meaningful and human.<br/> Let's create something together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-glass-border hover:bg-glass/50"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Down Arrow Button (now a flex item) */}
      <div className="w-full text-center mb-10 animate-bounce cursor-pointer z-20">
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full h-12 w-12 text-primary-dark"
          onClick={scrollToProjects}
          aria-label="Scroll to projects">
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
      
    </section>
  );
};

export default Hero;