import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import image1 from '@/assets/DLS/DLS-Cover.jpg';
import image2 from '@/assets/DLS/DLS-Atomic.jpg';
import image3 from '@/assets/DLS/DLS-Typography.jpg';
import image4 from '@/assets/DLS/DLS-Color.jpg';
import image5 from '@/assets/DLS/DLS-Icon.jpg';
import image6 from '@/assets/DLS/DLS-Buttons.jpg';
import image7 from '@/assets/DLS/DLS-BorderRadius.jpg';
import image8 from '@/assets/DLS/DLS-SpacingShadows.jpg';
import image9 from '@/assets/DLS/DLS-InputFields.jpg';
import image10 from '@/assets/DLS/DLS-Avatars.jpg';
import image11 from '@/assets/DLS/DLS-Flag.jpg';
import image12 from '@/assets/DLS/DLS-Breadcrumbs.jpg';
import image13 from '@/assets/DLS/DLS-Ratings.jpg';
import image14 from '@/assets/DLS/DLS-ProgressBar.jpg';
import image15 from '@/assets/DLS/DLS-Controls.jpg';
import image16 from '@/assets/DLS/DLS-Grid.jpg';
import image17 from '@/assets/DLS/DLS-Alerts.jpg';
import image18 from '@/assets/DLS/DLS-PlayButtons.jpg';
import image19 from '@/assets/DLS/DLS-Divider.jpg';
import image20 from '@/assets/DLS/DLS-Loader.jpg';


const CaseStudyDLS = () => {
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
            Design Language System (DLS)
          </h1>

         {/* Cover Image */}
                   <div className="mb-12">
                     <img 
                       src={image1} 
                       alt="Cover Image"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

          {/* What is the design language system (DLS)? */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">What is the design language system (DLS)?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A Design Language System (DLS) is a master plan for how a company's digital products look and work. It's a single set of rules, components, and guidelines that designers and developers follow to build consistent and familiar experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Think of it as a playbook for design, ensuring everything from a website to a mobile app feels like it belongs to the same family.
            </p>
          </section>

          {/* Why It's Needed? */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Why It's Needed?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Consistency: </strong> A DLS keeps everything consistent. It stops different teams from creating their own versions of a button or a menu, which can confuse users and make the brand look disorganized.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Efficiency: </strong> It saves a huge amount of time. Instead of building every new feature from scratch, teams can use pre-made, approved building blocks. This makes the design and development process much faster and smoother.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-4">
             <strong>Scalability: </strong> As a company grows and launches more products, a DLS makes it easy to maintain a consistent look and feel across all of them. It ensures new products can quickly adopt the brand's style without a lot of extra effort.
            </p>
          </section>

           {/* Atomic Design  */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Atomic Design </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Atomic Design is a way of building user interfaces (UIs) by breaking them down into their most basic parts and then building them back up. Think of it like Lego bricks: you start with the smallest pieces and combine them to create larger structures. This method helps teams create consistent, scalable, and easy-to-manage designs.
            </p>

            {/* Image */}
                   <div className="mb-20">
                     <img 
                       src={image2} 
                       alt="Atomic Design"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>

          {/* Typography  */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Typography </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Typography is the art and technique of arranging type to make written language legible, readable, and visually appealing. It's not just about choosing a font; it's about how that font is presented to the user.
            </p>

            {/* Image */}
                   <div className="mb-20">
                     <img 
                       src={image3} 
                       alt="Typography"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>

          {/* Color  */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Color </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              In a Design Language System (DLS), color is a structured system that goes beyond a simple palette. It uses named variables called design tokens (like brand-blue instead of a color code) to define and apply colors across all products. This makes it easy to change a color everywhere at once and gives each color a clear purpose, such as error-red for warnings. This approach ensures all digital products look consistent, strengthen the brand, and make it easier for users to understand what they see.
            </p>

            {/* Image */}
                   <div className="mb-20">
                     <img 
                       src={image4} 
                       alt="Color"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>

          {/* Iconography  */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Iconography </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Iconography in design is the use of simple, visual symbols, or icons, to represent ideas and actions. These small images, like a magnifying glass for "search," help people understand and navigate a digital product without needing to read a lot of text. A good icon system ensures all icons have a consistent style, size, and meaning, which makes a product feel polished and easy to use.
            </p>

            {/* Cover Image */}
                   <div className="mb-20">
                     <img 
                       src={image5} 
                       alt="Iconography"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>

          {/* Button  */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Button </h2>

            {/* Image */}
                   <div className="mb-20">
                     <img 
                       src={image6} 
                       alt="Button"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>

           {/* Border radius and Stroke  */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Border radius and Stroke </h2>

            {/* Image */}
                   <div className="mb-20">
                     <img 
                       src={image7} 
                       alt="Border radius and Stroke "
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>


           {/* Spacing and Shadow  */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Spacing and Shadow </h2>

            {/* Image */}
                   <div className="mb-20">
                     <img 
                       src={image8} 
                       alt="Spacing and Shadow"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>

          {/* Input Fields */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Input Fields </h2>

            {/* Image */}
                   <div className="mb-20">
                     <img 
                       src={image9} 
                       alt="Input Fields"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>

          {/* Avatars */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Avatars</h2>

            {/* Image */}
                   <div className="mb-20">
                     <img 
                       src={image10} 
                       alt="Avatars"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>

           {/* Flags */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Flags</h2>

            {/* Image */}
                   <div className="mb-20">
                     <img 
                       src={image11} 
                       alt="Flags"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>

           {/* Breadcrumbs */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Breadcrumbs</h2>

            {/* Image */}
                   <div className="mb-20">
                     <img 
                       src={image12} 
                       alt="Breadcrumbs"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>

          {/* Ratings and Progress Bar */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Ratings and Progress Bar</h2>

            {/* Image */}
                   <div className="mb-8">
                     <img 
                       src={image13} 
                       alt="Ratings and  "
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

                   {/* Image */}
                   <div className="mb-20">
                     <img 
                       src={image14} 
                       alt="Progress Bar"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>

          {/* Controls */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Controls</h2>

            {/*  Image */}
                   <div className="mb-20">
                     <img 
                       src={image15} 
                       alt="Controls"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>

           {/* Grid Sytem */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Grid Sytem</h2>

            {/* Image */}
                   <div className="mb-20">
                     <img 
                       src={image16} 
                       alt="Grid Sytem"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>

           {/* Alerts */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Alerts</h2>

             {/* Image */}
                   <div className="mb-20">
                     <img 
                       src={image17} 
                       alt="Alerts"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>

           {/* Play Buttons and Divider */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Play Buttons and Divider</h2>

           {/* Image */}
                   <div className="mb-4">
                     <img 
                       src={image18} 
                       alt="play Buttons"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>

                   <div className="mb-20">
                     <img 
                       src={image19} 
                       alt="Divider"
                       className="w-full h-120 object-cover rounded-lg shadow-lg"
                     />
                   </div>
           
          </section>

           {/* Loader */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Loader</h2>

            {/* Image */}
                   <div className="mb-4">
                     <img 
                       src={image20} 
                       alt="Loader"
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

export default CaseStudyDLS;