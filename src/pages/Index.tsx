
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>PracticeRBTExam.com | Free RBT Practice Exam & Test Preparation</title>
        <meta name="description" content="Pass your RBT exam with free practice tests and study materials from PracticeRBTExam.com. Our comprehensive RBT practice exams are designed by experts to prepare you for certification." />
        <meta name="keywords" content="RBT practice exam, RBT test prep, free RBT exam, Registered Behavior Technician exam, RBT certification practice, BACB exam practice" />
        <link rel="canonical" href="https://practicerbtexam.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "PracticeRBTExam.com",
              "url": "https://practicerbtexam.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://practicerbtexam.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "description": "Free RBT practice exams and study materials to help you prepare for and pass your Registered Behavior Technician certification exam."
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PracticeRBTExam.com",
              "url": "https://practicerbtexam.com",
              "logo": "https://practicerbtexam.com/logo.png",
              "sameAs": [
                "https://facebook.com/practicerbtexam",
                "https://twitter.com/practicerbtexam",
                "https://instagram.com/practicerbtexam"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What is an RBT practice exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An RBT practice exam is a simulation of the actual Registered Behavior Technician certification test that helps candidates prepare by providing sample questions and identifying knowledge gaps."
                }
              }, {
                "@type": "Question",
                "name": "Are the RBT practice exams on PracticeRBTExam.com free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all RBT practice exams and study materials on PracticeRBTExam.com are completely free, with no registration required."
                }
              }, {
                "@type": "Question",
                "name": "How do I prepare for the RBT certification exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best way to prepare for the RBT certification exam is to take practice tests, study the RBT Task List thoroughly, use flashcards, and review study guides. PracticeRBTExam.com offers all these resources for free."
                }
              }]
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Features />
          <Testimonials />
          <CallToAction />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
