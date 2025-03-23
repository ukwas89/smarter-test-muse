
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Ace Your RBT Exam?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join thousands of successful candidates who have prepared with our comprehensive practice exams. Start your journey to certification today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50">
              <Link to="/exams">
                Browse Practice Exams <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-blue-700">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
          <p className="mt-8 text-blue-100 text-sm">
            Not ready yet? <Link to="/learn" className="underline hover:text-white transition-colors">Explore our free resources</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
