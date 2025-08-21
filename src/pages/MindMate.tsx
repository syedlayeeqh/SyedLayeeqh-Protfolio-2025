import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import project1 from '@/assets/Mind-Mate/Mind-Mate-Cover.jpg';
import image2 from '@/assets/Mind-Mate/Mind-Mate-Introduction.jpg';
import image3 from '@/assets/Mind-Mate/Mind-Mate-DesignGoal.jpg';
import image4 from '@/assets/Mind-Mate/Mind-Mate-DesignProcess.jpg';
import image5 from '@/assets/Mind-Mate/Mind-Mate-CompetitorAnalysis.jpg';
import image6 from '@/assets/Mind-Mate/Mind-Mate-UserFlow.jpg';
import image7 from '@/assets/Mind-Mate/Mind-Mate-UserPersona-1.jpg';
import image8 from '@/assets/Mind-Mate/Mind-Mate-UserPersona-2.jpg';
import image9 from '@/assets/Mind-Mate/Mind-Mate-VisualLanguage.jpg';
import image10 from '@/assets/Mind-Mate/Mind-Mate-ColorPalette.jpg';
import image11 from '@/assets/Mind-Mate/Mind-Mate-Typograhpy.jpg';
import image12 from '@/assets/Mind-Mate/Mind-Mate-Splash.jpg';
import image13 from '@/assets/Mind-Mate/Mind-Mate-FuturePreview.jpg';
import image14 from '@/assets/Mind-Mate/Mind-Mate-CreateAccount.jpg';
import image15 from '@/assets/Mind-Mate/Mind-Mate-CreateAccount-1.jpg';
import image16 from '@/assets/Mind-Mate/Mind-Mate-MoodHistory.jpg';
import image17 from '@/assets/Mind-Mate/Mind-Mate-MoodLogging.jpg';
import image18 from '@/assets/Mind-Mate/Mind-Mate-SoSo.jpg';
import image19 from '@/assets/Mind-Mate/Mind-Mate-SOSSupport.jpg';
import image20 from '@/assets/Mind-Mate/Mind-Mate-TherapistCall.jpg';
import image21 from '@/assets/Mind-Mate/Mind-Mate-UserAccountScreen.jpg';
import image22 from '@/assets/Mind-Mate/Mind-Mate-AIAssistanceLevel.jpg';
import image23 from '@/assets/Mind-Mate/Mind-Mate-Subscription.jpg';
import image24 from '@/assets/Mind-Mate/Mind-Mate-Statistics.jpg';
import image25 from '@/assets/Mind-Mate/Mind-Mate-ExplorePage.jpg';
import image26 from '@/assets/Mind-Mate/Mind-Mate-Journaling.jpg';
import image27 from '@/assets/Mind-Mate/Mind-Mate-Meditation.jpg';
import image28 from '@/assets/Mind-Mate/Mind-Mate-CalmingQuotes.jpg';
import image29 from '@/assets/Mind-Mate/Mind-Mate-Notifications.jpg';
import image30 from '@/assets/Mind-Mate/Mind-Mate-UsabilityTesting.jpg';
import image31 from '@/assets/Mind-Mate/Mind-Mate-HomeScreenIteration.jpg';
import image32 from '@/assets/Mind-Mate/Mind-Mate-Thanks.jpg';
import image33 from '@/assets/Mind-Mate/Mind-Mate-UnderstandingtheProblem.jpg';




