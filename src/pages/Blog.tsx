
import { motion } from "framer-motion";
import { Book, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Understanding the RBT Task List: A Comprehensive Breakdown",
    excerpt: "A detailed exploration of the RBT Task List (2nd edition) and how to master each section for your certification exam.",
    author: "Dr. Sarah Johnson, BCBA-D",
    date: "June 15, 2023",
    category: "Certification",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 2,
    title: "Common Mistakes to Avoid During Your RBT Exam",
    excerpt: "Learn about the frequent errors candidates make when taking the RBT certification exam and how to avoid them.",
    author: "Michael Chen, BCBA",
    date: "August 3, 2023",
    category: "Exam Preparation",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    id: 3,
    title: "Ethical Considerations for the RBT: Study Guide",
    excerpt: "A comprehensive review of the ethical guidelines RBTs must follow and how they are assessed in the certification exam.",
    author: "Lisa Patel, BCBA",
    date: "September 22, 2023",
    category: "Ethics",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    id: 4,
    title: "Mastering Behavioral Intervention Techniques",
    excerpt: "Detailed explanations and examples of behavioral intervention techniques that every RBT needs to know for the exam.",
    author: "James Wilson, BCBA",
    date: "October 10, 2023",
    category: "Techniques",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: 5,
    title: "The Journey to Becoming an RBT: Personal Stories",
    excerpt: "Real experiences from certified RBTs sharing their certification journey, challenges, and success strategies.",
    author: "Various Contributors",
    date: "November 5, 2023",
    category: "Personal Development",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
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
      <Navbar />

      <main className="container mx-auto px-4 py-24 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-slate-900">RBT Practice Blog</h1>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl">
            Explore our articles to deepen your understanding of RBT concepts, 
            exam preparation strategies, and professional development.
          </p>

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
            <h2 className="text-2xl font-semibold mb-6">Looking for more resources?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/guides">
                  <Book size={16} className="mr-2" />
                  Study Guides
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/tips">Exam Tips</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/flashcards">Flashcards</Link>
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
