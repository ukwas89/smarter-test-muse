
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Check, X, Home, RotateCcw, FileText } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

// Mock questions and answers for the demo
const mockQuestions = [
  {
    id: 1,
    text: "Which of the following is a defining characteristic of Applied Behavior Analysis?",
    options: [
      { id: 'a', text: "It focuses only on challenging behaviors" },
      { id: 'b', text: "It is analytical and produces reliable results" },
      { id: 'c', text: "It relies primarily on self-reported data" },
      { id: 'd', text: "It can only be implemented in clinical settings" }
    ],
    correctAnswer: 'b',
    explanation: "Applied Behavior Analysis is defined by its analytical nature, which means it evaluates the variables responsible for behavior change and produces reliable results."
  },
  {
    id: 2,
    text: "When collecting ABC data, what does the 'B' represent?",
    options: [
      { id: 'a', text: "Behavior" },
      { id: 'b', text: "Baseline" },
      { id: 'c', text: "Background" },
      { id: 'd', text: "Before" }
    ],
    correctAnswer: 'a',
    explanation: "In ABC data collection, 'B' stands for Behavior - the specific behavior that is being observed and recorded."
  },
  {
    id: 3,
    text: "Which of the following is NOT a type of positive reinforcement?",
    options: [
      { id: 'a', text: "Giving a child a sticker for completing homework" },
      { id: 'b', text: "Removing a demanding task when a child tantrums" },
      { id: 'c', text: "Allowing access to preferred activity after cleaning up" },
      { id: 'd', text: "Providing verbal praise for correct responses" }
    ],
    correctAnswer: 'b',
    explanation: "Removing a demanding task when a child tantrums is an example of negative reinforcement, not positive reinforcement, because it involves the removal of an aversive stimulus."
  },
];

// Mock performance metrics for the different categories
const mockPerformanceMetrics = [
  { category: "Measurement & Assessment", score: 85 },
  { category: "Behavior Reduction", score: 72 },
  { category: "Documentation & Reporting", score: 90 },
  { category: "Skill Acquisition", score: 78 },
  { category: "Professional Conduct", score: 95 },
];

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showAnswers, setShowAnswers] = useState(false);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  
  // Get data from location state or use mock data for the example
  const userAnswers = location.state?.answers || {};
  const timeSpent = location.state?.timeSpent || 3600; // 1 hour in seconds
  
  // Calculate results
  const totalQuestions = mockQuestions.length;
  const answeredQuestions = Object.keys(userAnswers).length;
  const correctAnswers = mockQuestions.filter(q => userAnswers[q.id] === q.correctAnswer).length;
  const score = (correctAnswers / totalQuestions) * 100;
  const isPassed = score >= 70; // Assuming 70% is the passing threshold
  
  // Format time spent
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    return `${hours > 0 ? `${hours}h ` : ''}${minutes}m`;
  };
  
  const toggleQuestion = (questionId: number) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Results summary */}
            <div className="glass-card rounded-xl overflow-hidden shadow-premium mb-10">
              <div className={`p-6 md:p-8 ${isPassed ? 'bg-green-50' : 'bg-red-50'}`}>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                      Exam Results
                    </h1>
                    <p className="text-slate-600">
                      You've completed the RBT Practice Exam.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-4xl font-bold mb-1 ${isPassed ? 'text-green-600' : 'text-red-600'}`}>
                      {score.toFixed(1)}%
                    </div>
                    <div className={`text-sm font-medium px-3 py-1 rounded-full ${
                      isPassed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {isPassed ? 'Passed' : 'Failed'}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 border-t border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      {correctAnswers}/{totalQuestions}
                    </div>
                    <div className="text-sm text-slate-600">
                      Correct Answers
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      {formatTime(timeSpent)}
                    </div>
                    <div className="text-sm text-slate-600">
                      Time Spent
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      {answeredQuestions}/{totalQuestions}
                    </div>
                    <div className="text-sm text-slate-600">
                      Questions Answered
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Performance by category */}
            <div className="glass-card rounded-xl overflow-hidden shadow-premium mb-10">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Performance by Category
                </h2>
                
                <div className="space-y-6">
                  {mockPerformanceMetrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm font-medium text-slate-700">{metric.category}</div>
                        <div className="text-sm font-medium text-slate-900">{metric.score}%</div>
                      </div>
                      <Progress value={metric.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Questions and answers */}
            <div className="glass-card rounded-xl overflow-hidden shadow-premium mb-10">
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-slate-900">
                    Questions & Answers
                  </h2>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => setShowAnswers(!showAnswers)}
                  >
                    {showAnswers ? 'Hide Answers' : 'Show Answers'}
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {mockQuestions.map((question) => {
                    const userAnswer = userAnswers[question.id];
                    const isCorrect = userAnswer === question.correctAnswer;
                    const isExpanded = expandedQuestion === question.id;
                    
                    return (
                      <div 
                        key={question.id} 
                        className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                          isExpanded ? 'shadow-sm' : ''
                        }`}
                      >
                        <div 
                          className="p-4 flex justify-between items-start cursor-pointer hover:bg-slate-50"
                          onClick={() => toggleQuestion(question.id)}
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium text-slate-500">Question {question.id}</span>
                              {userAnswer && (
                                <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${
                                  isCorrect 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'
                                }`}>
                                  {isCorrect ? <Check size={12} /> : <X size={12} />}
                                </span>
                              )}
                            </div>
                            <p className="text-slate-900 font-medium">{question.text}</p>
                          </div>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-5 w-5 text-slate-400 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`} 
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        
                        {isExpanded && (
                          <div className="p-4 bg-slate-50 border-t border-slate-100">
                            <div className="space-y-3 mb-4">
                              {question.options.map((option) => {
                                const isUserAnswer = userAnswer === option.id;
                                const isCorrectAnswer = option.id === question.correctAnswer;
                                
                                let optionClass = 'border-slate-200 bg-white';
                                if (showAnswers) {
                                  if (isCorrectAnswer) {
                                    optionClass = 'border-green-300 bg-green-50';
                                  } else if (isUserAnswer && !isCorrectAnswer) {
                                    optionClass = 'border-red-300 bg-red-50';
                                  }
                                } else if (isUserAnswer) {
                                  optionClass = 'border-blue-300 bg-blue-50';
                                }
                                
                                return (
                                  <div 
                                    key={option.id}
                                    className={`p-3 border rounded-lg flex items-start ${optionClass}`}
                                  >
                                    <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${
                                      isUserAnswer
                                        ? 'border-primary bg-primary text-white'
                                        : 'border-slate-300 bg-white text-slate-700'
                                    }`}>
                                      {option.id.toUpperCase()}
                                    </div>
                                    <span className="text-slate-700">{option.text}</span>
                                    
                                    {showAnswers && isCorrectAnswer && (
                                      <span className="ml-auto flex items-center text-green-600">
                                        <Check size={16} className="mr-1" />
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                            
                            {showAnswers && (
                              <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg p-4">
                                <h4 className="text-sm font-medium text-slate-900 mb-1">Explanation</h4>
                                <p className="text-sm text-slate-700">{question.explanation}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="outline" 
                className="flex items-center" 
                onClick={() => navigate('/')}
              >
                <Home size={16} className="mr-2" />
                Back to Home
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center"
                onClick={() => navigate('/exams')}
              >
                <RotateCcw size={16} className="mr-2" />
                Take Another Exam
              </Button>
              
              <Button 
                className="flex items-center"
              >
                <FileText size={16} className="mr-2" />
                Detailed Report
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Results;
