
import { CheckCircle, BookOpen, Coffee, BarChart4, ThumbsUp, Clock } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="p-6 rounded-xl glass-card hover:shadow-premium transition-all duration-300">
    <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg text-primary mb-5">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <BookOpen size={24} />,
      title: "Comprehensive Content",
      description: "Our practice exams cover all task list areas required for RBT certification."
    },
    {
      icon: <BarChart4 size={24} />,
      title: "Performance Analytics",
      description: "Track your progress with detailed analytics and identify areas of improvement."
    },
    {
      icon: <ThumbsUp size={24} />,
      title: "Expert Validated",
      description: "All questions and answers are curated and validated by experienced BCBAs."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Exam Simulation",
      description: "Experience a testing environment that mimics the actual RBT certification exam."
    },
    {
      icon: <Coffee size={24} />,
      title: "Study at Your Pace",
      description: "Access your practice exams anytime, anywhere, on any device."
    },
    {
      icon: <Clock size={24} />,
      title: "Time Management",
      description: "Learn to manage your time effectively with timed practice sessions."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-primary bg-blue-50 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-slate-600">
            Our platform offers all the necessary tools and resources to help you prepare effectively for your RBT certification exam.
          </p>
 <p className="text-lg text-slate-600">
         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Practice Test</p>
 You may get ready for your Registered Behavior Technician certification exam by using our free RBT practice questions.  There are four online practice exams available on our website.  They include difficult queries and thorough justifications.  To begin studying immediately, click on any of the RBT practice tests provided below!

          </p>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
              <Feature {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
