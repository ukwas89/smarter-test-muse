
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { blogId } = useParams();
  const post = blogPosts.find((post) => post.id.toString() === blogId);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Link to="/blog" className="text-primary hover:underline">
          Return to blog
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{post.title} | RBT Practice Exam Blog | PracticeRBTExam.com</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`RBT practice exam, ${post.category.toLowerCase()}, ${post.title.toLowerCase()}, registered behavior technician, RBT certification, BACB exam, behavior analyst exam`} />
        <link rel="canonical" href={`https://practicerbtexam.com/blog/${post.id}`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "${post.title}",
              "description": "${post.excerpt}",
              "image": "${post.image}",
              "author": {
                "@type": "Person",
                "name": "${post.author.split(',')[0]}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "PracticeRBTExam.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://practicerbtexam.com/logo.png"
                }
              },
              "datePublished": "${post.date}",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://practicerbtexam.com/blog/${post.id}"
              }
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-24 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8 hover:bg-slate-100">
            <Link to="/blog" className="flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Back to all articles
            </Link>
          </Button>

          <div className="flex items-center text-sm text-slate-500 mb-4">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-6 text-slate-900">{post.title}</h1>

          <div className="flex items-center text-sm text-slate-600 space-x-4 mb-8">
            <div className="flex items-center">
              <User size={14} className="mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{post.date}</span>
            </div>
          </div>

          <div className="aspect-video relative overflow-hidden rounded-lg mb-10">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-xl leading-relaxed text-slate-700 mb-6">
              {post.excerpt}
            </p>

            <p className="mb-4">
              As we approach 2025, Registered Behavior Technicians (RBTs) must stay informed about the latest changes to certification requirements, exam formats, and professional practices. This article explores the key updates and what they mean for current and aspiring RBTs.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Main Changes for 2025</h2>
            <p className="mb-4">
              The Behavior Analyst Certification Board (BACB) has introduced several significant updates to the RBT program for 2025. These changes reflect the evolving field of applied behavior analysis and aim to ensure that certified professionals meet the highest standards of practice.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Key Updates Include:</h3>
            <ul className="list-disc pl-5 mb-6">
              <li className="mb-2">Revised task list with expanded focus on digital intervention delivery</li>
              <li className="mb-2">New ethics requirements specifically addressing telehealth practices</li>
              <li className="mb-2">Updated examination format with adaptive questioning</li>
              <li className="mb-2">Additional continuing education requirements for recertification</li>
              <li className="mb-2">Enhanced supervision standards and documentation</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">What This Means For Your Practice</h2>
            <p className="mb-4">
              These updates will impact how RBTs prepare for certification, maintain their credentials, and deliver services. Understanding these changes is critical for anyone looking to enter or advance in the field of applied behavior analysis.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Preparing for the 2025 RBT Exam</h3>
            <p className="mb-4">
              If you're studying for the RBT exam in 2025, you'll need to adjust your preparation strategy to account for these changes. Our updated practice exams at PracticeRBTExam.com reflect the new task list and question formats, giving you the most accurate preparation possible.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8 rounded-r">
              <h4 className="font-medium text-blue-800 mb-2">Expert Tip</h4>
              <p className="text-blue-700">
                Focus your study efforts on the newly emphasized areas of the task list, particularly those related to digital service delivery and ethical considerations in telehealth.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              Staying informed about the latest RBT certification requirements is essential for success in the field. At PracticeRBTExam.com, we're committed to providing up-to-date resources that reflect the current standards and help you prepare effectively for your RBT exam.
            </p>
          </div>

          <Separator className="my-12" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-sm text-slate-600">
              <Tag size={14} className="mr-1" />
              <span>Tags: </span>
              <span className="ml-2 text-primary hover:underline cursor-pointer">RBT Certification</span>,
              <span className="ml-2 text-primary hover:underline cursor-pointer">2025 Updates</span>,
              <span className="ml-2 text-primary hover:underline cursor-pointer">{post.category}</span>
            </div>
            <Button asChild>
              <Link to="/exams">Practice for the 2025 Exam</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default BlogPost;