const CaseStudyMindMate = () => {
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
            MindMate
          </h1>

          {/* Cover Image */}
          <div className="mb-12">
            <img 
              src={project1} 
              alt="MindMate Mobile App Cover"
              className="w-full h-120 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Introduction</h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              MindMate is an app that brings a more human and emotionally aware approach to mental wellness. In a world where burnout and emotional overwhelm are common, MindMate was created to act as a mentor for calm, a space to reflect, reconnect, and recharge. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What makes the app stand out is its thoughtful blend of gentle AI and empathetic design. From mood tracking and guided meditations to AI-powered chats, recommendations, and SOS therapist calls, every feature is crafted to support users in a way that feels natural and pressure-free.
            </p>
          </section>

          {/* My Role */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">My Role</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              As the sole Senior Product Designer on the MindMate project, I led the end-to-end user experience. I was responsible for the strategic vision, translating user needs into intuitive flows and UI designs, and creating high-fidelity prototypes and microcopy. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
             I also drove the visual direction, ensuring every interaction was intentionally designed to feel supportive, sensitive, and genuinely human.
            </p>
          </section>

          {/* The Challange */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">The Challenge</h2>
            <div className="mb-6">
                <img 
                  src={image2} 
                  alt="MindMate Mobile App The Challange"
                  className="w-full h-120 object-cover rounded-lg shadow-lg"
                />
             </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              In today's fast-paced world, where burnout and emotional overwhelm are common, many people are silently struggling to keep up.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Between work pressures, personal expectations, and the constant noise of daily life, emotional well-being often takes a backseat. Over time, this neglect leads to anxiety, exhaustion, and a sense of emotional disconnection from others and from oneself.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MindMate was created to fill this gap, offering a supportive space in the midst of the chaos.
            </p>
          </section>

          {/* Understanding the Problem */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Understanding the Problem</h2>
            <div className="mb-12">
                <img 
                  src={image33} 
                  alt="MindMate Mobile App Understanding the Proble"
                  className="w-full h-120 object-cover rounded-lg shadow-lg"
                />
             </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              To design something that genuinely supports mental wellness, my approach went beyond surface-level trends. I began by immersing myself in extensive research, studying real user behaviors, and analyzing feedback from existing wellness apps. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
             I also integrated psychology-backed approaches to ensure the emotional support provided was both effective and intentional.
            </p>
          </section>

          {/* User Research */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">User Research</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              To better understand user needs and behaviors, I fielded a survey to 16 participants (ages 18-45) across various demographics. The goal was to gather quantitative insights into their expectations, challenges, and habits regarding digital mental health support. 
            </p>
          </section>

          {/* Key Insights from research */}
         <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Key Insights from Research</h2>
              <ul className="list-disc list-inside space-y-6 text-lg text-muted-foreground">
                <li>
                  Emotional Overload Is Common
                  <p className="mt-1 text-base text-muted-foreground/80">
                    Users feel overwhelmed and lack a safe space to process emotions.
                  </p>
                </li>
                <li>
                  The Growing Acceptance of Mental Health Apps
                  <p className="mt-1 text-base text-muted-foreground/80">
                    While most users haven't used mental health apps before, they're open to the idea. They are particularly drawn to experiences that feel warm and human, not sterile and clinical, presenting a prime opportunity to build genuine connections.
                  </p>
                </li>
                <li>
                  Al Support Is Welcomed
                  <p className="mt-1 text-base text-muted-foreground/80">
                    Users were open to AI support, but only if it felt empathetic and not robotic.
                  </p>
                </li>
                <li>
                  Consistency Through Simplicity
                  <p className="mt-1 text-base text-muted-foreground/80">
                    Users prefer quick, daily emotional check-ins that feel doable—a habit that integrates seamlessly into their routine, rather than feeling like another burdensome task on a to-do list.
                  </p>
                </li>
                <li>
                  Users Stay Engaged When They See Their Growth
                  <p className="mt-1 text-base text-muted-foreground/80">
                    Users are motivated by progress. By providing clear visual feedback on mood trends and scores, we help them see their journey over time, which encourages continued engagement and a sense of ownership.
                  </p>
                </li>
                <li>
                  A Calming UI Reduces Stress
                  <p className="mt-1 text-base text-muted-foreground/80">
                    To create a sense of ease, the UI was designed with a focus on visual calm. Users gravitated toward a minimal design, with soft colors and clear breathing space that helped to reduce cognitive load and stress..
                  </p>
                </li>
                <li>
                  Reassurance Through Human Backup
                  <p className="mt-1 text-base text-muted-foreground/80">
                    The presence of a human backup is deeply reassuring to users. The simple knowledge that an SOS option connects them to a real therapist fosters a sense of emotional safety and builds a stronger, more trusting relationship with the app.
                  </p>
                </li>
              </ul>
            </section>

            {/* Design Goal*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Design Goal</h2>
             
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The Overall goal was to create a mental wellness app that is both emotionally supportive and incredibly easy to use, bringing a deeply human touch to the digital wellness space.
                  </p>

                   <div className="mb-12">
                <img 
                  src={image3} 
                  alt="MindMate Mobile App Design Goal"
                  className="w-full h-120 object-cover rounded-lg shadow-lg"
                />
             </div>
                    <ul className="list-disc list-inside space-y-6 text-lg text-muted-foreground">
                      <li>Design a supportive, pressure-free environment for emotional check-ins.</li>
                      <li>Create a seamless blend of AI and empathy, where smart suggestions feel like personal, compassionate guidance.</li>
                      <li>Make mental wellness an effortless habit with simple mood logs, journaling, and visual summaries that offer actionable insights.</li>
                      <li>Ensure emotional safety by offering an SOS feature that connects users to a real therapist in moments of crisis.</li>
                      <li>Guide users toward a more consistent routine of meditation and reflection by using gentle reminders that integrate seamlessly into their daily lives.</li>
                      <li>Create a calming experience by using soft visuals and thoughtful interactions to reduce cognitive load and soothe the user.</li>
                    </ul>
              </section>

            {/* Design Process*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Design Process</h2>

              <div className="mb-6">
                <img 
                  src={image4} 
                  alt="MindMate Mobile App Design Process"
                  className="w-full h-120 object-cover rounded-lg shadow-lg"
                />
                </div>
             
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  With emotional well-being at the heart of the product, what guided the process was simply looking for ways to make the product feel warmer and more human.
                  The design process followed these key stages.
                  </p>
                  
              </section>

             {/* Competative Analysis*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Competative Analysis</h2>

              <div className="mb-6">
                <img 
                  src={image5} 
                  alt="MindMate Mobile App Competative Analysis"
                  className="w-full h-120 object-cover rounded-lg shadow-lg"
                />
                </div>
             
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  To better position MindMate, I conducted a competitive feature audit of other mental wellness apps. The goal was to understand industry standards, draw inspiration, and, most importantly, identify the unique gaps MindMate could fill.
                  </p>
                  
              </section>

              {/* User Persona*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">User Persona</h2>
             
                   <div className="mb-12">
                      <img 
                      src={image7} 
                      alt="MindMate Mobile App User Persona"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                    <div className="mb-12">
                      <img 
                      src={image8} 
                      alt="MindMate Mobile App User Persona"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  
              </section>     

            {/* User Flow*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">User Flow</h2>
             
                    <div className="mb-12">
                      <img 
                      src={image6} 
                      alt="MindMate Mobile App User Flow"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  
              </section>

              {/* Visual Language*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Visual Language</h2>
             
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The visual identity of MindMate was designed to feel calm, supportive, and emotionally warm. Every element, from the color palette to the typography, was carefully chosen to create a safe and soothing space for users navigating their mental health journey. The overall look balances softness with clarity, ensuring the interface feels approachable yet structured. This design language not only reflects the app’s purpose but also reinforces trust, emotional comfort, and ease of use throughout the entire experience.
                  </p>

                    <div className="mb-12">
                      <img 
                      src={image9} 
                      alt="MindMate Mobile App Visual Language"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  
              </section>

               {/* Colour Palette*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Colour Palette</h2>
             
                    <div className="mb-12">
                      <img 
                      src={image10} 
                      alt="MindMate Mobile App Colour Palette"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  
              </section>

              {/* Typography*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Typography</h2>
             
                    <div className="mb-12">
                      <img 
                      src={image11} 
                      alt="MindMate Mobile App Typography"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  
              </section>

              {/* Onboarding Flow: Creating a Gentle First Impression*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Onboarding Flow: Creating a Gentle First Impression</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Designing the onboarding flow for MindMate was about more than just guiding users; it was about welcoming them. The process was structured to ease users in by first showing them the value of the app before asking for any commitment.
                  </p>
                  
              </section>

              {/* Splash Screen*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Splash Screen</h2>
              <div className="mb-6">
                      <img 
                      src={image12} 
                      alt="MindMate Mobile App Splash Screen"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The journey begins with an intentionally calm and minimal splash screen. This moment of pause acts as a quiet entryway, setting a tranquil tone and offering users a mental breather from the day's noise before they even begin.
                  </p>
             
                    
              </section>

              {/* Feature Preview Screens*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Feature Preview Screens</h2>
              <div className="mb-6">
                      <img 
                      src={image13} 
                      alt="MindMate Mobile App Feature Preview Screens"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The onboarding journey continues with a calm, three-screen carousel. With soft visuals and empathetic messaging, each screen gently introduces MindMate's offerings, fostering a sense of emotional trust from the very first moments.
                  </p>
                  
              </section>


              {/* Create Account*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Create Account</h2>
              <div className="mb-6">
                      <img 
                      src={image14} 
                      alt="MindMate Mobile App Create Account"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  With trust now beginning to form, users are invited to create an account. The sign-up process is kept intentionally simple and low-friction, acknowledging that users may already feel overwhelmed. They can sign up quickly using their email with a few minimal details, or they can choose an even faster, one-click process via their Google or Apple account.
                  </p>
                  
              </section>


              {/* User Intent and Check in Reminder*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">User Intent and Check in Reminder</h2>
              <div className="mb-6">
                      <img 
                      src={image15} 
                      alt="MindMate Mobile App User Intent and Check in Reminder"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Once registered, users are prompted to share their personal wellness goals. This step provides the necessary context to personalize the app's guidance, ensuring their journey is unique to their needs.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The app begins by gently prompting users to set a daily reminder for their mental check-in. This small, intentional step helps build a consistent, healthy habit from the very start of their journey.
                  </p>
                  
              </section>

              {/* Home Screen*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Home Screen</h2>
               <div className="mb-6">

                      <img 
                      src={image17} 
                      alt="MindMate Mobile App Home Screen"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The MindMate home screen was designed as a calming hub where users can check in, reflect, and feel supported. It acts as the central point for the user's daily wellness journey.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  At a glance, users see a visual breakdown of their weekly mood trends, with easy access to deeper insights. A prominent daily mood log, which often includes a prompt like, "How are you feeling today?", keeps the self-awareness habit alive.
                  </p>

                   <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  AI-powered suggestions offer two personalized activities based on recent behavior, such as journaling or a guided meditation. 
                  </p>

                   <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The meditation section provides quick access to calm, while smart AI insights also encourage consistency with users. The navigation is kept simple and intuitive with four key tabs: Home, Explore, Stats, and Account.
                  </p>

                   <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Right at the center of the navigation bar is SoSo, the app’s AI assistant. This is a conversational space where users can express how they feel or receive comforting, personalized suggestions. 
                  </p>

                   <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                 SoSo also includes a direct, visible SOS feature that provides a direct link to emergency therapist support, offering a crucial human safety net.
                  </p>
                  
              </section>

              {/* Mood History*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Mood History</h2>
               <div className="mb-6">

                      <img 
                      src={image16} 
                      alt="MindMate Mobile App Mood History"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The Mood History screen was designed to help users reflect on how they've truly been feeling over time, not just in the moment.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Tapping the mood summary from the home screen brings users here, where they can see a day-by-day breakdown of their mood logs from the past week.
                  </p>

                   <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The screen also displays their average mental wellness score and a weekly trend graph, giving them clear insight into emotional patterns and progress.
                  </p>
                  
              </section>

              {/* Mood Logging*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Mood Logging</h2>
               <div className="mb-6">

                      <img 
                      src={image17} 
                      alt="MindMate Mobile App Mood Logging"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Logging a mood in MindMate is designed to feel light, intuitive, and emotionally validating. This low-pressure process encourages users to consistently reflect on their feelings without judgment.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  From the home screen, users can log their mood by tapping an icon. A gentle, non-intrusive prompt then appears, validating their emotional choice and softly asking, "What's making you feel this way?" This design ensures that the check-in feels supportive and low-pressure.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A mood log is an easy, two-step process: users first select their emotion, then have the option to add a note. This design prioritizes user choice and simplicity, ensuring the experience is tailored to their needs in that moment.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  By encouraging daily, low-pressure check-ins, this feature helps users build emotional awareness while keeping the experience warm and human.
                  </p>
                  
              </section>

              {/* SoSo - Al Therapist Companion*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">SoSo - Al Therapist Companion</h2>
               <div className="mb-6">

                      <img 
                      src={image18} 
                      alt="MindMate Mobile App SoSo - Al Therapist Companion"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  SoSo, MindMate's built-in AI assistant, is designed to offer emotional support in a calm, conversational way. Whether users want to vent, reflect, or simply talk, SoSo provides gentle conversation starters and thoughtful responses, making it easier to open up.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  SoSo is designed to be a true companion, not just a chatbot. It dynamically personalizes support based on your data, and its central placement in the UI ensures it's an always-available emotional anchor that makes seeking help feel approachable and low-pressure.
                  </p>
                  
              </section>

               {/* SOS Support*/}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">SOS Support</h2>
               <div className="mb-6">

                      <img 
                      src={image19} 
                      alt="MindMate Mobile App SOS Support"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The SOS screen was created as a lifeline for users experiencing emotional distress. Always accessible from the chat interface, it offers a clear, calming layout with a prominent red SOS button. This design carefully balances the need to signal urgency with a commitment to not overwhelming the user in a moment of crisis.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  This feature provides immediate access to support, whether it’s a therapist, a crisis hotline, or a personal emergency contact. The quick, clear options give users a vital sense of safety and control.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Soft visual elements and a comforting tone are used throughout the screen to reduce panic. The design offers reassurance, making it clear that help is just one tap away.
                  </p>
                  
              </section>

              {/* Therapist Call Screens */}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Therapist Call Screens </h2>
               <div className="mb-6">

                      <img 
                      src={image20} 
                      alt="MindMate Mobile App Therapist Call Screens"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  In high-stress moments, the user's emotional state before help arrives is as critical as the help itself. The therapist call flow in MindMate was designed with this in mind, combining clarity, calm, and comfort to create a supportive and reassuring experience.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  To combat anxiety during the wait, the call screen instantly presents a subtle breathing animation, soft music, and a gentle text animation. This intentional design provides continuous reassurance that a connection is in progress.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The human-centered design continues after the call. The therapist's name appears on screen, personalizing the connection. Post-session, users are gently guided from crisis to reflection by prompting them to log their mood and, if they choose, offering a space to journal about the experience.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                 The entire visual experience, from the muted palette to the animation timing, was designed to prioritize emotional safety and user comfort.
                  </p>
                  
              </section>

               {/* User Account Screen */}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">User Account Screen </h2>
               <div className="mb-6">

                      <img 
                      src={image21} 
                      alt="MindMate Mobile App User Account Screen"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The Account screen in MindMate offers users a calm and organized space to track their growth and manage their wellness journey.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A Progress Overview at the top of the screen provides a motivating snapshot of the user's journey with key metrics like Mood Score, Streak, and Minutes Spent. A yellow checkmark further reinforces their commitment and progress.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Users can easily access and manage key settings, including Goals & Reminders, AI assistance, and notifications, all from one organized dashboard.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                 Key sections like Achievements, Emergency Support, and the Resources Hub are thoughtfully placed to create a critical balance of encouragement and help, ensuring users feel supported and motivated on their journey.
                  </p>
                  
              </section>

               {/* AI Assistance */}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">AI Assistance </h2>
               <div className="mb-6">

                      <img 
                      src={image22} 
                      alt="MindMate Mobile App AI Assistance"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The AI Assistance Level screen empowers users to customize how actively they want MindMate's AI to support them, from gentle check-ins to proactive recommendations.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  This flexibility gives users control over their interaction style, ensuring the AI meets them where they are emotionally, not just functionally. This crucial design choice helps build trust and keeps the experience feeling personal and respectful.
                  </p>
                  
              </section>

               {/* Subscription */}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Subscription </h2>
               <div className="mb-6">

                      <img 
                      src={image23} 
                      alt="MindMate Mobile App Subscription"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The Subscription screen clearly outlines three tiers—Essential Care (Free), Premium Wellness, and Complete Care—each with varying levels of AI support, activity access, and therapist features to meet diverse user needs.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The two screens show both the active and inactive states of the subscription page. Designed with calm visuals and simple comparisons, the inactive screen empowers users to choose the best option for their needs without feeling any pressure.
                  </p>
                  
              </section>

                 {/* Statistics Page */}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Statistics Page </h2>
               <div className="mb-6">

                      <img 
                      src={image24} 
                      alt="MindMate Mobile App Statistics Page"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  "You can't improve what you don't measure." This guiding principle shaped the design of MindMate's Statistics screen. Our goal wasn't just to show numbers; it was to help users see their progress, celebrate their growth, and stay gently motivated along the way.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                  The dashboard provides a clear, calm overview of their wellness journey with a few key features:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mb-6">
                      <li>Mood trends across the week</li>
                      <li>Session tracking - Frequency and total time</li>
                      <li>Personalized goals with visual progress indicators</li>
                      <li>AI-generated insights based on patterns in mood and activity</li>
                    </ul>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  With its clean, calm layout, the Statistics page transforms reflection into motivation. It encourages users to stay aware, consistent, and kind to themselves through every emotional phase.
                  </p>
                  
              </section>

              {/* Explore Page */}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Explore Page </h2>
               <div className="mb-6">

                      <img 
                      src={image25} 
                      alt="MindMate Mobile App Explore Page"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The Explore page was designed as the central hub for all wellness activities on MindMate, a curated space where users can discover tools that truly meet their needs.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                  It features:
                  </p>
                  <ul className="list-disc list-inside space-y-4 text-lg text-muted-foreground mb-6">
                      <li>A search bar that lets users look for what they already have in mind.</li>
                      <li>AI-curated daily recommendations are based on the user's mood and history, providing a personalized and supportive experience.</li>
                      <li>The Explore page provides quick access tiles to essential wellness practices like breathing and meditation, making it easy for users to find the tools they need instantly.</li>
                      <li>A "What You Might Need" section provides gentle, AI-powered suggestions, ensuring users always have access to relevant solutions for their current challenges.</li>
                      <li>Category filters let users browse and discover activities by focus, from stress relief to self-awareness, ensuring a personalized and easy-to-navigate experience.</li>
                    </ul>
                  
              </section>

              {/* Journaling */}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Journaling </h2>
               <div className="mb-6">

                      <img 
                      src={image26} 
                      alt="MindMate Mobile App Journaling"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The journaling flow was designed to be a personal and flexible space, empowering users to reflect in a way that feels natural and emotionally aware.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                  Users can:
                  </p>
                  <ul className="list-disc list-inside space-y-4 text-lg text-muted-foreground mb-6">
                      <li>Write freely or respond to daily suggested prompts</li>
                      <li>Tag their mood before writing, adding emotional context</li>
                      <li>Enhance entries with photos, voice notes, or location</li>
                      <li>Receive gentle Al reflections or recommendations after each entry</li>
                      <li>Revisit past logs through a calming, organized journal history</li>
                      <li>Journaling in MindMate offers a soft, judgment-free space for any need—from venting and reflection to simply tracking your journey.</li>
                    </ul>
                  
              </section>

              {/* Meditation */}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Meditation </h2>
               <div className="mb-6">

                      <img 
                      src={image27} 
                      alt="Meditation"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The meditation flow was designed as a seamless path to calm. With low-friction access from the Home or Explore screen, users can quickly pause, breathe, and recenter. 
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Each session is a personalized sanctuary, with calming visuals and soft colors that reinforce a sense of peace, curated to meet their specific needs.
                  </p>
                  
              </section>

              {/* Calming Quotes */}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Calming Quotes </h2>
               <div className="mb-6">

                      <img 
                      src={image28} 
                      alt="Calming Quotes"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The Calming Quotes screen provides a gentle antidote to stress and overwhelm.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Each short, thoughtful message is carefully paired with soft visuals, creating a peaceful pause that uplifts and reassures users on their journey.
                  </p>
                  
              </section>

              {/* Notification */}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Notification </h2>
               <div className="mb-6">

                      <img 
                      src={image29} 
                      alt="Notification"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  MindMate's notifications are designed to be a supportive guide. Each alert, from a mood check-in to a personalized suggestion, is crafted with clarity and a calm tone. 
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  They also feature contextual CTA buttons that provide a seamless and intuitive path to the relevant feature.
                  </p>
                  
              </section>


          {/* Usability Testing & Iteration */}
         <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6">Usability Testing & Iteration</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  To ensure SoulSync wasn't just beautiful but truly helpful, I conducted remote usability testing sessions with a diverse group of users to observe how they interacted with the app across different emotional states.
                  </p>
              <ul className="list-disc list-inside space-y-6 text-lg text-muted-foreground">
                <li>
                  Navigation clarity:
                  <p className="mt-1 text-base text-muted-foreground/80">
                    Some users initially missed the Al assistant in the center nav.
                    I adjusted the icon design with a more prominent gradient color and added a subtle onboarding prompt to guide first time users.
                  </p>
                </li>
                <li>
                  SOS Button Visibility:
                  <p className="mt-1 text-base text-muted-foreground/80">
                    Some users missed the SOS option when in distress.
                    I made the SOS icon persistent across chat screens and used a soft red highlight to subtly signal urgency without increasing anxiety.
                  </p>
                </li>
                <li>
                  Journal Entry Felt Restrictive:
                  <p className="mt-1 text-base text-muted-foreground/80">
                    Users expressed the need for more flexibility when documenting their thoughts.
                    I introduced optional voice notes, image uploads, and made mood selection non-mandatory to accommodate varied journaling styles.
                  </p>
                </li>
                <li>
                  Call Session Felt Incomplete Post-Support:
                  <p className="mt-1 text-base text-muted-foreground/80">
                    For the first draft, some users wished for closure after a therapist call which was missing.
                    I added a simple post-call prompt asking "How are you feeling now?" with emoji options and an invitation to journal. This would also help the user get more tailored moving forward.
                  </p>
                </li>
                <li>
                  Emotional Trends Visualization:
                  <p className="mt-1 text-base text-muted-foreground/80">
                    Some users complained the initial graphs were hard to interpret for them.
                    I then redesigned the visuals with softer hues, simplified labels, and added weekly summary statements to increase clarity.
                  </p>
                </li>
              </ul>

              <div className="mt-12 mb-6">

                      <img 
                      src={image30} 
                      alt="Usability Testing & Iteration"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                    <p className="mt-1 text-base text-muted-foreground/80">
                    These iterations helped refine both the flow and emotional tone of the product, aligning the design more closely with real user needs and behaviors.
                  </p>

            </section>

            {/* Home Screen (Iteration) */}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Home Screen (Iteration) </h2>
               <div className="mb-6">

                      <img 
                      src={image31} 
                      alt="Home Screen (Iteration)"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Via series of A/B testing and monitored user testing the home screen evolved through the following screen.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  On the first draft, users complained that the "Talk with SoSo" button felt like the regular Al bot on most apps/website due to its placement and it was only visible on the home page exclusively. User suggested the SoSo Al chat icon should be included on the Nav bar, so it remains prominent across all sections on the app and it feels more like a major part of the app and not a random bot.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  On the second draft, Some users initially missed the Al assistant in the center nav.
                  I adjusted the icon design with a more prominent gradient color and added a subtle onboarding prompt to guide first time users.
                  </p>

                   <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The dashboard overview at the top also didn't include an option for users to see more details. All these were fixed in the final draft as show in the third and fourth screens.
                  </p>
                  
              </section>

              {/* Impact */}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Impact </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Through the MindMate project, I learned that empathetic design has the power to transform. The final product succeeded not just by providing features, but by offering users a tangible sense of comfort, clarity, and connection. As a result, early testing showed users felt seen and less alone, leading them to engage more regularly with their emotional well-being.
                  </p>
                  
              </section>

              {/* Lessons Learned */}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Lessons Learned </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
                 <strong>Emotional design matters:</strong>  Small, intentional choices in tone, color, and microcopy can deeply influence how users experience a mental wellness product.
               </p>

               <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
                 <strong>Al needs empathy:</strong>  Building Al that feels helpful (not cold or robotic) takes constant tuning of tone, timing, and interaction patterns.
               </p>


               <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
                 <strong>Flexibility is care:</strong>  Letting users choose how they interact, whether typing, speaking, or skipping a process is key to inclusivity.
               </p>


               <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
                 <strong>Never Assume for Users:</strong>  Do not think you have a perfect picture of your user problem until you make research. This opened my eyes to how users actually feel when faces with a problem, especially when it deeply affects their emotions.
               </p>

                  
              </section>

               {/* Final Thoughts */}
            <section className="mb-12">

              <h2 className="text-3xl font-semibold mb-6">Final Thoughts </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Designing for mental health requires more than just great design. It demands a deep sense of empathy and careful attention to every user touchpoint, from AI-powered suggestions to the tone of a simple notification.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  This case study reflects the quiet work of designing with care. It's a reminder that when we build digital products for emotional well-being, we aren’t just designing features, we are designing feelings.
                  </p>

                  <div className="mb-6">

                      <img 
                      src={image32} 
                      alt="Final Thoughts"
                      className="w-full h-120 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  
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


export default CaseStudyMindMate;



