import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import image1 from '@/assets/Experience/Experience-Cover.jpg';
import image2 from '@/assets/Experience/Experience-XMP.jpg';
import image3 from '@/assets/Experience/Experience-ReputationManagement.jpg';
import image4 from '@/assets/Experience/Experience-CustomerExperience.jpg';
import image5 from '@/assets/Experience/Experience-EmployeeExperience.jpg';
import image6 from '@/assets/Experience/Experience-SRPCover.jpg';
import image7 from '@/assets/Experience/Experience-ScoreWorks.jpg';
import image8 from '@/assets/Experience/Experience-GamifiedEngagement.jpg';
import image9 from '@/assets/Experience/Experience-Reviews.jpg';
import image10 from '@/assets/Experience/Experience-ProfileCompletion.jpg';
import image11 from '@/assets/Experience/Experience-Connections.jpg';
import image12 from '@/assets/Experience/Experience-WebAnalytics.jpg';
import image13 from '@/assets/Experience/Experience-Listings.jpg';

const CaseStudyExperience = () => {
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
            Experience.com
          </h1>

         {/* Cover Image */}
                   <div className="mb-12">
                     <img 
                       src={image1} 
                       alt="Experience.com Cover"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Experience.com offers a unified, AI-powered platform for businesses to manage their online reputation, customer experience, and employee experience. The platform combines these solutions to help companies grow and improve their online presence. Key features include:
            </p>
            <ul className="list-disc list-inside space-y-6 text-lg text-muted-foreground mb-6">
                <li>
                  <strong>Reputation Management:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                     Centralised review management, AI-assisted replies, and automated review requests.
                  </p>
                </li>
                <li>
                  <strong>Customer Experience (CX):</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    Automated surveys and real-time analytics to understand customer sentiment.
                  </p>
                </li>
                <li>
                  <strong>Employee Experience (EX):</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    Tools for collecting employee feedback to improve engagement and retention.
                  </p>
                </li>
                <li>
                  <strong>Search Rank Platform: </strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    An 850-point rating system that provides actionable insights to improve local search rankings.
                  </p>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
              In short, Experience.com provides a comprehensive, all-in-one solution for businesses to leverage data and AI to enhance their brand, customer relationships, and internal culture.
            </p>
          </section>

          {/* About My Role */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">My Role</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              For 4.6 years, I served as a Senior Product Designer at Experience.com, where I was deeply embedded in the full product lifecycle. My role was multifaceted, encompassing everything from initial ideation and user research to final implementation and post-launch analysis.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I led the design for multiple applications from their inception, collaborating closely with product managers, engineers, and stakeholders to transform complex business problems into intuitive user experiences. My end-to-end ownership of the design process, from research to implementation, ensured every decision was grounded in user needs, directly contributing to the success of each product.
            </p>
          </section>

          {/* Design Challenges */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Design Challenges</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As a Senior Product Designer at Experience.com, my role was defined by a unique set of challenges, each requiring a strategic and user-centric approach.
            </p>
            <ul className="list-disc list-inside space-y-6 text-lg text-muted-foreground mb-6">
                <li>
                  <strong>Modular Design System:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                     A cohesive and flexible design system was created to ensure visual consistency across both the B2B (XMP) and B2C (SRP) platforms. This allowed for shared components and patterns while still enabling unique layouts and workflows for each user type.
                  </p>
                </li>
                <li>
                  <strong>Persona-Driven Workflows: </strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    Designed different home dashboards and navigation for each user type. For B2B leaders, the XMP dashboard would focus on high-level analytics, team performance, and top-down controls. For B2C professionals, the SRP would prioritize a clear, step-by-step workflow focused on improving their individual score and profile.
                  </p>
                </li>
                <li>
                  <strong>Contextual Actions:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    A significant problem was designing a framework that could scale. I had to create a flexible user experience that worked for loan officers and could easily adapt to other industries like real estate and healthcare.
                  </p>
                </li>
                <li>
                  <strong>Strategic Feature Prioritization: </strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    Given the platform's broad scope, I was constantly challenged to prioritize new features and ensure they added genuine value without overwhelming the user. This required close collaboration with the product and engineering teams to maintain a focused and clean experience.

                  </p>
                </li>
              </ul>
          </section>

          {/* Business and Market Challenges */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Business and Market Challenges</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Experience.com, as a business, faced several operational problems.
            </p>
            <ul className="list-disc list-inside space-y-6 text-lg text-muted-foreground mb-6">
                <li>
                  <strong>Competitive Market:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                     The market for reputation and experience management is crowded. Experience.com had to constantly differentiate itself to prove its unique value.
                  </p>
                </li>
                <li>
                  <strong>Customer Acquisition and Retention: </strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    Acquiring and keeping both enterprise and individual clients was a challenge, as the company had to consistently prove the platform's ROI.
                  </p>
                </li>
                <li>
                  <strong>User Adoption:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    For large enterprise clients, a major hurdle was getting employees to fully adopt the platform and realize its benefits.
                  </p>
                </li>
                <li>
                  <strong>Large-Scale User Onboarding:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    A significant technical and design problem for the SRP was the initial import and onboarding of 5 million users, which my design work had to accommodate smoothly.
                  </p>
                </li>
                <li>
                  <strong>Defining a Market Identity:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    In a crowded market, a key business problem was using design to make the platform stand out and clearly communicate its unique value proposition.
                  </p>
                </li>
                <li>
                  <strong>Attracting and Onboarding B2C Users: </strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    A core business problem was designing a strategy to attract and seamlessly onboard individual professionals to the Search Rank Platform (SRP). This involved creating a compelling freemium model and a low-friction process to guide users from a free, imported profile to a fully engaged, paying customer.
                  </p>
                </li>
              </ul>
          </section>

          {/* Solving Design Challenges */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Solving Design Challenges</h2>
            
            <ul className="list-disc list-inside space-y-6 text-lg text-muted-foreground mb-6">
                <li>
                  <strong>Bridging Two Ecosystems:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80 mb-4">
                     A modular design system ensured visual consistency for both B2B (XMP) and B2C (SRP) users.
                  </p>
                  <p className="mt-1 text-base text-muted-foreground/80">
                     Persona-driven dashboards were created to meet the distinct needs of an enterprise leader and an individual professional.
                  </p>
                </li>
                <li>
                  <strong>Integrating Complex Functions:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80 mb-4">
                     A unified dashboard was designed to give enterprises a single view of data from reputation, CX, and EX.
                  </p>
                  <p className="mt-1 text-base text-muted-foreground/80">
                     We created a system for contextual actions, where one event (like a bad review) could trigger a related action in another area (like a performance alert).
                  </p>
                </li>
                <li>
                  <strong>Multi-vertical Scalability:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80 mb-4">
                     A templated and configurable UI was created to easily adapt the platform for different industries, from mortgage to healthcare, without a full redesign.
                  </p>
                </li>
                <li>
                  <strong>Strategic Feature Prioritization:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80 mb-4">
                     A design-led product strategy was used, leveraging user research and rapid prototyping to validate new features and prevent feature creep.
                  </p>
                </li>
              </ul>
          </section>

           {/* Solving Business and Market Problems */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Solving Business and Market Problems</h2>
            
            <ul className="list-disc list-inside space-y-6 text-lg text-muted-foreground mb-6">
                <li>
                  <strong>Competitive Market and Defining Identity:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80 mb-4">
                     A distinct brand identity was established through visual design and a consistent tone.
                  </p>
                  <p className="mt-1 text-base text-muted-foreground/80">
                     Gamification, specifically the Search Rank Score (SRS), was used to make the platform more engaging and serve as a key differentiator.
                  </p>
                </li>
                <li>
                  <strong>User Acquisition and Retention:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80 mb-4">
                     A freemium model was designed to showcase value to free users and encourage them to upgrade.
                  </p>
                  <p className="mt-1 text-base text-muted-foreground/80">
                     Low-friction onboarding was designed for the initial 5 million user import, using automation and a guided checklist to get users to their "WOW" moment quickly.
                  </p>
                </li>
              </ul>
          </section>

          {/* Experience Mangement PLatform - XMP (B2B) */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Experience Mangement Platform - XMP (B2B)</h2>
            <div className="mb-6">
                     <img 
                       src={image2} 
                       alt="Experience Management Platform Cover"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             Experience.com's Experience Management Platform (XMP) is a comprehensive, all-in-one software solution that uses AI to improve customer and employee experiences while also streamlining reputation management.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             Here's a detailed breakdown of its features:
            </p>
          </section>

          {/* Customer Experience (CX) */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Customer Experience (CX)</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             The platform is designed to provide businesses with a deeper understanding of their customers.
            </p>
            <div className="mb-6">
                     <img 
                       src={image4} 
                       alt="Customer Experience "
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             <strong>Automated Surveys and Feedback:</strong> XMP automates the process of collecting feedback through customized surveys that can be sent to customers at different points in their journey. This helps businesses gain insights into what customers are thinking in real-time.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             <strong>Real-time Analytics and Insights:</strong> AI is used to analyze the collected data and provide real-time analytics. This allows businesses to make informed, data-driven decisions and identify potential issues before they become major problems.
            </p>

             <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             <strong>Personalization: </strong> The platform tailors interactions and campaigns to individual customer needs and preferences, leading to higher satisfaction and loyalty.
            </p>
            
          </section>

           {/* Employee Experience (EX) */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Employee Experience (EX)</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             The platform also provides tools to foster a positive and engaged workforce.
            </p>
            <div className="mb-6">
                     <img 
                       src={image5} 
                       alt="Employee Experience (EX)"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             <strong>Feedback Collection: </strong> XMP offers automated feedback campaigns and surveys to gather insights from employees, helping companies understand morale, identify areas for improvement, and address potential turnover risks.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             <strong>Analytics and Reporting:</strong> By analyzing employee feedback, the platform provides actionable insights that can be used to improve employee engagement, enhance training programs, and create a better work culture.
            </p>

          </section>

           {/* Reputation Management */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Reputation Management</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             Experience.com's platform helps businesses take control of their online presence.
            </p>
            <div className="mb-6">
                     <img 
                       src={image3} 
                       alt="Reputation Management"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             <strong>Centralized Review Management: </strong> The platform aggregates reviews from multiple online sites into a single dashboard, making it easier for businesses to monitor and respond to feedback in one place.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             <strong>AI-Powered Responses:</strong> AI-assisted replies are offered to help businesses craft personalized and professional responses to customer reviews, which saves time and ensures a consistent brand voice.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             <strong>Search Engine Optimization (SEO): </strong>The platform also focuses on improving online visibility. It helps professionals and businesses manage their listings and optimize their presence on search engines to attract more customers.
            </p>

          </section>

          {/* Search Rank Platform (B2C) */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Search Rank Platform (B2C)</h2>
            <div className="mb-6">
                     <img 
                       src={image6} 
                       alt="Search Rank Platform (B2C)"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             <strong>The Search Rank Platform (SRP) </strong>  is Experience.com's dedicated solution for individual professionals, designed to help them manage their online presence and improve their local search rankings. It is built on the principle of simplifying the complex and often technical world of SEO into a user-friendly, actionable system.
            </p>
          </section>

          {/* How the Search Rank Score Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How the Search Rank Score Works</h2>
            <div className="mb-6">
                     <img 
                       src={image7} 
                       alt="How the Search Rank Score Works"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             <strong>The Search Rank Score (SRS) </strong>  is a proprietary, 850-point scoring system developed by Experience.com. Its purpose is to simplify the complex world of Search Engine Optimization (SEO) and help individual professionals understand and improve their online visibility.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             Think of it like a credit score for your online presence. Instead of just giving a professional a list of SEO best practices, the SRS assigns a numerical score based on hundreds of factors that influence local search rankings. It then provides specific, actionable steps to improve that score and, as a result, rank higher in search results.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             By focusing on these components, the Search Rank Platform turns a daunting task into a manageable, gamified process. A professional can see their current score, a breakdown of where they stand against competitors, and a clear path to follow to increase their score and dominate their local market.
            </p>

          </section>

          {/* Gamified Engagement */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Gamified Engagement</h2>
            <div className="mb-6">
                     <img 
                       src={image8} 
                       alt="Gamified Engagement"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             The platform transforms the complex task of improving your online visibility and SEO into a game. This is done through the Search Rank Game, which provides a clear, data-driven roadmap. Users are given actionable guidance to improve their Search Rank Score (SRS), which in turn boosts their visibility in search results. This approach makes a technical and often overwhelming process feel more engaging and achievable.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             To support this gamified process, the platform offers a centralized dashboard. This dashboard consolidates all aspects of a professional's online reputation into a single location, including:
            </p>

            <ul className="list-disc list-inside space-y-6 text-lg text-muted-foreground mb-6">
              <li>
                <strong>Profile Data: </strong>
                  Access and update key professional information.
              </li>
              <li>
                <strong>Social Connections & Reviews: </strong>
                  Manage and respond to reviews and social media activity.
              </li>
              <li>
                <strong>Website SEO: </strong>
                  Track and improve the SEO of a professional's website.
              </li>
              <li>
                <strong>Rank Tracking: </strong>
                  Monitor how their ranking changes across specific zip codes, states, and the country.
              </li>
            </ul>

          </section>

          {/* Search Rank Score Components */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Search Rank Score Components</h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
             All components have an assigned score that add up to make the 850- point Search Rank Score. Boost your score by optimizing these essential components and seamlessly enhance your online presence and reputation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-12 mb-4">
             <strong>Reviews and Replies </strong> Enhance your online reputation by repling to reviews from all platforms in one place.
            </p>

            <div className="mb-6">
                     <img 
                       src={image9} 
                       alt="Search Rank Score Components"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
              </div>


            <p className="text-lg text-muted-foreground leading-relaxed mt-12 mb-4">
             <strong>Profile Completion</strong> Improve your search visibility by fully optimizing your public profile to attract more organic leeds.
            </p>

            <div className="mb-6">
                     <img 
                       src={image10} 
                       alt="Analytics Dashboard Cover"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
              </div>

            <p className="text-lg text-muted-foreground leading-relaxed mt-12 mb-4">
             <strong>Connections</strong> Extend Your online reach and visibility by connecting your social platform and sites, and sharing your top reviews.
            </p>

            <div className="mb-6">
                     <img 
                       src={image11} 
                       alt="Analytics Dashboard Cover"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
              </div>

            <p className="text-lg text-muted-foreground leading-relaxed mt-12 mb-4">
             <strong>Web Analytics</strong> Leverage detailed analytics to optimize your primary website performance directly influencing your search position.
            </p>

            <div className="mb-6">
                     <img 
                       src={image12} 
                       alt="Analytics Dashboard Cover"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
              </div>

            <p className="text-lg text-muted-foreground leading-relaxed mt-12 mb-4">
             <strong>Listings</strong> Manage, Update and track all your listings from one dashboard to streamline your online presence.
            </p>

            <div className="mb-6">
                     <img 
                       src={image13} 
                       alt="Analytics Dashboard Cover"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
              </div>

          </section>


          {/* Impact */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Impact</h2>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Pioneered the B2C Platform: </strong> I built the Experience.com platform from the ground up, which now serves a community of 50 million users and attracts over 50k new sign-ups every month. This involved establishing the entire user experience for the B2C market.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Integrated Gamification for Business Growth:</strong> By integrating a gamified experience centered around the Search Rank Score (SRS), I successfully drove user behavior. This initiative directly contributed to a 56% increase in revenue and boosted the conversion rate to pro users by 15%, all while significantly enhancing user engagement.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Established a Scalable Design System: </strong> To ensure a cohesive and efficient user experience, I developed a comprehensive design system from scratch. This system not only standardized the look and feel across the platform's diverse functionalities but also reduced development time by 30%, accelerating the product roadmap and ensuring brand consistency.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Designed a Low-Friction Onboarding Experience:  </strong> I designed and implemented the onboarding experience for the platform's initial import of 5 million users. By creating an intuitive, step-by-step onboarding flow, I was able to achieve a 90% activation rate within the first 30 days, dramatically reducing user confusion and support tickets.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Enabled Multi-vertical Expansion: </strong> I created a flexible and scalable UI framework that allowed the platform to easily adapt to new industries. This foundational work directly enabled Experience.com to expand beyond its initial mortgage and loan agent verticals, paving the way for the company to enter new markets like real estate and healthcare with minimal design and development overhead.
            </p>

          </section>


           {/* My Learnings */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">My Learnings</h2>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             My work at Experience.com provided me with invaluable learnings across strategic design, user engagement, and product development.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Designing for Onboarding: </strong> I learned to create an automated, low-friction onboarding flow. This was crucial for handling millions of users at launch and effectively guiding them through the product's value proposition without overwhelming them.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Building a Guided Walkthrough: </strong> My experience taught me the importance of designing a guided walkthrough that introduces the entire product. This ensured users understood the full scope of features and could quickly become proficient.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>The Art of Gamification: </strong> I learned how to successfully design a game-like experience to drive user engagement. By turning complex tasks into achievable points and scores, I was able to motivate users and directly impact key business metrics like conversion and retention.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Driving User Conversion: </strong> A core learning was understanding the path from a free user to a paid "pro" user. I designed targeted experiences and incentives within the app to showcase value, which directly led to a higher conversion rate.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Iterative Design: </strong> I learned the importance of continuously iterating on designs. By consistently adding new features and updating existing ones based on user feedback, I ensured the product remained relevant, engaging, and aligned with user expectations.
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

export default CaseStudyExperience;