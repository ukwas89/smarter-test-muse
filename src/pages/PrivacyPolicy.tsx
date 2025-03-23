
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <main className="container mx-auto px-4 py-24 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-slate-900">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Introduction</h2>
            <p>
              Welcome to RBT Practice. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p>
              When you use our website, we may collect certain information about your device, including your web browser, 
              IP address, time zone, and some of the cookies that are installed on your device.
            </p>
            <p>
              We do not collect personally identifiable information as this site does not require registration or signup. 
              All practice exams and resources are accessible without the need to provide personal information.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>
              The information we collect is used for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>To improve our website and provide a better user experience</li>
              <li>To analyze usage patterns and administer the site</li>
              <li>To maintain the security and functionality of our website</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Cookies</h2>
            <p>
              Cookies are small data files that are placed on your device when you visit a website. We use cookies 
              to enhance your experience on our site and to analyze how our site is used.
            </p>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. 
              If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Third-Party Services</h2>
            <p>
              We may use third-party services, such as analytics providers, to help us understand and improve the usage of our website. 
              These third parties may collect information sent by your device or our website.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your information from being accidentally lost, 
              used, or accessed in an unauthorized way.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page 
              and updating the "Last Updated" date at the top of this policy.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us through our <a href="/contact" className="text-primary hover:underline">Contact page</a>.
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
