
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  // Simplify animations on mobile
  const animationSettings = isMobile ? 
    { duration: 0.3, staggerChildren: 0.1 } : 
    { duration: 0.5, staggerChildren: 0.2 };
  
  return (
    <section className="relative pt-20 md:pt-40 pb-8 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      
      {/* Background circles - simplified for mobile */}
      {!isMobile && (
        <div className="absolute top-0 left-0 right-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full opacity-20 blur-3xl" />
          <div className="absolute top-32 right-1/4 w-[400px] h-[400px] bg-sky-100 rounded-full opacity-20 blur-3xl" />
        </div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationSettings.duration }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-primary bg-blue-50 rounded-full">
              Free RBT Exam Preparation
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationSettings.duration, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Free RBT Practice Exams for Certification Success
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationSettings.duration, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 md:mb-10 max-w-3xl mx-auto"
          >
            Prepare for your Registered Behavior Technician (RBT) certification with comprehensive practice exams designed by experts. Our free resources help you master the RBT Task List and pass your exam.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationSettings.duration, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button asChild size="lg" className="w-full sm:w-auto font-medium">
              <Link to="/exams">
                Take Free RBT Practice Exam <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/about">Learn More</Link>
            </Button>
          </motion.div>
          
          {/* Practice Exam Buttons - simplified grid for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationSettings.duration, delay: 0.4 }}
            className="grid grid-cols-2 gap-2 md:gap-3 max-w-2xl mx-auto mb-10"
          >
            <Button asChild variant="secondary" size={isMobile ? "default" : "lg"} className="w-full">
              <Link to="/exam/1">Practice Exam 1</Link>
            </Button>
            <Button asChild variant="secondary" size={isMobile ? "default" : "lg"} className="w-full">
              <Link to="/exam/2">Practice Exam 2</Link>
            </Button>
            <Button asChild variant="secondary" size={isMobile ? "default" : "lg"} className="w-full">
              <Link to="/exam/3">Practice Exam 3</Link>
            </Button>
            <Button asChild variant="secondary" size={isMobile ? "default" : "lg"} className="w-full">
              <Link to="/exam/4">Practice Exam 4</Link>
            </Button>
          </motion.div>
          
          {/* RBT Exam Information Section - simplified for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationSettings.duration, delay: 0.5 }}
            className="max-w-3xl mx-auto bg-white rounded-xl p-4 md:p-6 shadow-sm border border-blue-100 mt-6 md:mt-10 mb-8"
          >
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">Understanding the RBT Certification Examination</h2>
            <div className="text-left text-slate-700 text-sm md:text-base">
              <p className="mb-3 md:mb-4">
                The Registered Behavior Technician (RBT) certification examination represents a pivotal milestone in your behavior analysis career journey. Following completion of the mandatory 40-hour training program and fulfillment of eligibility criteria, this assessment evaluates your readiness to apply behavioral principles in clinical settings.
              </p>
              {!isMobile && (
                <p className="mb-4">
                  This standardized evaluation spans 90 minutes and contains 85 questions, with only 75 being scored while 10 serve as field-test items for future examinations. The assessment comprehensively covers six essential competency domains:
                </p>
              )}
              {isMobile ? (
                <p className="mb-3">
                  This 90-minute exam has 85 questions covering six essential domains:
                </p>
              ) : null}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3 md:mb-4">
                <div className="bg-blue-50 p-2 md:p-3 rounded text-xs md:text-sm">
                  <span className="font-semibold">Measurement Procedures:</span> 12 questions
                </div>
                <div className="bg-blue-50 p-2 md:p-3 rounded text-xs md:text-sm">
                  <span className="font-semibold">Assessment Methods:</span> 6 questions
                </div>
                <div className="bg-blue-50 p-2 md:p-3 rounded text-xs md:text-sm">
                  <span className="font-semibold">Skill Acquisition:</span> 24 questions
                </div>
                <div className="bg-blue-50 p-2 md:p-3 rounded text-xs md:text-sm">
                  <span className="font-semibold">Behavior Reduction:</span> 12 questions
                </div>
                <div className="bg-blue-50 p-2 md:p-3 rounded text-xs md:text-sm">
                  <span className="font-semibold">Documentation:</span> 10 questions
                </div>
                <div className="bg-blue-50 p-2 md:p-3 rounded text-xs md:text-sm">
                  <span className="font-semibold">Professional Ethics:</span> 11 questions
                </div>
              </div>
              <p className="text-xs md:text-sm">
                The examination follows a multiple-choice format with four potential responses per question. Research demonstrates that simulation practice significantly enhances examination performance. Begin your certification preparation today with our specially designed RBT practice assessments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
