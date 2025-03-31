
import { useLocation, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { studyGuides } from "@/data/studyGuides";

const NotFound = () => {
  const location = useLocation();
  const [shouldRedirect, setShouldRedirect] = useState<string | null>(null);
  
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Try to intelligently redirect based on path pattern
    const path = location.pathname;
    
    // Check if it's a guide path with a numeric ID
    if (path.match(/^\/guides\/\d+$/)) {
      const guideId = parseInt(path.split('/').pop() || '0', 10);
      const guideExists = studyGuides.some(guide => guide.id === guideId);
      
      if (guideExists) {
        console.log(`Guide ${guideId} exists, redirecting...`);
        setShouldRedirect(path);
        return;
      }
    }
    
    // Check if it's a common page route
    const commonRoutes = ['/contact', '/about', '/tips', '/flashcards', '/faq', '/privacy-policy'];
    if (commonRoutes.includes(path)) {
      console.log(`Common route ${path} detected, redirecting...`);
      setShouldRedirect(path);
      return;
    }
    
    // Add other intelligent redirects here as needed
  }, [location.pathname]);
  
  // Handle potential redirect
  if (shouldRedirect) {
    return <Navigate to={shouldRedirect} replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Button asChild size="lg" className="inline-flex items-center">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
