
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-all duration-200 hover:opacity-80"
          >
            <img 
              src="/lovable-uploads/5eae210c-3b37-447e-bdfc-75f728932f7b.png" 
              alt="PracticeRBTExam Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold tracking-tight text-slate-900">
              <span className="text-primary">Practice</span>RBTExam
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <div className="flex items-center">
              <Button asChild size="sm">
                <Link to="/exams">Start Practice</Link>
              </Button>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-slate-900" />
            ) : (
              <Menu size={24} className="text-slate-900" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-md animate-slide-up">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLinks />
            </div>
            <div className="flex flex-col pt-4 border-t border-gray-100">
              <Button asChild className="w-full justify-center">
                <Link to="/exams">Start Practice</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = () => (
  <>
    <Link to="/" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">
      Home
    </Link>
    <Link to="/exams" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">
      Practice Exams
    </Link>
    <Link to="/guides" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">
      Study Guides
    </Link>
    <Link to="/about" className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">
      About Us
    </Link>
  </>
);

const MobileNavLinks = () => (
  <>
    <Link to="/" className="text-base font-medium text-slate-900 py-2">
      Home
    </Link>
    <Link to="/exams" className="text-base font-medium text-slate-900 py-2">
      Practice Exams
    </Link>
    <Link to="/guides" className="text-base font-medium text-slate-900 py-2">
      Study Guides
    </Link>
    <Link to="/about" className="text-base font-medium text-slate-900 py-2">
      About Us
    </Link>
  </>
);

export default Navbar;
