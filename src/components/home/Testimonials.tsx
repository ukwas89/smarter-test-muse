
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  image?: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      content: "The practice exams were incredibly helpful. The questions were very similar to those on the actual exam, and I felt well-prepared when I took my certification test.",
      author: "Sarah Johnson",
      role: "RBT, Florida",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      content: "I was struggling with the task list concepts until I found this platform. The detailed explanations for each question helped me understand the material better than any textbook.",
      author: "Michael Chen",
      role: "RBT, California",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      content: "The analytics feature was a game-changer for me. Being able to see which areas I needed to focus on helped me study more efficiently and effectively.",
      author: "Taylor Rodriguez",
      role: "RBT, Texas",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider text-primary bg-blue-50 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Our Users Say
          </h2>
          <p className="text-lg text-slate-600">
            Hear from candidates who have successfully passed their RBT exam after using our practice tests.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-blue-50 p-8 md:p-12">
            <Quote size={64} className="absolute top-6 left-6 text-blue-200 opacity-50" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              {testimonials[currentIndex].image && (
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
              )}
              
              <div className="flex-grow">
                <blockquote className="text-lg md:text-xl text-slate-700 mb-6 animate-fade-in">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div className="flex flex-col">
                  <cite className="not-italic font-medium text-slate-900 text-lg">
                    {testimonials[currentIndex].author}
                  </cite>
                  <span className="text-slate-600 text-sm">
                    {testimonials[currentIndex].role}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <Button 
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="h-9 w-9 rounded-full bg-white hover:bg-slate-100"
              >
                <ArrowLeft size={18} />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <Button 
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="h-9 w-9 rounded-full bg-white hover:bg-slate-100"
              >
                <ArrowRight size={18} />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full mx-1 transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-slate-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
