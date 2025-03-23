
import { useState } from 'react';
import ExamCard from './ExamCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

// Mock data for exams
const mockExams = [
  {
    id: '1',
    title: 'RBT Complete Practice Exam 1',
    description: 'A comprehensive exam covering all task list areas.',
    questions: 85,
    duration: 90,
    difficulty: 'Intermediate' as const,
    price: 'Free',
    tags: ['Complete Exam'],
    popular: true,
  },
  {
    id: '2',
    title: 'RBT Complete Practice Exam 2',
    description: 'Another full-length exam with different questions.',
    questions: 85,
    duration: 90,
    difficulty: 'Intermediate' as const,
    price: '$12.99',
    tags: ['Complete Exam'],
  },
  {
    id: '3',
    title: 'Measurement & Assessment',
    description: 'Focused practice on measurement and assessment tasks.',
    questions: 25,
    duration: 30,
    difficulty: 'Beginner' as const,
    price: '$5.99',
    tags: ['Topic Specific'],
  },
  {
    id: '4',
    title: 'Behavior Reduction',
    description: 'Practice questions on behavior reduction strategies.',
    questions: 25,
    duration: 30,
    difficulty: 'Advanced' as const,
    price: '$5.99',
    tags: ['Topic Specific'],
  },
  {
    id: '5',
    title: 'Documentation & Reporting',
    description: 'Focus on documentation and reporting requirements.',
    questions: 20,
    duration: 25,
    difficulty: 'Beginner' as const,
    price: '$4.99',
    tags: ['Topic Specific'],
  },
  {
    id: '6',
    title: 'RBT Advanced Challenge',
    description: 'Difficult questions for those seeking an extra challenge.',
    questions: 50,
    duration: 60,
    difficulty: 'Advanced' as const,
    price: '$9.99',
    tags: ['Challenge'],
    popular: true,
  },
];

const ExamList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredExams = mockExams.filter(exam => {
    const matchesSearch = exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exam.description.toLowerCase().includes(searchTerm.toLowerCase());
                         
    const matchesFilter = filter ? exam.difficulty === filter || exam.tags?.includes(filter) : true;
    
    return matchesSearch && matchesFilter;
  });
  
  const filterOptions = [
    { label: 'All', value: null },
    { label: 'Beginner', value: 'Beginner' },
    { label: 'Intermediate', value: 'Intermediate' },
    { label: 'Advanced', value: 'Advanced' },
    { label: 'Free', value: 'Free' },
    { label: 'Complete Exam', value: 'Complete Exam' },
    { label: 'Topic Specific', value: 'Topic Specific' },
  ];

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          <Input
            type="text"
            placeholder="Search exams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 py-6 border-slate-200"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center"
          >
            <Filter size={16} className="mr-2" />
            Filters
          </Button>
          
          {filterOptions.map((option) => (
            <Button
              key={option.label}
              variant={filter === option.value ? "secondary" : "outline"}
              size="sm"
              onClick={() => setFilter(option.value)}
              className="text-sm"
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>
      
      {filteredExams.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-lg">
          <p className="text-slate-600">No exams found matching your search criteria.</p>
          <Button 
            variant="link" 
            onClick={() => {
              setSearchTerm('');
              setFilter(null);
            }}
          >
            Reset filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map((exam) => (
            <ExamCard key={exam.id} {...exam} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExamList;
