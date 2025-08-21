import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Porduct Designer",
      company: "Experience.com",
      location: "Chennai, India",
      period: "2021 - Present",
      description: "I led the end-to-end design of both B2C and B2B platforms at Experience.com, driving substantial growth and measurable results. My work focused on creating user-centric solutions for web and mobile, collaborating with cross-functional teams to align design with business goals and boost revenue. I successfully scaled user engagement by integrating strategic gamification and leveraged user data to significantly improve task completion and the overall user experience.",
      achievements: [
        "B2C platform that now serves 15 million users. Strategically integrated gamification to boost user engagement, driving a 30% revenue increase and a 22% conversion rate to pro users.",
        "Redesigned and launched the B2B Experience Management Platform, leveraging user feedback and Mouseflow data to significantly improve task completion and overall user experience.",
        "Directed the full design lifecycle from concept to launch, collaborating with Product Management, Engineering, and Senior Leadership to deliver metrics-driven solutions that directly supported business goals."
      ]
    },
    {
      title: "UI/UX Designer",
      company: "CES IT Service Ltd", 
      location: "Chennai, India",
      period: "2019 - 2021",
      description: "I conceptualize and design user-centric digital experiences, delivering high-quality web applications, dashboards, and mobile apps across diverse domains. My end-to-end design process ensures solutions are not only creative and functional but also delivered on time",
      achievements: [
        "Delivered 20+ successful client projects on time and budget",
        "Created comprehensive design system used across all projects",
        "Diverse Domain Expertise: Designed and conceptualized responsive web applications, dashboards, and mobile apps across a range of industries, including healthcare, eCommerce, education, and oil & gas."
      ]
    },
    {
      title: "Graphic Designer",
      company: "ReDIM Information System",
      location: "Los Angeles, CA",
      period: "2018 - 2019",
      description: "Started my career focusing on visual design, User Interface and brand identity. Learned fundamental design principles and client communication skills.",
      achievements: [
        "Created brand identities for 15+ small businesses",
        "Developed proficiency in Adobe Creative Suite",
        "Designed responsive UI for a diverse portfolio of online casino games, including Live Andar Bahar, Roulette, Dragon Tiger, and Baccarat."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements in design
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative mb-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                <div className="ml-20">
                  <div className="glass-card p-6 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-medium mb-2">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Key Achievements:</h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li 
                            key={achIndex}
                            className="text-sm text-muted-foreground flex items-start "
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;