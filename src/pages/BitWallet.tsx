import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import image1 from '@/assets/Bit-Wallet/Bit-Wallet-Cover.jpg';
import image2 from '@/assets/Bit-Wallet/Bit-Wallet-Problem.jpg';
import image3 from '@/assets/Bit-Wallet/Bit-Wallet-Solution.jpg';
import image4 from '@/assets/Bit-Wallet/Bit-Wallet-DesignProcess.jpg';
import image5 from '@/assets/Bit-Wallet/Bit-Wallet-Persona1.jpg';
import image6 from '@/assets/Bit-Wallet/Bit-Wallet-Persona2.jpg';
import image7 from '@/assets/Bit-Wallet/Bit-Wallet-CustomerJourneyMap.jpg';
import image8 from '@/assets/Bit-Wallet/Bit-Wallet-InformationArchitecture.jpg';
import image9 from '@/assets/Bit-Wallet/Bit-Wallet-UserFlow.jpg';
import image10 from '@/assets/Bit-Wallet/Bit-Wallet-Features.jpg';
import image11 from '@/assets/Bit-Wallet/Bit-Wallet-UiKit.jpg';
import image12 from '@/assets/Bit-Wallet/Bit-Wallet-LogIn.jpg';
import image13 from '@/assets/Bit-Wallet/Bit-Wallet-Currency.jpg';
import image14 from '@/assets/Bit-Wallet/Bit-Wallet-Payment.jpg';
import image15 from '@/assets/Bit-Wallet/Bit-Wallet-Transaction.jpg';
import image16 from '@/assets/Bit-Wallet/Bit-Wallet-Deposit.jpg';
import image17 from '@/assets/Bit-Wallet/Bit-Wallet-Withdraw.jpg';
import image18 from '@/assets/Bit-Wallet/Bit-Wallet-Security.jpg';
import image19 from '@/assets/Bit-Wallet/Bit-Wallet-Preference.jpg';
import image20 from '@/assets/Bit-Wallet/Bit-Wallet-OtherScreens.jpg';


