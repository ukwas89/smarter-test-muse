
import { motion } from "framer-motion";
import { Download, GraduationCap, FileText, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const studyGuides = [
  {
    id: 1,
    title: "RBT Task List Study Guide",
    description: "A comprehensive breakdown of the RBT Task List with detailed explanations of each item.",
    category: "Core Concepts",
    format: "PDF",
    pages: 45,
    updated: "January 2023",
    icon: <FileText className="h-10 w-10 text-primary" />,
    filename: "rbt-task-list-study-guide.pdf"
  },
  {
    id: 2,
    title: "Behavioral Terminology Glossary",
    description: "An extensive glossary of behavioral terms and concepts that appear on the RBT exam.",
    category: "Terminology",
    format: "PDF",
    pages: 28,
    updated: "March 2023",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    filename: "behavioral-terminology-glossary.pdf"
  },
  {
    id: 3,
    title: "Measurement and Assessment Guide",
    description: "Learn about the various measurement procedures and assessment strategies used in ABA.",
    category: "Techniques",
    format: "PDF",
    pages: 32,
    updated: "April 2023",
    icon: <FileText className="h-10 w-10 text-primary" />,
    filename: "measurement-assessment-guide.pdf"
  },
  {
    id: 4,
    title: "Behavior Reduction Strategies",
    description: "A detailed guide to understanding and implementing behavior reduction procedures.",
    category: "Strategies",
    format: "PDF",
    pages: 36,
    updated: "June 2023",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    filename: "behavior-reduction-strategies.pdf"
  },
  {
    id: 5,
    title: "Skill Acquisition Procedures",
    description: "Comprehensive explanations of skill acquisition procedures with examples and practice questions.",
    category: "Techniques",
    format: "PDF",
    pages: 38,
    updated: "August 2023",
    icon: <FileText className="h-10 w-10 text-primary" />,
    filename: "skill-acquisition-procedures.pdf"
  },
  {
    id: 6,
    title: "Professional Ethics for RBTs",
    description: "An in-depth guide to ethical practices and considerations for Registered Behavior Technicians.",
    category: "Ethics",
    format: "PDF",
    pages: 25,
    updated: "October 2023",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    filename: "professional-ethics-for-rbts.pdf"
  },
];

const categories = ["All", "Core Concepts", "Terminology", "Techniques", "Strategies", "Ethics"];

const StudyGuides = () => {
  const handleDownload = (guide: typeof studyGuides[0]) => {
    // In a real application, this would initiate a file download
    // Since we don't have actual PDF files in this demo, we'll show a toast notification
    toast.success(`Download started for: ${guide.title}`, {
      description: `${guide.format} file (${guide.pages} pages)`,
      duration: 3000,
    });
    
    // Simulate download analytics tracking
    console.log(`Guide downloaded: ${guide.title}, Category: ${guide.category}`);
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
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-slate-900">RBT Study Guides</h1>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl">
            Access our collection of free study guides designed to help you prepare for 
            the RBT certification exam. Each guide focuses on a specific area of the exam content.
          </p>

          <Tabs defaultValue="All" className="mb-12">
            <TabsList className="mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {studyGuides
                    .filter((guide) => category === "All" || guide.category === category)
                    .map((guide) => (
                      <Card key={guide.id} className="flex flex-col h-full">
                        <CardHeader className="pb-4">
                          <div className="mb-4">{guide.icon}</div>
                          <CardTitle>{guide.title}</CardTitle>
                          <CardDescription>{guide.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="font-medium text-slate-700">Category:</span>
                              <span className="ml-2 text-slate-600">{guide.category}</span>
                            </div>
                            <div>
                              <span className="font-medium text-slate-700">Format:</span>
                              <span className="ml-2 text-slate-600">{guide.format}</span>
                            </div>
                            <div>
                              <span className="font-medium text-slate-700">Pages:</span>
                              <span className="ml-2 text-slate-600">{guide.pages}</span>
                            </div>
                            <div>
                              <span className="font-medium text-slate-700">Updated:</span>
                              <span className="ml-2 text-slate-600">{guide.updated}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="mt-auto pt-4">
                          <Button 
                            className="w-full"
                            onClick={() => handleDownload(guide)}
                          >
                            <Download size={16} className="mr-2" />
                            Download Guide
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <Separator className="my-12" />

          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <GraduationCap className="h-12 w-12 mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-3">Need More Comprehensive Practice?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Our study guides are great for reference, but to truly test your knowledge, 
              try our free RBT practice exams!
            </p>
            <Button asChild size="lg">
              <a href="/exams">Take a Practice Exam</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default StudyGuides;
