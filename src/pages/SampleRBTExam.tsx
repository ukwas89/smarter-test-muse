
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/sample-exam/PageHeader';
import ExamOverview from '@/components/sample-exam/ExamOverview';
import ExamBenefits from '@/components/sample-exam/ExamBenefits';

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
            <PageHeader />
            <ExamOverview />
            <ExamBenefits />
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default SampleRBTExam;
