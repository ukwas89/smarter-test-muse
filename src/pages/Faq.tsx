
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { HelpCircle, Search, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    id: "exam",
    title: "About the RBT Exam",
    faqs: [
      {
        id: "exam-1",
        question: "What is the RBT certification exam?",
        answer: "The Registered Behavior Technician (RBT) certification exam is a professional credentialing exam administered by the Behavior Analyst Certification Board (BACB). It assesses the candidate's competency in the basic principles and practices of applied behavior analysis (ABA) and their ability to implement behavior plans developed by a supervisor.",
      },
      {
        id: "exam-2",
        question: "How many questions are on the RBT exam?",
        answer: "The RBT exam consists of 75 multiple-choice questions. Of these, only 70 questions are scored, while 5 are unidentified pilot questions that do not count toward your final score.",
      },
      {
        id: "exam-3",
        question: "What is the passing score for the RBT exam?",
        answer: "The passing score for the RBT exam is typically around 70%, though this can vary slightly with different versions of the exam. The BACB uses a scaled scoring system, and the exact cut score is determined through psychometric analysis.",
      },
      {
        id: "exam-4",
        question: "How long do I have to complete the RBT exam?",
        answer: "Candidates have 90 minutes to complete the RBT certification exam.",
      },
      {
        id: "exam-5",
        question: "What happens if I don't pass the RBT exam?",
        answer: "If you don't pass the RBT exam, you can retake it after a 7-day waiting period. You're allowed up to 8 attempts within a one-year authorization period.",
      },
    ],
  },
  {
    id: "prep",
    title: "Exam Preparation",
    faqs: [
      {
        id: "prep-1",
        question: "How should I prepare for the RBT exam?",
        answer: "To prepare for the RBT exam, you should: 1) Review the RBT Task List (2nd edition) thoroughly, 2) Complete practice exams to familiarize yourself with the format and test your knowledge, 3) Study ABA terminology and concepts, 4) Focus on ethical guidelines and professional conduct, 5) Join study groups or seek mentorship from experienced professionals.",
      },
      {
        id: "prep-2",
        question: "How long should I study for the RBT exam?",
        answer: "Most candidates spend between 4-8 weeks studying for the RBT exam, depending on their background and familiarity with ABA principles. It's recommended to study consistently for shorter periods rather than cramming right before the exam.",
      },
      {
        id: "prep-3",
        question: "Are your practice exams similar to the real RBT exam?",
        answer: "Yes, our practice exams are designed to mirror the format, difficulty level, and content areas of the actual RBT certification exam. We regularly update our question bank based on feedback from recently certified RBTs to ensure relevance.",
      },
      {
        id: "prep-4",
        question: "What topics should I focus on the most?",
        answer: "While all areas of the RBT Task List are important, particular emphasis should be placed on measurement, assessment, skill acquisition, behavior reduction, documentation and reporting, and professional conduct and scope of practice.",
      },
      {
        id: "prep-5",
        question: "Do I need to memorize all the terms and definitions?",
        answer: "While rote memorization isn't the primary goal, having a solid understanding of ABA terminology is essential. The exam will test your ability to apply concepts in practical scenarios, which requires knowing what terms mean and how they relate to practice.",
      },
    ],
  },
  {
    id: "site",
    title: "About Our Practice Site",
    faqs: [
      {
        id: "site-1",
        question: "Is this practice site completely free?",
        answer: "Yes, our RBT practice exam site is 100% free. We don't require payment for any of our study materials, practice exams, or resources. There are no hidden fees or premium tiers.",
      },
      {
        id: "site-2",
        question: "Do I need to create an account to use the practice exams?",
        answer: "No, you don't need to create an account or sign up to access our practice exams and study materials. Everything is freely available without registration.",
      },
      {
        id: "site-3",
        question: "How often are new practice questions added?",
        answer: "We update our question bank monthly with new questions and refine existing ones based on feedback and changes to the RBT Task List. We aim to provide the most up-to-date and relevant practice materials possible.",
      },
      {
        id: "site-4",
        question: "Can I suggest new questions or corrections?",
        answer: "Absolutely! We welcome feedback and suggestions from users. If you have ideas for new questions, notice inaccuracies, or have other suggestions for improvement, please contact us through our Contact page.",
      },
      {
        id: "site-5",
        question: "Is this site affiliated with the BACB?",
        answer: "No, we are not affiliated with or endorsed by the Behavior Analyst Certification Board (BACB). We are an independent educational resource designed to help candidates prepare for their RBT certification.",
      },
    ],
  },
];

const Faq = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFAQs = faqCategories.flatMap(category => 
    category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map(faq => ({ ...faq, category: category.id }))
  );

  const displayedCategories = activeCategory === "all" 
    ? faqCategories 
    : faqCategories.filter(cat => cat.id === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>RBT Exam FAQs | Common Questions About 2025 Certification | PracticeRBTExam.com</title>
        <meta name="description" content="Find answers to frequently asked questions about the RBT exam, certification process, and study strategies. Get expert advice for your 2025 RBT certification journey." />
        <meta name="keywords" content="RBT exam FAQ, RBT certification questions, registered behavior technician FAQ, 2025 RBT exam help, RBT test preparation FAQ, BACB certification questions" />
        <link rel="canonical" href="https://practicerbtexam.com/faq" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                ${faqCategories.flatMap(category => 
                  category.faqs.map(faq => `{
                    "@type": "Question",
                    "name": "${faq.question}",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "${faq.answer.replace(/"/g, '\\"')}"
                    }
                  }`
                )).join(',')}
              ]
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-24 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Find answers to the most common questions about the RBT exam and how to prepare effectively.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <Input
                type="text"
                placeholder="Search FAQs..."
                className="pl-10 py-6 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {searchTerm ? (
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Search Results ({filteredFAQs.length})</h2>
              {filteredFAQs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center p-8 bg-slate-50 rounded-lg">
                  <p className="text-slate-600 mb-4">No FAQs match your search.</p>
                  <Button variant="outline" onClick={() => setSearchTerm("")}>
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                <Button
                  variant={activeCategory === "all" ? "default" : "outline"}
                  onClick={() => setActiveCategory("all")}
                >
                  All Categories
                </Button>
                {faqCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.title}
                  </Button>
                ))}
              </div>

              {displayedCategories.map((category) => (
                <div key={category.id} className="mb-12">
                  <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </>
          )}

          <div className="mt-16 text-center bg-blue-50 rounded-xl p-8">
            <MessageCircle className="h-12 w-12 mx-auto text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-3">Still Have Questions?</h2>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">
              If you couldn't find the answer to your question, feel free to reach out to us directly.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Faq;
