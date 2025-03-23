
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Privacy Policy | PracticeRBTExam.com - Free RBT Practice Exams</title>
        <meta name="description" content="Read our privacy policy to understand how PracticeRBTExam.com handles your data as you prepare for your RBT certification exam with our free practice tests." />
        <meta name="keywords" content="RBT privacy policy, RBT certification privacy, RBT exam preparation privacy, PracticeRBTExam.com privacy" />
        <link rel="canonical" href="https://practicerbtexam.com/privacy-policy" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Privacy Policy",
              "description": "Privacy Policy for PracticeRBTExam.com",
              "url": "https://practicerbtexam.com/privacy-policy",
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-slate-900">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Last Updated: {currentDate}
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to PracticeRBTExam.com. We respect your privacy and are committed to protecting any data that we may collect while you use our website. 
              This privacy policy outlines our practices regarding data collection and usage when you visit our site to access RBT practice exams and study resources.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>
              When you use PracticeRBTExam.com, we collect minimal information to improve your experience:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Device information (browser type, IP address, time zone)</li>
              <li>Usage data to analyze how visitors interact with our practice exams</li>
              <li>Cookies to enhance site functionality and track usage patterns</li>
            </ul>
            <p>
              We do not require registration or account creation to access our RBT practice exams and resources. All practice materials are available without the need to provide personal information.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>
              The information we collect is used for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>To improve our RBT practice exams and study materials</li>
              <li>To understand how users engage with different types of RBT exam questions</li>
              <li>To analyze site traffic and optimize the user experience</li>
              <li>To maintain the security and functionality of our website</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Cookies</h2>
            <p>
              PracticeRBTExam.com uses cookies to enhance your experience on our site. Cookies are small data files placed on your device when you visit our website that help us:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Remember your preferences when using our RBT practice exams</li>
              <li>Analyze which practice questions and study resources are most helpful</li>
              <li>Understand how you navigate through our site</li>
            </ul>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Third-Party Services</h2>
            <p>
              We may use third-party services, such as analytics providers, to help us understand how visitors use our RBT practice exams and study resources. These third parties may collect information sent by your device or our website.
            </p>
            <p>
              The third-party services we use may include:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Google Analytics to track user engagement with our practice materials</li>
              <li>Hosting and infrastructure services to deliver our website</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your information from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your information to those who have a genuine business need to know it.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
            <p>
              Our RBT practice exams and resources are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are under 16, please do not provide any information on this website.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of your personal information</li>
              <li>The right to request that we delete your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to request restriction of processing your personal information</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this policy.
            </p>
            <p>
              We encourage you to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our practices regarding your personal information, please contact us through our <a href="/contact" className="text-primary hover:underline">Contact page</a>.
            </p>
          </div>

          <Separator className="my-12" />
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default PrivacyPolicy;
