
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Award, Clock, CheckCircle, BookOpen } from 'lucide-react';

const ExamOverview = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-10">
      <h2 className="text-2xl font-semibold text-slate-900 mb-6">
        About This Sample RBT Exam
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="flex items-start">
          <div className="mr-4 mt-1">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-slate-900 mb-1">40 Test Questions</h3>
            <p className="text-slate-600 text-sm">
              Aligned with the BACB's RBT task list covering all key content areas
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-4 mt-1">
            <Award className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-slate-900 mb-1">Exam Simulation</h3>
            <p className="text-slate-600 text-sm">
              Experience the format and difficulty level of the actual RBT certification exam
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-4 mt-1">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-slate-900 mb-1">Timed Practice</h3>
            <p className="text-slate-600 text-sm">
              90-minute time limit to help build your test-taking stamina
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-4 mt-1">
            <CheckCircle className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-slate-900 mb-1">Detailed Explanations</h3>
            <p className="text-slate-600 text-sm">
              Comprehensive answer explanations to help you understand the correct responses
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-100 pt-8 mt-8">
        <h3 className="text-xl font-medium text-slate-900 mb-4">
          Key Topics Covered in the Sample RBT Exam
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <li className="flex items-center text-slate-700">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
            Measurement and Assessment
          </li>
          <li className="flex items-center text-slate-700">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
            Skill Acquisition
          </li>
          <li className="flex items-center text-slate-700">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
            Behavior Reduction
          </li>
          <li className="flex items-center text-slate-700">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
            Documentation and Reporting
          </li>
          <li className="flex items-center text-slate-700">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
            Professional Conduct and Scope of Practice
          </li>
          <li className="flex items-center text-slate-700">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
            Clinical Judgement
          </li>
        </ul>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 my-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-slate-900">
              Ready to test your RBT knowledge?
            </h3>
            <p className="text-slate-600">
              Start our free Sample RBT Exam now and assess your preparation level.
            </p>
          </div>
          <Button asChild size="lg" className="whitespace-nowrap">
            <Link to="/exams">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Sample Exam
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExamOverview;
