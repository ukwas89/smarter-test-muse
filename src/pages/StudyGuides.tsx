
import { motion } from "framer-motion";
import { Download, GraduationCap, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { studyGuides, categories } from "@/data/studyGuides";

const StudyGuides = () => {
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
                        <CardFooter className="mt-auto pt-4 gap-3">
                          <Button 
                            className="w-full"
                            variant="outline"
                            asChild
                          >
                            <Link to={`/guides/${guide.id}`}>
                              View Details
                              <ArrowRight size={16} className="ml-2" />
                            </Link>
                          </Button>
                          <Button 
                            className="w-full"
                            asChild
                          >
                            <Link to={`/guides/${guide.id}`}>
                              <Download size={16} className="mr-2" />
                              Download
                            </Link>
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
              <Link to="/exams">Take a Practice Exam</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default StudyGuides;
