import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import image1 from '@/assets/Elevate/Elevate-Cover.jpg';
import image2 from '@/assets/Elevate/Elevate-Goals.jpg';
import image3 from '@/assets/Elevate/Elevate-Old.jpg';
import image4 from '@/assets/Elevate/Elevate-UserFlow.jpg';
import image5 from '@/assets/Elevate/Elevate-3flow.jpg';
import image6 from '@/assets/Elevate/Elevate-Test.jpg';
import image7 from '@/assets/Elevate/Elevate-JourneyView.jpg';
import image8 from '@/assets/Elevate/Elevate-Mobile.jpg';




const CaseStudyElevate = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <header className="py-6 border-b border-border/40">
        <div className="container mx-auto px-6">
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
            Elevate
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
              Elevate is a B2B SaaS platform that embeds professional development directly into employees' daily work. The tool empowers managers at large companies to build and assign learning programs, while simultaneously helping workers learn and grow without interrupting their workflow. The ambitious goals of such a platform demand a flawless user experience.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              By the end of 2021, Elevate had gathered valuable feedback from both business buyers and end-users. While the buyer feedback was overwhelmingly positive, the data revealed a significant opportunity to improve the user experience for the employees actually using the platform. To address this gap, I was brought on board to lead the UX redesign.
            </p>
          </section>

          {/* Discovery & Analysis: Uncovering the Core Problems */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Discovery & Analysis: Uncovering the Core Problems</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              My process began with a deep product analysis to pinpoint the hidden points of friction and understand how the platform's core business model worked.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Elevate's workflow is centered on corporate clients. After a business application is approved, employee accounts are created, allowing managers to build custom learning programs, from quick courses to comprehensive training modules. The platform also includes a system for tracking individual progress and evaluating knowledge at the end of a course—a simple and common use case.
            </p>

            {/* Leaderboard */}
                   <div className="mb-6">
                     <img 
                       src={image2} 
                       alt="Leaderboard"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             Based on my initial analysis of the existing platform, I identified several critical UX and UI problems:
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Lack of Design Hierarchy: </strong>  The interface lacked a clear visual hierarchy, making it difficult for users to understand the priority of different actions and information.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Poor Navigation: </strong> Users often felt lost, as the connection between on-screen features and their location within the product's overall structure was unclear.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Outdated & Cluttered UI: </strong> The interface was visually noisy and inconsistent, with UI elements that didn't follow a cohesive design system. It was in need of a modernization to meet current design standards.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Non-Responsive Design: </strong> The web platform was essentially a scaled-up version of the mobile app's design. This simplified approach created significant friction and looked poor on larger screens, failing to utilize the available space effectively.
            </p>

          </section>

           {/* Redesign Strategy: Research-Driven Solutions */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Redesign Strategy: Research-Driven Solutions</h2>

            {/* old */}
                   <div className="mb-6">
                     <img 
                       src={image3} 
                       alt="Old Design"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              During the initial project phase, I addressed these challenges immediately. I worked through the analysis, collaborated in brainstorming sessions with the Elevate team, and proposed several design variants to improve the UX. Each suggestion was supported by a clear, logical rationale.
            </p>
            {/* user flow */}
                   <div className="mb-6">
                     <img 
                       src={image4} 
                       alt="user flow"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              To ensure the new design was grounded in user needs and industry best practices, I conducted thorough research. I analyzed competitor platforms like Coursera and Udemy, which served as logical references for user behavior in learning environments. I also meticulously reviewed prior user feedback to understand specific pain points. Based on these findings, I redesigned the user flow wireframes. This new user flow became the core framework for the entire redesign project.
            </p>
          </section>

          {/* Directly Addressing User Needs */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Directly Addressing User Needs</h2>

            {/* more screens */}
                   <div className="mb-6">
                     <img 
                       src={image5} 
                       alt="more screens"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             During the redesign, I also had the opportunity to address specific requests from Elevate's users. For example, some users lacked the ability to create personal training goals or a private journal for self-improvement. I designed a new feature to address this, providing a space for personal growth tracking.
            </p>

             {/* Test */}
                   <div className="mb-6">
                     <img 
                       src={image6} 
                       alt="Test"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Additionally, I noticed a goals progress page that was overly formal in its design. Users had expressed a desire for a more "interactive" and engaging experience. I decided to visualize the learner's progress with data-driven charts and add friendly illustrations, making the page feel more encouraging and positive.
            </p>

             {/* Journey */}
                   <div className="mb-6">
                     <img 
                       src={image7} 
                       alt="Journey"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Beyond the web platform, I created a responsive design for Elevate's existing mobile application, ensuring a seamless and consistent experience across different devices.
              </p>

               {/* Mobile */}
                   <div className="mb-6">
                     <img 
                       src={image8} 
                       alt="Mobile"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
            

          </section>

          {/* The Outcome */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">The Outcome</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             Once the final designs were complete, the Elevate team conducted usability tests. The new UX performed exceptionally well, with users intuitively interacting with the app and leaving positive feedback. The most telling result was a 200% increase in positive user feedback about the UI.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              This case study demonstrates that a thoughtful, user-centric redesign can have a massive impact on product performance and user satisfaction. The problem often lies not with the product's core value, but with how it's presented to the user.
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

export default CaseStudyElevate;