import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import image1 from '@/assets/Leeds/Leeds-Cover.jpg';
import image2 from '@/assets/Leeds/Leeds-Challenge.jpg';
import image3 from '@/assets/Leeds/Leeds-Process.jpg';
import image4 from '@/assets/Leeds/Leeds-Relationship.jpg';
import image5 from '@/assets/Leeds/Leeds-Hierarchy.jpg';
import image6 from '@/assets/Leeds/Leeds-Relationship2.jpg';
import image7 from '@/assets/Leeds/Leeds-Relationship3.jpg';
import image8 from '@/assets/Leeds/Leeds-TeamDashboard.jpg';
import image9 from '@/assets/Leeds/Leeds-IndividualDashboard.jpg';
import image10 from '@/assets/Leeds/Leeds-Statistics.jpg';
import image11 from '@/assets/Leeds/Leeds-Referrals.jpg';
import image12 from '@/assets/Leeds/Leeds-ToDo.jpg';
import image13 from '@/assets/Leeds/Leeds-Settings.jpg';
import image14 from '@/assets/Leeds/Leeds-Meetings.jpg';
import image15 from '@/assets/Leeds/Leeds-Search.jpg';
import image16 from '@/assets/Leeds/Leeds-Created.jpg';




const CaseStudyLeeds = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <header className="py-6 border-b border-border/40">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/#')}
            className="mb-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Leeds
          </h1>

           {/* Cover Image */}
                   <div className="mb-12">
                     <img 
                       src={image1} 
                       alt="Cover Image"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

         {/* Project Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Project Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Imagine a platform containing information about many potential customers for a particular company. All these people are connected in some way. Some need to be contacted by sales managers as soon as possible, while others are already using the service and require regular support. Without a dedicated system, this could quickly become a complex database requiring enormous manual effort.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              That’s where UX design comes in. This case study details how I designed a unique referral-based platform for sales teams.
            </p>
          </section>

           {/* The Challenge: Creating a Centralized Lead Management System */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">The Challenge: Creating a Centralized Lead Management System</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The client’s goal was to create a solution that structures the connections between a company’s clients, unites them into a single network, and visualizes their relationships. They wanted a system, which we would later name Leeds, to help businesses track customer relationships and generate leads through result-driven referrals.
            </p>

                   <div className="mb-6">
                     <img 
                       src={image2} 
                       alt="Leaderboard"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             To achieve this, the product needed the following core features:
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Proactive reminders </strong> for users to nurture key relationships.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Alerts </strong> to prepare for upcoming calls with key contacts.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Performance tracking </strong> for calls and subsequent actions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Statistical reporting </strong> on user activities.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              This unique combination of features required a clear design vision and a dedicated approach to UX/UI design, which I was tasked with providing.
            </p>

          </section>

            {/* My UX Process: From Concept to Validation */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">My Process: From Concept to Validation</h2>

            <div className="mb-6">
                     <img 
                       src={image3} 
                       alt="Process"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              My process began with focusing on the core functionality based on the client’s initial input. The challenge was to design a system that would help businesses generate leads and optimize their sales funnel by connecting "warm" contacts into a single network.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              An early and critical challenge was presenting the different levels of relationships in a clear, structured way. The client initially suggested a mind-map visualization, but based on my experience, I proposed an alternative: a more structured system using a table with tabs and subtabs. I presented prototypes for both versions, and after a solid discussion, the client agreed that my proposed version was a better solution, offering a more scalable and organized approach. This decision was a crucial step in shaping the product’s architecture.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Since Leeds is a unique solution without direct competitors, my UX research had to be creative. I started by analyzing indirect competitors like LinkedIn, LinkedIn Business, and Apollo to understand common user behaviors and expectations. I then collaborated with the client’s product team to define key features for the platform based on potential user personas. Using these insights, I created initial prototypes and tested them with potential customers. The feedback was overwhelmingly positive, with users recognizing the value of the product for their needs. This validation confirmed my design direction and allowed me to continue building the product.
            </p>
          </section>

           {/* Key Design Solutions */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Key Design Solutions</h2>

            <h2 className="text-3xl font-semibold mb-6">Relationship-Based Hierarchy</h2>
            <div className="mb-6">
                     <img 
                       src={image4} 
                       alt="Relationship Hierarchy1"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
                   <div className="mb-6">
                     <img 
                       src={image5} 
                       alt="Relationship Hierarchy2"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
                    <div className="mb-6">
                     <img 
                       src={image7} 
                       alt="Relationship Hierarchy3"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
                    <div className="mb-6">
                     <img 
                       src={image6} 
                       alt="Relationship Hierarchy4"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I was responsible for shaping the product's structure and information architecture from the ground up. I focused on finding the most appropriate way to segment people based on their connections. I created a core section for close acquaintances, which I named Relationships. Within this group, I provided key indicators to identify different levels of connection: Relationship strengths and Key relationships.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             Each relationship section displays referrals, including actual referrals, potential referrals, and prospects. I also designed a separate menu section to show the total number of all referrals, providing a clear overview.
            </p>

          </section>


           {/* Performance Dashboards & Statistics */}
          <section className="mb-12">

            <h2 className="text-3xl font-semibold mb-6">Performance Dashboards & Statistics</h2>

             <div className="mb-6">
                     <img 
                       src={image8} 
                       alt="Dashboards"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

                    <div className="mb-6">
                     <img 
                       src={image9} 
                       alt="Dashboards"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

                    

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              To help users track their effectiveness, I designed two distinct dashboards: one for individuals and one for teams. The individual dashboard provides a centralized data hub where users can see their stats, tasks, and recent contacts. The team dashboard visualizes team and individual performance, allowing users to easily access information about their colleagues.
            </p>

            <div className="mb-6">
                     <img 
                       src={image10} 
                       alt="Statistics"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

                    <div className="mb-6">
                     <img 
                       src={image11} 
                       alt="Statistics"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             I also added a success rate indicator to the statistical reports, which evaluates performance based on different ratios (e.g., conducted negotiations vs. planned ones). This feature allows users to make data-driven decisions.
            </p>

          </section>

           {/* ToDo */}
          <section className="mb-12">

            <h2 className="text-3xl font-semibold mb-6">To-do tasks section</h2>

             <div className="mb-6">
                     <img 
                       src={image12} 
                       alt="ToDo"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              This solution helps users see the list of current tasks with detailed descriptions in the To-do today section. Tasks contain information regarding a person a user is supposed to get in touch with. The section displays the person’s contacts, personal information, communication history, and some additional notes about their unique qualities, hobbies, and other specifics.
            </p>

          </section>

          {/* Designing the User Interface */}
          <section className="mb-12">

            <h2 className="text-3xl font-semibold mb-6">Designing the User Interface</h2>

            <div className="mb-6">
                     <img 
                       src={image13} 
                       alt="User Interface"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              My goal was to create a professional and familiar-looking interface. I made the following key UI decisions:
            </p>

            <div className="mb-6">
                     <img 
                       src={image14} 
                       alt="User Interface"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>


            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             I also added a success rate indicator to the statistical reports, which evaluates performance based on different ratios (e.g., conducted negotiations vs. planned ones). This feature allows users to make data-driven decisions.
            </p>

            <div className="mb-6">
                     <img 
                       src={image15} 
                       alt="User Interface"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

                      <div className="mb-6">
                     <img 
                       src={image16} 
                       alt="User Interface"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

             <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Typeface: </strong> I chose Helvetica Neue, a clean and readable font that provides a professional feel.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Color Palette: </strong> The primary color is a calming blue, a common choice for professional platforms like LinkedIn. This made the interface feel trustworthy. I used a darker shade of blue for the sidebar and added warm highlights to create a modern, elegant look.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Layout: </strong>  I incorporated plenty of white space to make the interface feel less cluttered and easy to navigate.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Logo: </strong> I designed several logo variants before selecting the final option with the client. The chosen logo uses a handshake to represent professional connections and trust, with bright blue and turquoise accents.
            </p>

          </section>

          {/* Learning and Outcome */}
          <section className="mb-12">

            <h2 className="text-3xl font-semibold mb-6">Learning and Outcome</h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Throughout this project, I worked closely with the development team, which was a crucial learning experience. The client's requirements often evolved, teaching me to be highly adaptable and deliver many design iterations on a tight schedule. I learned the importance of constant, clear communication, every new layout was discussed and commented on in Figma, which streamlined the entire workflow.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             The results satisfied both the client and the end users, proving the value of a user-centric design process. By designing the UX and UI of Leeds from scratch, I was able to contribute directly to the product's core functionality. The final result is a platform that successfully combines data-driven solutions with a modern, professional design, and I gained invaluable experience in shaping a product from the ground up.
            </p>

          </section>







          
        </div>
      </main>
      {/* --- Back to Projects --- */}
      <div className="py-8 text-center">
        <Button 
          onClick={() => {
                navigate('/');
                window.scrollTo(0, 0);
            }}
          className="bg-blue-600 hover:bg-blue-700 text-white w-64 h-12 mx-auto"
        >
          Back to Projects
        </Button>
      </div>
      {/* --- END OF ADDED SECTION --- */}

      <Footer />
    </div>
  );
};

export default CaseStudyLeeds;