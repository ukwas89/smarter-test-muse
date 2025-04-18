
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

type CanonicalTagProps = {
  path?: string; // Optional override path
};

/**
 * Component that sets the canonical URL for the current page
 * Can be used in all page components to ensure proper canonical URLs
 */
const CanonicalTag: React.FC<CanonicalTagProps> = ({ path }) => {
  const location = useLocation();
  const currentPath = path || location.pathname;
  const canonicalUrl = `https://practicerbtexam.com${currentPath === '/' ? '' : currentPath}`;
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalTag;
