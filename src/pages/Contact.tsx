
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, MapPin, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <main className="container mx-auto px-4 py-24 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Mail className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6 text-slate-900">Contact Us</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Have a question or suggestion about our RBT practice materials? 
              We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can assist you..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Sending Message...</>
                      ) : (
                        <>
                          <Send size={16} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <ContactItem 
                    icon={<Mail size={20} className="text-blue-500" />}
                    title="Email"
                    content="support@rbtpractice.com"
                    link="mailto:support@rbtpractice.com"
                  />
                  <ContactItem 
                    icon={<MapPin size={20} className="text-blue-500" />}
                    title="Location"
                    content="Remote team across the United States"
                  />
                  <ContactItem 
                    icon={<MessageSquare size={20} className="text-blue-500" />}
                    title="Support Hours"
                    content="Monday - Friday, 9am - 5pm EST"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
                <p className="text-slate-600">
                  We're dedicated to providing high-quality, free RBT exam preparation materials 
                  to help candidates succeed in their certification journey. Your feedback 
                  helps us continue to improve our resources for the community.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                <p className="text-slate-600 mb-4">
                  Before contacting us, you might find answers to common questions on our FAQ page.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="/faq">
                    View FAQ
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

const ContactItem = ({ 
  icon, 
  title, 
  content, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
  link?: string; 
}) => {
  return (
    <div className="flex items-start">
      <div className="bg-blue-50 p-3 rounded-lg mr-4">{icon}</div>
      <div>
        <h3 className="font-medium text-slate-900">{title}</h3>
        {link ? (
          <a 
            href={link} 
            className="text-blue-600 hover:underline"
          >
            {content}
          </a>
        ) : (
          <p className="text-slate-600">{content}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
