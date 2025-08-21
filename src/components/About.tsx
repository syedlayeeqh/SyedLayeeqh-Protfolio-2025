import { Palette, Users, Zap, Heart } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
 
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="flex justify-center mb-8">
            <img 
              src={profilePhoto} 
              alt="Profile" 
              className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
            />
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey into design began unexpectedly in college, where I found myself creating posters and banners for departmental events. That creative spark ignited a passion that grew from graphic design into a career as a Senior Product Designer. For me, design isn't just a job—it's a way of seeing the world. Whether I’m traveling to a new place or just driving around town, I find inspiration in the smallest details of everyday life.
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            With 7.5+ years of experience, I blend this creative curiosity with a strategic mindset to build user-centered products from concept to launch. When I'm not prototyping or doing user research, you can find me enjoying a good cricket match, getting lost in a movie, or just jamming to some music. I'm excited by solving complex problems and finding joy in the simple, delightful moments of a great user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;