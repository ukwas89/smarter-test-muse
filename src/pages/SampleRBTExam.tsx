
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { FileText, Award, Clock, CheckCircle, BookOpen } from 'lucide-react';

const SampleRBTExam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Sample RBT Exam | Free Practice Test | PracticeRBTExam.com</title>
        <meta 
          name="description" 
          content="Take our free sample RBT exam to prepare for your certification. This practice test follows the 2025 BACB task list format with detailed answer explanations."
        />
        <meta 
          name="keywords" 
          content="sample RBT exam, free RBT practice test, RBT certification sample, RBT exam questions, registered behavior technician sample test" 
        />
        <link rel="canonical" href="https://practicerbtexam.com/sample-rbt-exam" />
      </Helmet>

      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-primary bg-blue-50 rounded-full">
                Free Practice Test
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Sample RBT Exam
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Prepare for your RBT certification with our comprehensive sample exam designed to mirror the actual test format and content areas.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-10">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                About This Sample RBT Exam
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">40 Test Questions</h3>
                    <p className="text-slate-600 text-sm">
                      Aligned with the BACB's RBT task list covering all key content areas
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">Exam Simulation</h3>
                    <p className="text-slate-600 text-sm">
                      Experience the format and difficulty level of the actual RBT certification exam
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">Timed Practice</h3>
                    <p className="text-slate-600 text-sm">
                      90-minute time limit to help build your test-taking stamina
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">Detailed Explanations</h3>
                    <p className="text-slate-600 text-sm">
                      Comprehensive answer explanations to help you understand the correct responses
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-slate-100 pt-8 mt-8">
                <h3 className="text-xl font-medium text-slate-900 mb-4">
                  Key Topics Covered in the Sample RBT Exam
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center text-slate-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Measurement and Assessment
                  </li>
                  <li className="flex items-center text-slate-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Skill Acquisition
                  </li>
                  <li className="flex items-center text-slate-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Behavior Reduction
                  </li>
                  <li className="flex items-center text-slate-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Documentation and Reporting
                  </li>
                  <li className="flex items-center text-slate-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Professional Conduct and Scope of Practice
                  </li>
                  <li className="flex items-center text-slate-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    Clinical Judgement
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 my-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold text-slate-900">
                      Ready to test your RBT knowledge?
                    </h3>
                    <p className="text-slate-600">
                      Start our free Sample RBT Exam now and assess your preparation level.
                    </p>
                  </div>
                  <Button asChild size="lg" className="whitespace-nowrap">
                    <Link to="/exams">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Start Sample Exam
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Why Take Our Sample RBT Exam?
              </h2>
              
              <p className="text-slate-700 mb-4">
                Our sample RBT exam is carefully designed to help candidates prepare effectively for the actual certification test. Taking this practice exam offers several benefits:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex">
                  <div className="mr-3 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Assess Your Knowledge Gaps</h3>
                    <p className="text-slate-600">
                      Identify areas where you need additional study and focus your preparation efficiently.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-3 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Build Test-Taking Confidence</h3>
                    <p className="text-slate-600">
                      Familiarize yourself with the format and types of questions to reduce anxiety on exam day.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-3 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Practice Time Management</h3>
                    <p className="text-slate-600">
                      Learn to pace yourself effectively during the timed examination environment.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-3 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Improve Understanding Through Feedback</h3>
                    <p className="text-slate-600">
                      Learn from detailed explanations for both correct and incorrect answers.
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className="text-center pt-4">
                <Button asChild size="lg">
                  <Link to="/guides">
                    Explore Study Guides
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default SampleRBTExam;
