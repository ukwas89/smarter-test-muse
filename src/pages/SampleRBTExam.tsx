
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
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://practicerbtexam.com/sample-rbt-exam" />
        <meta property="og:title" content="Sample RBT Exam | Free Practice Test" />
        <meta property="og:description" content="Prepare for your RBT certification with our free sample exam. Includes detailed explanations and follows the latest BACB task list." />
        <meta property="og:url" content="https://practicerbtexam.com/sample-rbt-exam" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://practicerbtexam.com/lovable-uploads/5eae210c-3b37-447e-bdfc-75f728932f7b.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sample RBT Exam | Free Practice Test" />
        <meta name="twitter:description" content="Prepare for your RBT certification with our free sample exam. Includes detailed explanations and follows the latest BACB task list." />
        <meta name="twitter:image" content="https://practicerbtexam.com/lovable-uploads/5eae210c-3b37-447e-bdfc-75f728932f7b.png" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Sample RBT Exam",
              "description": "Free practice test for Registered Behavior Technician (RBT) exam preparation.",
              "url": "https://practicerbtexam.com/sample-rbt-exam",
              "publisher": {
                "@type": "Organization",
                "name": "PracticeRBTExam.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://practicerbtexam.com/lovable-uploads/5eae210c-3b37-447e-bdfc-75f728932f7b.png"
                }
              },
              "mainEntity": {
                "@type": "LearningResource",
                "name": "RBT Practice Exam",
                "educationalLevel": "professional certification",
                "audience": {
                  "@type": "Audience",
                  "audienceType": "RBT certification candidates"
                },
                "learningResourceType": "practice test"
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://practicerbtexam.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Sample RBT Exam",
                    "item": "https://practicerbtexam.com/sample-rbt-exam"
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <Navbar />
      <main className="flex-grow pt-32 pb-16" id="main-content" role="main" aria-label="Sample RBT Exam Content">
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
