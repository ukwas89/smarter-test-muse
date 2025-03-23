
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, BookOpen, Users } from "lucide-react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>About Us | PracticeRBTExam.com - Free RBT Practice Exams</title>
        <meta name="description" content="Learn about PracticeRBTExam.com, the leading free resource for RBT practice exams helping thousands of candidates prepare for and pass their RBT certification exam." />
        <meta name="keywords" content="RBT practice exam, RBT test prep, RBT certification, Registered Behavior Technician exam, free RBT practice tests" />
        <link rel="canonical" href="https://practicerbtexam.com/about" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About PracticeRBTExam.com",
              "description": "Learn about PracticeRBTExam.com, the leading resource for RBT practice exams",
              "url": "https://practicerbtexam.com/about",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://practicerbtexam.com/about"
              },
              "isPartOf": {
                "@type": "WebSite",
                "name": "PracticeRBTExam.com",
                "url": "https://practicerbtexam.com"
              }
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-24 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">About PracticeRBTExam.com</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your trusted partner for free, comprehensive RBT practice exams to help you succeed in your certification journey.
            </p>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-lg mb-8">
              At PracticeRBTExam.com, we are dedicated to providing high-quality, accessible RBT practice exams to help aspiring Registered Behavior Technicians prepare for and pass their certification exam. We believe that financial barriers should not prevent dedicated individuals from pursuing a career in behavioral analysis, which is why all our practice materials are completely free.
            </p>

            <div className="bg-blue-50 p-8 rounded-xl mb-10">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Why We Created PracticeRBTExam.com</h3>
              <p className="mb-4">
                We recognized the need for comprehensive, up-to-date practice materials that accurately reflect the content and format of the actual RBT certification exam. Many aspiring RBTs struggle to find reliable resources that properly prepare them for the examination experience.
              </p>
              <p>
                Our team of experienced BCBAs and RBTs has designed practice exams that cover all task list areas required for certification, helping candidates identify knowledge gaps and build confidence before taking the actual exam.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <FeatureCard 
                icon={<BookOpen className="w-10 h-10 text-primary" />}
                title="Expert-Crafted Content"
                description="All our practice questions are developed by certified professionals with years of experience in the field of ABA."
              />
              <FeatureCard 
                icon={<Award className="w-10 h-10 text-primary" />}
                title="Exam-Aligned Format"
                description="Our practice exams mirror the format, difficulty, and content distribution of the actual RBT certification exam."
              />
              <FeatureCard 
                icon={<Users className="w-10 h-10 text-primary" />}
                title="Community Support"
                description="Join thousands of successful RBT candidates who have used our platform to achieve certification."
              />
            </div>

            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Commitment to You</h2>
            <p className="text-lg mb-6">
              We are committed to continuously improving our practice exams based on feedback from users and updates to the RBT Task List. We understand that the certification requirements evolve, and we strive to ensure our practice materials remain current and relevant.
            </p>
            <p className="text-lg mb-10">
              Your success is our success. We take pride in every candidate who passes their RBT exam after practicing with our materials.
            </p>

            <div className="text-center mb-12">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Ready to Start Practicing?</h3>
              <Button asChild size="lg">
                <Link to="/exams">
                  Take a Free Practice Exam <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Disclaimer</h2>
              <p className="mb-0">
                PracticeRBTExam.com is not affiliated with, endorsed by, or sponsored by the Behavior Analyst Certification Board, Inc.® (BACB®). Registered Behavior Technician® (RBT®) is a registered trademark of the Behavior Analyst Certification Board, Inc.® (BACB®). Our practice exams are designed to help candidates prepare for the RBT certification exam but are not official BACB® materials.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-medium text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

export default About;