const CaseStudyBitWallet = () => {
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
            Bit-Wallet
          </h1>

          {/* Cover Image */}
          <div className="mb-12">
            <img 
              src={image1} 
              alt="Analytics Dashboard Cover"
              className="w-full h-120 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Project Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Project Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Driven by a clear market demand for high-quality, user-friendly cryptocurrency exchange services, Bit-Wallet was conceived to address the fundamental needs of users. This case study will outline the problems we identified and the solutions we designed to create an intuitive and secure product.
            </p>
          </section>

          {/* Problem */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Problems</h2>
                <div className="mb-6">
                  <img 
                    src={image2} 
                    alt="Problem"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground">
              <li>Users are confused by the complex and unfamiliar interaction patterns for common cryptocurrency actions</li>
              <li>Users are forced to manually compare prices across multiple exchanges, a tedious and time-consuming process.</li>
              <li>New cryptocurrency users are intimidated by technical jargon and a steep learning curve, creating a significant barrier to entry.</li>
              <li>Users feel anxious and helpless when a transaction fails or a technical issue occurs, often lacking the tools to understand the problem or find a solution.</li>
              <li>Users have a fundamental fear of losing their assets to hacking, and many existing wallets fail to visibly communicate their security measures.</li>
              <li>Users find it difficult to stay informed about the rapidly changing crypto market, leading to missed opportunities and a feeling of being left behind.</li>
            </ul>
          </section>

           {/* Solution */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Soulution</h2>
            <div className="mb-6">
                  <img 
                    src={image3} 
                    alt="Solution"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <ul className="list-disc list-inside space-y-6 text-lg text-muted-foreground">
                <li>
                  <strong>Unified Action Hub for Asset Management</strong>
                  <p className="mt-1 text-base text-muted-foreground/80">
                    Instead of forcing users to switch screens, we created a unified dashboard. This single screen lets users manage all their assets and perform key actions like buying, selling, and swapping.
                  </p>
                </li>
                <li>
                  <strong>Optimized Transaction Flow</strong>
                  <p className="mt-1 text-base text-muted-foreground/80">
                    We designed the shortest path for all transactions. By removing unnecessary steps and clicks, we created a streamlined process for buying, sending, and exchanging crypto.
                  </p>
                </li>
                <li>
                  <strong>Simplified Onboarding</strong>
                  <p className="mt-1 text-base text-muted-foreground/80">
                    We built a guided onboarding process that simplifies the initial wallet setup. Clear language and visual cues help new users feel confident and comfortable from the start.
                  </p>
                </li>
                <li>
                  <strong>Proactive In-App Support</strong>
                  <p className="mt-1 text-base text-muted-foreground/80">
                    Users get immediate help through an integrated support system. This includes clear error messages and a comprehensive, in-app help center to answer their questions without leaving the platform.
                  </p>
                </li>
                <li>
                  <strong>Transparent Security</strong>
                  <p className="mt-1 text-base text-muted-foreground/80">
                    We provide a clear and easy-to-use two-factor authentication (2FA) setup. This transparent approach to security builds user trust and makes protecting their data simple.
                  </p>
                </li>
                <li>
                  <strong>Integrated News Portal</strong>
                  <p className="mt-1 text-base text-muted-foreground/80">
                    We added a curated news portal directly into the wallet. This keeps users informed about the crypto market and reduces their reliance on external resources.
                  </p>
                </li>
            
              </ul>
          </section>

          {/* Design Process */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Design Process</h2>
            <div className="mb-6">
                  <img 
                    src={image4} 
                    alt=" Design Process"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To ensure a successful and timely product launch, the design process for Bit-Wallet was broken down into distinct stages. This approach allowed for continuous iteration, clear deadlines, and the ability to meet all product requirements effectively.
            </p>
          </section>

          {/* Discovery & Research */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Discovery & Research</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This initial phase focused on understanding the problem space. We conducted competitive analysis of existing crypto wallets to identify their strengths and weaknesses. Crucially, user research was conducted through surveys and interviews to uncover the core pain points and needs of potential users, especially newcomers. The key output of this stage was a refined problem statement and user personas.
            </p>
          </section>


          {/* Personas */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Personas</h2>
            <div className="mb-6">
                  <img 
                    src={image5} 
                    alt="Personas"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>

                <div className="mb-6">
                  <img 
                    src={image6} 
                    alt="APersonas"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              To better understand our target audience, I conducted a series of user interviews. These conversations provided invaluable qualitative data on their behaviors, financial habits, and attitudes toward digital platforms. I then used a structured analysis template to synthesize these insights and identify key opportunities for improving the app's functionality.
            </p>
          </section>

          {/* Customer Journey Map */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Customer Journey Map</h2>
            <div className="mb-6">
                  <img 
                    src={image7} 
                    alt="Customer Journey Map"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Customer Journey Map was a crucial step in this project, enabling me to step into the user's shoes and experience their end-to-end process. I charted the user's emotions, actions, and thoughts across key touchpoints—from initial awareness to problem-solving. This analysis was instrumental in identifying friction points and translating them into actionable insights that directly informed feature improvements.
            </p>
          </section>

          {/* Infromation Architecture */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Infromation Architecture</h2>
            <div className="mb-6">
                  <img 
                    src={image8} 
                    alt="Infromation Architecture"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              After synthesizing our research, I began creating the information architecture (IA). This stage involved structuring the product's content to be logical and intuitive. I also mapped out the key user flows, serving as the main guide for navigating the product's features. The data from my previous research was instrumental in ensuring these flows aligned with user expectations and behaviors.
            </p>
          </section>

          {/* User Flow */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">User Flow</h2>
            <div className="mb-6">
                  <img 
                    src={image9} 
                    alt="User Flow"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The final stage of the UX process involved constructing the user flow. My primary goal was to simplify the number of steps required for users to complete key objectives, ensuring a seamless and efficient experience within the product. This focus on reducing friction was crucial for creating an intuitive and user-friendly product.
            </p>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Features</h2>
            <div className="mb-6">
                  <img 
                    src={image10} 
                    alt="Features"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Following a detailed analysis and the creation of the product roadmap, I identified key differentiators that would give Bit-Wallet a competitive advantage. The value of these features lies in their ability to directly solve user pain points that are not addressed by current products on the market.
            </p>
          </section>

          {/* UI kiT */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">UI kiT</h2>
            <div className="mb-6">
                  <img 
                    src={image11} 
                    alt="UI kiT"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A key component of the visual design was the creation of a comprehensive UI kit. I chose a color palette that is both modern and symbolic of the crypto theme, using specific colors to emphasize key actions and states. The typography was selected for its readability and contrast, ensuring an effortless reading experience across all areas of the app, from dashboard views to detailed transaction screens.
            </p>
          </section>

          {/* LOG In/Sign Up */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Log In/Sign Up</h2>
            <div className="mb-6">
                  <img 
                    src={image12} 
                    alt="LOG In/Sign Up"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The first thing a person sees is the login/registration form. To truly engage the user, we designed a seamless and trustworthy entry point. This includes a simple onboarding process, clear explanations of our security features like two-factor authentication, and a sense of immediate support. We set the stage for a positive user journey from the very first interaction.
            </p>
          </section>

          {/* Currency */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Currency</h2>
            <div className="mb-6">
                  <img 
                    src={image13} 
                    alt="Currency"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When it comes to buying crypto, we provide a relevant, curated selection to prevent user overwhelm. This is accomplished by highlighting top cryptocurrencies and organizing assets by categories. For those interested in new opportunities, a separate tab features trending assets.
            </p>
          </section>

          {/* Payment */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Payment</h2>
            <div className="mb-6">
                  <img 
                    src={image14} 
                    alt="Payment"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The purchasing process is designed to be straightforward. The user first adds a payment method in the settings. From there, they can navigate to the market, select their desired cryptocurrency, and complete the transaction in a dedicated payment window to receive the crypto on their balance.
            </p>
          </section>

          {/* Transaction */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Transaction</h2>
            <div className="mb-6">
                  <img 
                    src={image15} 
                    alt="Transaction"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’ve created a separate tab to track each cryptocurrency transaction, and added filtering and sorting for convenience. This dedicated space provides a clear history of all your actions, making it the most important way to track your crypto activity.
            </p>
          </section>

          {/* Deposit */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Deposit</h2>
            <div className="mb-6">
                  <img 
                    src={image16} 
                    alt="Deposit"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              One of the most essential functions of any wallet is the ability to securely send and receive cryptocurrency. To simplify this process, I designed a streamlined receipt flow that provides a clear and intuitive experience. Users can easily generate a unique QR code for their active wallet address, customized by their preferred cryptocurrency. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Upon a successful receipt of crypto, a clear and timely notification is displayed, providing the user with immediate confirmation and peace of mind. This design prioritizes efficiency and user confidence, making a core function both simple and secure.
            </p>
          </section>

          {/* Withdraw */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Withdraw</h2>
            <div className="mb-6">
                  <img 
                    src={image17} 
                    alt="Withdraw"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The sending feature is designed for complete transparency and security. The transaction flow is simplified into just three steps:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground mb-6">
              <li><strong>Select Currency & Amount:</strong> Choose the cryptocurrency and enter the desired amount.</li>
              <li><strong>Recipient Address:</strong> Insert the recipient's wallet address.</li>
              <li><strong>Confirmation:</strong>Review all transaction details—including fees and total cost—before confirming.</li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Upon completion, the user receives a notification with the transaction status and ID, providing full transparency and peace of mind. This process ensures the user has all the necessary information to make a secure and informed decision.
            </p>
          </section>

          {/* Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Security</h2>
            <div className="mb-6">
                  <img 
                    src={image18} 
                    alt="Security"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Users are rightfully concerned about security, especially when dealing with financial assets. To alleviate this anxiety, I integrated a two-factor authentication (2FA) feature that makes account security transparent and easy to manage. With just a few simple steps, users can activate 2FA and significantly protect their account from unauthorized access and hacking. This feature builds trust by empowering the user to actively secure their personal data and investments.
            </p>
          </section>

          {/* Support */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Support</h2>
            <div className="mb-6">
                  <img 
                    src={image19} 
                    alt="Support"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For any questions about functionality, users can contact our specialized support service directly within the app. The support feature allows users to attach a photo or video to their inquiry, providing critical context that helps our team quickly understand and resolve specific problems. This ensures a fast and effective support experience, building trust and user confidence.
            </p>
          </section>

          {/* Other Screens */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Other Screens</h2>
            <div className="mb-6">
                  <img 
                    src={image20} 
                    alt="Other Screens"
                    className="w-full h-120 object-cover rounded-lg shadow-lg"
                  />
                </div>
          </section>

          {/* My Learnings */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">My Learnings</h2>
            <ul className="list-disc list-inside space-y-6 text-lg text-muted-foreground">
                <li>
                  <strong>User-Centered Design is Paramount </strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                     I learned that a product's success hinges on a deep understanding of its users. Through user interviews and a Customer Journey Map, I was able to move beyond assumptions and design a product that directly addresses user fears and frustrations, especially those of crypto newcomers.
                  </p>
                </li>
                <li>
                  <strong>Simplicity Wins</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    The process taught me that a simple, clear, and intuitive design is crucial for a complex domain like cryptocurrency. By simplifying user flows, reducing steps, and using easy-to-understand language, I could transform an intimidating experience into a welcoming one.
                  </p>
                </li>
                <li>
                  <strong>Security by Design</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    I discovered that security isn't just a backend feature—it's a core part of the user experience. By designing transparent security features like 2FA and providing clear, proactive support, I could build essential user trust and confidence.
                  </p>
                </li>
                <li>
                  <strong>Strategic Feature Prioritization </strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    I learned to identify and prioritize "killer features" that serve as a competitive advantage. The focus wasn't on adding every possible feature, but on implementing those that solve critical, unmet user needs in the market.
                  </p>
                </li>
                <li>
                  <strong>Iterative Design is Key</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    The iterative design process allowed me to continuously refine the product based on user feedback and testing. This approach not only improved the final product but also ensured that it remained aligned with user expectations and market demands.
                  </p>
                </li>
              </ul>
          </section>

          {/* Improvements */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Improvements</h2>
            <ul className="list-disc list-inside space-y-6 text-lg text-muted-foreground">
                <li>
                  <strong>Data-Driven Iteration:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                     While I conducted user interviews, future projects could benefit from more quantitative data. I'd like to implement A/B testing and analytics tracking to measure the impact of my design decisions on key metrics like conversion and retention rates. This would allow me to make even more informed design choices.
                  </p>
                </li>
                <li>
                  <strong>Further Accessibility Testing:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    My focus was on simplifying the product for new users. In the future, I would conduct more specific accessibility testing with users who may have visual or motor impairments to ensure the design is truly inclusive for all.
                  </p>
                </li>
                <li>
                  <strong>Early & Continuous Feedback:</strong> 
                  <p className="mt-1 text-base text-muted-foreground/80">
                    I would aim to get feedback from both users and developers at earlier stages of the design process. This could involve paper prototyping with users and early collaboration with engineers to identify technical constraints before they become a problem.
                  </p>
                </li>
              </ul>
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

export default CaseStudyBitWallet;