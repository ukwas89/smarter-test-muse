
import { Helmet } from "react-helmet-async";

type CanonicalTagProps = {
  url: string; // The full canonical URL
};

/**
 * Component that sets a static canonical URL for each page
 * Should be used with the full URL to ensure consistency
 */
const CanonicalTag: React.FC<CanonicalTagProps> = ({ url }) => {
  return (
    <Helmet prioritizeSeoTags>
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default CanonicalTag;
