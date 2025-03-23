
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ExamList from '@/components/exam/ExamList';
import { motion } from 'framer-motion';

const ExamSelection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-primary bg-blue-50 rounded-full">
              Practice Exams
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Select Your Practice Exam
            </h1>
            <p className="text-lg text-slate-600">
              Choose from our collection of practice exams designed to help you prepare for your RBT certification.
            </p>
          </div>
          
          <ExamList />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ExamSelection;
