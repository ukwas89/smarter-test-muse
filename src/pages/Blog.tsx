
import { motion } from "framer-motion";
import { Book, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const blogPosts = [
  {
    id: 1,
    title: "2025 RBT Task List Updates: What's Changed and How to Prepare",
    excerpt: "A comprehensive guide to the latest RBT Task List (3rd edition) updates and strategic preparation tips for the 2025 certification exam.",
    author: "Dr. Sarah Johnson, BCBA-D",
    date: "January 15, 2025",
    category: "Certification",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 2,
    title: "New Digital Testing Format: RBT Exam Changes for 2025",
    excerpt: "Everything you need to know about the new digital testing platform, adaptive questioning, and performance-based assessments in the 2025 RBT certification exam.",
    author: "Michael Chen, BCBA",
    date: "February 8, 2025",
    category: "Exam Preparation",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    id: 3,
    title: "Ethics and Telehealth: Updated Guidelines for RBTs in 2025",
    excerpt: "The latest ethical considerations for RBTs practicing via telehealth platforms, including new compliance requirements effective in 2025.",
    author: "Lisa Patel, BCBA",
    date: "March 12, 2025",
    category: "Ethics",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    id: 4,
    title: "AI-Enhanced Behavioral Interventions: What RBTs Need to Know in 2025",
    excerpt: "Explore how artificial intelligence is transforming behavioral interventions and what RBTs should understand about these technologies for the 2025 exam.",
    author: "James Wilson, BCBA",
    date: "April 5, 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: 5,
    title: "RBT Career Advancement: New Pathways in 2025",
    excerpt: "Discover emerging career opportunities for RBTs in 2025, including specializations in trauma-informed care, geriatric behavior analysis, and educational integration.",
    author: "Various Contributors",
    date: "May 17, 2025",
    category: "Career Development",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 6,
    title: "Research-Based Strategies: Passing the RBT Exam on Your First Try in 2025",
    excerpt: "Evidence-based study techniques and test-taking strategies specifically designed for the updated 2025 RBT exam format.",
    author: "Dr. Emily Rodriguez, BCBA-D",
    date: "June 8, 2025",
    category: "Study Strategies",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
];

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>RBT Practice Exam Blog | 2025 Study Tips & Updates | PracticeRBTExam.com</title>
        <meta name="description" content="Get the latest 2025 RBT exam updates, study strategies, and certification tips on our blog. Prepare for your Registered Behavior Technician exam with expert insights." />
        <meta name="keywords" content="RBT practice exam 2025, RBT blog, RBT exam updates, RBT study tips, RBT certification news, Registered Behavior Technician blog" />
        <link rel="canonical" href="https://practicerbtexam.com/blog" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "headline": "RBT Practice Exam Blog",
              "description": "Latest resources and information about RBT certification exam preparation for 2025",
              "url": "https://practicerbtexam.com/blog",
              "publisher": {
                "@type": "Organization",
                "name": "PracticeRBTExam.com",
                "url": "https://practicerbtexam.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://practicerbtexam.com/logo.png"
                }
              },
              "blogPost": [
                ${blogPosts.map(post => `{
                  "@type": "BlogPosting",
                  "headline": "${post.title}",
                  "description": "${post.excerpt}",
                  "author": {
                    "@type": "Person",
                    "name": "${post.author.split(',')[0]}"
                  },
                  "datePublished": "${post.date}",
                  "image": "${post.image}"
                }`).join(',')}
              ]
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-24 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">RBT Practice Exam Blog: 2025 Updates</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl">
            Stay current with the latest 2025 RBT certification changes, exam preparation strategies, 
            and professional development resources to help you succeed on your Registered Behavior Technician exam.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-12 rounded-r">
            <h2 className="text-lg font-medium text-blue-800 mb-2">2025 RBT Exam Update Notice</h2>
            <p className="text-blue-700">
              The RBT certification exam has undergone significant updates for 2025. Our practice exams and study materials 
              have been revised to reflect these changes, including the new task list and digital testing format.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-slate-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-slate-500 space-x-4">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="text-primary">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Separator className="my-12" />

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Need more 2025 exam resources?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/guides">
                  <Book size={16} className="mr-2" />
                  Updated Study Guides
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/tips">2025 Exam Tips</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/flashcards">Interactive Flashcards</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Blog;
