
import { motion } from "framer-motion";
import { Book, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "@/data/blogPosts";

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
                <Link to={`/blog/${post.id}`}>
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                <CardHeader>
                  <div className="flex items-center text-sm text-slate-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <CardTitle className="hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </Link>
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
                  <Button variant="ghost" size="sm" className="text-primary" asChild>
                    <Link to={`/blog/${post.id}`}>Read More</Link>
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
