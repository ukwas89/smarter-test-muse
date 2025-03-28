
import { FileText, BookOpen } from "lucide-react";

export const studyGuides = [
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

export const categories = ["All", "Core Concepts", "Terminology", "Techniques", "Strategies", "Ethics"];
