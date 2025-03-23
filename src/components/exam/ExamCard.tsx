
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ExamCardProps {
  id: string;
  title: string;
  description: string;
  questions: number;
  duration: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags?: string[];
  popular?: boolean;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-100 text-green-800';
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800';
    case 'Advanced':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-blue-100 text-blue-800';
  }
};

const ExamCard = ({ id, title, description, questions, duration, difficulty, tags, popular }: ExamCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1)' }}
      className="glass-card rounded-xl overflow-hidden relative transition-all duration-300"
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            Popular
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
          
          {tags?.map((tag, index) => (
            <span key={index} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold text-slate-900 mb-2">
          {title}
        </h3>
        
        <p className="text-slate-600 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-700">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            {questions} Questions
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {duration} min
          </div>
        </div>
        
        <Button asChild className="w-full justify-center group">
          <Link to={`/exam/${id}`}>
            Start Exam
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default ExamCard;
