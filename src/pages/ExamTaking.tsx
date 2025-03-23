
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Clock, Flag, Check } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: { id: string; text: string }[];
  answer?: string;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    text: "Which of the following is a defining characteristic of Applied Behavior Analysis?",
    options: [
      { id: 'a', text: "It focuses only on challenging behaviors" },
      { id: 'b', text: "It is analytical and produces reliable results" },
      { id: 'c', text: "It relies primarily on self-reported data" },
      { id: 'd', text: "It can only be implemented in clinical settings" }
    ]
  },
  {
    id: 2,
    text: "When collecting ABC data, what does the 'B' represent?",
    options: [
      { id: 'a', text: "Behavior" },
      { id: 'b', text: "Baseline" },
      { id: 'c', text: "Background" },
      { id: 'd', text: "Before" }
    ]
  },
  {
    id: 3,
    text: "Which of the following is NOT a type of positive reinforcement?",
    options: [
      { id: 'a', text: "Giving a child a sticker for completing homework" },
      { id: 'b', text: "Removing a demanding task when a child tantrums" },
      { id: 'c', text: "Allowing access to preferred activity after cleaning up" },
      { id: 'd', text: "Providing verbal praise for correct responses" }
    ]
  },
  // More questions would be added here in a real implementation
];

const ExamTaking = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [timeRemaining, setTimeRemaining] = useState(90 * 60); // 90 minutes in seconds
  const [isExamComplete, setIsExamComplete] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  
  // For demo purposes
  const totalQuestions = mockQuestions.length;
  const currentQuestion = mockQuestions[currentQuestionIndex];
  
  useEffect(() => {
    if (!isExamComplete) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [isExamComplete]);
  
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  const handleAnswer = (optionId: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const toggleFlagQuestion = () => {
    setFlaggedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(currentQuestion.id)) {
        newSet.delete(currentQuestion.id);
      } else {
        newSet.add(currentQuestion.id);
      }
      return newSet;
    });
  };
  
  const handleSubmitExam = () => {
    setIsExamComplete(true);
    // In a real app, you'd likely send the answers to a server here
    // and then navigate to a results page
    navigate('/results', { 
      state: { 
        answers: userAnswers,
        examId: examId,
        timeSpent: 90 * 60 - timeRemaining
      }
    });
  };
  
  const progress = (currentQuestionIndex + 1) / totalQuestions * 100;
  const isQuestionAnswered = userAnswers[currentQuestion.id] !== undefined;
  const isQuestionFlagged = flaggedQuestions.has(currentQuestion.id);
  
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header with progress and timer */}
      <header className="sticky top-0 bg-white border-b border-slate-200 shadow-sm z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-xl font-semibold text-slate-900">RBT Practice Exam</h1>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Clock size={20} className="text-slate-500 mr-2" />
                <span className="font-mono text-lg">
                  {formatTime(timeRemaining)}
                </span>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleSubmitExam}
                className="hidden md:flex"
              >
                <Check size={16} className="mr-2" />
                Submit Exam
              </Button>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm text-slate-600 mb-1">
              <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
              <span>{progress.toFixed(0)}% Complete</span>
            </div>
            <Progress value={progress} />
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8 glass-card">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-medium text-slate-500">Question {currentQuestionIndex + 1}</span>
              <Button 
                variant={isQuestionFlagged ? "destructive" : "outline"} 
                size="sm"
                onClick={toggleFlagQuestion}
              >
                <Flag size={16} className="mr-2" />
                {isQuestionFlagged ? "Unflag" : "Flag"}
              </Button>
            </div>
            
            <h2 className="text-xl font-medium text-slate-900 mb-6">{currentQuestion.text}</h2>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <div 
                  key={option.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    userAnswers[currentQuestion.id] === option.id
                      ? 'border-primary bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                  onClick={() => handleAnswer(option.id)}
                >
                  <div className="flex items-start">
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 border ${
                      userAnswers[currentQuestion.id] === option.id
                        ? 'border-primary bg-primary text-white'
                        : 'border-slate-300 bg-white'
                    }`}>
                      {option.id.toUpperCase()}
                    </div>
                    <span className={`${
                      userAnswers[currentQuestion.id] === option.id
                        ? 'text-slate-900 font-medium'
                        : 'text-slate-700'
                    }`}>
                      {option.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between pt-6 border-t border-slate-100">
            <Button 
              variant="outline" 
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              <ArrowLeft size={16} className="mr-2" />
              Previous
            </Button>
            
            {currentQuestionIndex < totalQuestions - 1 ? (
              <Button 
                onClick={handleNextQuestion}
                disabled={!isQuestionAnswered}
              >
                Next
                <ArrowRight size={16} className="ml-2" />
              </Button>
            ) : (
              <Button 
                onClick={handleSubmitExam}
                className="bg-green-600 hover:bg-green-700"
              >
                <Check size={16} className="mr-2" />
                Submit Exam
              </Button>
            )}
          </div>
        </div>
      </main>
      
      {/* Mobile footer with submit button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4">
        <Button 
          onClick={handleSubmitExam}
          className="w-full"
        >
          <Check size={16} className="mr-2" />
          Submit Exam
        </Button>
      </div>
    </div>
  );
};

export default ExamTaking;
