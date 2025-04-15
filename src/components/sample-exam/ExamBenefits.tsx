
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ExamBenefits = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-slate-900 mb-6">
        Why Take Our Sample RBT Exam?
      </h2>
      
      <p className="text-slate-700 mb-4">
        Our sample RBT exam is carefully designed to help candidates prepare effectively for the actual certification test. Taking this practice exam offers several benefits:
      </p>
      
      <ul className="space-y-4 mb-8">
        <li className="flex">
          <div className="mr-3 mt-1">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">
              1
            </div>
          </div>
          <div>
            <h3 className="font-medium text-slate-900">Assess Your Knowledge Gaps</h3>
            <p className="text-slate-600">
              Identify areas where you need additional study and focus your preparation efficiently.
            </p>
          </div>
        </li>
        
        <li className="flex">
          <div className="mr-3 mt-1">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">
              2
            </div>
          </div>
          <div>
            <h3 className="font-medium text-slate-900">Build Test-Taking Confidence</h3>
            <p className="text-slate-600">
              Familiarize yourself with the format and types of questions to reduce anxiety on exam day.
            </p>
          </div>
        </li>
        
        <li className="flex">
          <div className="mr-3 mt-1">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">
              3
            </div>
          </div>
          <div>
            <h3 className="font-medium text-slate-900">Practice Time Management</h3>
            <p className="text-slate-600">
              Learn to pace yourself effectively during the timed examination environment.
            </p>
          </div>
        </li>
        
        <li className="flex">
          <div className="mr-3 mt-1">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">
              4
            </div>
          </div>
          <div>
            <h3 className="font-medium text-slate-900">Improve Understanding Through Feedback</h3>
            <p className="text-slate-600">
              Learn from detailed explanations for both correct and incorrect answers.
            </p>
          </div>
        </li>
      </ul>
      
      <div className="text-center pt-4">
        <Button asChild size="lg">
          <Link to="/guides">
            Explore Study Guides
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ExamBenefits;
