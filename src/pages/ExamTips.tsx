
import { motion } from "framer-motion";
import { Lightbulb, CheckCircle, AlertCircle, Clock, Calendar, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const tipCategories = [
  {
    id: "before",
    title: "Before the Exam",
    icon: <Calendar className="h-8 w-8 text-blue-500" />,
    tips: [
      {
        id: 1,
        title: "Create a Study Schedule",
        description: "Establish a regular study routine at least 6-8 weeks before your exam date. Consistency is key!",
        type: "recommendation",
      },
      {
        id: 2,
        title: "Review the Task List",
        description: "Make sure you've studied every item on the RBT Task List, as the exam covers all areas.",
        type: "recommendation",
      },
      {
        id: 3,
        title: "Take Multiple Practice Tests",
        description: "Practice tests help you get comfortable with the format and identify knowledge gaps.",
        type: "recommendation",
      },
      {
        id: 4,
        title: "Avoid Cramming",
        description: "Last-minute cramming increases stress and reduces retention. Space out your studying.",
        type: "warning",
      },
      {
        id: 5,
        title: "Form a Study Group",
        description: "Studying with others can help you grasp difficult concepts and stay motivated.",
        type: "recommendation",
      },
    ],
  },
  {
    id: "during",
    title: "During the Exam",
    icon: <Clock className="h-8 w-8 text-purple-500" />,
    tips: [
      {
        id: 6,
        title: "Read Carefully",
        description: "Pay close attention to the wording of questions. Look for qualifiers like 'always,' 'never,' or 'except.'",
        type: "recommendation",
      },
      {
        id: 7,
        title: "Pace Yourself",
        description: "Don't rush, but be mindful of time. If you're stuck on a question, mark it and return to it later.",
        type: "recommendation",
      },
      {
        id: 8,
        title: "Look for Context Clues",
        description: "Sometimes information in one question can help you answer another one.",
        type: "recommendation",
      },
      {
        id: 9,
        title: "Don't Second-Guess Too Much",
        description: "Your first instinct is often correct. Only change answers if you're confident the new choice is right.",
        type: "warning",
      },
      {
        id: 10,
        title: "Use the Process of Elimination",
        description: "If you're unsure, eliminate obviously wrong answers to improve your odds.",
        type: "recommendation",
      },
    ],
  },
  {
    id: "content",
    title: "Important Content Areas",
    icon: <BookOpen className="h-8 w-8 text-green-500" />,
    tips: [
      {
        id: 11,
        title: "Focus on Ethics",
        description: "Questions on ethics and professional conduct make up a significant portion of the exam.",
        type: "recommendation",
      },
      {
        id: 12,
        title: "Understand Measurement",
        description: "Know how to calculate, interpret, and graph behavioral data.",
        type: "recommendation",
      },
      {
        id: 13,
        title: "Master Skill Acquisition",
        description: "Be familiar with all skill acquisition procedures, including discrete trial teaching and natural environment training.",
        type: "recommendation",
      },
      {
        id: 14,
        title: "Know Behavior Reduction",
        description: "Understand the difference between various behavior reduction procedures and when each is appropriate.",
        type: "recommendation",
      },
      {
        id: 15,
        title: "Documentation Requirements",
        description: "Be clear on what needs to be documented and how to document it properly.",
        type: "recommendation",
      },
    ],
  },
];

const ExamTips = () => {
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
          <div className="text-center mb-12">
            <Lightbulb className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6 text-slate-900">RBT Exam Tips</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Maximize your chances of success with these expert strategies for before, 
              during, and after your RBT certification exam.
            </p>
          </div>

          {tipCategories.map((category) => (
            <section key={category.id} className="mb-16">
              <div className="flex items-center mb-8">
                {category.icon}
                <h2 className="text-2xl font-semibold ml-3">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.tips.map((tip) => (
                  <Card key={tip.id} className="border-l-4 border-l-primary">
                    <CardHeader className="pb-2">
                      <div className="flex items-start">
                        {tip.type === "recommendation" ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                        )}
                        <CardTitle className="text-lg">{tip.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{tip.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}

          <Separator className="my-12" />

          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-3">Ready to Test Your Knowledge?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Now that you're armed with these tips, practice what you've learned with our 
              free RBT practice exams!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/exams">Start a Practice Exam</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/guides">View Study Guides</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default ExamTips;
